import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview";
import { selectCollectionsForPreview } from "../../redux/selectors/shop";

import { CollectionsOverviewContainer } from "./styles";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, title, routeName, items }) => (
        <CollectionPreview
          id={id}
          title={title}
          items={items}
          linkUrl={routeName}
        />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
