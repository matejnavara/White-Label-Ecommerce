import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item";
import { selectSections } from "../../redux/selectors/directory";

import { DirectoryMenuContainer } from "./styles";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, title, imageUrl, linkUrl, size }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
          size={size}
        />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
