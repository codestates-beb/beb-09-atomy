import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  ${({ white }) => white && `
    filter: brightness(0) invert(1);
  `}

  height: 50px;
  margin-top: 4px;
  margin-left: 10px;
`;

const LogoName = styled.h1`
  ${({ white }) => white && `
    color: #ffffff;
    margin-right: 10px;
  `}

  ${({ white }) => !white && `
    color: #000000;
  `}

  font-size: 24px;
  display: inline-block;
  margin-top: 18px;
  margin-left: -20px; 
`;

const Logo = ({ white }) => {
  return (
    <LogoContainer>
      <LogoImage src="logo.png" alt="Logo" white={white} />
      <LogoName white={white}>Atomy</LogoName>
    </LogoContainer>
  );
};

export default Logo;