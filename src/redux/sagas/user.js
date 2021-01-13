import { takeLatest, put, all, call } from "redux-saga/effects";

import { UserActionTypes } from "../actionTypes";

import { signinSuccess, signinFailure } from "../actions/user";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

function* signin(signinFunction) {
  try {
    const { user } = yield signinFunction;
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
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

function* onGoogleSignInRequest() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_REQUEST, signinWithGoogle);
}

function* onEmailSigninRequest() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_REQUEST, signinWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInRequest), call(onEmailSigninRequest)]);
}
