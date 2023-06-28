import React from 'react'
import styled from 'styled-components';
import NFTCards from './NFTCards';

const NFTContainerDiv = styled.div`
    text-align: center;
    margin:20px;
`;

const NFTCardContainer = () => {
  return (
    <NFTContainerDiv>
        <span>8657 items</span>
        <NFTCards/>
    </NFTContainerDiv>
  )
}

export default NFTCardContainer