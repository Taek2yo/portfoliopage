import React from "react";
import styled from "styled-components";

function Intro(props) {
  return (
    <Container>
      <Title>Welcome to my space.</Title>
      <Btn onClick={()=>{props.change.setChange('about')}}>Go space</Btn>
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  gap: 20px;
 /*  background-color: #030303; */
`;

const Title = styled.div`
  color: white;
  font-size: 50px;
  font-weight: bold;
`

const Btn = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  text-align: center;
  width: 100px;
  cursor: pointer;
  :hover{
    background-color: white;
  }
`