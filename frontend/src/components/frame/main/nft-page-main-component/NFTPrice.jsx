import React from 'react';
import styled from 'styled-components';
import { IoMdCart } from 'react-icons/io';

const NFTPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Price = styled.div`
  font-size: 20px;
  color: #333;
`;

const CartIcon = styled(IoMdCart)`
  margin-right: 5px;
`;

const NFTPrice = ({ price }) => {
  return (
    <NFTPriceContainer>
      <Price>{price}</Price>
    </NFTPriceContainer>
  );
};

export default NFTPrice;