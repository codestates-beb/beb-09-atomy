import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NFTMainPageComponent from '../components/frame/main/nft-page-main-component/NFTMainPageComponent';

const NFTInfo = ({ web3, address }) => {
  const { slug, token_id } = useParams();
  const [nftData, setNftData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await 
          axios.get(`/api/v1/collections/${slug}/${token_id}`, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
        ;

        if (response.status === 200 ) {
          setNftData(response.data);
        } else {
          throw new Error("Error occurred while fetching NFT or collections information");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [slug, token_id]);

  return (
    <>
      {nftData ? (
        <NFTMainPageComponent
          nft={nftData}
          web3={web3}
          address={address}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default NFTInfo;