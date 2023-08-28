import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav className='nav-bar'>
        <Link to="">
          <button className={styles.navBtn}>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className={styles.navBtn}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
