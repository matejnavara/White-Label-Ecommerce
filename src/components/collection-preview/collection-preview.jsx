import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item'
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, linkUrl, history, match }) => {
    return (
        <div className={`collection-preview`}>
            <h1 className="title" onClick={() => history.push(`${match.url}/${linkUrl}`)}>{ title }</h1>
            <div className="preview">
              {items
                .filter((item, index) => index < 4)
                .map(item => (
                  <CollectionItem key={item.id} item={item} />
              ))}
            </div>
        </div>
    )
}

CollectionPreview.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    linkUrl: PropTypes.string.isRequired,
}

export default withRouter(CollectionPreview);
