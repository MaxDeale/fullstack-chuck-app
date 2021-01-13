import React, { useState, useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import JokeScreen from "./screens/JokeScreen";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState({
    id: "dskfjnaasdlfkn",
    value: "chuck has 16 nipples",
  });

  useEffect(() => {}, []);
  return (
    //redux store provider wraps whole app, followed by apollo front end request provider
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/randomjoke">
              <JokeScreen joke={joke} />
            </Route>
          </div>
        </Router>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
