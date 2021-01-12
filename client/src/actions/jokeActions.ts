import { GET_RANDOM_JOKE, GET_ALL_CATEGORIES } from "./types";
import { request, gql } from "graphql-request";

export const getRandomJoke = (category: string) => async (dispatch: any) => {
  const randomJokeQuery = gql`
    {
      randomJokeByCategory(category: getRandomJoke.category) {
        id
        value
      }
    }
  `;
  request("https://localhost:5000/graphql", randomJokeQuery, category)
    .then((joke) => console.log(joke))
    .then((jokeData) => {
      try {
        dispatch({
          type: GET_RANDOM_JOKE,
          loading: false,
          payload: jokeData,
        });
      } catch (error) {
        console.log(error);
      }
    });
};

export const getAllCategories = () => (dispatch: any) => {
  const getCategoriesQuery = gql`
  {
    getCategories() {
      category
    }
  }
`;
  request("https://localhost:5000/graphql", getCategoriesQuery)
    .then((categories) => console.log(categories))
    .then((categoriesData) => {
      try {
        dispatch({
          type: GET_ALL_CATEGORIES,
          loading: false,
          payload: categoriesData,
        });
      } catch (error) {
        console.log(error);
      }
    });
};
