import React, { useState } from "react";
import styled from "styled-components";

import NFTData from "./NFTData";
import Square from "../../../frequently-used/Square";
import Thumbnail from "../../../frequently-used/Thumbnail";

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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
  margin-top: 1%;
  margin-bottom: 1%;
  padding-left: 3%;
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

const NFTMainPageComponent = ({ web3, address, collections, nft }) => {
  const [accordionState, setAccordionState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  return (
    <Container1>
      <Container2>
        <Thumbnail
          image={nft.image_url}
          title={nft.name}
          handleImageClick={handleImageClick}
          width="300px"
          height="600px"
        />
        <NFTData
          accordionState={accordionState}
          handleAccordionToggle={handleAccordionToggle}
          web3={web3}
          address={address}
          nft={nft}
        />
      </Container2>
      <SquareContainer>
        {nft.traits?.map((trait) => (
          <Square text1={trait.trait_type} text2={trait.value} />
        ))}
      </SquareContainer>

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
