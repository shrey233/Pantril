import React, { useState } from "react";
import Recipedetails from "./Recipedetails";
import { connect } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { addProduct } from "../../store/shopping-list/actions";
import { Button } from "reactstrap";
import { getUser } from "../../store/user/selector";
import  SaveButton from "../save-button/save-button";
// code reference used from food search app
// 18706941 shrey parekh
// here we import recipe details page also the save button to add to the shopping list.
const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients,addProduct,saveButton } = recipe.recipe;
// code 
  return (
    // we create class name div.
    // we get the images of the recipes being fetched.
    // we also get the url which provides instructions on how 
    // the recipe is being created.
    // we fetch the ingredients , url and add the recipe to the shopping list. 

   // <button onClick={()=>setShow(!show)}> Add to Shopping List </button>
    //{show && <SaveButton savedToList={SaveButton}/>}
    <div className="recipe">
      
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>

      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <Recipedetails ingredients={ingredients} />}
    
    </div>
  );
};

export default Recipe;