import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  CartDropdownContainer,
  EmptyMessageContainer,
  CartItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
