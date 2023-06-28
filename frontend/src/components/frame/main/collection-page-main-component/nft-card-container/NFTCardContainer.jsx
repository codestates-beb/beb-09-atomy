import React from 'react'
import styled from 'styled-components';
import NFTCards from './NFTCards';

const NFTContainerDiv = styled.div`
    text-align: center;
    margin:20px;
`;

const NFTCardContainer = ({nfts, total_supply, slug}) => {
  return (
    <NFTContainerDiv>
        <span>{total_supply} items</span>
        <NFTCards nfts={nfts} slug={slug}/>
    </NFTContainerDiv>
  )
}

export default NFTCardContainer