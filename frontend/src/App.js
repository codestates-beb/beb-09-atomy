import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/frame/header/Header";
import Footer from "./components/frame/footer/Footer";

import Main from "./pages/Main";
import Search from "./pages/Search";
import CollectionInfo from "./pages/CollectionInfo";
import NFTInfo from "./pages/NFTInfo";
import Test from "./pages/Test";

import Web3 from "web3";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [web3, setWeb3] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    web3Init(); //web3 인스턴스가 변동이 있을때마다 초기화.
  }, [web3]);

  //   useEffect(() => {
  //     handleSetAddress(); // address가 변할때마다 재설정 작업.
  //   }, [address]);

  //   useEffect(() => {
  //     // reqeustAccessToken(); // access토큰이 변할때마다 재설정 작업.
  //   }, [accessToken]);

  const handleSetAddress = () => {
    if (web3 !== "") {
      web3.eth.getAccounts().then((address) => {
        setAddress(address);
      });
    }
  };

  const requestAccessToken = (address) => {
    //로그인 진행 시 address를 기반으로 서버에 JWT access Token을 받아온다.
    axios
      .post("http://127.0.0.1:4000/api/v1/user/login", { address })
      .then((response) => {
        console.log(response);
        //   setAccessToken(response.data.accessToken);
        //   setAddress(address);
      });
  };

  const web3Init = () => {
    //provder 선언 및 web3 인스턴스 생성
    let webProvider = "";

    if (window.ethereum) {
      webProvider = window.ethereum; //브라우저에 메타마스크 지갑이 있을 경우
    } else if (window.web3) {
      webProvider = window.web3.currentProvider;
    } else if (typeof window.web3 !== "undefiend") {
      webProvider =
        "https://goerli.infura.io/v3/7bcccb589f144d16a1b7871c29fdc6a4";
    } else {
      // 4
      console.log("No web3 instance injected, using local web3.");
    }

    setWeb3(new Web3(webProvider));
  };

  const switchIsLogged = () => {
    setIsLogged(!isLogged);
  };

  return (
    <Router>
      <Header
        web3={web3}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        requestAccessToken={requestAccessToken}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/search/:keyword" element={<Search />} /> */}
        <Route path="/collection/:id" element={<CollectionInfo />} />
        <Route path="/nft/:id" element={<NFTInfo />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
