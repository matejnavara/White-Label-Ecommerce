import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./styles";

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default withRouter(MenuItem);
