import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
console.log("🚀 ~ file: collection-item.jsx ~ line 6 ~ CollectionItem ~ item", item)
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
        {item.name}
      <div className="collection-footer">
        <span className="name">{item.title}</span>
        <span className="price">{item.price}</span>
      </div>
    </div>
  )
};

export default CollectionItem;
