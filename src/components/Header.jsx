import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import menu from "../assets/img/menu.png"
import Sidebar from "./Sidebar";
function Header(){
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () =>{
    setIsOpen(isOpen => !isOpen)
  }
  return(
  <>
    <Container>
        <Title onClick={()=>{navigate('/')}} >
            M I N T A E K .
        </Title>
        <Menu onClick={()=>{toggleMenu()}}/>
    </Container>
    <Sidebar toggleMenu={toggleMenu} isOpen={isOpen}/>
  </>
  )
}

export default Header;


const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #101010;
  box-shadow: 2px 2px 2px 2px ;
  z-index: 1;
`
const Title = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 1.875rem;
  font-family: var(--font-googleTiltNeon);
  cursor: pointer;
  @media screen and (max-width: 760px){
        width: 100vw;
    }
`

const Menu = styled.div`
  width: 35px;
  height: 35px;
  background-image:url(${menu});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1.875rem;
  cursor: pointer;

`