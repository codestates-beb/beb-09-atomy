import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Card = styled.div`
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  height:300px;
  width: 250px;
  border-radius: 10%;
  /* background-color: aquamarine; */
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

const Title = styled.div`
    margin-top: 10px;
    font-size: 20px;
    font-family: "Hi Melody cursive";
`;

const Owner = styled.div`
    margin-left: 20px;
    display:float;
`;

const SubInfo = styled.div`
    padding: 10px 30px;
    position:relative;
    top:15px;
    font-size: 15px;;
    overflow: hidden;
    display: flex;
    align-items:center;
    justify-content: space-between;

`;

const CollectionCard = ({image, title, owner, NFTQuantity, volume, path}) => {
  const nav = useNavigate();
  return (
    <Card onClick={()=>{nav(path)}}> 
        <img src={image} width="100%" height="60%" alt="" />
        <Title>{title}</Title>
        <Owner>by {owner}</Owner>
        <SubInfo>
            <div>{parseInt(NFTQuantity).length > 0 ? `NFT 개수 : ${NFTQuantity}`:""}</div> 
            <div>{parseInt(volume).toFixed(2)} ETH</div> 
        </SubInfo>
    </Card>
  );
}

export default CollectionCard