using Core.Model;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using XperCore.Model;
using XperCore.Services;
using XperCore.Utils;

namespace Core.Services
{
    public class ProductService
    {
        private readonly IMongoCollection<Product> _products;

        public ProductService(ProductsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _products = database.GetCollection<Product>(settings.ProductsCollectionName);
        }

        public async Task<Product> Get(string id)
        {
            return await _products.Find(product => product.ID == id).FirstOrDefaultAsync();
        }

        public async Task<List<Product>> Get(List<string> ids)
        {
            var products = await _products.FindAsync(product => ids.Contains(product.ID));

            return products.ToList();
        }

        public async Task<ProductsResponse> Search(List<string> allergens, bool excludeMayContain, string keyword)
        {
            var allergensAndVariations = GetAllergensWithVariations(allergens);
            var allowedCategories = new List<string> { };

            var products = await _products.Find(p =>
                                       p.IsActive &&
                                       p.Description != null &&
                                       p.Description != "<p></p>" &&
                                       p.Ingredients != null &&
                                       (p.Name.Contains(keyword) || p.Description.Contains(keyword)))
                                 .ToListAsync();

            var filteredProducts = products.Where(p =>
                    !allergensAndVariations.Any(av =>
                            p.Ingredients.Contains(av, System.StringComparison.InvariantCultureIgnoreCase)) &&
                    !allergensAndVariations.Any(av =>
                            p.AllergenContains.Any(ac => ac.Contains(av, System.StringComparison.InvariantCultureIgnoreCase)))
                    );

            if (excludeMayContain)
            {
                filteredProducts = filteredProducts.Where(p => !allergensAndVariations.Any(av =>
                           p.AllergenMayBePresent.Any(ac => ac.Contains(av, System.StringComparison.InvariantCultureIgnoreCase))));
            }

            return new ProductsResponse(filteredProducts.ToList(), products.Count);
        }

        public async Task<List<Category>> Categories(List<string> allergens, bool excludeMayContain)
        {
            var categories = new List<Category>();

            if (excludeMayContain)
            {
                categories = _products.AsQueryable().Where(p =>
                    p.IsActive &&
                    p.Description != null &&
                    p.Description != "<p></p>" &&
                    !p.AllergenContains.Any(a => allergens.Contains(a))
                    && !p.AllergenMayBePresent.Any(a => allergens.Contains(a)
                    )
                    ).Select(p => new Category { Id = p.Department, Name = p.Department }).Distinct().ToList();
            }
            categories = _products.AsQueryable().Where(p =>
                p.IsActive &&
                p.Description != null &&
                p.Description != "<p></p>" &&
                !p.AllergenContains.Any(a => allergens.Contains(a)
                )
                ).Select(p => new Category { Id = p.Department, Name = p.Department }).Distinct().ToList();

            return categories;
        }

        public async Task<ProductsResponse> Products(List<string> allergens, bool excludeMayContain, string category, bool? isKosher)
        {
            var allergensAndVariations = GetAllergensWithVariations(allergens);

            List<Product> products = new List<Product>();
            if (isKosher == true)
            {
                products = await _products.Find(p =>
                                     p.IsActive &&
                                     p.Description != null &&
                                     p.Description != "<p></p>" &&
                                     p.Ingredients != null &&
                                     p.IsKosher == true &&
                                     p.Department.Equals(category))
                               .ToListAsync();
            }
            else
            {
                products = await _products.Find(p =>
                                                     p.IsActive &&
                                                     p.Description != null &&
                                                     p.Description != "<p></p>" &&
                                                     p.Ingredients != null &&
                                                     p.Department.Equals(category))
                                               .ToListAsync();
            }


            var filteredProducts = products.Where(p =>
                    !allergensAndVariations.Any(av =>
                            p.Ingredients.Contains(av, System.StringComparison.InvariantCultureIgnoreCase)) &&
                    !allergensAndVariations.Any(av =>
                            p.AllergenContains.Any(ac => ac.Contains(av, System.StringComparison.InvariantCultureIgnoreCase)))
                    );

            if (excludeMayContain)
            {
                filteredProducts = filteredProducts.Where(p => !allergensAndVariations.Any(av =>
                           p.AllergenMayBePresent.Any(ac => ac.Contains(av, System.StringComparison.InvariantCultureIgnoreCase))));
            }

            return new ProductsResponse(filteredProducts.ToList(), products.Count);
        }

