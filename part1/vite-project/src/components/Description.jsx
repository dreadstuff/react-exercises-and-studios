import React from 'react'
import styles from './Description.module.css'

export default function RecipeAuthor() {
    let authorLink = "https://www.indianhealthyrecipes.com/about/";
    let authorPhoto = "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/frank-couch-featured.jpg";
    let authorName = "Danny Devito";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} width={300} alt = "Danny in couch" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>More about Danny</a> 
           </div>
        </div>
     )};