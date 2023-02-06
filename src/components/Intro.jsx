import React from "react";
import styled from "styled-components";
import bg2 from "../assets/img/bg2.jpg";
import astrocat from "../assets/img/astrocat.gif";
import Header from "./Header";

function Intro() {
  return (
  <>
    <Background>
    <Header />
      <Container>
      <ProfileImg />
        <Greet>
          Hi! I'm TAEK
          <br /> Front-end developer
        </Greet>
      </Container>
     {/*  <Copy>© 2023. Kang min taek.<br/> all right reserved.</Copy> */}
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
`;

const Greet = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: bold;
`;

const Copy = styled.div`
  color: white;
`

const ProfileImg = styled.div`
  width: 200px;
  height: 200px;
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
