import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getRandomJoke,
  getAllCategories,
  getChosenCategory,
} from "../actions/jokeActions";
import { useDispatch } from "react-redux";
import categoryStyles from "./categories.module.css";
import JokeScreen from "../screens/JokeScreen";
import axios from "axios";
import Loader from "./Loader";

// TS props is an array of strings with each category name from API

interface Props {
  categories: string[];
}

const Categories: React.FC<Props> = ({ categories }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    if (!categories) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);
  const [jokeCategory, setJokeCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [showJoke, setShowJoke] = useState(false);

  const categoryClickHandler = (e: any) => {
    setJokeCategory(e.target.innerHTML);
    console.log(jokeCategory);
    dispatch(getChosenCategory(jokeCategory));
    dispatch(getRandomJoke(jokeCategory));
    setShowJoke(true);
  };

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Joke Categories:</h2>
        <p>Select a category for a random joke</p>
        <div className={categoryStyles.categoriesContainer}>
          {categories.map((cat, index) => {
            return (
              <div key={index} className={categoryStyles.categoryItem}>
                <Link
                  to={{
                    pathname: "/randomJoke",
                    state: {
                      chosenCategory: jokeCategory,
                    },
                  }}
                >
                  <button onClick={categoryClickHandler}>{cat}</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Categories;
