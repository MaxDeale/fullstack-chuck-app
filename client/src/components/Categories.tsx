import React, { useState } from "react";
import { Link } from "react-router-dom";

import categoryStyles from "./categories.module.css";

// TS props is an array of strings with each category name from API

interface Props {
  categories: string[];
}

const Categories: React.FC<Props> = ({ categories }) => {
  const [jokeCategory, setJokeCategory] = useState("");

  const categoryClickHandler = (e: any) => {
    //must send this to redux
    setJokeCategory(e.target.innerHTML);
    console.log(jokeCategory);
  };

  return (
    <div>
      <h2>Joke Categories:</h2>
      <p>Select a category for a random joke</p>
      <div className={categoryStyles.categoriesContainer}>
        {categories.map((cat) => {
          return (
            <div className={categoryStyles.categoryItem}>
              <Link to="/randomJoke">
                <button onClick={categoryClickHandler}>{cat}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
