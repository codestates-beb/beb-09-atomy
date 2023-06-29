import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-right: 40px;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  &:hover {
    color: #636363;
  }
`;

const WalletConnection = ({ connectWallet }) => {
  return (
    <StyledButton>
      <h2 onClick={connectWallet}>Connect Wallet</h2>
    </StyledButton>
  );
};

export default WalletConnection;
