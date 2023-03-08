import React, { useMemo, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import bg2 from "../assets/img/bg2.jpg";
import astrocat from "../assets/img/astrocat.gif";
import Header from "./Header";
import { useNavigate } from "react-router";

function Intro() {
  const navigate = useNavigate()
  const greetings = useMemo(() => {
    return "Hi! I'm TAEK\nFront-End Developer";
  }, []);

  const [landingGreet, setLandingGreet] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLandingGreet(landingGreet + greetings[count]); 
        setCount(count + 1); 
    }, 100);
    
    if(count === greetings.length)  {  
        clearInterval(interval); 
    }
    return () => clearInterval(interval); 
})
  return (
  <>
    <Background>
    <Header />
      <Container className="container">
      <ProfileImg />
        <Greet>
          {landingGreet}
        </Greet>
        <Btn onClick={()=>{navigate('/about')}}>About</Btn>
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

const cursor = keyframes`
 from { border-right: 2px solid #222; }
  to { border-right: 2px solid #777; }
`

const Greet = styled.pre`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  height: 12vh;
  @media screen and (max-width: 375px){
    font-size: 2rem;
  }
  font-family: var(--font-googleTiltNeon);
  ::after{
    content: '';
    margin-left: 0.6rem;
    border-right: 2px solid #777;
    animation: ${cursor} .9s infinite steps(2);
  }
`;

const Btn = styled.div`
  background-color: white;
  font-family: var(--font-googleTiltNeon);
  border-radius: 18px;
  width: 8rem;
  text-align: center;
  padding: 12px;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  :hover{
    background-color: gray;
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
