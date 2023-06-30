import React from 'react';
import styled from 'styled-components';

const ImageBanner = ({banner_image_url, image_url}) => {
  return (
    <BannerDiv>
        <ImageContainer>
            <ResponsiveImage src={banner_image_url} alt="Image Banner" width="100%"/>
        </ImageContainer>
        <ProfileImage src={image_url} alt="Profile Image" title="Profile Image" />
    </BannerDiv>
  );
};

const BannerDiv = styled.div`
    height: 500px;
    overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const ResponsiveImage = styled.img`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

`;

const ProfileImage = styled.img`
  max-width: 15%;
  height: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 30%;
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