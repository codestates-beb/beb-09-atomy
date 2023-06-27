import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const LogoDiv = styled.div`
    display:flex;
    align-items:center;
    margin-left:40px;
    cursor:pointer;
`;

const Logo = () => {
    const nav = useNavigate();
    return (
    <LogoDiv onClick={()=>{nav('/')}}>
        <img src="logo.png" alt="logo" width="50px" height="50px"/>
        <h1>Atomy</h1>
    </LogoDiv>
    );
}


export default Logo