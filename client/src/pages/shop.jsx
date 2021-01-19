import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";

import { fetchCollections } from "../redux/actions/shop";
import Spinner from "../components/spinner";

const CollectionsOverview = lazy(() =>
  import("../components/collections-overview")
);
const CollectionPage = lazy(() => import("./collection"));

const ShopPage = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
