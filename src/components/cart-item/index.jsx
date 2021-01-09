import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
} from "./styles";

const CartItem = ({ item: { name, price, quantity, imageUrl } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity}x {price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
