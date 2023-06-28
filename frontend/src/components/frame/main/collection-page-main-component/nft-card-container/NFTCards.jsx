import React from "react";
import styled from 'styled-components';
import NFTCard from "../../../frequently-used/nft/NFTCard";



export const NFTCardsDiv = styled.div`
  margin-bottom: 50px; 
  display:grid;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr;
  row-gap: 40px;
`



const NFTCards = ({NFTs}) =>{
    
  return(
    <NFTCardsDiv>
        {NFTs.map((NFT)=>(
            <NFTCard image={NFT.image_url} title={NFT.name} NFTQuantity={NFT.total_supply} volume={NFT.total_volume} path={`/nft?id=${NFT.name}`}/>
        ))}
    </NFTCardsDiv>
  );
}

export default NFTCards;
