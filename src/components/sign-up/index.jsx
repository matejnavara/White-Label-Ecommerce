import React, { Component } from "react";

import FormInput from "../form-input";
import Button from "../custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { SignUpContainer, SignUpTitle } from "./styles";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState(initialState);
    } catch (error) {
      console.log("SignUp ~ error: ", error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
