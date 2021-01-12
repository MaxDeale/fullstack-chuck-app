import { GET_RANDOM_JOKE, GET_ALL_CATEGORIES } from "./types";
import { request, gql } from "graphql-request";

const randomJokeQuery = gql`
  {
    randomJokeByCategory(category: "animal") {
      id
      value
    }
  }
`;
export const getRandomJoke = () => (dispatch: any) => {
  request("https://localhost:5000/graphql", randomJokeQuery)
    .then((joke) => console.log(joke))
    .then((joke) =>
      dispatch({
        type: GET_RANDOM_JOKE,
        payload: joke,
      })
    );
};
