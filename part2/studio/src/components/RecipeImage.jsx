import recipedata from "./recipe.json";

function RecipeImage() {
  const recipeImage = recipedata[0].recipeImage;
  const recipeName = recipedata[0].name;
   return ( 
   <div>
    <img className = "recipeImage" src={recipeImage} alt= {recipeName} />;
  </div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 