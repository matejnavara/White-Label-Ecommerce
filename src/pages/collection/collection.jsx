import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/selectors/shop';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  console.log("🚀 ~ file: collection.jsx ~ line 8 ~ CollectionPage ~ collection", collection)
  return (
    <div className='collection-page'>
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {collection.items.map(item => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage);
