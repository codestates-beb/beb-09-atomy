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


const WalletConnection = ({web3, requestAccessToken, setAddress}) => {
    
    const handleWalletConnect = async () => { // 로그인 시도
        try{    
            const address = await web3.eth.requestAccounts();
            if(typeof address[0] !== "undefined") {
                setAddress(address);
                requestAccessToken(address);
            }
            else new Error("not be able to get address");
        }
        catch (err){
            console.log(err);
        }      
    }
  return (
    <StyledButton>
        <h2 onClick={handleWalletConnect}>Connect Wallet</h2>
    </StyledButton>
  );
};

export default WalletConnection;
