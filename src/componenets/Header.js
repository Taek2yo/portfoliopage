import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <>
      <Container>
        <Content>ABOUT</Content>
        <Content>SKILLS</Content>
        <Title>MINTAEK</Title>
        <Content>PROJECT</Content>
        <Content>CONTACT</Content>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  color: wheat;
`;

const Content = styled.div`
    font-size: 20px;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 50px;
`;
