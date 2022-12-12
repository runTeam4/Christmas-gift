import React from "react";
import Router from "./shared/Router";
import Header from "./components/Header";
import styled from "styled-components";

const App = () => {
  return (
    <AppWrap>
      <Header />
      <Router />
    </AppWrap>
  );
}

const AppWrap = styled.div`
  display: block;
  height: 100vh;
  background-color: #272a2f;
`;

export default App;
