import { CartActionTypes } from "../actionTypes";
import { mockCartItem } from "../../constants/mockObjects";

import cartReducer from "./cart";

describe("cartReducer", () => {
  const initialState = {
    cartVisible: false,
    cartItems: [],
  };

  const mockCartItemx2 = { ...mockCartItem, quantity: 2 };

  it("should return the initial state", () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle cart visible toggle", () => {
    expect(
      cartReducer(initialState, { type: CartActionTypes.TOGGLE_CART_VISIBLE })
    ).toEqual({ ...initialState, cartVisible: true });
  });

  it("should handle add to cart", () => {
    expect(
      cartReducer(initialState, {
        type: CartActionTypes.ADD_CART_ITEM,
        payload: mockCartItem,
      })
    ).toEqual({ ...initialState, cartItems: [mockCartItem] });
  });

  it("should handle remove from cart", () => {
    expect(
      cartReducer(
        { ...initialState, cartItems: [mockCartItemx2] },
        {
          type: CartActionTypes.REMOVE_CART_ITEM,
          payload: mockCartItemx2,
        }
      )
    ).toEqual({ ...initialState, cartItems: [mockCartItem] });
  });

  it("should handle clear from cart", () => {
    expect(
      cartReducer(
        { ...initialState, cartItems: [mockCartItemx2] },
        {
          type: CartActionTypes.CLEAR_CART_ITEM,
          payload: mockCartItemx2,
        }
      )
    ).toEqual({ ...initialState, cartItems: [] });
  });

  it("should handle clear cart", () => {
    const fullCart = [
      { id: 1, ...mockCartItem },
      { id: 2, ...mockCartItem },
      { id: 3, ...mockCartItemx2 },
    ];
    expect(
      cartReducer(
        { ...initialState, cartItems: fullCart },
        {
          type: CartActionTypes.CLEAR_CART,
        }
      )
    ).toEqual({ ...initialState, cartItems: [] });
  });
});
