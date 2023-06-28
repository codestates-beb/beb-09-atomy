import React, { useState } from 'react';
import styled from 'styled-components';
import NFTData from './NFTData';
import NFTPrice from './NFTPrice';

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

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1.0);
  transition: transform 0.3s ease;
  margin-top: -30px;

  &:hover {
    transform: scale(1.01);
  }
`;

const SquareContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: -40px;
  margin-left: 170px;
  width: 100%;
`;

const Square = styled.div`
  width: 120px;
  height: 150px;
  background-color: #fff;
  border: 2px solid #0f0f0f;
  margin-right: 23px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease; 

  span {
    font-size: 14px;
    font-weight: bold;
    line-height: 2.0;
    color: #000;
    margin-bottom: 8px;
  }

  &:hover {
    transform: scale(1.05); 
  }
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

const NFTCard = () => {
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
        <Image src={nft.image} alt={nft.title} onClick={handleImageClick} />
        <NFTData
          title={nft.title}
          accordionState={accordionState}
          handleAccordionToggle={handleAccordionToggle}
        />
      </Container2>
      <SquareContainer>
        <Square>
          <span>Traits part1</span>
          <span>Traits 2%</span>
        </Square>
        <Square>
          <span>Traits part2</span>
          <span>Traits 2%</span>
        </Square>
        <Square>
          <span>Traits part3</span>
          <span>Traits 2%</span>
        </Square>
        <Square>
          <span>Traits part4</span>
          <span>Traits 2%</span>
        </Square>
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

export default NFTCard;