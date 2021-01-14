import React, { Component } from "react";
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

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signup } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    signup(displayName, email, password);
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

const mapDispatchToProps = (dispatch) => ({
  signup: (displayName, email, password) =>
    dispatch(signupRequest({ displayName, email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
