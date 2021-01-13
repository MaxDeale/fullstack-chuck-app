import React, { useState, useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import JokeScreen from "./screens/JokeScreen";
import { ApolloProvider } from "@apollo/client";
import { getChosenCategory } from "./actions/jokeActions";
import { client } from "./apollo/client";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import store from "./store";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState({
    id: "",
    value: "",
  });
  //setting a default joke
  const setInitialJoke = async () => {
    const res = await axios.get("https://api.chucknorris.io/jokes/random");
    let jokeId = res.data.id;
    let jokeValue = res.data.value;
    let initialJoke = {
      id: jokeId,
      value: jokeValue,
    };

    console.log(initialJoke);
    setJoke(initialJoke);
    console.log(joke);
  };

  useEffect(() => {
    setInitialJoke();
  }, []);
  //CHANGE THIS TO VALUE FROM BUTTON

  let category = "dev";
  return (
    //redux store provider wraps whole app, followed by apollo front end request provider
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Route exact path="/" component={HomeScreen} />
            <Route
              path="/randomjoke"
              component={JokeScreen}
              render={(props) => <JokeScreen {...props} category={category} />}
            />
          </div>
        </Router>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
