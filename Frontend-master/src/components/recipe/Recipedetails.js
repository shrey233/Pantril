import React from "react";
import { v4 as uuidv4 } from "uuid";
// code sample, referenced from https://github.com/lashaNoz/food-searching-app
//shrey parekh 18706941
// here we create cosntant function Recipe Details to fetch 
// ingredients from edamam
const Recipedetails = ({ ingredients }) => {
  // this maps the ingredients 
    return ingredients.map(ingredient => {
      return (
        // the key generates a unique identifier for the ingredient list.
        <ul key={uuidv4()} className="ingredient-list">
          <li className="ingredient-text">{ingredient.text}</li>
          <li className="ingredient-weight">Weight - {ingredient.weight}</li>
        </ul>
      );
    });
  };
  
// export recipe details.
export default Recipedetails;

