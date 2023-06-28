import React from "react";
// import { useSelector } from 'react-redux';
import styled from 'styled-components'
import NFTCard from "../../../frequently-used/nft/NFTCard";



export const NFTCardsDiv = styled.div`
   /* margin-top: 40px;
  margin-left: 100px; */
  margin-bottom: 50px; 
  display:grid;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr;
  row-gap: 40px;
`



const NFTCards = ({collections}) =>{
    
  return(
    <NFTCardsDiv>
        {collections.map((collection)=>(
            <NFTCard image={collection.image_url} title={collection.name} owner={collection.owner} NFTQuantity={collections.total_supply} volume={collection.total_volume} path={`/collection?id=${collection.name}`}/>
        ))}
    </NFTCardsDiv>
  );
}

export default NFTCards;