        public async Task<ProductsResponse> Products(string category, Filter filter)
        {
            var allergensAndVariations = GetAllergensWithVariations(filter.Allergens);
            var ingredientsToInclude = filter.Lifestyle.Where(l => l != LifestyleType.Kosher.ToString() &&
                                                       l != LifestyleType.Vegan.ToString() &&
                                                       l != LifestyleType.Vegetarian.ToString() &&
                                                       l != LifestyleType.Organic.ToString() &&
                                                       l != LifestyleType.LowSalt.ToString() &&
                                                       l != LifestyleType.LowSugar.ToString())
                                                .ToList();

            // adjust lifestyle filter
            if (category == CategoryType.FruitVegetables.GetDescription())
            {
                ingredientsToInclude.Remove("Thiamin");
                ingredientsToInclude.Remove("Folic Acid");
                ingredientsToInclude.Remove("Niacin");
                ingredientsToInclude.Remove("Mineral");
                ingredientsToInclude.Remove("Iron");
                ingredientsToInclude.Remove("Calcium");
            }
            if (category == CategoryType.Meat.GetDescription())
            {
                ingredientsToInclude.Remove("Thiamin");
                ingredientsToInclude.Remove("Folic Acid");
                ingredientsToInclude.Remove("Niacin");
                ingredientsToInclude.Remove("Iron");
            }
            if (category == CategoryType.Seafood.GetDescription())
            {
                ingredientsToInclude.Remove("Thiamin");
                ingredientsToInclude.Remove("Folic Acid");
                ingredientsToInclude.Remove("Niacin");
                ingredientsToInclude.Remove("Iron");
            }

            var builder = Builders<Product>.Filter;
            var query = builder.Eq(p => p.IsActive, true) &
                        builder.Ne(p => p.Description, null) &
                        builder.Ne(p => p.Description, "<p></p>") &
                        builder.Ne(p => p.Ingredients, null) &
                        builder.Eq(p => p.Department, category);

            if (filter.Lifestyle.Contains(LifestyleType.Kosher.ToString()) 
                && category != CategoryType.FruitVegetables.GetDescription())
            {
                query = builder.And(query & builder.Eq(p => p.IsKosher, true));
            }
            if (filter.Lifestyle.Contains(LifestyleType.Vegan.ToString())
                 && category != CategoryType.FruitVegetables.GetDescription())
            {
                query = builder.And(query & builder.Eq(p => p.IsVegan, true));
            }
            if (filter.Lifestyle.Contains(LifestyleType.Vegetarian.ToString())
                 && category != CategoryType.FruitVegetables.GetDescription())
            {
                query = builder.And(query & builder.Eq(p => p.IsVegetarian, true));
            }
            if (filter.Lifestyle.Contains(LifestyleType.Organic.ToString()))
            {
                query = builder.And(query & builder.Eq(p => p.IsOrganic, true));
            }
            if (filter.Lifestyle.Contains(LifestyleType.LowSalt.ToString()))
            {
                query = builder.And(query & builder.Eq(p => p.LowSalt, true));
            }
            if (filter.Lifestyle.Contains(LifestyleType.LowSugar.ToString()))
            {
                query = builder.And(query & builder.Eq(p => p.LowSugar, true));
            }

            var products = await _products.Find(query).ToListAsync();


            var filteredProducts = products.Where(p =>
                    !allergensAndVariations.Any(av =>
                            p.Ingredients.Contains(av, StringComparison.InvariantCultureIgnoreCase)) &&
                    !allergensAndVariations.Any(av =>
                            p.AllergenContains.Any(ac => ac.Contains(av, StringComparison.InvariantCultureIgnoreCase)))
                    );

            if (ingredientsToInclude.Any())
            {
                filteredProducts = filteredProducts.Where(p =>
                      ingredientsToInclude.Any(av => p.Ingredients.Contains(av, StringComparison.InvariantCultureIgnoreCase)));
            }

            if (filter.MayContain)
            {
                filteredProducts = filteredProducts.Where(p => !allergensAndVariations.Any(av =>
                           p.AllergenMayBePresent.Any(ac => ac.Contains(av, StringComparison.InvariantCultureIgnoreCase))));
            }

            return new ProductsResponse(filteredProducts.ToList(), products.Count);
        }

