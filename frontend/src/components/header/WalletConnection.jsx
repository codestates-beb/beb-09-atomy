import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background:inherit;
  border:none;
  box-shadow: none;
  border-radius: 0;
  padding:0;
  overflow: visible;
  cursor: pointer;
  &:hover{
    color: #636363;
  }
`;

const WalletConnection = () => {
  return (
    <StyledButton>
        <h2>Connect Wallet</h2>
    </StyledButton>
  );
};

export default WalletConnection;
