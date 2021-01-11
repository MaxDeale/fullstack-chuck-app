import React from "react";

interface Props {
  joke: {
    id: string;
    value: string;
  };
}

const JokeScreen: React.FC<Props> = ({ joke }) => {
  return <div></div>;
};

export default JokeScreen;
