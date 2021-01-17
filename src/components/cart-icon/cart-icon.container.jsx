import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

import CartIcon from "./cart-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => {
  const {
    data: { itemCount },
  } = useQuery(GET_ITEM_COUNT);
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  return <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />;
};

export default CartIconContainer;
