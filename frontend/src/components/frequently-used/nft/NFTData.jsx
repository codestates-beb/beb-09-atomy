import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdCart, IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const AccordionItem = ({ title, isOpen, onClick }) => (
  <Accordion onClick={onClick}>
    <AccordionTitle>
      <span>{title}</span>
      {isOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
    </AccordionTitle>
    <AccordionContent isOpen={isOpen}>
      {isOpen && (
        <>
          <IoIosArrowUp size={18} />
          {title}
          <br />
          Accordion Content
        </>
      )}
    </AccordionContent>
  </Accordion>
);

const Accordion = styled.div`
  width: 102%;
  height: auto;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 13px;
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
  text-align: left;

  svg {
    margin-left: auto;
  }
`;

const AccordionContent = styled.div`
  font-size: 16px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  text-align: center;
  transition: max-height 0.3s ease;
  overflow: hidden;
`;

const AccordionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  padding: 20px;
  max-width: 510px;
  margin: 4%;
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

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: -50px;
  margin-left: 360px;
  padding-bottom: -20px;
`;

const CustomText = styled.p`
  margin: 0;
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: bold;
  margin-right: 4px;
  white-space: nowrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: ${({ isPrimary }) => (isPrimary ? '#3086d5' : '#3086d5')};
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 30px 75px;
  border-radius: 15px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }
`;

const CartIcon = styled(IoMdCart)`
  margin-right: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
`;

const AccordionContainer = styled.div`
  width: 100%;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

const CartButton = styled(Button)`
  font-size: 16px;
  width: 50%;
  height: 75px;
`;

const BuyButton = styled(Button)`
  font-size: 14px;
`;

const LongAccordionContent = styled.div`
  width: 100%;
  height: 10px;
  margin-top: 15px;
  margin-right: 36px;
`;

const NFTData = ({ title, accordionState, handleAccordionToggle }) => {
  return (
    <AccordionCard>
      <NFTInfoContainer>
        <NFTTitleContainer>
          <Title size="28px" color="#3086d5">Utility Wen</Title>
          <Title size="40px" color="#000">{title}</Title>
          <Title size="20px" color="#000">Owned by A78E0C</Title>
          <TextWrapper>
            <CustomText size="30px" color="#000">0.178</CustomText>
            <CustomText size="30px" color="#000">ETH</CustomText>
          </TextWrapper>
        </NFTTitleContainer>
        <ButtonContainer>
          <BuyButton isPrimary>BUY BUTTON</BuyButton>
          <CartButton>
            <CartIcon size={28} />
          </CartButton>
        </ButtonContainer>
      </NFTInfoContainer>
      <AccordionContainer>
        {/* Todo: component화 하기 */}
        <AccordionItem
          title="Price History"
          isOpen={accordionState[0]}
          onClick={() => handleAccordionToggle(0)}
        />
        {/* <AccordionItem
          title="Listings"
          isOpen={accordionState[1]}
          onClick={() => handleAccordionToggle(1)}
        />
        <AccordionItem
          title="Offers"
          isOpen={accordionState[2]}
          onClick={() => handleAccordionToggle(2)}
        /> */}
        <LongAccordionContent>
        <AccordionItem
          title="Long Accordion 1"
          isOpen={accordionState[3]}
          onClick={() => handleAccordionToggle(3)}
        />
        <AccordionItem
          title="Long Accordion 2"
          isOpen={accordionState[4]}
          onClick={() => handleAccordionToggle(4)}
        />
        </LongAccordionContent>
      </AccordionContainer>
    </AccordionCard>
  );
};

const MyComponent = () => {
  const [accordionState, setAccordionState] = useState([false, false, false, false, false]);

  const handleAccordionToggle = (index) => {
    const newState = [...accordionState];
    newState[index] = !newState[index];
    setAccordionState(newState);
  };

  return (
    <div>
      <NFTData title="My NFT" accordionState={accordionState} handleAccordionToggle={handleAccordionToggle} />
    </div>
  );
};

export default MyComponent;