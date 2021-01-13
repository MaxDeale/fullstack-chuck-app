import React, { useState, useEffect } from "react";
import chuck1 from "../chuck1.jpg";
import axios from "axios";
import Categories from "../components/Categories";
import homeScreenStyles from "./homescreen.module.css";

const HomeScreen: React.FC = () => {
  const [categoriesFromAPI, setCategoriesFromAPI] = useState([]);
  let [joke, setJoke] = useState("");
  //setting a default joke
  const setInitialJoke = async () => {
    const res = await axios.get("https://api.chucknorris.io/jokes/random");
    let jokeId = res.data.id;
    let jokeValue = res.data.value;
    let initialJoke = {
      id: jokeId,
      value: jokeValue,
    };
    console.log(initialJoke);
    setJoke(jokeValue);
  };

  const getCategoriesFromAPI = async () => {
    const res = await axios.get("https://api.chucknorris.io/jokes/categories");
    setCategoriesFromAPI(res.data);
  };

  useEffect(() => {
    getCategoriesFromAPI();
    setInitialJoke();
  }, []);

  return (
    <div className={homeScreenStyles.homescreenContainer}>
      <h1>Chuck Norris Joke Machine</h1>
      <img src={chuck1} alt="chuck pic" />
      <h5>{joke}</h5>
      <Categories categories={categoriesFromAPI} />
    </div>
  );
};

export default HomeScreen;
