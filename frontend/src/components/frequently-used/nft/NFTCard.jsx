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
  width: 100%;
  margin-top: 30px;
  padding-right: 46%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  cursor: pointer;
`;

const NFTInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const NFTTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
`;

const Price = styled.div`
  font-size: 20px;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  border: 2px solid #000; 
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 150px;
  ${({ isPrimary }) =>
    isPrimary
      ? `
      background-color: #1a4edc;
    `
      : `
      background-color: #4f4f4f;
    `}
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
  border: 3px solid #000; 
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

const NFTCard = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState([false, false, false]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAccordionToggle = (index) => {
    setIsAccordionOpen((prevState) => {
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
              <Title>Utility Wen</Title>
              <Title>{nft.title}</Title>
              <Title>Owned by A78E0C</Title>
            </NFTTitleContainer>
            <ButtonContainer>
              <Button isPrimary>BUY BUTTON</Button>
              <Button>
                <CartIcon size={16} />
              </Button>
            </ButtonContainer>
          </NFTInfoContainer>
          <AccordionContainer>
            <Accordion onClick={() => handleAccordionToggle(0)}>
              <AccordionTitle>
                {isAccordionOpen[0] ? (
                  <IoIosArrowUp size={18} />
                ) : (
                  <IoIosArrowDown size={18} />
                )}
                Price History
              </AccordionTitle>
              <AccordionContent isOpen={isAccordionOpen[0]}>
                <IoIosArrowUp size={18} />
                Price History
                <br />
                Accordion Content
              </AccordionContent>
            </Accordion>
            <Accordion onClick={() => handleAccordionToggle(1)}>
              <AccordionTitle>
                {isAccordionOpen[1] ? (
                  <IoIosArrowUp size={18} />
                ) : (
                  <IoIosArrowDown size={18} />
                )}
                Listings
              </AccordionTitle>
              <AccordionContent isOpen={isAccordionOpen[1]}>
                <IoIosArrowUp size={18} />
                Listings
                <br />
                Accordion Content
              </AccordionContent>
            </Accordion>
            <Accordion onClick={() => handleAccordionToggle(2)}>
              <AccordionTitle>
                {isAccordionOpen[2] ? (
                  <IoIosArrowUp size={18} />
                ) : (
                  <IoIosArrowDown size={18} />
                )}
                Offers
              </AccordionTitle>
              <AccordionContent isOpen={isAccordionOpen[2]}>
                <IoIosArrowUp size={18} />
                Offers
                <br />
                Accordion Content
              </AccordionContent>
            </Accordion>
          </AccordionContainer>
        </AccordionCard>
      </Container2>
      <Container2>
        <AccordionCard>
          <AccordionContainer>
            <Accordion onClick={() => handleAccordionToggle(0)}>
              <AccordionTitle>
                {isAccordionOpen[0] ? (
                  <IoIosArrowUp size={18} />
                ) : (
                  <IoIosArrowDown size={18} />
                )}
                Description
              </AccordionTitle>
              <AccordionContent isOpen={isAccordionOpen[0]}>
                <IoIosArrowUp size={18} />
                Description
                <br />
                Accordion Content
              </AccordionContent>
            </Accordion>
            <Accordion onClick={() => handleAccordionToggle(1)}>
              <AccordionTitle>
                {isAccordionOpen[1] ? (
                  <IoIosArrowUp size={18} />
                ) : (
                  <IoIosArrowDown size={18} />
                )}
                Properties
              </AccordionTitle>
              <AccordionContent isOpen={isAccordionOpen[1]}>
                <IoIosArrowUp size={18} />
                Properties
                <br />
                Accordion Content
              </AccordionContent>
            </Accordion>
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