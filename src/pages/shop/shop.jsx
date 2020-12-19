import React, { Component } from 'react'

import SHOP_DATA from './shopData';

import CollectionPreview from '../../components/collection-preview/collection-preview'

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          collections: SHOP_DATA,
        }
    }
    render() {
      const { collections } = this.state;
        return (
          <div className="shop-page">
            {collections.map(({ id, title, routeName, items }) => (
              <CollectionPreview id={id} title={title} items={items} linkUrl={routeName} />
            ))}
          </div>
        )
    }
}


export default ShopPage