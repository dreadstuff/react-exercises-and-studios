import { useState } from 'react'
import './App.css'
import RecipeDescription from './components/RecipeDescription.jsx'
import RecipeIngredients from './components/Ingredients.jsx'
import RecipePhoto from './components/Photos.jsx'

function App() {

  return (
    <>
    <div className="App">
      <div className='similarComponents'><RecipePhoto /> <RecipeDescription /></div>
       
      <div>
        <RecipeIngredients />
      </div>
    </div>
  </>
  )
}

export default App