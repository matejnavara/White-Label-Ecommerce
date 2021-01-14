import { all, call } from "redux-saga/effects";

import { userSagas } from "./user";
import { shopSagas } from "./shop";
import { cartSagas } from "./cart";

export default function* rootSaga() {
  yield all([call(userSagas), call(shopSagas), call(cartSagas)]);
}
