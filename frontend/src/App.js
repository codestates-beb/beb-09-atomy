import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Web3 from "web3";
import axios from "axios";

import Header from "./components/frame/header/Header";
import Footer from "./components/frame/footer/Footer";

import Main from "./pages/Main";
import CollectionInfo from "./pages/CollectionInfo";
import NFTInfo from "./pages/NFTInfo";
import Test from "./pages/Test";

const App = () => {
  const [web3, setWeb3] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [address, setAddress] = useState("");
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    //첫 랜더링시 web3 인스턴스 초기화.
    web3Init();
  }, []);

  useEffect(() => {
    // 웹 refresh시 access token 재 호출
    if (address.length > 0) {
      refreshAccessToken(address);
    }
  }, [address]);

  useEffect(() => {
    //main페이지 collection api 호출
    requestCollectionInfomation(12);
  }, []);

  const requestCollectionInfomation = async (size) => {
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

  const refreshAccessToken = async (address) => {
    try {
      const response = await axios.post(
        "/api/v1/user/refresh",
        { address },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setAccessToken(response.data.accessToken);
        setIsLogged(true);
      } else {
        throw new Error("refresh access token faild");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const requestAccessToken = async (address) => {
    //로그인 진행 시 address를 기반으로 서버에 JWT access Token을 받아온다.
    try {
      const response = await axios.post(
        "/api/v1/user/login",
        { address },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setAccessToken(response.data.accessToken);
        setIsLogged(true);
      } else {
        throw new Error("로그인 실패");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    const response = await axios.post("/api/v1/user/logout", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (response.status === 200) {
      setIsLogged(false);
      setAccessToken("");
    }
  };

  const web3Init = async () => {
    //provder 선언 및 web3 인스턴스 생성
    let webProvider = "";

    if (window.ethereum) {
      webProvider = window.ethereum; //최신 dapp 브라우저를 사용하는 경우..
    } else if (window.web3) {
      //레거시 dapp 브라우저를 사용하는 경우
      webProvider = window.web3.currentProvider;
    } else if (typeof window.web3 !== "undefined") {
      webProvider =
        "https://goerli.infura.io/v3/7bcccb589f144d16a1b7871c29fdc6a4";
    } else {
      // 4
      console.log("No web3 instance injected, using local web3.");
    }
    const web3 = new Web3(webProvider);
    const address = await web3.eth.getAccounts();
    setAddress(address);
    setWeb3(web3);
  };

  return (
    <Router>
      <Header
        web3={web3}
        isLogged={isLogged}
        setAddress={setAddress}
        requestAccessToken={requestAccessToken}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Main collections={collections} />} />
        {/* <Route path="/search/:keyword" element={<Search />} /> */}
        <Route path="/collection/:slug" element={<CollectionInfo />} />
        <Route path="/nft/:slug/:token_id" element={<NFTInfo />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
