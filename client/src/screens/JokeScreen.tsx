import React, { useEffect, useState } from "react";
import approved from "../approved.jpg";
import { Link } from "react-router-dom";
import jokeScreenStyle from "./jokeScreenStyle.module.css";
import { useDispatch } from "react-redux";
import { getRandomJoke } from "../actions/jokeActions";
import Loader from "../components/Loader";
import axios from "axios";

interface Props {
  category: string;
}

const JokeScreen: React.FC<Props> = ({ category }) => {
  const dispatch = useDispatch();

  const [currentRandomJoke, setCurrentRandomJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("food");

  //random joke request using category (axios)
  const getRandomJokeFromAPI = async (cur: string) => {
    let current = localStorage.getItem("current-category");
    current = JSON.stringify(current);
    console.log(current);
    setCurrentCategory(current);
    const res = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${cur}`
    );
    console.log(res.data);
    const retrievedJoke = res.data.value;
    setCurrentRandomJoke(retrievedJoke);
  };

  useEffect(() => {
    //dispatching action to reducer to get current joke from graphql backend
    // dispatch(getRandomJoke(currentCategory));

    console.log(currentCategory);
    getRandomJokeFromAPI(currentCategory);
    setLoading(false);
  }, [currentCategory]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className={jokeScreenStyle.jokescreenMain}>
        <img src={approved} alt="" />
        <h2>{currentRandomJoke}</h2>
        <div>
          <Link to="/">
            <button className={jokeScreenStyle.backButton}>Back Home</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default JokeScreen;
