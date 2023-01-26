import React from "react";
import "./App.css";
import Header from "./componenets/Header";
import styled from "styled-components";
import bg from "./assets/img/bg.jpg";
import About from "./componenets/About";

function App() {
  return (
    <WrapAll>
      <Header />
      <About/>
    </WrapAll>
  );
}

export default App;

const WrapAll = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  object-fit: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(${bg});
  background-size: cover;
  background-position: center;
`;
