import React, { useState, useEffect } from "react";
import styles from "./DetailScreen.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailScreen = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <section>
      {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}
      <img src={recipe.image_url} alt="" />
      <div className={styles.details}>
        <aside>
          <h2 className={styles.detailTitle}>Recipe</h2>
          <p>Prep Time: {recipe.prep_time} </p>
          <p>Cook Time: {recipe.cook_time}</p>
          <p>Serves: {recipe.serves}</p>
          <br />
          <h2 className={styles.detailTitle}>Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => {
              return (
                <h4>
                  {ing.quantity} {ing.ingredient}
                </h4>
              );
            })}
        </aside>
        <aside>
          <h2 className={styles.detailTitle}>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </aside>
      </div>
    </section>
  );
};

export default DetailScreen;
