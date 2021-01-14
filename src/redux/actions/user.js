import { UserActionTypes } from "../actionTypes";

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

// SIGNIN ACTIONS
export const googleSigninRequest = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_REQUEST,
});

export const emailSigninRequest = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGNIN_REQUEST,
  payload: emailAndPassword,
});

export const signinSuccess = (user) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signinFailure = (error) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error,
});

// SIGNOUT ACTIONS
export const signoutRequest = () => ({
  type: UserActionTypes.SIGNOUT_REQUEST,
});

export const signoutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS,
});

export const signoutFailure = (error) => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: error,
});

// SIGNUP ACTIONS
export const signupRequest = (signupInfo) => ({
  type: UserActionTypes.SIGNUP_REQUEST,
  payload: signupInfo,
});

export const signupSuccess = (user) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error,
});
