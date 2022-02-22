import React from "react";
import { connect } from "react-redux";
import { addItem, toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem, toggleCartHidden, hidden }) => {
  const handleClickAddItem = (item) => {
    addItem(item);
    if (hidden) toggleCartHidden();
  };

  const { name, price, imageUrl } = item;

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

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
