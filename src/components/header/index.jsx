import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/selectors/user";
import { selectCartVisible } from "../../redux/selectors/cart";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon";
import CartDropdown from "../cart-dropdown";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";

const Header = ({ currentUser, cartVisible }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" title="home" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/login">LOGIN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartVisible ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartVisible: selectCartVisible,
});

export default connect(mapStateToProps)(Header);
