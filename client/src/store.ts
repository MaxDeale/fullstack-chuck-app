import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { jokeReducer, getAllCategoriesReducer } from "./reducers/jokeReducer";

const initialState = {};

const reducer = combineReducers({
  randomJoke: jokeReducer,
  allCategories: getAllCategoriesReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
