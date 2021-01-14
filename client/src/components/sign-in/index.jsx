import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input";
import Button from "../custom-button";
import {
  googleSigninRequest,
  emailSigninRequest,
} from "../../redux/actions/user";

import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./styles";

const SignIn = ({ emailSigninRequest, googleSigninRequest }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSigninRequest(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
        />

        <ButtonsBarContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={googleSigninRequest} isGoogleSignIn>
            Sign In with Google
          </Button>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSigninRequest: () => dispatch(googleSigninRequest()),
  emailSigninRequest: (email, password) =>
    dispatch(emailSigninRequest({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
