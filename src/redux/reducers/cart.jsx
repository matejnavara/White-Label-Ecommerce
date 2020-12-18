import { CartActionTypes } from '../actionTypes'

const INITIAL_STATE = {
  cartVisible: false,
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_VISIBLE: 
      return {
        ...state,
        cartVisible: !state.cartVisible,
      };
    default: return state;
  }
}

export default cartReducer;