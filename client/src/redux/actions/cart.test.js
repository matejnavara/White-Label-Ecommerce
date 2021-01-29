import { CartActionTypes } from "../actionTypes";
import { mockCartItem } from "../../constants/mockObjects";

import {
  toggleCartVisible,
  addItem,
  removeItem,
  clearItem,
  clearCart,
} from "./cart";

describe("cartActions", () => {
  it("should create an action to toggle cart visible", () => {
    const expectedAction = {
      type: CartActionTypes.TOGGLE_CART_VISIBLE,
    };

    expect(toggleCartVisible()).toEqual(expectedAction);
  });

  it("should create an action to add item to cart", () => {
    const expectedAction = {
      type: CartActionTypes.ADD_CART_ITEM,
      payload: mockCartItem,
    };

    expect(addItem(mockCartItem)).toEqual(expectedAction);
  });

  it("should create an action to remove item from cart", () => {
    const expectedAction = {
      type: CartActionTypes.REMOVE_CART_ITEM,
      payload: mockCartItem,
    };

    expect(removeItem(mockCartItem)).toEqual(expectedAction);
  });

  it("should create an action to clear item from cart", () => {
    const expectedAction = {
      type: CartActionTypes.CLEAR_CART_ITEM,
      payload: mockCartItem,
    };

    expect(clearItem(mockCartItem)).toEqual(expectedAction);
  });

  it("should create an action to clear cart", () => {
    const expectedAction = {
      type: CartActionTypes.CLEAR_CART,
    };

    expect(clearCart()).toEqual(expectedAction);
  });
});
