import React, { useRef, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import bg from "../assets/img/bg4.jpg";
import emailjs from '@emailjs/browser';

function Contact() {
  // input 상태 관리
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  
  // onChange
  const onChangeName = (e) =>{
    setName(e.target.value);
  }
  const onChangePhone = (e) =>{
    setNumber(e.target.value);
  }
  const onChangeMail = (e) =>{
    setMail(e.target.value);
  }
  const onChangeMessage = (e) =>{
    setMessage(e.target.value);
  } 

  // email-Js 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        alert("의견을 남겨주셔서 감사합니다. 빠른 시일 내로 회신 드리겠습니다.");
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
      </Content>
        <Form ref={form} onSubmit={sendEmail}>
          <Input>
            <label>Name</label>
            <input type="text" name="name" onChange={onChangeName} value={name}></input>
            <label>Phone</label>
            <input type="phone" name="phone" onChange={onChangePhone} value={number}></input>
            <label>Email</label>
            <input type="email" name="email" onChange={onChangeMail} value={mail}></input>
          </Input>
          <Message>
          <label>Message</label>
          <textarea name="message" onChange={onChangeMessage} value={message}/>
          {name === "" || number === "" || mail === "" || message === "" ? <button type="button">Fill in the blanks</button> : <input type="submit" value="Send Message"/>}
          </Message>
        </Form>
      </Container>
      <Copy>© 2023. KANG MIN TAEK. <br/>ALL RIGHTS RESERVED.</Copy>
    </Background>
  );
}
export default Contact;

const Background = styled.div`
  font-family: var(--font-googleTiltNeon);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(124, 118, 118, 0.151)),url(${bg});
  background-size: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 1200px) {
    height: 100vh;
  }
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
  @media screen and (max-width: 414px) {
    height: 100%;
  }
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
`;

const Content = styled.div`
  font-family: var(--font-googleNotoSerifKR);
  font-size: 1.2rem;
  color: white;
  text-align: center;
  margin-top: 15px;
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
  padding-top: 120px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 70vw;
  }
`;

const Form = styled.form`
  
  margin-top: 50px;
  border: 3px solid whitesmoke;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
  border-radius: 20px;
  width: 70%;
  gap : 20px;
  padding: 20px;
  label{
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
  }
`

const Input = styled.div`
  display: flex;
  flex-direction: column;
  input{
    border: 1px solid gray;
    font-size: 1.1rem;
    border-radius : 12px;
    height: 3vh;
    outline: none;
  }
  label{
    padding-bottom: 10px;
    padding-top: 10px;
  }
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  label{
    margin-top: 12px;
  }
  input{
    margin-top: 20px;
    border: none;
    height: 4.5vh;
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    background: linear-gradient( to right, #8B93D8, #86A8E7, #927EC6 );
    :hover{
      background: #86A8E7;
    }
  }
  button{
    margin-top: 20px;
    border: none;
    height: 4.5vh;
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    background: linear-gradient( to right, #8B93D8, #86A8E7, #927EC6 );
    :hover{
      background: #86A8E7;
    }
  }
  textarea{
    margin-top: 12px;
    width: 100%;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 12px;
    font-size: 16px;
    resize: both;
    outline: none;
  }
`
const Copy = styled.div`
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  padding: 15px;
  padding-top: 20px;
`