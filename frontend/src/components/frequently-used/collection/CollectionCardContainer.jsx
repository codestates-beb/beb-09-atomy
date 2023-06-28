import React from 'react'
import CollectionCards from './CollectionCards';
import { Pagination} from '@mui/material';
import styled from 'styled-components';

const CollectionContainer = styled.div`
    text-align: center;
    margin:20px;
`;

const CollectionCardContainer = ({ collections }) => {
  return (
    <CollectionContainer>
        <CollectionCards collections={ collections }/>
        <Pagination 
        style={{display:"inline-block"}} 
        count={10} 
        color='primary' 
        variant='outlined' 
        size="large" 
        />
    </CollectionContainer>
  )
}

export default CollectionCardContainer