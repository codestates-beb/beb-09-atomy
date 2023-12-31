import React from "react";
// import { useSelector } from 'react-redux';
import styled from "styled-components";
import CollectionCard from "../../../frequently-used/collection/CollectionCard";

export const CardsDiv = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr;
  row-gap: 40px;
`;

const CollectionCards = ({ collections }) => {
  return (
    <CardsDiv>
      {collections.map((collection) => (
        <CollectionCard
          key={collection.slug}
          image={collection.image_url}
          title={collection.name}
          owner={collection.owner}
          NFTQuantity={collection.total_supply}
          volume={collection.total_volume}
          path={`/collection/${collection.slug}`}
        />
      ))}
    </CardsDiv>
  );
};

export default CollectionCards;
