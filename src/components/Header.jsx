import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
function Header(){
  const navigate = useNavigate();
  return (
      <Container>
        <Title onClick={()=>{navigate('/')}}>MinTaek .</Title>
        <Content onClick={()=>{navigate('/about')}} >ABOUT</Content>
        <Content onClick={()=>{navigate('/skills')}}>SKILLS</Content>
        <Content onClick={()=>{navigate('/project')}}>PROJECT</Content>
        <Content onClick={()=>{navigate('/contact')}}>CONTACT</Content>
      </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
`

const Content = styled.div`
  cursor: pointer;
`

const Title = styled.div`
  font-size: 1.7rem;
  color: white;
  cursor: pointer;
`