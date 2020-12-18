import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/actions/cart';
import Button from '../custom-button/custom-button';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
        {item.name}
      <div className="collection-footer">
        <span className="name">{item.title}</span>
        <span className="price">{item.price}</span>
      </div>
      <Button inverted onClick={()=> addItem(item)}>ADD TO CART</Button>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem);
