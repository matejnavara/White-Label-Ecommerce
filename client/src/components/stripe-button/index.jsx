import React from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I7HQCBeUWAxItOP3Vz3G1H5Pu82DLPzufLxy3tS7bULueGPS1O6phVIBz5VlMlldjbfMBGQbT7bAx1o329l2BFy00x7vviP4a";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        token,
        amount: priceForStripe,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("🚀 ~ file: index.jsx ~ line 21 ~ onToken ~ error", error);
        alert("There was an issue with your payment");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="White Label eCommerce"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

StripeButton.propTypes = {
  price: PropTypes.number.isRequired,
};

export default StripeButton;
