import { useEffect, useState } from "react";
import axios from "axios";

import MainComponent from "../components/frame/main/main-page-main-component/MainComponent";

const Main = () => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    //main페이지 collections api 호출
    requestCollectionsAPI(12);
  }, []);

  const requestCollectionsAPI = async (size) => {
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
        throw new Error("err occurred to get collection information");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return <MainComponent collections={collections} />;
};

export default Main;
