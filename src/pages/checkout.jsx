import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import { selectCartItems, selectCartTotal } from "../redux/selectors/cart";
import CheckoutItem from "../components/checkout-item";
import StripeButton from "../components/stripe-button";

const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const Warning = styled.div`
  text-align: center;
  margin: 40px 0;
  font-size: 24px;
  color: red;
`;

const CheckoutPage = ({ cartItems, cartTotal }) => {
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Total>
        <span>TOTAL: ${cartTotal}</span>
      </Total>
      <Warning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 -- Exp: 01/30 -- CVV: 123
      </Warning>
      <StripeButton price={cartTotal} />
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
