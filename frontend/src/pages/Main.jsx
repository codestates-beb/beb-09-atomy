import React, { useEffect } from "react";
import axios from 'axios';


import MainCompnent from "../components/frame/main/main-page-main-component/MainCompnent";


const Main = ({collections, setCollections}) => {
    useEffect(() => {
    //main페이지 collections api 호출
    requestCollectionsAPI(12);
  }, []);

  const requestCollectionsAPI = async (size) => {
    //
    try {
      const response = await axios.get(`/api/v1/collections?size=${size}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        setCollections(response.data);
      } else {
        throw new Error("err occurred to get collection infomation");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MainCompnent collections={collections}/>
  );
};

export default Main;
