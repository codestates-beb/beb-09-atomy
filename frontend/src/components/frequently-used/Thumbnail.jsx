import React from 'react'
import styled from 'styled-components';

const Image = styled.img`
  width: 55%;
  height: 55%;
  object-fit: cover;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1.0);
  transition: transform 0.3s ease;
  margin-top: -30px;

  &:hover {
    transform: scale(1.01);
  }
`;

const Thumbnail = ({image, title, handleImageClick, width, height}) => {
  return (
    <Image src={image} alt={title} onClick={handleImageClick} width={width} height={height}/>
  )
}

export default Thumbnail