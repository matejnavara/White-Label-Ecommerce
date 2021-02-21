import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartVisible } from "../../redux/actions/cart";
import { selectCartItemsCount } from "../../redux/selectors/cart";

import { CartContainer, ShoppingIcon, ItemCountContainer } from "./styles";

const CartIcon = ({ itemCount, toggleCartVisible }) => (
  <CartContainer onClick={toggleCartVisible}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisible: () => dispatch(toggleCartVisible()),
});

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
  toggleCartVisible: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
