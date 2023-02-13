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
    {isOpen ? <Sidebar toggleMenu={toggleMenu}/> : null}
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
`
const Title = styled.div`
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
  margin: 1.875rem;
  cursor: pointer;
  @media screen and (max-width: 760px){
        width: 100vw;
    }
`

const Menu = styled.div`
  width: 35px;
  height: 32px;
  background-image:url(${menu});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1.875rem;
  cursor: pointer;
  :hover{
    opacity: 0.5;
  }
`