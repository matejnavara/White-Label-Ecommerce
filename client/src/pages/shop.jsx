import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";

import { fetchCollections } from "../redux/actions/shop";
import CollectionsOverview from "../components/collections-overview";

import CollectionPage from "./collection";

const ShopPage = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
