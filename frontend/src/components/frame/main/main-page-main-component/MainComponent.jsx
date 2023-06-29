import React from "react";
import CollectionCardContainer from "./CollectionCardContainer";
import styled from "styled-components";

const MainCompoDiv = styled.div`
  margin-top: 120px;
`;

const MainComponent = ({ collections }) => {
  return (
    <MainCompoDiv>
      <CollectionCardContainer collections={collections} />
    </MainCompoDiv>
  );
};

export default MainComponent;
