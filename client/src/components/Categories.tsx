import React from "react";
import categoryStyles from "./categories.module.css";

interface Props {
  categories: string[];
}

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div>
      <h2>Joke Categories:</h2>
      <p>Select a category for a random joke</p>
      <div className={categoryStyles.categoriesContainer}>
        {categories.map((cat) => {
          return (
            <div className={categoryStyles.categoryItem}>
              <button>{cat}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
