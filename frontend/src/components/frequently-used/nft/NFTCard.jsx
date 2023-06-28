import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const NFTCardDiv = styled.div`
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  height:300px;
  width: 250px;
  border-radius: 10%;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.4);
  position: relative;
  &:hover {
    box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.4);
    animation: example 0.2s forwards;
    @keyframes example {
      from {
        top:0px;
      }
      to {
        top: -10px;
      }
    }
  }

`;

const TitleDiv = styled.h3`
    margin-top: 10px;
    font-family: "Hi Melody cursive";
    /* height:10px;
    background: blue; */
`;

const SubInfoDiv = styled.div`
    padding: 10px 30px;
    position:absolute;
    bottom: 10px;
    font-size: 15px;
    right: 10px;
`;

const NFTCard = ({image, name, price, path}) => {
  const nav = useNavigate();
  return (
    <NFTCardDiv onClick={()=>{nav(path)}}> 
        <img src={image} width="100%" height="60%" alt="" />
        <TitleDiv>{name? name : "NFT"}</TitleDiv>
        <SubInfoDiv>
            <div>{price?parseInt(price).toFixed(2) +" ETH" : "ETH"} </div> 
        </SubInfoDiv>
    </NFTCardDiv>
  );
}

export default NFTCard