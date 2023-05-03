import React from "react";
import styled from "styled-components";
import Header from "./Header";
import bg from "../assets/img/bg3.jpg";
import FE from "../assets/img/FE.png"
import vc from "../assets/img/versioncontrol.png"
import deployment from "../assets/img/deployment.png"
import communication from "../assets/img/communication.png"
function Skills() {
  return (
    <>
      <Background>
        <Header />
        <Container className="container">
        <Box>
          <Title>Front-End</Title>
          <ImgBox><img src={FE} alt=""/></ImgBox>
        </Box>
        
        <Box>
          <Title>VersionCotrol</Title>
          <ImgBox><img src={vc} alt=""/></ImgBox>
        </Box>
        
        <Box>
          <Title>Deployment</Title>
          <ImgBox><img src={deployment} alt=""/></ImgBox>
        </Box>
        
        <Box>
          <Title>Communication</Title>
          <ImgBox><img src={communication} alt=""/></ImgBox>
        </Box>
        
        </Container>
        <Copy>© 2023. KANG MIN TAEK. <br/>ALL RIGHTS RESERVED.</Copy>
      </Background>
    </>
  );
}

export default Skills;

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(124, 118, 118, 0.151)),
    url(${bg});
  background-size: 100% 100%;
  font-family: var(--font-googleTiltNeon);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  position: relative;
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
  gap: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 70vw;
  }
`;

const Box = styled.div`
  width: 400px;
  padding-right: 2rem;
  margin-left: -1rem;
  background-color: white;
  border: 1px solid rgba(56, 54, 54, 0.408);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
  cursor: pointer;
  @keyframes post-ani {
    25% {
        transform: rotate(2deg) scale(1.01);
    }
 
    50% {
        transform: rotate(0deg) scale(1);
    }
 
    75% {
        transform: rotate(-2deg) scale(1.01);
    }
}
  :hover{
    z-index: 0;
	  animation: post-ani 0.8s linear 1;
  }
  @media screen and (max-width: 667px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 1.5rem;
  border-bottom : 1px solid black;
  padding-bottom: 1rem;
`;

const ImgBox = styled.div`
  /* width: 400px; */
  padding: 1.5rem;
  box-sizing: border-box;
  img{
    max-width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 667px) {
    flex-direction: column;
    width: 300px;
  }
`;

const Copy = styled.div`
  color: gray;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  padding: 15px;
`