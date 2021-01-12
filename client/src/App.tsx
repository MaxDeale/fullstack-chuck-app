import React from "react";
import HomeScreen from "./screens/HomeScreen";
import JokeScreen from "./screens/JokeScreen";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  let joke = {
    id: "lksdfjgnsdfg",
    value: "chuck is a floopy boy",
  };
  return (
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
  );
};

export default App;
