import React, { useState } from 'react';
import styled from 'styled-components';
import NFTData from './NFTData';
import NFTPrice from './NFTPrice';

import Square from '../Square';
import Thumbnail from '../Thumbnail';

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Container2 = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  margin-top: 13%;
  padding-left: 3%;
`;

const SquareContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: -40px;
  margin-left: 170px;
  width: 100%;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const ImagePopup = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
`;

const NFTMainPageComponent = () => {
  const [accordionState, setAccordionState] = useState([false, false, false, false, false]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for the image popup

  const handleAccordionToggle = (index) => {
    setAccordionState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const nft = {
    image: '/nftcard1.png',
  };

  return (
    <Container1>
      <Container2>
        <Thumbnail image={nft.image} title={nft.title} handleImageClick={handleImageClick} width="300px" height="600px"/>
        <NFTData
          title={nft.title}
          accordionState={accordionState}
          handleAccordionToggle={handleAccordionToggle}
        />
      </Container2>
      <SquareContainer>
        <Square text1="Traits part1" text2="Traits 2%"/>
        <Square text1="Traits part1" text2="Traits 2%"/>
        <Square text1="Traits part1" text2="Traits 2%"/>
        <Square text1="Traits part1" text2="Traits 2%"/>
        <Square text1="Traits part1" text2="Traits 2%"/>
  
      </SquareContainer>
      <Container2>
        <NFTPrice price={nft.price} />
      </Container2>
      {isPopupOpen && (
        <PopupOverlay onClick={handleClosePopup}>
          <PopupContent>
            <ImagePopup src={nft.image} alt={nft.title} />
          </PopupContent>
        </PopupOverlay>
      )}
    </Container1>
  );
};

export default NFTMainPageComponent;