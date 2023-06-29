import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Profile from "./Profile";
import WalletConnection from "./WalletConnection";
import Logo from "../../frequently-used/Logo";

const HeaderDiv = styled.div`
  background-color: #fafafa;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ web3, address, isLoggedIn, handleLogout, connectWallet }) => {
  return (
    <HeaderDiv>
      <Logo />
      <SearchBar />
      {isLoggedIn ? (
        <Profile web3={web3} address={address} handleLogout={handleLogout} />
      ) : (
        <WalletConnection connectWallet={connectWallet} />
      )}
    </HeaderDiv>
  );
};

export default Header;
