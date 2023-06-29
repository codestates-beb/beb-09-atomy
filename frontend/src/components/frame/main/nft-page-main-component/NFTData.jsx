import React, { useState } from 'react';
import styled from 'styled-components';
import AccordionItem from '../../../frequently-used/AccordionItem';
import { IoMdCart } from 'react-icons/io';

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

const NFTData = ({ title, accordionState, handleAccordionToggle, web3, address }) => {
  const accordionItems = [
    { title: 'Price History', index: 0 },
    { title: 'Listings', index: 1 },
    { title: 'Offers', index: 2 },
  ];

const sendTransaction = async() => {
    try{
        if(typeof web3 !=="undefined") {
        const receipt = await web3.eth.sendTransaction({
            from: address,
            to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
            value: '1000000000000000'
            })
        console.log(receipt);
        }
        else {
            throw Error("web3 doesn't exist")
        }
    }  catch (err){
        console.log(err);
    }
    
        
    
    
}

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
          <BuyButton onClick={sendTransaction} isPrimary>BUY BUTTON</BuyButton>
          <CartButton>
            <CartIcon size={28} />
          </CartButton>
        </ButtonContainer>
      </NFTInfoContainer>
      <AccordionContainer>
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            isOpen={accordionState[item.index]}
            onClick={() => handleAccordionToggle(item.index)}
          />
        ))}
      </AccordionContainer>
    </AccordionCard>
  );
};

const MyComponent = ({web3, address}) => {
  const [accordionState, setAccordionState] = useState([false, false, false, false, false]);

  const handleAccordionToggle = (index) => {
    const newState = [...accordionState];
    newState[index] = !newState[index];
    setAccordionState(newState);
  };

  return (
    <div>
      <NFTData title="My NFT" accordionState={accordionState} handleAccordionToggle={handleAccordionToggle} web3={web3} address={address}/>
    </div>
  );
};

export default MyComponent;