import React, { useState } from "react";
import { Formik } from "formik";
import styles from './NewRecipe.module.css'
// import axios from 'axios';

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const handleSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);

    // axios.post(`https://recipes.devmountain.com/recipes`, values)
    //   .then( res => {
    //     res.status(200).send(res);
    //   })
    //   .catch(err => console.error(err))
  };

  return (
    <section>
      <h1 className={styles.formTitle}>Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.firstSetInput}>
            <input
              placeholder="Title your Recipe!"
              value={values.recipeName}
              onChange={handleChange}
              name="recipeName"
            />
            <input
              placeholder="Paste an Image URL"
              value={values.imageURL}
              onChange={handleChange}
              name="imageURL"
            />
            </div>

            <div className={styles.radioBox}>
            <input
              type="radio"
              value="Cook"
              onChange={handleChange}
              name="type"
            />
            <h4>Cook</h4>
            <input
              type="radio"
              value="Bake"
              onChange={handleChange}
              name="type"
            />
            <h4>Bake</h4>
            <input
              type="radio"
              value="Drink"
              onChange={handleChange}
              name="type"
            />
            <h4>Drink</h4>
            </div>

            <div className={styles.secondSetInput}>
            <input
              placeholder="Prep Time"
              value={values.prepTime}
              onChange={handleChange}
              name="prepTime"
            />
            <input
              placeholder="Cook Time"
              value={values.cookTime}
              onChange={handleChange}
              name="cookTime"
            />
            <input
              placeholder="Serves"
              value={values.serves}
              onChange={handleChange}
              name="serves"
            />
            </div>

            <div className={styles.thirdSetInput}>
            <input
              placeholder="Ingredient"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            </div>

            <div className={styles.firstBtn}>
            <button
              type="button"
              className={styles.formBtn}
              onClick={addIngredient}
            >
              Add Another
            </button>
            </div>

            <div className={styles.textArea}>
            <textarea
              placeholder="Type your instructions"
              rows={5}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            </div>

            <div className={styles.secondBtn}>
            <button type="submit"  >
              Submit
            </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
