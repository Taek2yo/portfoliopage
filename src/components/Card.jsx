import React from "react";
import styled from "styled-components";
import github from "../assets/img/github.png";
import home from "../assets/img/home.png"
function Card(item) {
  const content = item.item;
  const url = content.github;
  return (
    <Container>
      <Box>
        <Img>
          <img src={content.img} alt="" />
        </Img>
        <Title>{content.title}</Title>
        <Subtitle>{content.subtitle}</Subtitle>
        <Desc>{content.desc}</Desc>
        <Duration> ✔ 개발 기간 <br/> {content.duration}<br/> </Duration>
        <Mypart> ✔ 나의 직무 <br/> {content.mypart}</Mypart>
        <div className="separator"></div>
        <Stacks> ✔ 기술 스택 <br/> {content.stacks}</Stacks>
      </Box>
      <Icon>
        <img src={github} onClick={()=>{window.open(url)}} alt="" />
        <img src={home} alt="" />
      </Icon>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  display: block;
  .separator {
    height: 1px;
    width: 70%;
    background: rgba(41, 40, 40, 0.281);
    margin: 20px auto;
  }
  @media screen and (max-width: 1200px) {
    margin: 0 auto;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    margin: 0 auto;
  }
`

const Box = styled.div`
  background-color: whitesmoke;
  border-radius: 12px;
  width: 400px;
  /* height: 100%; */
  box-shadow: 2px 3px 3px 3px #4b4a54;
  cursor: pointer;
  :hover{
    opacity: 0.9;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
`;

const Subtitle = styled.div`
  text-align: center;
`;

const Img = styled.div`
  width: 100%;
  height: 200px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-size: cover;
  }
`;

const Desc = styled.div`
  margin: 0 auto;
  color : gray;
  font-size: 0.85rem;
  width: 90%;
  height: 100px;
`;

const Duration = styled.div`
  padding: 10px; 
  width: 90%;
`

const Mypart = styled.div`
  padding: 10px ;
  width: 90%;
  height: 60px;
`;

const Stacks = styled.div`
  padding: 10px;
  width: 90%;
`;

const Icon = styled.div`
  margin-top: 15px;
  background-color: whitesmoke;
  border-radius: 12px;
  display: flex;
  color: #ccc;
  width: 400px;
  font-size: 1.2rem;
  justify-content: space-around;
  box-shadow: 2px 3px 3px 3px #4b4a54;
  img {
    width: 1.8rem;
    border-radius: 100%;
    padding: 5px;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
`;
