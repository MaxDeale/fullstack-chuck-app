import {
  GET_RANDOM_JOKE,
  GET_ALL_CATEGORIES,
  GET_CHOSEN_CATEGORY,
} from "./types";
import { request, gql } from "graphql-request";
import axios from "axios";

//actions for retrieving random joke and all categories

//random joke action takes in category as argument, calls apollo request to graphql backend
export const getRandomJoke = (category: string) => async (dispatch: any) => {
  //random joke graphql query
  const randomJokeQuery = gql`
    {
      randomJokeByCategory(category: getRandomJoke.category) {
        id
        value
      }
    }
  `;

  // using graphql request package to make request
  // request("https://localhost:5000/graphql", randomJokeQuery, category)
  axios
    .get("https://localhost:5000/graphql")
    .then((joke) => console.log(joke))
    .then((jokeData) => {
      try {
        console.log(jokeData);
        dispatch({
          type: GET_RANDOM_JOKE,
          payload: {
            jokeData,
          },
        });
      } catch (error) {
        console.log(error);
      }
    });
};

//retreive a chosen category by the user
export const getChosenCategory = (category: string) => (dispatch: any) => {
  try {
    dispatch({
      type: GET_CHOSEN_CATEGORY,
      payload: category,
    });
  } catch (error) {
    console.log(error);
  }
};

//retrieve all categories action calls apollo query to request categories from backend

//the action will save the categories as an array of strings in the actions payload

export const getAllCategories = () => (dispatch: any) => {
  //get all categories graphql query
  const getCategoriesQuery = gql`
    {
      getCategories {
        category
      }
    }
  `;
  //using graphql request package for request to backend
  request("https://localhost:5000/graphql", getCategoriesQuery)
    .then((categories) => console.log(categories))
    .then((categoriesData) => {
      try {
        dispatch({
          type: GET_ALL_CATEGORIES,
          payload: {
            categories: [categoriesData],
          },
        });
      } catch (error) {
        console.log(error);
      }
    });
};
