import { takeLatest, put, all, call } from "redux-saga/effects";

import { UserActionTypes } from "../actionTypes";

import {
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
  signupSuccess,
  signupFailure,
} from "../actions/user";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

function* getUserSnapshotAndSignin(user, ...otherProps) {
  try {
    const userRef = yield call(createUserProfileDocument, user, {
      ...otherProps,
    });
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const authUser = yield getCurrentUser;
    if (!authUser) return;
    yield getUserSnapshotAndSignin(authUser);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* signin(signinFunction) {
  try {
    const { user } = yield signinFunction;
    yield getUserSnapshotAndSignin(user);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* signinWithGoogle() {
  yield signin(auth.signInWithPopup(googleProvider));
}

function* signinWithEmail({ payload: { email, password } }) {
  yield signin(auth.signInWithEmailAndPassword(email, password));
}

function* signout() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFailure(error));
  }
}

function* signup({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signupSuccess({ user, displayName }));
  } catch (error) {
    yield put(signupFailure(error));
  }
}

function* signinAfterSignup({ payload: { user, displayName } }) {
  try {
    yield getUserSnapshotAndSignin(user, displayName);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

// EVENTS

function* onUserCheck() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onGoogleSignInRequest() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_REQUEST, signinWithGoogle);
}

function* onEmailSigninRequest() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_REQUEST, signinWithEmail);
}

function* onSignoutRequest() {
  yield takeLatest(UserActionTypes.SIGNOUT_REQUEST, signout);
}

function* onSignupRequest() {
  yield takeLatest(UserActionTypes.SIGNUP_REQUEST, signup);
}

function* onSignupSuccess() {
  yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signinAfterSignup);
}

export function* userSagas() {
  yield all([
    call(onUserCheck),
    call(onGoogleSignInRequest),
    call(onEmailSigninRequest),
    call(onSignoutRequest),
    call(onSignupRequest),
    call(onSignupSuccess),
  ]);
}
