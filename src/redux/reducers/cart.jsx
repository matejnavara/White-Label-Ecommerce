import { CartActionTypes } from '../actionTypes'

const INITIAL_STATE = {
  cartVisible: false,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_VISIBLE: 
      return {
        ...state,
        cartVisible: !state.cartVisible,
      };

    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default: return state;
  }
}

export default cartReducer;