import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { connect } from "react-redux";
// import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/Collection-item";
import { CollectionPageContainer, Title, Items } from "./collection.styles";
import SHOP_DATA from "../../redux/shop/shop.data";

const CollectionPage = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTitle(SHOP_DATA[params.collectionId].title);
    setItems(SHOP_DATA[params.collectionId].items);
  }, [params.collectionId]);

  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

// const mapStateToProps = (state) => ({
//   collection: selectCollection(collectionId)(state),
// });

// export default connect(mapStateToProps)(CollectionPage);

export default CollectionPage;
