import React from "react";
import NFTMainPageComponent from '../components/frame/main/nft-page-main-component/NFTMainPageComponent';

const NFTInfo = ({web3, address}) => {
  return (
    <>
      <NFTMainPageComponent web3={web3} address={address}/>
    </>
  );
};

export default NFTInfo;