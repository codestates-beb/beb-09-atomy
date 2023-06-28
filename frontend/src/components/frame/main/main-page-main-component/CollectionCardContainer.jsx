import React from 'react'
import CollectionCards from './CollectionCards';
import { Pagination} from '@mui/material';
import styled from 'styled-components';

const CollectionContainerDiv = styled.div`
    text-align: center;
    margin:20px;
`;

const CollectionCardContainer = ({ collections }) => {
  return (
    <CollectionContainerDiv>
        <CollectionCards collections={ collections }/>
        <Pagination 
        style={{display:"inline-block"}} 
        count={10} 
        color='primary' 
        variant='outlined' 
        size="large" 
        />
    </CollectionContainerDiv>
  )
}

export default CollectionCardContainer