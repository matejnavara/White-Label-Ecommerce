import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCartVisible } from '../../redux/actions/cart';
import { selectCartItemsCount } from '../../redux/selectors/cart';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ itemCount, toggleCartVisible }) => (
  <div className='cart-icon' onClick={toggleCartVisible}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => ({
  toggleCartVisible: () => dispatch(setCartVisible()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
