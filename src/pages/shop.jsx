import React from "react";
import { Route } from "react-router";

import CollectionPage from "./collection";
import CollectionsOverview from "../components/collections-overview/collections-overview";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
