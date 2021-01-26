import * as cartUtils from "./cart";

const mockCartItem = { id: 13, name: "fake item" };

describe("addItemToCart", () => {
  it("is adding item to cart", () => {
    const cart = [];
    const newCart = cartUtils.addItemToCart(cart, mockCartItem);
    expect(newCart).toContainEqual({ ...mockCartItem, quantity: 1 });
  });

  it("is incrementing existing item in cart", () => {
    const cart = [{ ...mockCartItem, quantity: 1 }];
    const newCart = cartUtils.addItemToCart(cart, mockCartItem);
    expect(newCart).toContainEqual({ ...mockCartItem, quantity: 2 });
  });
});

describe("removeItemFromCart", () => {
  it("is removing item from cart", () => {
    const cart = [{ ...mockCartItem, quantity: 1 }];
    const newCart = cartUtils.removeItemFromCart(cart, mockCartItem);
    expect(newCart).toEqual([]);
  });

  it("is decrementing existing item in cart", () => {
    const mockExistingItem = { ...mockCartItem, quantity: 2 };
    const cart = [mockExistingItem];
    const newCart = cartUtils.removeItemFromCart(cart, mockExistingItem);
    expect(newCart).toContainEqual({ ...mockCartItem, quantity: 1 });
  });
});

describe("clearItemFromCart", () => {
  it("is clearing item from cart", () => {
    const cart = [{ ...mockCartItem, quantity: 3 }];
    const newCart = cartUtils.clearItemFromCart(cart, mockCartItem);
    expect(newCart).toEqual([]);
  });
});
