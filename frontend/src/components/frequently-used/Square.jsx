import React from 'react'
import styled from 'styled-components';



const SquareDiv = styled.div`
  width: 200px;
  height: 190px;
  margin-top: 30px;
  margin-bottom: -100px;
  background-color: #fff;
  border: 2px solid #0f0f0f;
  margin-right: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease; 

  span {
    font-size: 20px;
    font-weight: bold;
    line-height: 2.0;
    color: #000;
    margin-bottom: 8px;
  }

  &:hover {
    transform: scale(1.05); 
  }
`;



const Square = ({text1, text2}) => {
  return (
    <SquareDiv>
        <span>{text1}</span>
        <span>{text2}</span>
    </SquareDiv>
  )
}

export default Square