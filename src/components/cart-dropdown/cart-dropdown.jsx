import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { toggleCartVisible } from '../../redux/actions/cart';
import { selectCartItems } from '../../redux/selectors/cart';
import Button from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const goToCart = () => {
    history.push('/checkout');
    dispatch(toggleCartVisible());
  }

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length > 0 ? cartItems.map(item => (
          <CartItem item={item} />
        )) : (
          <span className='empty-message'>
            No Items in cart
          </span>
        )}
      </div>
      <Button onClick={goToCart}>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
