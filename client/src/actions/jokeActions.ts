import { GET_RANDOM_JOKE, GET_ALL_CATEGORIES } from "./types";
import { request, gql, GraphQLClient } from "graphql-request";

export const getRandomJoke = (category: string) => (dispatch: any) => {
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
    .then((joke) =>
      dispatch({
        type: GET_RANDOM_JOKE,
        payload: joke,
      })
    );
};

export const getAllCategories = () => (dispatch: any) => {};
