import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addItem, removeItem, clearItem } from "../../redux/actions/cart";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItem(item)),
});

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
