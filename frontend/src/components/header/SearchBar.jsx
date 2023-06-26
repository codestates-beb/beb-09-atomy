import React from "react";
import styled from "styled-components";

const SearchbarInput = styled.input`
  background-image: url(search.png);
  background-position: 5px center;
  background-repeat: no-repeat;
  padding-left: 40px;
  border: 1 solid #2e3238;
  width: 700px;
  height: 50px;
  box-sizing: border-box;
  /* outline: none; */
  border-radius: 5px;
  &:hover{
    background: #fbfafa;
    background-image: url(search.png);
    background-position: 5px center;
    background-repeat: no-repeat;
  }
`;

const SearchBar = () => {
  return (
    <form>
      <SearchbarInput
        type="text"
        placeholder="Search NFT"
        className="search_bar"
        name="searchText"
      />
    </form>
  );
    
};

export default SearchBar;
