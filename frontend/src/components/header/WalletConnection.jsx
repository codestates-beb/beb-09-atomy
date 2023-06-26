import React from "react";
import styled from "styled-components";
import axios from 'axios';

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

const WalletConnection = ({web3, setIsLogged}) => {
    const handleWalletConnect = () => {
        web3.eth.requestAccounts()
        .then((accounts)=>{
            setIsLogged(true);
            const account = accounts[0]
            axios.post("http://127.0.0.1:4000/login", {account})

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
