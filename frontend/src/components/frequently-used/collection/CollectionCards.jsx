import React from "react";
// import { useSelector } from 'react-redux';
import styled from 'styled-components'
import CollectionCard from "./CollectionCard";



export const Cards = styled.div`
   /* margin-top: 40px;
  margin-left: 100px; */
  margin-bottom: 50px; 
  display:grid;
  grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr;
  row-gap: 40px;
`



const CollectionCards = ({image, title, owner, NFTQuantity, volume, path}) =>{

  return(
    <Cards>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
        <CollectionCard image={"https://source.unsplash.com/random/400×400"} title={"title"} owner={"by owner"} NFTQuantity={"NFT quantity"} volume={"NFT volume"} path={"/collection/airpot"}/>
    </Cards>
  );
}


export default CollectionCards;
