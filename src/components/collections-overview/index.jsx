import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview";
import { selectCollectionsForPreview } from "../../redux/selectors/shop";

import { CollectionsOverviewContainer } from "./styles";
import WithCollectionsLoadingContainer from "../with-collections-loading";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, title, routeName, items }) => (
        <CollectionPreview
          key={id}
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

export default WithCollectionsLoadingContainer(
  connect(mapStateToProps)(CollectionsOverview)
);
