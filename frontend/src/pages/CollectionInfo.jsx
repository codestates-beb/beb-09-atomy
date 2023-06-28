import React from "react";
import Description from "../components/frame/main/collection-page-main-component/Description";
import ImageBanner from "../components/frame/main/collection-page-main-component/ImageBanner";
import NFTCardContainer from "../components/frame/main/collection-page-main-component/NFTCardContainer";

const CollectionInfo = () => {
  return (
  <div>
    <Description/>
    <ImageBanner/>
    <NFTCardContainer/>
  </div>
  );
};

export default CollectionInfo;
