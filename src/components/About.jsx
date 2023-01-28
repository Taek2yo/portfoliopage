import React from "react";
import styled from "styled-components";
import astrocat from "../assets/img/astrocat.gif";
function About (){
  return (
    <Container>
      <ImgWrap>
      <ProfileImg />
      </ImgWrap>
      <ContentWrap>
        <Introduce>안녕하세요.</Introduce>
        <Desc>천천히 하지만 꾸준히 정진하는 프론트엔드 개발자 강민택입니다.</Desc>
      </ContentWrap>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position  : absolute;
  top: 38%;
  left: 30%;
  width: 60vw;
  height: 300px;
  margin: -160px 0px 0px -200px;
  box-sizing: border-box;
  /* background-color: white; */
`;

const ImgWrap = styled.div`
  margin-top: -30px;
  padding-bottom: 15vh;
`

const ContentWrap = styled.div`
  border-left: 3px solid white;
  padding-left: 20px;
  margin-left: 40px;
`;

const Introduce = styled.div`
  margin-top: -15px;
  color: wheat;
  font-size: 60px;
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
  /* box-shadow: 2px 2px 4px 3px #4B4A54; */
  background-image: url(${astrocat});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  float: right;
  margin-right: 30px;
`;
