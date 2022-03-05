import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const hidden = useSelector(state => state.cart.hidden);
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;

  const handleClickAddItem = (item) => {
    dispatch(addItem(item));
    if (hidden) dispatch(toggleCartHidden());
  };

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">£{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => handleClickAddItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
