import React from "react";

interface Props {
  joke: {
    id: string;
    value: string;
  };
}

const JokeScreen: React.FC<Props> = ({ joke: { id, value } }) => {
  return (
    <div>
      <h2>{value}</h2>
    </div>
  );
};

export default JokeScreen;
