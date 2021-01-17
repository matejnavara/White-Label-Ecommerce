import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

import App from "./App";

const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const AppContainer = () => {
  const { data } = useQuery(GET_CURRENT_USER);

  const [setCurrentUser] = useMutation(SET_CURRENT_USER);
  return (
    <App
      currentUser={data.currentUser}
      setCurrentUser={(user) => {
        setCurrentUser({ variables: { user } });
      }}
    />
  );
};

export default AppContainer;
