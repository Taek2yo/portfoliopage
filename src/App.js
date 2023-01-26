import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import bg from "./assets/img/bg.jpg";
import Contents from "./components/Contents";

function App() {
  const [change, setChange] = useState('');
  
  return (
    <WrapAll>
      <Header setChange={setChange}/>
      <Contents change={change}/>
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
