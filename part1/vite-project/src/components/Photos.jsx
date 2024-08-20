import React from 'react'
import styles from './Description.module.css';

export default function RecipePhoto() {
  return (
    <div>
      <img src="https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg" width={200} alt="recipe photo" className = {styles.imageUpdates} />
    </div>
  )
}