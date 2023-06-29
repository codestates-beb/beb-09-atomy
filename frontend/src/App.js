import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Web3 from "web3";
import axios from "axios";

import Header from "./components/frame/header/Header";
import Footer from "./components/frame/footer/Footer";

import Main from "./pages/Main";
import CollectionInfo from "./pages/CollectionInfo";
import NFTInfo from "./pages/NFTInfo";

const App = () => {
  const [web3, setWeb3] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    //첫 랜더링시 web3 인스턴스 초기화.
    web3Init();
  }, []);

  useEffect(() => {
    // TODO: 10분마다 access token을 refresh한다.
  }, [isLoggedIn, address]);

  const refreshAccessToken = async (address) => {
    try {
      if (!address) {
        throw new Error("address is not defined");
      }
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
        setIsLoggedIn(true);
      } else {
        throw new Error("refresh access token failed");
      }
    } catch (err) {
      throw new Error(err);
    }
  };
  const requestAccessToken = async () => {
    //로그인 진행 시 address를 기반으로 서버에 JWT access Token을 받아온다.
    try {
      if (!web3) {
        throw new Error("web3 is not initialized");
      }

      const addresses = await web3.eth.getAccounts();
      if (!addresses.length) {
        throw new Error("MetaMask is locked");
      }

      const response = await axios.post(
        "/api/v1/user/login",
        { address: addresses[0] },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200 && response.data) {
        setIsLoggedIn(true);
        setAccessToken(response.data.accessToken);
        setAddress(addresses[0]);
      } else {
        throw new Error("로그인 실패");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    if (!isLoggedIn) {
      return;
    }
    const response = await axios.post("/api/v1/user/logout", {
      withCredentials: true,
    });
    if (response.status === 200) {
      setIsLoggedIn(false);
      setAccessToken("");
      setAddress("");
    }
  };

  const web3Init = async () => {
    //provider 선언 및 web3 인스턴스 생성
    let webProvider;

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
    setAddress(address[0]);
    setWeb3(web3);
  };

  return (
    <Router>
      <Header
        web3={web3}
        isLoggedIn={isLoggedIn}
        requestAccessToken={requestAccessToken}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collection/:slug" element={<CollectionInfo />} />
        <Route
          path="/collection/:slug/nft/:token_id"
          element={<NFTInfo web3={web3} address={address} />}
        />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
