namespace XperCore.Controllers
{
    using Core.Model;
    using Core.Services;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using XperCore.Model;
        
    [ApiController]
    [EnableCors]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("categories")]
        public async Task<ActionResult<List<Category>>> Categories([FromQuery] List<string> allergens, [FromQuery] bool excludeMayContain = false)
        {
            var categories = await _productService.Categories(allergens, excludeMayContain);

            return categories;
        }

        [HttpGet("products/{category}")]
        public async Task<ActionResult<ProductsResponse>> Products(string category, [FromQuery] List<string> allergens, [FromQuery] bool excludeMayContain = false, [FromQuery] bool? isKosher = null)
        {
            var products = await _productService.Products(allergens, excludeMayContain, category, isKosher);

            return products;
        }

        [HttpPost("products/{category}")]
        public async Task<ActionResult<ProductsResponse>> GetProducts(string category, [FromBody] Filter filter)
        {
            var products = await _productService.Products(category, filter);

            return products;
        }

        [HttpGet("products/search/{keyword}")]
        public async Task<ActionResult<ProductsResponse>> Search(string keyword, [FromQuery]  List<string> allergens, [FromQuery] bool excludeMayContain = false)
        {
            var products = await _productService.Search(allergens, excludeMayContain, keyword);

            return products;
        }

        [HttpGet("product/{id}")]
        public async Task<ActionResult<Product>> Details(string id)
        {
            var product = await _productService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpGet("products")]
        public async Task<ActionResult<List<Product>>> Products([FromQuery] List<string> ids)
        {
            return await _productService.Get(ids);
        }

        [HttpGet("test")]
        public async Task<ActionResult<string>> Test()
        {
            var products = await _productService.Test();
            //return products;
            //var result = products.Take(200).Select(p => $"https://pantrelist.com/product-details/{p}").ToList();

            return string.Join(System.Environment.NewLine, products);
        }

        [HttpGet("test1")]
        public async Task<ActionResult<string>> Query()
        {
            var list = new List<string>() { "E330 - Citric acid",
            "E322 - Lecithins",
            "E322i - Lecithin",
            "E500 - Sodium carbonates",
            "E471 - Mono- and diglycerides of fatty acids",
            "E415 - Xanthan gum",
            "E450 - Diphosphates",
            "E440 - Pectins",
            "E331 - Sodium citrates",
            "E412 - Guar gum",
            "E202 - Potassium sorbate",
            "E300 - Ascorbic acid",
            "E260 - Acetic acid",
            "E1422 - Acetylated distarch adipate",
            "E440i - Pectin",
            "E160a - Alpha-carotene",
            "E476 - Polyglycerol polyricinoleate",
            "E407 - Carrageenan",
            "E160c - Paprika extract",
            "E270 - Lactic acid",
            "E422 - Glycerol",
            "E500ii - Sodium hydrogen carbonate",
            "E410 - Locust bean gum",
            "E621 - Monosodium glutamate",
            "E307b - Alpha-tocopherol",
            "E1442 - Hydroxypropyl distarch phosphate",
            "E160b - Annatto",
            "E223 - Sodium metabisulphite",
            "E211 - Sodium benzoate",
            "E428 - Gelatine",
            "E100 - Curcumin",
            "E150d - Sulphite ammonia caramel",
            "E120 - Cochineal",
            "E150c - Ammonia caramel",
            "E466 - Sodium carboxy methyl cellulose",
            "E200 - Sorbic acid",
            "E481 - Sodium stearoyl-2-lactylate",
            "E451 - Triphosphates",
            "E220 - Sulphur dioxide",
            "E341 - Calcium phosphates",
            "E509 - Calcium chloride",
            "E627 - Disodium guanylate",
            "E631 - Disodium inosinate",
            "E163 - Anthocyanins",
            "E296 - Malic acid",
            "E316 - Sodium erythorbate",
            "E452 - Polyphosphates",
            "E635 - Disodium 5'-ribonucleotide",
            "E551 - Silicon dioxide",
            "E950 - Acesulfame k",
            "E339 - Sodium phosphates",
            "E250 - Sodium nitrite",
            "E102 - Tartrazine",
            "E320 - Butylated hydroxyanisole (bha)",
            "E472e - Mono- and diacetyltartaric acid esters of mono- and diglycerides of fatty acids",
            "E262 - Sodium acetates",
            "E1400 - Dextrin",
            "E503 - Ammonium carbonates",
            "E492 - Sorbitan tristearate",
            "E150a - Plain caramel",
            "E304 - Fatty acid esters of ascorbic acid",
            "E319 - Tertiary-butylhydroquinone (tbhq)",
            "E420 - Sorbitol",
            "E110 - Sunset yellow FCF",
            "E501 - Potassium carbonates",
            "E414 - Acacia gum",
            "E150 - Caramel",
            "E306 - Tocopherol-rich extract",
            "E14XX - Modified Starch",
            "E951 - Aspartame",
            "E133 - Brilliant blue FCF",
            "E332 - Potassium citrates",
            "E955 - Sucralose",
            "E450i - Disodium diphosphate",
            "E460 - Cellulose",
            "E297 - Fumaric acid",
            "E1510 - Ethanon",
            "E418 - Gellan gum",
            "E338 - Phosphoric acid",
            "E129 - Allura red ac",
            "E435 - Polyoxyethylene sorbitan monostearate",
            "E171 - Titanium dioxide",
            "E960 - Steviol glycosides",
            "E101 - Riboflavin",
            "E903 - Carnauba wax",
            "E508 - Potassium chloride",
            "E420i - Sorbitol",
            "E161b - Lutein",
            "E1412 - Distarch phosphate",
            "E307 - Alpha-tocopherol",
            "E401 - Sodium alginate",
            "E968 - Erythritol",
            "E385 - Calcium disodium ethylenediaminetetraacetate",
            "E406 - Agar",
            "E904 - Shellac",
            "E282 - Calcium propionate",
            "E141 - Copper complexes of chlorophylls and chlorophyllins",
            "E224 - Potassium metabisulphite",
            "E575 - Glucono-delta-lactone",
            "E475 - Polyglycerol esters of fatty acids",
            "E554 - Sodium aluminium silicate",
            "E170 - Calcium carbonate",
            "E965 - Maltitol",
            "E1520 - Propylene Glycol",
            "E327 - Calcium lactate",
            "E461 - Methyl cellulose",
            "E122 - Azorubine",
            "E124 - Ponceau 4r",
            "E1420 - Acetylated starch",
            "E140 - Chlorophylls and Chlorophyllins",
            "E1404 - Oxidised starch",
            "E400 - Alginic acid",
            "E500i - Sodium carbonate",
            "E101i - Riboflavin",
            "E334 - L(+)-tartaric acid",
            "E333 - Calcium citrates",
            "E473 - Sucrose esters of fatty acids",
            "E325 - Sodium lactate",
            "E160ai - Beta-carotene",
            "E150b - Caustic sulphite caramel",
            "E331iii - Trisodium citrate",
            "E477 - Propane-1‚2-diol esters of fatty acids",
            "E501i - Potassium carbonate",
            "E405 - Propane-1‚2-diol alginate",
            "E263 - Calcium acetate",
            "E234 - Nisin",
            "E155 - Brown ht",
            "E1200 - Polydextrose",
            "E541 - Sodium aluminium phosphate",
            "E281 - Sodium propionate",
            "E251 - Sodium nitrate",
            "E516 - Calcium sulphate",
            "E162 - Beetroot red",
            "E491 - Sorbitan monostearate",
            "E160 - Carotenoids",
            "E172 - Iron oxides and iron hydroxides",
            "E15x - E15x food additive",
            "E472c - Citric acid esters of mono- and diglycerides of fatty acids",
            "E340 - Potassium phosphates",
            "E420ii - Sorbitol syrup",
            "E464 - Hydroxypropyl methyl cellulose",
            "E141ii - Copper complexes of chlorophyllins",
            "E290 - Carbon dioxide",
            "E1105 - Lysozyme",
            "E321 - Butylated hydroxytoluene",
            "E153 - Vegetable carbon",
            "E472a - Acetic acid esters of mono- and diglycerides of fatty acids",
            "E123 - Amaranth",
            "E1100 - Alpha-Amylase",
            "E210 - Benzoic acid",
            "E307c - Alpha-tocopherol",
            "E1450 - Starch sodium octenyl succinate",
            "E901 - White and yellow beeswax",
            "E421 - Mannitol",
            "E407a - Processed eucheuma seaweed",
            "E553 - Magnesium silicates",
            "E152 - Black 7984",
            "E301 - Sodium ascorbate",
            "E433 - Polyoxyethylene sorbitan monooleate",
            "E175 - Gold",
            "E952 - Cyclamic acid and its Na and Ca salts",
            "E442 - Ammonium phosphatides",
            "E502 - Carbonates",
            "E441 - Superglycerinated hydrogenated rapeseed oil",
            "E440ii - Amidated pectin",
            "E961 - Neotame",
            "E504 - Magnesium carbonates",
            "E222 - Sodium bisulphite",
            "E504i - Magnesium carbonate",
            "E1101 - Protease",
            "E529 - Calcium oxide",
            "E413 - Tragacanth",
            "E472 - Acid esters of mono- and diglycerides of fatty acids",
            "E104 - Quinoline yellow",
            "E262ii - Sodium diacetate",
            "E132 - Indigotine",
            "E552 - Calcium silicate",
            "E1403 - Bleached starch",
            "E304i - Ascorbyl palmitate",
            "E160d - Lycopene",
            "E181 - Tannin",
            "E913 - Lanolin",
            "E1201 - Polyvinylpyrrolidone",
            "E539 - Sodium thiosulfate",
            "E572 - Magnesium stearate",
            "E965ii - Maltitol syrup",
            "E571 - E571 food additive",
            "E905a - Mineral oil",
            "E262i - Sodium acetate",
            "E524 - Sodium hydroxide",
            "E339iii - Trisodium phosphate",
            "E341ii - Dicalcium phosphate",
            "E445 - Glycerol esters of wood rosin",
            "E460i - Microcrystalline cellulose",
            "E925 - Chlorine",
            "E900a - E900a food additive",
            "E142 - Green s",
            "E501ii - Potassium hydrogen carbonate",
            "E472b - Lactic acid esters of mono- and diglycerides of fatty acids",
            "E450iii - Tetrasodium diphosphate",
            "E452vi - Sodium tripolyphosphate",
            "E943b - Isobutane",
            "E233 - Thiabendazole",
            "E530 - Magnesium oxide",
            "E140ii - Chlorophyllins",
            "E164 - E164 food additive",
            "E452i - Sodium polyphosphate",
            "E639 - E639 food additive",
            "E1103 - Invertase",
            "E337 - Potassium sodium tartrate",
            "E363 - Succinic acid",
            "E957 - Thaumatin",
            "E900 - Dimethyl polysiloxane",
            "E451i - Pentasodium triphosphate",
            "E641 - E641 food additive",
            "E586 - 4-hexylresorcinol",
            "E468 - Cross-linked sodium carboxymethylcellulose",
            "E1519 - Benzyl alcohol",
            "E503ii - Ammonium hydrogen carbonate",
            "E339ii - Disodium phosphate",
            "E920 - L-cysteine hydrochloride",
            "E230 - Biphenyl",
            "E1414 - Acetylated distarch phosphate",
            "E570 - Fatty acids",
            "E1104 - Lipase",
            "E958 - Glycyrrhizin",
            "E1401 - Acid-treated modified starch",
            "E140i - Chlorophylls"
            };

            var minerals = new List<string>() {
                "Mineral",
                "Iron",
                "Calcium",
                "Calcium carbonate",
                "Zinc",
                "Zinc oxide",
                "Potassium chloride",
                "Magnesium"
            };

            var vitamins = new List<string>() {
              "Thiamin",
              "Niacin",
              "Riboflavin",
              "Folic acid",
              "Folate",
              "Vitamin C",
              "Vitamin E",
              "Vitamin A",
              "Vitamin B6",
              "Vitamin B12",
              "Vitamin D",
              "L-ascorbic acid",
              "Pantothenic Acid",
              "Ergocalciferol",
              "Cyanocobalamin",
              "DL-alpha tocopheryl acetate",
              "Cholecalciferol",
              "Biotin",
              "Beta-carotene",
              "Vitamin K",
              "Retinyl acetate",
              "Retinyl palmitate",
              "Thiamin hydrochloride",
              "Thiamin mononitrate",
              "Nicotinamide"
            };

            var products = await _productService.QueryProductsContaining(vitamins);

            return string.Join(System.Environment.NewLine, products);
        }
    }
}
