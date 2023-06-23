import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./pages/Main";
import Search from "./pages/Search";
import CollectionInfo from "./pages/CollectionInfo";
import NFTInfo from "./pages/NFTInfo";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/collection/:id" element={<CollectionInfo />} />
        <Route path="/nft/:id" element={<NFTInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
