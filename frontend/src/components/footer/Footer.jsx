import React from 'react';
import styled, { keyframes } from 'styled-components';

const MainContent = styled.main`
  flex-grow: 1;
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("bg.png");
  background-size: cover;
  padding: 2%;
  text-align: center;
`;

const LogoAndLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  height: 20px;
  margin-top: 10px;
`;

const LogoName = styled.h1`
  color: #fff;
  font-size: 20px;
  display: inline-block;
  margin-top: 20px; 
`;

const LogoDescription = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 5px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  color: #fff;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const LinkLogo = styled.img`
  height: 23px;
  width: 23px;
  object-fit: contain;
  padding: 5px;
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 14px;
  border-top: 1px solid #fff;
  padding-top: 30px;
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoIcon = styled.img`
  height: 16px;
  margin-left: auto;
`;

const CountryText = styled.span`
  margin-left: 10px;
`;

const Footer = () => (
  <FooterContainer>
    <LogoAndLinksContainer>
      <LogoContainer>
        <Logo src="logo.png" alt="Logo" />
        <LogoName>Atomy</LogoName>
      </LogoContainer>
      <FooterLinks>
        <FooterLink href="https://www.instagram.com/"><LinkLogo src="sns1.png" alt="" /></FooterLink>
        <FooterLink href="https://www.youtube.com/"><LinkLogo src="sns2.png" alt="" /></FooterLink>
        <FooterLink href="https://twitter.com/"><LinkLogo src="sns3.png" alt="" /></FooterLink>
      </FooterLinks>
    </LogoAndLinksContainer>
    <LogoDescription>
      <p>아토미는 유저의 가상화폐 지갑과 연동되어 거래소 본연의 역할을 수행합니다.</p>
      <p>즉 유저가 보유한 디지털 자산을 자신들의 거래소에 저장하지 않으며,</p>
      <p>NFT를 구매, 판매, 생성 및 거래할 수 있는 장소를 제공하고</p>
      <p>판매자와 구매자의 지갑에서 거래가 이뤄지도록 설계되었습니다</p>
    </LogoDescription>
    <FooterText>
      © 2023 Atomy Company
      <LogoIcon src="korea.png" alt="Logo Icon" />
      <CountryText>이효확 이동욱 이승민 한재경</CountryText>
    </FooterText>
  </FooterContainer>
);

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <MainContent>
    </MainContent>
    <Footer />
  </div>
);

export default App;