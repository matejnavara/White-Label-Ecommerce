import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./styles";

const CollectionPreview = ({ title, items, linkUrl, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.url}/${linkUrl}`)}>
        {title}
      </TitleContainer>
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

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default withRouter(CollectionPreview);
