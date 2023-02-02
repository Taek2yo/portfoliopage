import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <ImgWrap>
        <Title>About Me..</Title>
      </ImgWrap>
      <ContentWrap>
        <Motto>" Slow and Steady Win the race "</Motto>
        <Desc>
          천천히 하지만 꾸준히 정진하는 프론트엔드 개발자 강민택입니다.
        </Desc>
      </ContentWrap>
    </Container>
  );
}

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: absolute;
  top: 38%;
  left: 30%;
  width: 60vw;
  height: 300px;
  margin: -160px 0px 0px -200px;
  box-sizing: border-box;
`;

const ImgWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: skyblue; */
`;

const Title = styled.div`
  color: white;
  font-size: 50px;
  font-weight: bold;
`

const ContentWrap = styled.div`
  border-left: 3px solid white;
  padding-left: 20px;
`;

const Desc = styled.div`
  color: wheat;
  font-size: 20px;
  margin-top: 20px;
`;


const Motto = styled.div`
  color: wheat;
  font-weight: bolder;
  font-size: 3rem;
`;
