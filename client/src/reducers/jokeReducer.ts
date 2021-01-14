import {
  GET_RANDOM_JOKE,
  GET_ALL_CATEGORIES,
  GET_CHOSEN_CATEGORY,
  GET_RANDOM_JOKE_FAIL,
} from "../actions/types";
// import { Joke } from "../types/Joke";
// import { Categories } from "../types/Categories";

//i have 2 reducers: one for the action of retreiving a random joke and a chosen category
// and one for retrieving all joke categories

export const jokeReducer = (
  state = { randomJoke: { id: "", value: "" } },
  action: any
) => {
  switch (action.type) {
    default:
      return state;
    case GET_RANDOM_JOKE:
      return {
        ...state,
        randomJoke: action.payload,
        loading: false,
      };

    case GET_RANDOM_JOKE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_CHOSEN_CATEGORY:
      return {
        ...state,
        chosenCategory: action.payload,
      };
  }
};

//the categories reducer will take the request from the action, and save the array of category strings to state
export const getAllCategoriesReducer = (
  state = {
    categories: [],
  },
  action: any
) => {
  switch (action.type) {
    default:
      return state;
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
  }
};
