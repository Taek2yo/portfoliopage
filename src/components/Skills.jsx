import React from "react";
import styled from "styled-components";
import Header from "./Header";
function Skills() {
  return (
    <Container> 
      <Circle>
        <Title>Front-End</Title>
      </Circle>

      <Circle>
        <Title>Deployment</Title>
      </Circle>

      <Circle>
        <Title>Version Control</Title>
      </Circle>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  margin: 0;
`;

const Wrap = styled.div`

`;

const Circle = styled.div`
  width: 170px;
  height: 170px;
  border: 1px solid rgba(56, 54, 54, 0.408);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #05050568;
  box-shadow: 2px 2px 4px 3px #4b4a54;
  cursor: pointer;
  :hover {
  }
  animation: 120s linear 0s infinite normal none running gvCQql;
`;

const Title = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const List = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid white;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
