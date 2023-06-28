import React from 'react';
import styled from 'styled-components';

const ImageBanner = () => {
  return (
    <ImageContainer>
      <ResponsiveImage src="/ImageBanner.png" alt="Image Banner" />
      <ProfileImage src="/ImageBannerProfile.png" alt="Profile Image" title="Profile Image" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  margin-top: 70px;
  position: relative;
`;

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
`;

const ProfileImage = styled.img`
  max-width: 15%;
  height: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 80%;
  left: 8%;
  transform: translateY(-50%);
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;
  background-color: white; // 하얀색 배경 추가
  padding: 5px; // 이미지와 배경 사이의 간격
  &:hover {
    transform: translateY(-50%) scale(1.01);
  }
`;

export default ImageBanner;