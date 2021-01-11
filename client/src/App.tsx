import React from "react";
import { render } from "react-dom";
import HomeScreen from "./screens/HomeScreen";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import "./App.css";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HomeScreen />
      </div>
    </ApolloProvider>
  );
};

export default App;
