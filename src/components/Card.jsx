import React from "react";
import styled from "styled-components";
import github from "../assets/img/github.png";
function Card(item) {
  const content = item.item;
  const url = content.github;
  return (
    <div style={{boxSizing:"border-box"}}>
      <Box>
        <Img>
          <img src={content.img} alt="" />
        </Img>
        <Title>{content.title}</Title>
        <Subtitle>{content.subtitle}</Subtitle>
        <Desc>{content.desc}</Desc>
        <Mypart>{content.mypart}</Mypart>
        <Stacks>{content.stacks}</Stacks>
      </Box>
      <Icon>
        <img src={github} onClick={()=>{window.open(url)}} alt="" />
        <img src={github} alt="" />
      </Icon>
    </div>
  );
}

export default Card;

const Box = styled.div`
  background-color: whitesmoke;
  border-radius: 12px;
  width: 400px;
  height: 100%;
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
  padding-left: 10px;
`;
const Mypart = styled.div`
  padding-left: 10px;
`;
const Stacks = styled.div`
  padding-left: 10px;
`;

const Icon = styled.div`
  margin-top: 15px;
  background-color: whitesmoke;
  border-radius: 12px;
  display: flex;
  color: #ccc;
  width: 400px;
  font-size: 12px;
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
