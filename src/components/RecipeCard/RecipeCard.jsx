import React from "react";
import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

export const RecipeCard = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${props.recipe_id}`)
    }

  return (
    <div className={styles.recCard}>
      <img
        src={props.image_url}
        alt=""
      />
      <div className={styles.bodytext}>
        <h3>{props.recipe_name}</h3>
        <button className={styles.recBtn} onClick={handleClick}>See More</button>
      </div>
    </div>
  );
};
