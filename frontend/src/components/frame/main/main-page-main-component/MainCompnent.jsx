import React from 'react';
import CollectionCardContainer from './CollectionCardContainer';
import styled from "styled-components";

const MainCompoDiv = styled.div`
    margin:100px;
`;

const MainCompnent = ({collections}) => {
  return (
    <MainCompoDiv>
        <CollectionCardContainer collections={collections}/>
    </MainCompoDiv>
  )
}

export default MainCompnent