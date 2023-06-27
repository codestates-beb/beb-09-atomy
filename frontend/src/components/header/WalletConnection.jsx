import React, { useState } from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  margin-right:40px;
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


const WalletConnection = ({web3, setIsLogged, requestAccessToken}) => {
    
    const handleWalletConnect = () => { // 로그인 시도
        web3.eth.requestAccounts()
        .then((accounts)=>{
            setIsLogged(true);
            const account = accounts[0]
            requestAccessToken(account);

        })
        .catch((error)=>{
            console.error("지갑 연동 오류", error);
        })
        
    }
  return (
    <StyledButton>
        <h2 onClick={handleWalletConnect}>Connect Wallet</h2>
    </StyledButton>
  );
};

export default WalletConnection;
