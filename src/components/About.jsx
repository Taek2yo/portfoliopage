import React from "react";
import styled from "styled-components";
import Header from "./Header";
import bg3 from "../assets/img/bg3.jpg";
import bear from "../assets/img/bear.jpg";
import velog from "../assets/img/velog.png"
import github from "../assets/img/github.png"
function About() {
  const url1 ='https://github.com/Taek2yo'
  const url2 = 'https://velog.io/@taek2yo'
  return (
    <>
      <Background> 
      <Header />
        <Container>
          <Img>
            <img src={bear} alt=''/>
          </Img>

          <ContentWrap>
            <Content>
              <span>Slow and Steady Wins the Race</span>
              <div className="separator"></div>
              <p>
                새로운 목표에 대한 도전을 즐기며, 또한 그 목표를 
                천천히, 꾸준히 계속해서 하는 것이 가장 빠른 길이라고 생각합니다.
              </p>
            </Content>
            <Content2>
              <span>배운 것을 잊지 않기 위한 노력</span>
              <div className="separator2"></div>
              <p>
                독서, 강의, 블로그 등 매일 공부한 것은 기록하여 남기려고 노력합니다.
              </p>
              <p>
                개인 블로그와 깃허브를 이용하여 배운 지식을 후에 활용하거나 다른 사람들과 함께 공유하고자 합니다. 
              </p>
            </Content2>
            <Icon>
                    <img src={github} alt="asdasdasd" onClick={()=>{window.open(url1)}}/>
                    <img src={velog} alt="" onClick={()=>{window.open(url2)}}/>
                </Icon>
          </ContentWrap>
        </Container>
      </Background>
    </>
  );
}

export default About;

const Background = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(124, 118, 118, 0.151)),url(${bg3});
  background-size: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  color: white;
  span {
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: 650;
    font-size: 2rem;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    letter-spacing: -0.05rem;
  }
  .separator {
    height: 2px;
    width: 60px;
    background: gray;
    margin: 20px auto;
  }
  p{
    margin: 20px;
    font-size: 1.2rem;
  }
`;

const Img = styled.div`
  background-color: white;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  img{
    /* width: 100%; */
    max-width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px){
    width: 300px;
    height: 300px;
    margin: 0 auto;
   }
   @media screen and (max-width: 480px) and (max-width: 768px){
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 70%;
  gap: 25px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding-top: 75px;
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
    font-size: 2rem;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    letter-spacing: -0.05rem;
  }
  .separator2 {
    height: 2px;
    width: 60px;
    background: gray;
    margin: 20px auto;
  }
  p{
    margin: 20px;
    font-size: 1.2rem;
  }
`;

const ContentWrap = styled.div`
  flex-direction: column;
  @media screen and (max-width: 768px){
    span{
      font-size: 1.5rem;
    }
    p{
      font-size: 1rem;
    }
  }
`;

const Icon = styled.div`
    display: flex;
    /* background-color: skyblue; */
    color: #ccc;
    width: 100%;
    padding: 15px;
    gap: 30px;
    justify-content: center;
    img{
        width: 3rem;
        border-radius: 100%;
        cursor: pointer;
        :hover{
          opacity: 0.5;
        }
    }
`