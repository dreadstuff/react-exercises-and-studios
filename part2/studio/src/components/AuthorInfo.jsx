import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  // const recipeAuthor = recipedata[0].author;
  const recipeAuthor = 
  <div
   key={recipedata[0].name}> {recipedata[0].author} 
  </div>

  const recipeAuthorImage = 
  <div
  key={recipedata[0].name}> <img className="authorImage" src={recipedata[0].authorImage} alt={recipeAuthor} /> 
 </div>

 const recipeWebsite = 
 <a href= {recipedata[0].website}>https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/</a>


    return (
      <div>
         {recipeAuthorImage}
         {recipeAuthor}
         {recipeWebsite}
      </div>
   );

 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 