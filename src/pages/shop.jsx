import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";

import { fetchCollectionsAsync } from "../redux/actions/shop";
import CollectionsOverview from "../components/collections-overview";

import CollectionPage from "./collection";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
