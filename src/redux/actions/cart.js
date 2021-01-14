import { CartActionTypes } from "../actionTypes";

export const toggleCartVisible = () => ({
  type: CartActionTypes.TOGGLE_CART_VISIBLE,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
