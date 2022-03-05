import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/Checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/Stripe-button";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  Total,
  TestWarning,
} from "./checkout.styles";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
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
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: £{total}</Total>
      <TestWarning>
        *Please use the following test credit card details for payments*
        <br></br>
        4242 4242 4242 4242 - Exp:01/25 - CVV:123
      </TestWarning>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal,
// });

export default CheckoutPage;
