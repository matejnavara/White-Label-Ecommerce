import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input";
import Button from "../custom-button";
import {
  googleSigninRequest,
  emailSigninRequest,
} from "../../redux/actions/user";

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
    const { emailSigninRequest } = this.props;
    const { email, password } = this.state;

    emailSigninRequest(email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSigninRequest } = this.props;
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
            <Button type="button" onClick={googleSigninRequest} isGoogleSignIn>
              Sign In with Google
            </Button>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSigninRequest: () => dispatch(googleSigninRequest()),
  emailSigninRequest: (email, password) =>
    dispatch(emailSigninRequest({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
