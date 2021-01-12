import { GET_RANDOM_JOKE, GET_ALL_CATEGORIES } from "../actions/types";

const initialState = {
  categories: [
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
  ],
  randomJoke: "Chuck lol",
};

export const jokeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
    case GET_RANDOM_JOKE:
      return {
        ...state,
      };
  }
};
