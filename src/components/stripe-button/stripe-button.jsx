import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I7HQCBeUWAxItOP3Vz3G1H5Pu82DLPzufLxy3tS7bULueGPS1O6phVIBz5VlMlldjbfMBGQbT7bAx1o329l2BFy00x7vviP4a';

  const onToken = token => {
    if (process.env.NODE_ENV === 'development') {
      console.log("🚀 ~ file: stripe-button.jsx ~ line 9 ~ StripeButton ~ token", token);
    }
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='White Label eCommerce'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
