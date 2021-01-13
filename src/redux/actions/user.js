import { UserActionTypes } from "../actionTypes";

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

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
