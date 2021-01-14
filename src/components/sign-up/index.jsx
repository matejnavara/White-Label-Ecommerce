import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input";
import Button from "../custom-button";
import { signupRequest } from "../../redux/actions/user";

import { SignUpContainer, SignUpTitle } from "./styles";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ signup }) => {
  const [userCredentials, setUserCredentials] = useState(initialState);

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    signup(displayName, email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signup: (displayName, email, password) =>
    dispatch(signupRequest({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
