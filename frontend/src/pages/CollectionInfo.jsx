import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ImageBanner from "../components/frame/main/collection-page-main-component/ImageBanner";
import Description from "../components/frame/main/collection-page-main-component/Description";
import NFTCardContainer from "../components/frame/main/collection-page-main-component/nft-card-container/NFTCardContainer";

const CollectionInfo = () => {
  const { slug } = useParams();
  const [collectionInfo, setCollectionInfo] = useState("");

  useEffect(() => {
    requestCollectionAPI();
  }, []);
  const requestCollectionAPI = async () => {
    try {
      const response = await axios.get(`/api/v1/collections/${slug}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (response.status === 200) {
        setCollectionInfo(response.data);
        console.log(response.data);
      } else {
        throw new Error("not be able to query collection");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {collectionInfo ? (
        <>
          <ImageBanner
            banner_image_url={collectionInfo.collection.banner_image_url}
            image_url={collectionInfo.collection.image_url}
          />
          <Description
            name={collectionInfo.collection.name}
            chain_identifier={collectionInfo.collection.chain_identifier}
            created_date={collectionInfo.collection.created_date}
            description={collectionInfo.collection.description}
          />
          <NFTCardContainer
            nfts={collectionInfo.nfts}
            slug={slug}
            total_supply={collectionInfo.collection.total_supply}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CollectionInfo;
