import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp, IoMdCart } from 'react-icons/io';

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Container2 = styled.div`
  display: flex;
  align-items: flex-start;
  width: 110%;
  margin-top: 6%;
  padding-left: 1%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1.0);
`;

const NFTInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NFTTitleContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  margin-top: -95px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 20px;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5%;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #3086d5;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 247px;
  border-radius: 10px;
  ${({ isPrimary }) =>
    isPrimary
      ? `
      background-color: #3086d5;
    `
      : `
      background-color: #3086d5;
      margin-left: 30px;
    `}
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const CartIcon = styled(IoMdCart)`
  margin-right: 5px;
`;

const AccordionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  padding: 20px;
  max-width: 500px;
  margin: 4%;
`;

const AccordionContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

const Accordion = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 2px solid #616161;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const AccordionTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  font-size: 16px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  text-align: center;
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

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomText = styled.p`
  margin: 0;
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: bold;
  margin-right: 5px;
`;

const LightningIcon = styled.span`
  font-size: 16px;
`;

const AccordionItem = ({ title, isOpen, onClick }) => (
  <Accordion onClick={onClick}>
    <AccordionTitle>
      {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
      {title}
    </AccordionTitle>
    <AccordionContent isOpen={isOpen}>
      <IoIosArrowUp size={18} />
      {title}
      <br />
      Accordion Content
    </AccordionContent>
  </Accordion>
);

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
    title: 'Wen Utility #9185',
    price: '1.5 ETH',
    image: '/nftcard1.png',
  };

  return (
    <Container1>
      <Container2>
        <Image src={nft.image} alt={nft.title} onClick={handleImageClick} />
        <AccordionCard>
          <NFTInfoContainer>
            <NFTTitleContainer>
              <Title size="28px" color="#3086d5">Utility Wen</Title>
              <Title size="40px" color="#000">{nft.title}</Title>
              <Title size="20px" color="#000">Owned by A78E0C</Title>
              <TextWrapper>
                <CustomText size="16px" color="#000">Ethereum</CustomText>
                <LightningIcon>⚡️</LightningIcon>
              </TextWrapper>
            </NFTTitleContainer>
            <ButtonContainer>
              <Button isPrimary>BUY BUTTON</Button>
              <Button>
                <CartIcon size={24} />
              </Button>
            </ButtonContainer>
          </NFTInfoContainer>
          <AccordionContainer>
            <AccordionItem
              title="Price History 1"
              isOpen={accordionState[0]}
              onClick={() => handleAccordionToggle(0)}
            />
            <AccordionItem
              title="Price History 2"
              isOpen={accordionState[1]}
              onClick={() => handleAccordionToggle(1)}
            />
            <AccordionItem
              title="Price History 3"
              isOpen={accordionState[2]}
              onClick={() => handleAccordionToggle(2)}
            />
          </AccordionContainer>
        </AccordionCard>
      </Container2>
      <Container2>
        <AccordionCard>
          <AccordionContainer>
            <AccordionItem
              title="Description"
              isOpen={accordionState[3]}
              onClick={() => handleAccordionToggle(3)}
            />
            <div style={{ marginBottom: '20px' }} />
            <AccordionItem
              title="Description 2"
              isOpen={accordionState[4]}
              onClick={() => handleAccordionToggle(4)}
            />
          </AccordionContainer>
        </AccordionCard>
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