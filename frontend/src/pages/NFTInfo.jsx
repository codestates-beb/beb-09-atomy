import React from "react";
import NFTCard from "../components/frequently-used/nft/NFTCard";
import NFTCardList from "../components/frequently-used/nft/NFTCardList";
import NFTPrice from "../components/frequently-used/nft/NFTPrice";

const NFTInfo = () => {
  return (
    <>
      <NFTCard />
      <NFTCardList />
      <NFTPrice />
    </>
  );
};

export default NFTInfo;