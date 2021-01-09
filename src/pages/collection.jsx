import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CollectionItem from "../components/collection-item/collection-item";
import { selectCollection } from "../redux/selectors/shop";

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const CollectionPage = ({ collection }) => (
  <CollectionContainer>
    <Title>{collection.title}</Title>
    <Items>
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </Items>
  </CollectionContainer>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
