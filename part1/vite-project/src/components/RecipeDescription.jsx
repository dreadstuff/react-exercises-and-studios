import React from 'react';
import RecipeAuthor from 'Description.jsx';

export default function RecipeDescription() {
    let authorLink = "https://www.indianhealthyrecipes.com/about/";
    let authorPhoto = "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/frank-couch-featured.jpg";
    let authorName = "Danny Devito";
    return <div> 
      <div>
         <h1>Chicken Tikka</h1>
         <p>This chicken Tikka Masala is the bomb!</p>
      </div>
      <div>
        <RecipeAuthor />
      </div>
   </div>
     };



/* import React from 'react'

class RecipeDescription extends React.Component {
    render() {
      return <div> 
      <div>
         <h1>Recipe Title</h1>
         <p>Short recipe description</p>
      </div>
      <RecipeAuthor />
   </div>
    }
  }

  export default RecipeDescription */