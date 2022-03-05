// import React, { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/Collection-item";
import { CollectionPageContainer, Title, Items } from "./collection.styles";

const CollectionPage = () => {
  const {collectionId} = useParams();
  const collection = useSelector(selectCollection(collectionId))
  const {title, items} = collection;

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

export default CollectionPage;
