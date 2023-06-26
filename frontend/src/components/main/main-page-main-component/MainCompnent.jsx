import React from 'react';
import CollectionCardContainer from '../../frequently-used/collection/CollectionCardContainer';
import styled from "styled-components";

const MainCompo = styled.div`
    margin:100px;
`;

const MainCompnent = () => {
  return (
    <MainCompo>
        <CollectionCardContainer/>
    </MainCompo>
  )
}

export default MainCompnent