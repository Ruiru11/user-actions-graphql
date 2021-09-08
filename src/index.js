import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloClient from 'apollo-boost';
import { ApolloProvider, InMemoryCache } from "@apollo/react-hooks";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "https://graphql-user-api.herokuapp.com/graphql",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);

reportWebVitals();
