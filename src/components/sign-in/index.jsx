import React, { Component } from "react";

import FormInput from "../form-input";
import Button from "../custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./styles";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("SignIn ~ error", error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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

          <ButtonsBarContainer>
            <Button type="submit">Sign In</Button>
            <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </Button>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
