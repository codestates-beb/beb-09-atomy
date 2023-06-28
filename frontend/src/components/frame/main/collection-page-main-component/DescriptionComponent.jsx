import React from 'react'
import styled from 'styled-components';

const DescriptionComponent = () => {
  return (
    <DescriptionContainer>
      <Title>Example Title</Title>
      <Text>This is an example description text for the image. It provides information about the image such as its origin, creation date, artist, etc.</Text>
    </DescriptionContainer>
  )
}

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f2f2f2;
  margin-top: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  max-width: 800px;
`;

export default DescriptionComponent;