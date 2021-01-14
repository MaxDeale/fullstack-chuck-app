import React, { useEffect, useState } from "react";
import approved from "../approved.jpg";
import { Link } from "react-router-dom";
import jokeScreenStyle from "./jokeScreenStyle.module.css";
// import { useDispatch } from "react-redux";
// import { getRandomJoke } from "../actions/jokeActions";
import Loader from "../components/Loader";
import axios from "axios";
import { isJSDocPublicTag } from "typescript";

interface Props {
  category: string;
}

const JokeScreen: React.FC<Props> = ({ category }) => {
  // const dispatch = useDispatch();

  const [currentRandomJoke, setCurrentRandomJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("movie");

  //random joke request using category (axios)
  const getRandomJokeFromAPI = async (cur: string) => {
    const query = `https://api.chucknorris.io/jokes/random?category=${cur}`;
    console.log(query);
    const res = await axios.get(query);
    // console.log(res.data);
    const retrievedJoke = res.data.value;
    setCurrentRandomJoke(retrievedJoke);
  };

  useEffect(() => {
    //dispatching action to reducer to get current joke from graphql backend
    // dispatch(getRandomJoke(currentCategory));
    let current = localStorage.getItem("current-category");
    let newCur = JSON.stringify(current);
    setCurrentCategory(newCur);
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
        <h3>
          Category: <span style={{ color: "white" }}> {currentCategory}</span>
        </h3>
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
