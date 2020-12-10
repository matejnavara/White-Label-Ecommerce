import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ user }) => {
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
        { user ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/login">
              LOGIN
            </Link>
        )}
      </div>
    </div>
  )
};

export default Header;