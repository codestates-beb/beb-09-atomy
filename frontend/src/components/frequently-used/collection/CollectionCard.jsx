import React from "react";

// import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

export const Boards = styled.div`
  margin-top: 300px;
  margin-left: 300px;
  display:grid;
  grid-template-columns: 0.4fr 0.4fr 0.4fr;
  row-gap: 40px;
`
const Board = styled.div`
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  height:450px;
  width: 350px;
  border-radius: 10%;
  /* background-color: aquamarine; */
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.4);
  position: relative;
  &:hover {
    animation: example 0.2s forwards;
    box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.4);
    @keyframes example {
      from {
        top:0px;
      }
      to {
        top: -10px;
      }
    }
  }

`

const CollectionCard = ({image, title, content, path}) =>{
//   const nav = useNavigate();

  return(
    //onClick={()=>{nav(path)}}
    <Board> 
      <img src={image} width="100%" height="40%" alt="" />
      <div style={{marginTop:"10px",fontSize:"20px",fontFamily: "Hi Melody cursive"}}>
        <span>{title}</span>
      </div>
      <div style={{padding:"10px 30px", fontSize:"15px", height:"110px", overflow:"hidden"}}>
        <span>{content}</span>
      </div>
    </Board>
  );
}


export default CollectionCard;
