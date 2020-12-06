import React, { Component } from 'react'

import FormInput from '../form-input/form-input'
import Button from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    const { email, password} = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="">
          <FormInput label="Email" type="email" name="email" value={email} handleChange={this.handleChange} required />
          <FormInput label="Password" type="password" name="password" value={password} handleChange={this.handleChange} required />

          <div className="buttons">
            <Button type="submit" value="Submit form" onSubmit={this.handleSubmit}>
              Sign In
            </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
