import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/Collection-item";
import "./collection.styles.scss";
import SHOP_DATA from "../../redux/shop/shop.data";

const CollectionPage = () => {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    {
      setTitle(SHOP_DATA[params.collectionId].title);
      setItems(SHOP_DATA[params.collectionId].items);
    }
  }, [params]);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   collection: selectCollection(params.collectionId)(state),
// });

// export default connect(mapStateToProps)(CollectionPage);

export default CollectionPage;