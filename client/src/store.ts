import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { jokeReducer, getAllCategoriesReducer } from "./reducers/jokeReducer";

//initial state in store is empty as all values are passed in appropriately through actions/reducers
const initialState = {};

//combining joke reducer and categories reducer into one
const reducer = combineReducers({
  randomJoke: jokeReducer,
  allCategories: getAllCategoriesReducer,
});

//using thunk middleware for calling async dispatch
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
