import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { flowRight as compose } from "lodash";

import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartIconContainer = ({ toggleCartHidden }) => (
  <CartIcon toggleCartHidden={toggleCartHidden} />
);

export default compose(
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
