import React from "react";
import ImageBanner from "../components/frame/main/collection-page-main-component/ImageBanner";
import Description from "../components/frame/main/collection-page-main-component/Description";
import NFTCardContainer from "../components/frame/main/collection-page-main-component/NFTCardContainerComponent";

const CollectionInfo = () => {
  return (
    <>
      <ImageBanner />
      <Description />
      <NFTCardContainer />
    </>
  );
};

export default CollectionInfo;
