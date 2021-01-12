import React from "react";
import approved from "../approved.jpg";
import { Link } from "react-router-dom";
import jokeScreenStyle from "./jokeScreenStyle.module.css";

interface Props {
  joke: {
    id: string;
    value: string;
  };
}

const JokeScreen: React.FC<Props> = ({ joke: { id, value } }) => {
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
