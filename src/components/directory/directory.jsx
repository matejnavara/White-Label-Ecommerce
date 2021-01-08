import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item';
import { selectSections } from '../../redux/selectors/directory';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, linkUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} size={size} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
})

export default connect(mapStateToProps)(Directory);
