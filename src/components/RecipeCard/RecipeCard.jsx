import React from "react";
import styles from "./RecipeCard.module.css";

export const RecipeCard = (props) => {
  return (
    <div className={styles.recCard}>
      <img
        src={props.image_url}
        alt=""
      />
      <div className={styles.bodytext}>
        <h3>{props.recipe_name}</h3>
        <button className={styles.recBtn}>See More</button>
      </div>
    </div>
  );
};
