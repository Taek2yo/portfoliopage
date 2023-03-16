import React from "react";
import styled from "styled-components";
import Header from "./Header";
import bg3 from "../assets/img/bg3.jpg";
import me from "../assets/img/me.jpg";
import velog from "../assets/img/velog.png"
import github from "../assets/img/github.png"
import notion from "../assets/img/notion.png"
function About() {
  const url1 ='https://github.com/Taek2yo'
  const url2 = 'https://velog.io/@taek2yo'
  return (
    <>
      <Background> 
      <Header />
        <Container>
          <Img>
            <img src={me} alt=''/>
          </Img>
          <My>
          " 신입 프론트 개발자 강민택 "
          </My>
          <ContentWrap>
            <Content>
            <ContentTitle>" Slow and Steady Wins the Race "</ContentTitle> 
              <div className="separator"></div>
              <Desc>
                새로운 목표에 대한 도전을 즐기며, 또한 그 목표를 
                천천히, 꾸준히 계속해서 하는 것이 가장 빠른 길이라고 생각합니다.
                그 일환으로 '1일 1커밋'을 지키고있습니다.
              </Desc>
            </Content>
            <Content2>
            <ContentTitle>" 배운 것을 잊지 않기 위한 노력 "</ContentTitle>
              <div className="separator"></div>
              <Desc>
              독서, 강의, 블로그 등 매일 공부한 것은 기록하여 남기려고 노력합니다.
              개인 블로그와 깃허브를 이용하여 배운 지식을 후에 활용하거나 다른 사람들과 함께 공유하고자 합니다. 
              </Desc>              
            </Content2>
            <Icon>
                    <img src={github} alt="" onClick={()=>{window.open(url1)}}/>
                    <img src={velog} alt="" onClick={()=>{window.open(url2)}}/>
                    <img src={notion} alt="" /* onClick={()=>{window.open(url3)}} *//>
              </Icon>
          </ContentWrap>
        </Container>
        <Copy>© 2023. KANG MIN TAEK. <br/>ALL RIGHTS RESERVED.</Copy>
      </Background>
    </>
  );
}

export default About;

const Background = styled.div`
  font-family: var(--font-googleNotoSerifKR);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(124, 118, 118, 0.151)),url(${bg3});
  background-size: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 1280px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const My = styled.div`
  margin: auto;
  color: white;
  margin-top: 20px;
  font-size: 1.2rem;
`

const Content = styled.div`
  color: white;

`;
const ContentTitle = styled.div`
  text-align: center;
  font-size: 1.7rem;
  color: black;
`


const Desc = styled.div`
  font-size: 1.3rem;
  span{
    font-weight: bold;
  }
`

const Img = styled.div`
  background-color: rgba(124, 118, 118, 0.151);
  width: 200px;
  height: 200px;
  border-radius: 100%;
  box-shadow: 2px 2px 5px 4px #4B4A54;
  img{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-size: contain;
  }
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
  padding-top: 150px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 70vw;
  }
`;

const Content2 = styled.div`
  color: white;
  padding-top: 20px;
  span {
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: 650;
    font-size: 2.2rem;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    letter-spacing: -0.05rem;
  }
  p{
    margin: 20px;
    font-size: 1.5rem;
  }
`;

const ContentWrap = styled.div`
  margin-top: 30px;
  width: 75%;
  flex-direction: column;
  .separator {
    height: 2px;
    width: 60px;
    background: rgba(12, 12, 12, 0.486);
    margin: 20px auto;
  }
`;

const Icon = styled.div`
    display: flex;
    /* background-color: skyblue; */
    color: #ccc;
    width: 95%;
    padding: 15px;
    gap: 30px;
    justify-content: center;
    margin-top: 20px;
    img{
        width: 2.5rem;
        border-radius: 100%;
        cursor: pointer;
        :hover{
          opacity: 0.5;
        }
    }
`
const Copy = styled.div`
  color: gray;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  padding: 15px;
  z-index: 1;
`