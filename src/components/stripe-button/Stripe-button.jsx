import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KVw0UENGjvgfTfkcsn9enkxI4mW9DD6Czj3QuvINra0UDlrW1wceF31a4RrE7T4XSfar8VTstQnM4BFsSRkPa4E00UeZsLp3H";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Better Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
