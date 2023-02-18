import React, {useRef} from "react";
import styled from "styled-components";
import Header from "./Header";
import bg from "../assets/img/bg2.jpg";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        alert("전송되었습니다.");
      }, (error) => {
        alert("전송을 실패했습니다.")
      });
  };

  return (
    <Background>
      <Header />
      <Container>
        <Title>Contact Me.</Title>
        <Content>
        어떠한 의견이던 남겨주신다면 소중히 여기고 배우겠습니다. 감사합니다.
        <br/>
        회신 가능한 연락처를 남겨주시면 빠르게 회신드리겠습니다.
      </Content>
        <Form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name"></input>
          <label>Phone</label>
          <input type="phone" name="phone"></input>
          <label>Email</label>
          <input type="email" name="email"></input>
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </Form>
      </Container>
    </Background>
  );
}

export default Contact;

const Background = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(124, 118, 118, 0.151)
    ),
    url(${bg});
  background-size: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
`;

const Content = styled.div`
  color: white;
  text-align: center;
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
  padding-top: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 70vw;
  }
`;

const Form = styled.form`
  
`