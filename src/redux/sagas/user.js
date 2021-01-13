import { takeLatest, put, all, call } from "redux-saga/effects";

import { UserActionTypes } from "../actionTypes";

import {
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
} from "../actions/user";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

function* getSnapshotFromUser(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
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
    yield getSnapshotFromUser(authUser);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* signin(signinFunction) {
  try {
    const { user } = yield signinFunction;
    yield getSnapshotFromUser(user);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

function* signout() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFailure(error));
  }
}

function* signinWithGoogle() {
  yield signin(auth.signInWithPopup(googleProvider));
}

function* signinWithEmail({ payload: { email, password } }) {
  yield signin(auth.signInWithEmailAndPassword(email, password));
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

export function* userSagas() {
  yield all([
    call(onUserCheck),
    call(onGoogleSignInRequest),
    call(onEmailSigninRequest),
    call(onSignoutRequest),
  ]);
}
