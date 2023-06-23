import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Profile from "./Profile";

const StyledDiv = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items:center;
    justify-content: space-between;
`

const Header = () => {
  return (
    <StyledDiv>
        <Logo/>
        <SearchBar/>
        <Profile/>
    </StyledDiv>
  );
};


const Logo = () => {
    return (
    <div style={{display:"flex", alignItems:"center"}}>
        <img src="logo.png" alt="logo" width="50px" height="50px"/>
        <h1>Atomy</h1>
    </div>
    );
}



export default Header;
