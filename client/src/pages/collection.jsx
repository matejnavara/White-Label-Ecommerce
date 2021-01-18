import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { selectCollection } from "../redux/selectors/shop";
import CollectionItem from "../components/collection-item";
import WithCollectionsLoadingContainer from "../components/with-collections-loading";

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
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

export default WithCollectionsLoadingContainer(
  connect(mapStateToProps)(CollectionPage)
);
