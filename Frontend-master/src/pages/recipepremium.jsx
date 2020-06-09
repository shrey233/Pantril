import React, { useState, Component} from "react";
import "./recipepremium.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from './../components/recipe/Recipe';
import Alert from "./../components/recipe/Alert";
import SaveButton from "./../components/recipe/save-button";



//code sample used to create, referenced from https://github.com/lashaNoz/food-searching-app
// we create a function called recipe form.

function Recipeform() {
  // create constants to  set query, recipes and alert.
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
 
  // create a drop down with filters 
  const options = [
    { label: "Vegan ", value: "&health=vegan" },
    { label: "gluten-free ", value: "glutenfree" },
    { label: "nuts", value: "nuts" }
  ];
  

  // constants with selected for drop down
  const [selected, setSelected] = useState([]);
// constant for filter.
  const filter= '';

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // this displays a function for the alert message
  const alertDisplay = async () =>
  {
    setAlert("Please fill the form");

  } 
  // here we get recipes, the function get recipes is created
  const getRecipes = async () => {
    // we check if query is not equal to ""
    if (query !== "") {
      // we get the recipes from the url which is the edamam API
      const result = await Axios.get(url);
      //if a wrong name is typed we get an error message
      // that this recipe is not found/
      if (!result.data.more) {
        return setAlert("No recipe with this name found");
      }
      // here we get the results and also we set the recipe
      console.log(result);
      setRecipes(result.data.hits);
      // we set the query
      setQuery("");
      // we set alert messages
      setAlert("");
      } else {
        // else if on submit the search button is clicked with no input
        // an error message will be printed saying to Search again
        setAlert("Please search for the recipe again");
         
    }
  };

  // creating a constant that sets the query to the target value/
  const onChange = e => setQuery(e.target.value);

  // creating on submit function
  // where e. prevent default will call the error messages
  // based on the condition specified above.
  const onSubmit = e => {
    e.preventDefault();
    // get recipes called to fetch data from edamam 
    getRecipes();
   //    alertDisplay();
  };

  /*onSelect(selectedList, selectedItem) {
    
};*/

  /*
  export function Recipeform(options, filter) {
    if (!filter) {
      return options;
    }
    const re = new RegExp(filter, "i");
    return options.filter(({ value }) => value && value.match(re));
  }
  */


// below a form is created 
  return (
    <div className="Recipepremium">
      <h1>Pantrilist Premium Search</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />

       

        <input type="submit" value="Search" />
          <h2>Select Filters</h2>
           <pre>{selected}</pre>
     
      



      </form>
      
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}


      </div>

    </div>
  );

  

  
}


    


export default Recipeform;