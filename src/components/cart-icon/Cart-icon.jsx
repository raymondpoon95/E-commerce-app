import React from "react";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);
  const toggleCartHiddenHandler = () => dispatch(toggleCartHidden());

  return (
    <CartIconContainer onClick={toggleCartHiddenHandler}>
      <ShoppingIconContainer />
      <ItemCountContainer className="item-count">
        {itemCount}
      </ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
