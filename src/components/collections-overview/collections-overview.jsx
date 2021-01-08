import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview'
import { selectCollections } from '../../redux/selectors/shop';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, title, routeName, items }) => (
        <CollectionPreview id={id} title={title} items={items} linkUrl={routeName} />
      ))}
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});


export default connect(mapStateToProps)(CollectionsOverview);
