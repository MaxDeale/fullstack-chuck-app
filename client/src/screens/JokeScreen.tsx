import React, { useEffect } from "react";
import approved from "../approved.jpg";
import { Link } from "react-router-dom";
import jokeScreenStyle from "./jokeScreenStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJoke } from "../actions/jokeActions";
import Loader from "../components/Loader";

interface Props {
  joke: {
    id: string;
    value: string;
  };
}

const JokeScreen: React.FC<Props> = ({ joke: { id, value } }) => {
  const dispatch = useDispatch();

  // const productTopRated = useSelector((state) => state.productTopRated);
  // const { loading, error, products } = productTopRated;

  let category = "food";
  useEffect(() => {
    dispatch(getRandomJoke(category));
  });

  return (
    <div className={jokeScreenStyle.jokescreenMain}>
      <img src={approved} alt="" />
      <h2>{value}</h2>
      <div>
        <Link to="/">
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default JokeScreen;
