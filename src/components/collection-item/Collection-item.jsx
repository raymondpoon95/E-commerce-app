import React from "react";
import { connect } from "react-redux";
import { addItem, toggleCartHidden } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/Custom-button";

const CollectionItem = ({ item, addItem, toggleCartHidden, hidden }) => {
  const handleClickAddItem = (item) => {
    addItem(item);
    if (hidden) toggleCartHidden();
  };

  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => handleClickAddItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
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
