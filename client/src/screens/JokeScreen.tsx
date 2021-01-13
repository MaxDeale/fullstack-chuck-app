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

interface Joke {
  id: string;
  value: string;
}

const JokeScreen: React.FC<Props> = ({ category }) => {
  // const dispatch = useDispatch();

  const [currentRandomJoke, setCurrentRandomJoke] = useState("");

  const getRandomJokeFromAPI = async () => {
    const res = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );

    const retrievedJoke = res.data;
    setCurrentRandomJoke(retrievedJoke);
  };

  useEffect(() => {
    // dispatch(getRandomJoke(category));
    getRandomJokeFromAPI();
  });

  return (
    <div className={jokeScreenStyle.jokescreenMain}>
      <img src={approved} alt="" />
      <h2>{currentRandomJoke}</h2>
      <div>
        <Link to="/">
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default JokeScreen;
