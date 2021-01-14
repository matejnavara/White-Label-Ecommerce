import { all, call, takeLatest, put } from "redux-saga/effects";

import { UserActionTypes } from "../actionTypes";
import { clearCart } from "../actions/cart";

function* clearCartOnSignout() {
  yield put(clearCart());
}

function* onSignoutSuccess() {
  yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
