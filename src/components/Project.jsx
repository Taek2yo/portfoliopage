import React from "react";
import styled from "styled-components";
import Header from "./Header";
import bg from "../assets/img/bg4.jpg";
import purple from "../assets/img/onPurple.jpg"
import portfolio from "../assets/img/portfolio.png"
import Card from "./Card";
function Project() {
  const projects = [
    { 
      img :`${purple}`,
      title : "On Purple",
      subtitle : "sub",
      desc : "desc",
      mypart :"part",
      stacks :"stacks",
      github :"https://github.com/Taek2yo/On-purple",
    },
    {
      img :`${portfolio}`,
      title : "개인 포트폴리오",
      subtitle : "프론트엔드 개발자 포트폴리오 사이트 개발",
      desc : "",
      mypart :"",
      stacks :"",
      github :"https://github.com/Taek2yo/portfoliopage",
    }
  ]
  return (
    <Background>
      <Header/>
      <Container>
      <Title>MY PROJECT</Title>
      <Wrap>
      {projects.map((item)=>(<Card item={item} key={item.title}/>))}
      </Wrap>
      </Container>
      <Copy>© 2023. KANG MIN TAEK. <br/>ALL RIGHTS RESERVED.</Copy>
    </Background>
  );
}

export default Project;

const Background = styled.div`
  font-family: var(--font-googleNotoSerifKR);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(124, 118, 118, 0.151)),url(${bg});
  background-size: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: auto;
  padding-top: 90px;
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

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
`;

const Wrap = styled.div`
  display: flex;
  gap: 30px;
`