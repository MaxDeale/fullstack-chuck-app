import React, { useState, useEffect } from "react";
import chuck1 from "../chuck1.jpg";
import axios from "axios";
import Categories from "../components/Categories";

const HomeScreen: React.FC = () => {
  const [categoriesFromAPI, setCategoriesFromAPI] = useState([]);

  const getCategoriesFromAPI = async () => {
    const res = await axios.get("https://api.chucknorris.io/jokes/categories");

    console.log(res);
    setCategoriesFromAPI(res.data);
  };

  useEffect(() => {
    getCategoriesFromAPI();
  }, []);

  return (
    <div>
      <h1>Chuck Norris Joke Machine</h1>
      <img src={chuck1} alt="chuck pic" />
      <Categories categories={categoriesFromAPI} />
    </div>
  );
};

export default HomeScreen;
