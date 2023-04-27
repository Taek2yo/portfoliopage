import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import bg2 from "../assets/img/bg2.jpg";
import purple from "../assets/img/onPurple.jpg";
import portfolio from "../assets/img/portfolio.png";
import next from "../assets/img/next.png"
import prev from "../assets/img/prev.png"
import Card from "./Card";

function Project() {
  // slide
  const [slideX, setSlideX] = useState(0);
  
  const toPrev = () => {
    slideX < 0 && setSlideX(slideX + 430);
  };
  
  const toNext = () => {
    slideX > -1290 && setSlideX(slideX - 430);
    if ( slideX === -430) setSlideX(0)
  };
  
  // data
  const projects = [
    {
      img: `${purple}`,
      title: "On Purple",
      subtitle: "매칭 서비스 기반의 데이팅 플랫폼",
      duration: "2022.09.16 ~ 2022.10.28",
      desc: "강원 이노베이션 캠프 실전 프로젝트로 6인 팀 프로젝트 입니다. 커뮤니티 기능을 동반한 데이팅 플랫폼을 웹앱으로 만들었습니다.",
      mypart: "게시판 CRUD , 1:1 채팅기능 구현, 검색 기능 구현, PWA 적용",
      stacks: "React, Redux, axios, JavaScript, AWS",
      github: "https://github.com/Taek2yo/On-purple",
      url: "https://on-purple.com/",
    },
    {
      img: `${portfolio}`,
      title: "개인 포트폴리오",
      subtitle: "프론트엔드 개발자 포트폴리오 사이트",
      duration: "2023.01.24 ~",
      desc: "React를 사용하여 개발하고, 반응형 웹, SEO 학습 및 적용, 개인 PR을 위해 개발한 웹사이트 입니다. 라이브러리 사용을 최소한으로 줄여보았습니다.",
      mypart: "1인 개발",
      stacks: "React, JavaScript, Vercel",
      github: "https://github.com/Taek2yo/portfoliopage",
      url: "",
    }
  ];

  return (
    <Background>
      <Header />
      <Container className="container">
        <Title>MY PROJECT</Title>

      <SlideWrapper>
        <PrevBtn onClick={()=>{toPrev()}}></PrevBtn>
        <Row>
          <Wrap style={{ transform : `translateX(${slideX}px)`}}>
            {projects.map((item) => (
              <Card item={item} key={item.title} />
            ))}
          </Wrap>
        </Row>
        <NextBtn onClick={()=>{toNext()}}></NextBtn>
      </SlideWrapper>

      </Container>
      <Copy>
        © 2023. KANG MIN TAEK. <br />
        ALL RIGHTS RESERVED.
      </Copy>
    </Background>
  );
}

export default Project;

const Background = styled.div`
  font-family: var(--font-googleNotoSerifKR);
  background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(124, 118, 118, 0.151)
    ),
    url(${bg2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  @media screen and (max-width: 1200px) {
    height: 100vh;
  }
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  @media screen and (max-width: 498px) {
    .container {
      padding-top: 150px;
      position: relative;
      z-index: 0;
      display: none;
    }
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Copy = styled.div`
  color: gray;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  padding: 15px;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
`;

const Row = styled.div`
  width: 67vw;
  height: 77vh;
  overflow-x: hidden;
`;

const Wrap = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 25px;
  float: left;
  margin-left: 10px;
  justify-content: center;
  transition: 0.5s;
`;

const Button = styled.button`
  z-index: 1;
  margin: 10px;
  border: none;
  width: 40px;
  height : 40px;
  box-shadow: 2px 2px 2px 2px ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  cursor: pointer;
  background-color: whitesmoke;
`

const PrevBtn = styled(Button)`
  background-image: url(${prev});
`;

const NextBtn = styled(Button)`
  background-image: url(${next});
`;
