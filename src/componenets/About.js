import React from "react";
import styled from "styled-components";
import bear from "../assets/img/bear.jpg";
const About = () => {
  return (
    <Container>
      <Wrap>
        <Introduce>Welcome.</Introduce>
        <Motto>" Slow and Steady Win the race "</Motto>
        <Desc>천천히 하지만 꾸준히 정진하는 Front-end 개발자 강민택입니다.</Desc>
      </Wrap>
      <ProfileImg />
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  gap: 4rem;
  position  : absolute;
  top: 50%;
  left: 35%;
  width: 60vw;
  height: 300px;
  margin: -160px 0px 0px -200px;
  align-items: center;
  box-sizing: border-box;
`;

const Wrap = styled.div`
  flex-direction: column;
  border-left: 3px solid white;
  padding-left: 20px;
`;

const Introduce = styled.div`
  margin-top: -30px;
  color: wheat;
  font-size: 80px;
`;

const Motto = styled.div`
  color: wheat;
  font-size: 50px;
  margin-top: 15px;
`;

const Desc = styled.div`
  color: wheat;
  font-size: 20px;
  margin-top: 20px;
`;

const ProfileImg = styled.div`
  width: 200px;
  height: 200px;
  border: none;
  border-radius: 50%;
  box-shadow: 2px 2px 4px 3px #4B4A54;
  background-image: url(${bear});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
