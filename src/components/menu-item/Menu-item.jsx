import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  Title,
  Subtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, subtitle, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <MenuItemContainer siz={size} onClick={() => navigate(`${linkUrl}`)}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
