import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Header from "./Header";
function Project() {
  return (
    <Container>
      <Header/>
      <Box></Box>
    </Container>
  );
}

export default Project;

const Container = styled.div`
 background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  margin: 0;
`;

const Box = styled.div`
  
`
