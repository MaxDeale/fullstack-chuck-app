import {
  GET_RANDOM_JOKE,
  GET_ALL_CATEGORIES,
  GET_RANDOM_JOKE_FAIL,
} from "../actions/types";

//i have 2 reducers, one for the action of retreiving a random joke, and one for retrieving all joke categories

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
