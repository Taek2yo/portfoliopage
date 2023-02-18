import React from "react";
import styled from "styled-components";
import bg2 from "../assets/img/bg2.jpg";
import astrocat from "../assets/img/astrocat.gif";
import Header from "./Header";
import { useNavigate } from "react-router";

function Intro() {
  const navigate = useNavigate()
  return (
  <>
    <Background>
    <Header />
      <Container className="container">
      <ProfileImg />
        <Greet>
          Hi! I'm TAEK
          <br /> Front-end developer
        </Greet>
        <Btn onClick={()=>{navigate('/about')}}>Learn More</Btn>
      </Container>
      <Copy>© 2023. KANG MIN TAEK. <br/>ALL RIGHTS RESERVED.</Copy>
    </Background>
  </>
  );
}

export default Intro;

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${bg2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  gap: 20px;
  padding-top: 100px;
  @media screen and (max-width: 498px){
    .container{
      padding-top: 150px;
      position: relative;
      z-index: 0;
      display: none;
    }
  }
`;

const Greet = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  @media screen and (max-width: 375px){
    font-size: 2rem;
  }
`;

const Btn = styled.div`
  background-color: black;
  border-radius: 18px;
  width: 9.5rem;
  text-align: center;
  padding: 12px;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  :hover{
    background-color: whitesmoke;
    color: black;
    cursor: pointer;
  }
`

const Copy = styled.div`
  color: gray;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  padding: 15px;
`

const ProfileImg = styled.div`
  width: 180px;
  height: 180px;
  border: none;
  border-radius: 50%;
  box-shadow: 2px 2px 5px 4px #4B4A54;
  background-image: url(${astrocat});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: -1;
`;
