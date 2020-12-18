import React from 'react';
import { connect } from 'react-redux';

import { setCartVisible } from '../../redux/actions/cart';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartVisible }) => (
  <div className='cart-icon' onClick={toggleCartVisible}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartVisible: () => dispatch(setCartVisible()),
})

export default connect(null, mapDispatchToProps)(CartIcon);
