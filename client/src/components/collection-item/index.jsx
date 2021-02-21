import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addItem } from "../../redux/actions/cart";

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from "./styles";

const CollectionItem = ({ item, addItem }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${item.imageUrl})` }} />
      {item.name}
      <CollectionFooterContainer>
        <NameContainer>{item.title}</NameContainer>
        <PriceContainer>${item.price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
