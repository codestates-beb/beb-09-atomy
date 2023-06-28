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



const CollectionCards = ({collections}) =>{
    
  return(
    <Cards>
        {collections.map((collection)=>(
            <CollectionCard image={collection.image_url} title={collection.name} owner={collection.owner} NFTQuantity={collections.total_supply} volume={collection.total_volume} path={"/collection/airpot"}/>
        ))}
    </Cards>
  );
}

export default CollectionCards;
