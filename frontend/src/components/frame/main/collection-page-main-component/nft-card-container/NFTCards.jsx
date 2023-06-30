import React from "react";
import styled from 'styled-components';
import NFTCard from "../../../../frequently-used/nft/NFTCard";



export const NFTCardsDiv = styled.div`
  margin-bottom: 50px; 
  display:grid;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr;
  row-gap: 40px;
`



const NFTCards = ({nfts, slug}) =>{

  return(
    <NFTCardsDiv>
        {nfts?.map((nft)=>(
            <NFTCard image={nft.image_url} name={nft.name} path={`/collection/${slug}/nft/${nft.token_id}`}/>
        ))}
    </NFTCardsDiv>
  );
}

export default NFTCards;
