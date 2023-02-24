import React from "react";
import styled from "styled-components";
import Header from "./Header";
import bg from "../assets/img/bg4.jpg";
function Project() {
  return (
    <Background>
      <Header/>
      <Container>

      </Container>
      <Copy>© 2023. KANG MIN TAEK. <br/>ALL RIGHTS RESERVED.</Copy>
    </Background>
  );
}

export default Project;

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(124, 118, 118, 0.151)),
    url(${bg});
  background-size: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
`;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: auto;
  padding-top: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 70vw;
  }
`;

const Copy = styled.div`
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  padding: 15px;
`