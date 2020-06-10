import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FaAngleRight, FaRProject } from "react-icons/fa";
import Layout from "../components/layout/layout";
import styles from "./categories.module.css";
import { LifestyleType } from "./../model/lifestyleType";
import SearchProducts from "./../components/searchproducts/search";

const SubcategoriesPage = ({ match }) => {
    const [subcategories] = React.useState([
        //fruits and veges
      {
        id: "fresh salad & stiry fry",
        name: "Fresh Salad & Stiry Fry",
        hideFor: []
      },
      {
        id: "fresh fruit",
        name: "Fresh Fruit",
        hideFor: []
      },
      {
        id: "fresh veg",
        name: "Fresh Vegetables",
        hideFor: []
      },
      {
        id: "fresh herbs",
        name: "Fresh Herbs",
        hideFor: []
      },
      // meats
      {
        id: "sausages, burgers & rissoles",
        name: "Sausages, Burgers & Rissoles",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "pork & ham",
        name: "Pork & Ham",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "chicken",
        name: "Chicken",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "special poultry & game",
        name: "Special Poultry & Game",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },

      {
        id: "beef & veel",
        name: "Beef & Veel",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "mince",
        name: "Mince",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "lamb",
        name: "Lamb",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      //seafood
      {
        id: "chilled seafood",
        name: "Chilled Seafood",
        hideFor: [
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium,
          LifestyleType.Organic
        ]
      },
      {
        id: "frozen & thawed seafood",
        name: "Frozen & Thawed Seafood",
        hideFor: [
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium,
          LifestyleType.Organic
        ]
      },
      {
        id: "fresh seafood",
        name: "Fresh Seafood",
        hideFor: [
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium,
          LifestyleType.Organic
        ]
      },
      //biscuits and snacks
      {
        id: "plain & sweet biscuits",
        name: "Plain & Sweet Biscuits",
        hideFor: []
      },
      {
        id: "nuts & snack pots",
        name: "Biscuits & Snacks",
        hideFor: []
      },
      {
        id: "crispbreads & rice cakes",
        name: "Crispbreads & Rice Cakes",
        hideFor: []
      },
      {
        id: "chips multi pack",
        name: "Chips Packets",
        hideFor: []
      },
      {
        id: "muesli bars",
        name: "Muesli Bars",
        hideFor: []
      },
      {
        id: "lunch box snacks",
        name: "Lunch Box Snacks",
        hideFor: []
      },
      {
        id: "crackers",
        name: "Crackers",
        hideFor: []
      },
      {
        id: "popcorn",
        name: "Popcorn",
        hideFor: []
      },
      {
        id: "corn chips & salsa",
        name: "Corn Chips & Salsa",
        hideFor: []
      },
      //health foods
      {
        id: "health fruit, nuts, grains & seeds",
        name: "Fruit, Nuts, Grains & Seeds",
        hideFor: []
      },
      {
        id: "healthy snacks & drinks",
        name: "Snacks & drinks",
        hideFor: []
      },
      {
        id: "healthy bites",
        name: "Healthy Bites",
        hideFor: []
      },
      {
        id: "health baking & sweetener",
        name: "Baking",
        hideFor: []
      },
      {
        id: "health packaged vegetarian",
        name: "Vegetarian",
        hideFor: []
      },
      {
        id: "health breakfast food & spread",
        name: "Breakfast Foods",
        hideFor: []
      },
      {
        id: "health cooking & pasta",
        name: "Pasta",
        hideFor: []
      },
      {
        id: "health packaged gluten free",
        name: "Gluten Free",
        hideFor: []
      },
      //condiments
      {
        id: "salad dressing & vinegar ",
        name: "Salad Dressing",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "mustard",
        name: "Mustards",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "chilli & hot sauce",
        name: "Hot Sauces",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "meat, seafood & veg sauce",
        name: "Meat, Seafood & Vegetable sauces",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "tomato & bbq sauce",
        name: "Tomato & Bbq Sauce",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "asian sauce",
        name: "Asian Sauce",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "pickled vegetables",
        name: "Pickled Vegetables",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "chutney & relish",
        name: "Chutney & Relish",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "mayonnaise",
        name: "Mayonnaise",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      // international food
      {
        id: "asian food",
        name: "Asian Food",
        hideFor: []
      },
      {
        id: "mexican food",
        name: "Mexican Food",
        hideFor: []
      },
      {
        id: "middle eastern food",
        name: "Middle Eastern Food",
        hideFor: []
      },
      {
        id: "british & irish food",
        name: "British & Irish Food",
        hideFor: []
      },
      {
        id: "south african food",
        name: "South African Food",
        hideFor: []
      },
      {
        id: "indian food",
        name: "Indian Food",
        hideFor: []
      },
      {
        id: "european food",
        name: "European Food",
        hideFor: []
      },

      //rice, noodles & pasta//
      {
        id: "pasta sauce & pesto",
        name: "Pasta Bases",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Niacin,
          LifestyleType.Iron,
          LifestyleType.Calcium
        ]
      },
      {
        id: "packet noodles",
        name: "Packet Pasta",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Niacin,
          LifestyleType.Iron,
          LifestyleType.Calcium
        ]
      },
      {
        id: "rice",
        name: "Rice",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Niacin,
          LifestyleType.Iron,
          LifestyleType.Calcium
        ]
      },
      {
        id: "long strand pasta",
        name: "Long Strand Pasta",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Niacin,
          LifestyleType.Iron,
          LifestyleType.Calcium
        ]
      },
      {
        id: "shaped pasta",
        name: "Shaped Pasta",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Niacin,
          LifestyleType.Iron,
          LifestyleType.Calcium
        ]
      },
      {
        id: "pasta sheets",
        name: "Pasta Sheets",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Niacin,
          LifestyleType.Iron,
          LifestyleType.Calcium
        ]
      },
      // baking//
      {
        id: "baking ingredients",
        name: "Baking Ingredients",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "sugar & sweetener",
        name: "Sugar & Sweeteners",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "flour",
        name: "Flours",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "baking nuts & seeds",
        name: "Baking Nuts & Seeds",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "health baking & sweetener",
        name: "Health foods",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "baking flavour, colour & decoration",
        name: "Decoration",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "cake mix",
        name: "Cake Premix",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },

      //frozen food//
      {
        id: "frozen dessert",
        name: "Frozen Dessert",
        hideFor: []
      },
      {
        id: "frozen meals",
        name: "Frozen Meals",
        hideFor: []
      },
      {
        id: "frozen finger foods",
        name: "Frozen Finger Foods",
        hideFor: []
      },
      {
        id: "frozen fruit",
        name: "Frozen Fruit",
        hideFor: []
      },
      {
        id: "multi pack & single serve ice cream",
        name: "Ice Cream Varieties",
        hideFor: []
      },
      {
        id: "ice cream tubs",
        name: "Ice Cream Tubs",
        hideFor: []
      },
      {
        id: "frozen weight management meals",
        name: "Diet Meals",
        hideFor: []
      },
      {
        id: "frozen pizzas",
        name: "Frozen Pizza",
        hideFor: []
      },
      {
        id: "frozen fish",
        name: "Frozen Seafood",
        hideFor: []
      },
      {
        id: "frozen vegetables",
        name: "Frozen Vegetables",
        hideFor: []
      },
      {
        id: "frozen chips & wedges",
        name: "Frozen Chips & Wedges",
        hideFor: []
      },
      {
        id: "frozen yoghurt, gelato & sorbet",
        name: "Frozen Yoghurt",
        hideFor: []
      },
      {
        id: "frozen meat",
        name: "Frozen Meat",
        hideFor: []
      },
      {
        id: "frozen pies & sausage rolls",
        name: "Frozen Pastry",
        hideFor: []
      },
      {
        id: "frozen pastry & bread",
        name: "Frozen Bread",
        hideFor: []
      },
      //canned and packet food//
      {
        id: "canned beans, peas & corn",
        name: "Canned Beans, Peas & Corn",
        hideFor: []
      },
      {
        id: "cous cous & quinoa",
        name: "Cous Cous & Quinoa",
        hideFor: []
      },
      {
        id: "canned salmon & canned seafood",
        name: "Canned Seafoods",
        hideFor: []
      },
      {
        id: "canned & packet vegetables",
        name: "Canned Vegetables",
        hideFor: []
      },
      {
        id: "canned tuna",
        name: "Canned Tuna",
        hideFor: []
      },
      {
        id: "instant soup",
        name: "Soup",
        hideFor: []
      },
      {
        id: "canned meat",
        name: "Canned Meat",
        hideFor: []
      },
      {
        id: "canned fruit",
        name: "Canned Fruit",
        hideFor: []
      },
      {
        id: "canned & packet ready meals",
        name: "Canned Ready Meals",
        hideFor: []
      },
      {
        id: "microwave & pouch soup",
        name: "Microwave Soups",
        hideFor: []
      },
      {
        id: "canned fruit salad & fruit puree",
        name: "Canned Fruit Varieties",
        hideFor: []
      },
      {
        id: "baked beans & spaghetti",
        name: "Baked Beans & Spaghetti",
        hideFor: []
      },
      {
        id: "antipasto",
        name: "Antipasto",
        hideFor: []
      },
      {
        id: "canned stone fruit",
        name: "Canned Stone Fruit",
        hideFor: []
      },
      {
        id: "canned tomatoes",
        name: "Canned Tomatoes",
        hideFor: []
      },
      //breakfast foods//
      {
        id: "breakfast cereal",
        name: "Breakfast Cereal",
        hideFor: []
      },
      {
        id: "breakfast snacks & drinks",
        name: "Breakfast Snacks",
        hideFor: []
      },
      {
        id: "muesli & oats",
        name: "Muesli & Oats",
        hideFor: []
      },
      //dairy//
      {
        id: "low & no fat yoghurt",
        name: "Low & No Fat Yoghurt",
        hideFor: []
      },
      {
        id: "greek & natural yoghurt",
        name: "Natural Yoghurts",
        hideFor: []
      },
      {
        id: "butter & margarine",
        name: "Spreads",
        hideFor: []
      },
      {
        id: "flavoured yoghurt",
        name: "Flavoured Yoghurt",
        hideFor: []
      },
      {
        id: "flavoured milk",
        name: "Flavoured Milk",
        hideFor: []
      },
      {
        id: "specialty cheese",
        name: "Specialty Cheese",
        hideFor: []
      },
      {
        id: "chilled custard & dessert",
        name: "Custards",
        hideFor: []
      },
      {
        id: "Cottage, cream & ricotta cheese",
        name: "Cheese Varieties",
        hideFor: []
      },
      {
        id: "full cream milk ",
        name: "Full Cream Milk",
        hideFor: []
      },
      {
        id: "cream & sour cream",
        name: "Cream & Sour Cream",
        hideFor: []
      },
      {
        id: "cheese snacks",
        name: "Snacks",
        hideFor: []
      },
      {
        id: "soy & specialty milk",
        name: "Soy & Specialty Milk",
        hideFor: []
      },
      {
        id: "skim & reduced fat milk",
        name: "Skim & Reduced Fat Milk",
        hideFor: []
      },
      //Cooking, Seasoning & Gravy//
      {
        id: "cooking oil",
        name: "Cooking Oil",
        hideFor: []
      },
      {
        id: "salt & pepper",
        name: "Seasoning",
        hideFor: []
      },
      {
        id: "breadcrumbs & coating",
        name: "Breadcrumbs & Coating",
        hideFor: []
      },
      {
        id: "recipe bases ",
        name: "Recipe bases",
        hideFor: []
      },
      {
        id: "marinade & simmer sauce",
        name: "Marinade & Simmer Sauce",
        hideFor: []
      },
      {
        id: "stock",
        name: "Stocks",
        hideFor: []
      },
      {
        id: "olive oil",
        name: "Olive Oil",
        hideFor: []
      },
      {
        id: "gravy & finishing sauce",
        name: "Gravy & Sauces",
        hideFor: []
      },
      {
        id: "tomato paste",
        name: "Tomato Paste",
        hideFor: []
      },

      //bakery//
      {
        id: "fruit bread",
        name: "Fruit Bread",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "rolls, wraps & flatbreads",
        name: "Rolls, Wraps & Flatbreads",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "baked snacks & sweets",
        name: "Baked Snacks & Sweets",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "sourdough & specialty bread",
        name: "Sourdough & Specialty Bread",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "white & wholemeal bread",
        name: "White & Wholemeal Bread",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "gluten free bread",
        name: "Gluten Free",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "pastries",
        name: "Pastries",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "grain & rye bread",
        name: "Grain & Rye Bread",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "in-store bakery",
        name: "In-store",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      //chilled
      {
        id: "chilled pizza & bread",
        name: "Chilled prebaked",
        hideFor: []
      },
      {
        id: "pate, paste & caviar",
        name: "Pate, Paste & Caviar",
        hideFor: []
      },
      {
        id: "fresh pasta & noodles",
        name: "Pasta & Noodles",
        hideFor: []
      },
      {
        id: "chilled ready meals",
        name: "Ready Meals",
        hideFor: []
      },
      {
        id: "dips",
        name: "Dips",
        hideFor: []
      },
      {
        id: "eggs",
        name: "Eggs",
        hideFor: []
      },
      {
        id: "chilled soup",
        name: "Soups",
        hideFor: []
      },
      {
        id: "packaged salad & sides ",
        name: "Premade Salad & Sides",
        hideFor: []
      },
      {
        id: "chilled baking",
        name: "Baked",
        hideFor: []
      },
      {
        id: "tofu",
        name: "Tofu",
        hideFor: []
      },
      //serviced deli
      {
        id: "continental & cured meat",
        name: "Continental & Cured MEat",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "deli ready to heat",
        name: "Ready to Heat",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "deli poultry",
        name: "Deli Poultry",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "sliced & shaved meat",
        name: "Sliced & Shaved Meat ",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "deli & packaged sausage",
        name: "Deli & Packaged Sausage",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "fresh antipasto",
        name: "Fresh Antipasto",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "bacon",
        name: "Bacon",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "olives",
        name: "Olives",
        hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
      },
      //jams and spreads
      {
        id: "savoury spread",
        name: "Savoury Spreads",
        hideFor: []
      },
      {
        id: "honey",
        name: "Honey",
        hideFor: []
      },
      {
        id: "sweet spread",
        name: "Sweet SPread",
        hideFor: []
      },
      {
        id: "peanut butter",
        name: "Peanut Butter",
        hideFor: []
      },
      {
        id: "jam",
        name: "Jams ",
        hideFor: []
      },
      //confectionery
      {
        id: "chocolate bars",
        name: "Chocolate",
        hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin]
      },
      {
        id: "sweets, lollies & licorice",
        name: "Sweets & Lollies",
        hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin]
      },
      {
        id: "gum & mints",
        name: "Gums & Mints",
        hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin]
      },
      {
        id: "chocolate boxes & gifts",
        name: "Chocolate Boxes & Gifts",
        hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin]
      },
      //desserts
      {
        id: "syrup, topping & ice cream mix",
        name: "Syrup, Topping & Ice Cream mix",
        hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "ready to freeze ice blocks",
        name: "Ready to freeze ice blocks",
        hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "ice cream cones & wafers",
        name: "Cones & Wafers",
        hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "packaged custard & pudding",
        name: "Packaged Custard & Pudding",
        hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin, LifestyleType.Iron]
      },
      {
        id: "jelly & fruit dessert",
        name: "Jelly & Fruit Dessert",
        hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin, LifestyleType.Iron]
      },
      //drinks
      {
        id: "carbonated water",
        name: "Carbonated Water",
        hideFor: []
      },
      {
        id: "soft drink cans",
        name: "Soft Drinks Cans",
        hideFor: []
      },
      {
        id: "black tea",
        name: "Black Tea",
        hideFor: []
      },
      {
        id: "juice",
        name: "Juice",
        hideFor: []
      },
      {
        id: "instant & flavoured coffee",
        name: "Instant Coffee",
        hideFor: []
      },
      {
        id: "herbal & specialty tea",
        name: "Herbal Teas",
        hideFor: []
      },
      {
        id: "long life milk",
        name: "Long Life Milk",
        hideFor: []
      },
      {
        id: "sports drinks",
        name: "Sport Drinks",
        hideFor: []
      },
      {
        id: "soft drink bottles",
        name: "Soft Drinks",
        hideFor: []
      },
      {
        id: "flavoured & coconut water",
        name: "Flavoured & Coconut Water",
        hideFor: []
      },
      {
        id: "energy drinks",
        name: "Energy Drinks",
        hideFor: []
      },
      {
        id: "cordial",
        name: "Cordial",
        hideFor: []
      },
      {
        id: "green tea",
        name: "Green Tea",
        hideFor: []
      },
      {
        id: "still water",
        name: "Still Water",
        hideFor: []
      },
      {
        id: "home brew & non alchoholic drinks",
        name: "Non Alchoholic Drinks",
        hideFor: []
      }

    ]);
 };

export default SubcategoriesPage;
