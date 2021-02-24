import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import { signoutRequest } from "../../redux/actions/user";
import { selectCurrentUser } from "../../redux/selectors/user";
import { selectCartVisible } from "../../redux/selectors/cart";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon";
import CartDropdown from "../cart-dropdown";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";

const Header = ({ currentUser, cartVisible, signout }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" title="home" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signout}>
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

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signoutRequest()),
});

Header.propTypes = {
  currentUser: PropTypes.object.isRequired,
  cartVisible: PropTypes.bool.isRequired,
  signout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
