import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown'

import './header.styles.scss';

const Header = ({ currentUser, cartVisible }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" title="home" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        { currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/login">
              LOGIN
            </Link>
        )}
        <CartIcon />
      </div>
      {cartVisible ? <CartDropdown /> : null}
      
    </div>
  )
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartVisible: state.cart.cartVisible,
})

export default connect(mapStateToProps)(Header);
