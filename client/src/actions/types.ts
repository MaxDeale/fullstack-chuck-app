import { Joke } from "../types/Joke";
import { Categories } from "../types/Categories";

export const GET_RANDOM_JOKE = "GET_RANDOM_JOKE";
export const GET_RANDOM_JOKE_FAIL = "GET_RANDOM_JOKE_FAIL";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_CHOSEN_CATEGORY = "GET_CHOSEN_CATEGORY";

export interface GetRandomJokeAction {
  type: typeof GET_RANDOM_JOKE;
  randomJoke: Joke;
}

export interface GetAllCategoriesAction {
  type: typeof GET_ALL_CATEGORIES;
  categories: Categories;
}

export interface GetChosenCategoryAction {
  type: typeof GET_CHOSEN_CATEGORY;
}

export type JokeActionTypes =
  | GetRandomJokeAction
  | GetAllCategoriesAction
  | GetChosenCategoryAction;

export type AppActions = JokeActionTypes;
