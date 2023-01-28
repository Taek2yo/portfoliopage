import React from "react";
import styled from "styled-components";

function Header(props){
  return (
    <>
      <Container>
        <Content onClick={()=>{props.setChange('about')}}>ABOUT</Content>
        <Content onClick={()=>{props.setChange('skills')}}>SKILLS</Content>
        <Title onClick={()=>{props.setChange('')}}>MINTAEK</Title>
        <Content onClick={()=>{props.setChange('project')}}>PROJECT</Content>
        <Content onClick={()=>{props.setChange('contact')}}>CONTACT</Content>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  color: wheat;
`;

const Content = styled.div`
    font-size: 20px;
    cursor: pointer;
    :hover{
      color:  white;
    }
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 50px;
    cursor: pointer;
`;
