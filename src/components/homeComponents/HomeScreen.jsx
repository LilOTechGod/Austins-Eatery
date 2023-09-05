import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import { RecipeCard } from "../RecipeCard/RecipeCard";
import styles from "./HomeScreen.module.css";
import { BiSearchAlt } from "react-icons/bi";

const HomeScreen = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');

  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipe(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const recipeDisplay = recipe.filter((rec, index) => {
    let title = rec.recipe_name.toLowerCase();
    let searchParams = search.toLowerCase();

    return title.includes(searchParams)
  }).map((rec, index) => {
    return <RecipeCard image_url={rec.image_url} recipe_name={rec.recipe_name}  recipe_id={rec.recipe_id} />
  })

  return (
    <div>
      <AdBanner />
      <div className={styles.searchBar}>
        <BiSearchAlt size="2em" color="#DA7635" />
        <input
          className={styles.searchInput}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a recipe"
        />
      </div>
      <div className={styles.hs}>
       {search !== '' ? recipeDisplay : <h3>To see a recipe search for one!</h3>}
      </div>
    </div>
  );
};

export default HomeScreen;
