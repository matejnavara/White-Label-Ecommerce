import React from "react";
import PropTypes from "prop-types";

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

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default React.memo(CartItem);
