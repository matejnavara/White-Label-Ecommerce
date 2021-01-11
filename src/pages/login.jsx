import React from "react";
import styled from "styled-components";

import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";

const LoginContainer = styled.div`
  max-width: 1600px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  margin: 30px auto;
`;

const Login = () => {
  return (
    <LoginContainer>
      <SignIn />
      <SignUp />
    </LoginContainer>
  );
};

export default Login;
