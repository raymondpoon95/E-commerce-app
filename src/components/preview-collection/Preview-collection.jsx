import React from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../collection-item/Collection-item";
import {
  CollectionPreviewContainer,
  Title,
  PreviewContainer,
} from "./collection-preview.styles";

const PreviewCollection = ({ title, items, routeName }) => {
  const navigate = useNavigate();

  return (
    <CollectionPreviewContainer>
      <Title onClick={() => navigate(`/shop/${routeName}`)}>
        {title.toUpperCase()}
        <br></br>
        View all ({items.length})
      </Title>
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
