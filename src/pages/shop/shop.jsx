import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/selectors/shop';


import CollectionPreview from '../../components/collection-preview/collection-preview'

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, title, routeName, items }) => (
      <CollectionPreview id={id} title={title} items={items} linkUrl={routeName} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});


export default connect(mapStateToProps)(ShopPage);