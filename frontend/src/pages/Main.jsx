import React from "react";
import Container from "../components/container/Container";
# jegung
import CollectionCard from "../components/frequently-used/collection/CollectionCard"; // CollectionCard 컴포넌트를 임포트합니다.

const Main = () => {
  return (
    <Container>
      <CollectionCard />
    </Container>
=======
import MainCompnent from "../components/main/main-page-main-component/MainCompnent";


const Main = () => {
  return (
    <MainCompnent/>
# dev
  );
};

export default Main;