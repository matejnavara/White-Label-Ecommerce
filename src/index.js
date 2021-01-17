import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { store, persistor } from "./redux/store";

import "./index.css";
import { default as App } from "./App/App.container";
import { resolvers, typeDefs } from "./graphql/resolvers";
import { default as data } from "./graphql/initial-data";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://crwn-clothing.com",
  cache,
  typeDefs,
});

// client.writeQuery({
//   data: {
//     cartHidden: true,
//     cartItems: [],
//     itemCount: 0,
//     cartTotal: 0,
//     currentUser: null,
//   },
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
