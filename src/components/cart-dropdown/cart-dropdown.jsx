import React from 'react';
import { connect } from 'react-redux';

import Button from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem item={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = ({ cart: {cartItems } }) => ({
  cartItems,
})

export default connect(mapStateToProps)(CartDropdown);
