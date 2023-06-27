import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Profile from "./Profile";
import WalletConnection from "./WalletConnection";
import Logo from "./Logo";
const HeaderDiv = styled.div`

# jegung
const StyledDiv = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = ({ web3, isLogged, setIsLogged }) => {
  return (
    <StyledDiv>
      <Logo />
      <SearchBar />
      {isLogged ? <Profile web3={web3} /> : <WalletConnection web3={web3} setIsLogged={setIsLogged} />}
    </StyledDiv>
  );
};

const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="/logo.png" alt="logo" width="50px" height="50px" /> {/* 이미지 파일의 경로 수정 */}
      <h1>Atomy</h1>
    </div>
  );
};
=======
    background-color: #fafafa;
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
    display: flex;
    align-items:center;
    justify-content: space-between;

    
`

const Header = ({web3, isLogged, setIsLogged}) => {
    return (
        <HeaderDiv>
            <Logo/>
            <SearchBar/>
            {isLogged?<Profile web3={web3} setIsLogged={setIsLogged}/>:<WalletConnection web3={web3} setIsLogged={setIsLogged}/>}
        </HeaderDiv>
    );
};




# dev

export default Header;