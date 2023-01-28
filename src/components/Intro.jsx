import React from "react";
import styled from "styled-components";
import astrocat from "../assets/img/astrocat.gif";
function Intro() {
  return (
    <Wrap>
      <Img />
      <Motto>" Slow and Steady Win the race "</Motto>
    </Wrap>
  );
}

export default Intro;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  align-items: center;

  background-color: #030303;
  width: 100%;
`;

const Img = styled.div`
  width: 300px;
  height: 200px;
  background-image: url(${astrocat});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; ;
`;

const Motto = styled.div`
  color: wheat;
  font-weight: bolder;
  font-size: 3rem;
`;
