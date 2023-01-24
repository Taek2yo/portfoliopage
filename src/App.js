import React from "react";
import "./App.css";
import Router from "./shared/Router";
import styled from "styled-components";

function App() {
  return (
    <WrapAll>
      <Router />
    </WrapAll>
  );
}

export default App;

const WrapAll = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width:1024px){  //769px~1024px
        width:768px;
    }
    @media (max-width:768px){   //~768px
        width:100%;
    }
`;
