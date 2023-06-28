import React from "react";
import ImageBannerComponent from "../components/frame/main/collection-page-main-component/ImageBannerComponent";
import DescriptionComponent from "../components/frame/main/collection-page-main-component/DescriptionComponent";
import NFTCardContainerComponent from "../components/frame/main/collection-page-main-component/NFTCardContainerComponent";

const CollectionInfo = () => {
  return (
    <>
      <ImageBannerComponent />
      <DescriptionComponent />
      <NFTCardContainerComponent />
    </>
  );
};

export default CollectionInfo;
