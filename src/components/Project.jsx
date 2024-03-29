import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import bg from "../assets/img/bg2.jpg";
import purple from "../assets/img/onPurple.jpg";
import portfolio from "../assets/img/portfolio.png";
import baemin from "../assets/img/baemin.jpg"
import next from "../assets/img/next.png"
import prev from "../assets/img/prev.png"
import Card from "./Card";

function Project() {
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
      url: "",
    },
    {
      img: `${portfolio}`,
      title: "개인 포트폴리오",
      subtitle: "프론트엔드 개발자 포트폴리오 사이트",
      duration: "2023.01.24 ~ 2023.05.02",
      desc: "React를 사용하여 개발하고, 반응형 웹, SEO 학습 및 적용, 개인 PR을 위해 개발한 웹사이트 입니다. 라이브러리 사용을 최소한으로 줄여보았습니다.",
      mypart: "1인 개발",
      stacks: "React, JavaScript, Vercel",
      github: "https://github.com/Taek2yo/portfoliopage",
      url: "",
    },
    {
      img: `${baemin}`,
      title: "배달의 민족 클론 코딩",
      subtitle: "배달의 민족 클론 코딩",
      duration: "2023-06-04 ~ 2023-08-31",
      desc: "Next.js 학습과 데이터베이스 이해를 위해 기획보다는 다양한 기능을 학습할 수 있는 클론 코딩 프로젝트를 선택했습니다. 이를 통해 대용량 트래픽이 발생하는 기업의 UI 구성 및 기능을 학습하고 활용함으로써 실력 향상을 기대하여 이 프로젝트를 진행했습니다.",
      mypart: "1인 개발",
      stacks: "Next.js, React, JavaScript, MongoDB, AWS S3, Open API",
      github: "https://github.com/Taek2yo/baemin-web",
      url: "https://baemin-web.vercel.app/",
    }
  ];
  
  // slide
  const [slideX, setSlideX] = useState(0);
  const itemWidth = 430; // 각 항목의 너비
  const totalItems = projects.length;

  const toPrev = () => {
    if (slideX === 0) {
      // 처음 항목에서 이전을 누르면 마지막 항목으로 이동
      setSlideX(-itemWidth * (totalItems - 1));
    } else {
      setSlideX(slideX + itemWidth);
    }
  };

  const toNext = () => {
    if (slideX === -itemWidth * (totalItems - 1)) {
      // 마지막 항목에서 다음을 누르면 처음 항목으로 이동
      setSlideX(0);
    } else {
      setSlideX(slideX - itemWidth);
    }
  };
  

  return (
    <>
    <Background>
      <Header />
      <Container className="container">
        <Title>MY PROJECT</Title>

        <SlideWrapper>
          <PrevBtn onClick={toPrev}></PrevBtn>
          <Row>
            <Wrap style={{ transform: `translateX(${slideX}px)` }}>
              {projects.map((item) => (
                <Card item={item} key={item.title} />
              ))}
            </Wrap>
          </Row>
          <NextBtn onClick={toNext}></NextBtn>
        </SlideWrapper>
      </Container>
      <Copy>
        © 2023. KANG MIN TAEK. <br />
        ALL RIGHTS RESERVED.
      </Copy>
    </Background>
    </>
  );
}

export default Project;

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(124, 118, 118, 0.151)),
    url(${bg});
  background-size: 100% 100%;
  font-family: var(--font-googleNotoSerifKR);
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
  @media screen and (max-width: 320px) {
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
  width: 100%;
  height: 80vh;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    width: 420px;
    overflow-x: hidden;
  }
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Wrap = styled.div`
  display: flex;
  gap: 30px;
  float: left;
  margin-left: 10px;
  transition: 0.5s;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    margin-left: 0;
    align-items: center;
  }
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
