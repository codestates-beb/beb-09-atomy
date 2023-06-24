import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Profile from "./Profile";
import WalletConnection from "./WalletConnection";

const StyledDiv = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items:center;
    justify-content: space-between;
`

const Header = () => {
    const [isLogged, setIsLogged] = React.useState(false);

    return (
        <StyledDiv>
            <Logo/>
            <SearchBar/>
            {isLogged?<Profile/>:<WalletConnection/>}
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
