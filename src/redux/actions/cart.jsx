import { CartActionTypes } from '../actionTypes';

export const setCartVisible = () => ({
  type: CartActionTypes.TOGGLE_CART_VISIBLE,
});

export const addItem = item => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
})
