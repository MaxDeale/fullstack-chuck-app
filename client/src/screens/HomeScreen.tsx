import React, { useState } from "react";
import chuck1 from "../chuck1.jpg";
import Categories from "../components/Categories";
import { gql } from "@apollo/client";
import { client } from "../apollo/client";

const HomeScreen: React.FC = () => {
  const [category, setCategory] = useState("");

  const categories: string[] = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];
  return (
    <div>
      <h1>Chuck Norris Joke Machine</h1>
      <img src={chuck1} alt="chuck pic" />
      <Categories categories={categories} />
    </div>
  );
};

export default HomeScreen;