        public async Task<List<string>> Test()
        {
            //var supportedCategories = new string[]
            //{ "fruit & vegetables", "meat", "seafood", "biscuits & snacks", "health foods",
            //"condiments", "international food", "rice, noodles & pasta", "baking", "frozen food", "canned & packet food", "breakfast foods",
            //"dairy", "cooking, seasoning & gravy", "bakery", "chilled", "serviced deli", "jams & spreads", "confectionery",
            //"desserts", "drinks"};

            var supportedCategories = new string[] { "biscuits & snacks" };
            //p.CountryOfOrigin == "Australia" &&
            var ingredients = _products.AsQueryable().Where(p =>
                                        p.IsActive &&
                                        p.Description != null &&
                                        supportedCategories.Contains(p.Department) &&
                                        p.Ingredients != null && p.Ingredients != "" &&
                                        // p.CountryOfOrigin == null &&
                                        p.AllergenContains != null && p.AllergenContains.Count > 0 &&
                                        p.Description != "<p></p>")
                .Select(p => p.Ingredients).ToList();

            var ingredientsList = new List<string>();
            ingredients.ForEach((igredientsString) =>
            {
                igredientsString = igredientsString.Replace("<br>", ",", System.StringComparison.InvariantCultureIgnoreCase).Replace("<br/>", ",", System.StringComparison.InvariantCultureIgnoreCase);

                var matches = Regex.Matches(igredientsString, @"(?:(?:\((?>[^()]+|\((?<number>)|\)(?<-number>))*(?(number)(?!))\))|[^,])+");
                foreach (Match match in matches)
                {
                    var val = match.Value.Trim();

                    if (!ingredientsList.Any(ingr => ingr.Equals(val, System.StringComparison.InvariantCultureIgnoreCase)))
                    {
                        ingredientsList.Add(match.Value.Trim());
                    }
                }
            });

            return ingredientsList;
        }

        public async Task<List<string>> QueryProductsContaining(List<string> ingredients)
        {
            var result = new List<string>();

            var supportedCategories = new string[]
            { "fruit & vegetables", "meat", "seafood", "biscuits & snacks", "health foods",
            "condiments", "international food", "rice, noodles & pasta", "baking", "frozen food", "canned & packet food", "breakfast foods",
            "dairy", "cooking, seasoning & gravy", "bakery", "chilled", "serviced deli", "jams & spreads", "confectionery",
            "desserts", "drinks"};

            var products = await _products.Find(p =>
                                        p.IsActive &&
                                        p.Description != null &&
                                        supportedCategories.Contains(p.Department) &&
                                        p.Ingredients != null && p.Ingredients != "" &&
                                        p.AllergenContains != null && p.AllergenContains.Count > 0 &&
                                        p.Description != "<p></p>")
                .ToListAsync();

            ingredients.ForEach((ingredient) =>
            {
                var filteredProducts = products
                    .Where(p => p.Ingredients.Contains(ingredient, System.StringComparison.InvariantCultureIgnoreCase))
                    .Count();

                result.Add($"{ingredient} - {filteredProducts}");
            });

            return result;
        }

        private List<string> GetAllergensWithVariations(List<string> mainAllergens)
        {
            return AllergensData.Allergens
                .Where(a => mainAllergens.Contains(a.Name))
                .SelectMany(a => a.AllVariations)
                .ToList();
        }
    }
}
