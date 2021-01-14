export const UserActionTypes = {
  CHECK_USER_SESSION: "CHECK_USER_SESSION",
  GOOGLE_SIGNIN_REQUEST: "GOOGLE_SIGNIN_REQUEST",
  EMAIL_SIGNIN_REQUEST: "EMAIL_SIGNIN_REQUEST",
  SIGNIN_SUCCESS: "SIGNIN_SUCCESS",
  SIGNIN_FAILURE: "SIGNIN_FAILURE",
  SIGNOUT_REQUEST: "SIGNOUT_REQUEST",
  SIGNOUT_SUCCESS: "SIGNOUT_SUCCESS",
  SIGNOUT_FAILURE: "SIGNOUT_FAILURE",
  SIGNUP_REQUEST: "SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_FAILURE: "SIGNUP_FAILURE",
};

export const CartActionTypes = {
  TOGGLE_CART_VISIBLE: "TOGGLE_CART_VISIBLE",
  ADD_CART_ITEM: "ADD_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  CLEAR_CART_ITEM: "CLEAR_CART_ITEM",
  CLEAR_CART: "CLEAR_CART",
};

export const ShopActionTypes = {
  FETCH_COLLECTIONS_REQUEST: "FETCH_COLLECTIONS_REQUEST",
  FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE",
};
