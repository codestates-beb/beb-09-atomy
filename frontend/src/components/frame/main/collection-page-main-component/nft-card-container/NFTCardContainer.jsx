import React from 'react'
import styled from 'styled-components';
import NFTCards from './NFTCards';

const NFTContainerDiv = styled.div`
    text-align: center;
    margin:20px;
`;

const NFTItemDiv = styled.div`
    margin:20px;
    display:float;
`;

const NFTCardContainer = ({nfts, total_supply, slug}) => {
  return (
    <NFTContainerDiv>
        <NFTItemDiv>{total_supply} items</NFTItemDiv>
        <NFTCards nfts={nfts} slug={slug}/>
    </NFTContainerDiv>
  )
}

export default NFTCardContainer