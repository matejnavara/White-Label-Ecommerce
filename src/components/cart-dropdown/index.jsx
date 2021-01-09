import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { toggleCartVisible } from "../../redux/actions/cart";
import { selectCartItems } from "../../redux/selectors/cart";
import CartItem from "../cart-item";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const goToCart = () => {
    history.push("/checkout");
    dispatch(toggleCartVisible());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem item={item} />)
        ) : (
          <EmptyMessageContainer>No Items in cart</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={goToCart}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
