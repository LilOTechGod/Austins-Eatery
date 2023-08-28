import React, {useEffect, useState} from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'

const HomeScreen = () => {  

  const getRecipes = () => {
    axios.get('https://recipes.devmountain.com/recipes')
      .then(res => {
        setRecipe(res.data);
        console.log(res.data);
      })
      .catch(err => console.error(err));
  };

  const [recipe, setRecipe]=useState();

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen