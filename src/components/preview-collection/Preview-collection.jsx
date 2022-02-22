import React from "react";
import CollectionItem from "../collection-item/Collection-item";
import {
  CollectionPreviewContainer,
  Title,
  PreviewContainer,
} from "./collection-preview.styles";

const PreviewCollection = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <Title>View all ({items.length})</Title>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default PreviewCollection;
