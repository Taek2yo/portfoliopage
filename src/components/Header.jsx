import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
function Header(){
  const navigate = useNavigate();
  return(
    <Container>
      <div className="navbar">
        <Title className="navbar-logo">
            M I N T A E K .
        </Title>
        <ul className="navbar-menu">
            <li className="home" onClick={()=>{navigate('/')}}>HOME</li>
            <li onClick={()=>{navigate('/about')}}>ABOUT</li>
            <li onClick={()=>{navigate('/skills')}}>SKILLS</li>
            <li onClick={()=>{navigate('/project')}}>PROJECT</li>
            <li onClick={()=>{navigate('/contact')}}>CONTACT</li>
        </ul>
        <ul className="navbar-right">
            <li>GITHUB</li>
            <li>BLOG</li>
        </ul>
        </div>
    </Container>
  )
}

export default Header;


const Container = styled.div`
  background-color: gray;
  .navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  li {
    list-style: none;
    cursor: pointer;
  }
  .navbar-menu{
    display: flex;
    color: white;
    font-size: 1.2rem;
  }
  .navbar-menu li{
    padding: 8px 12px;
    :hover{
      color:black;
    }
  }
  .navbar-right{
    margin-right: 40px;
    display: flex;
    gap: 30px;
  }
  .home {
    display: none;
  }
@media screen and (max-width: 768px) {
  .navbar{
    flex-direction: column;
    align-items: flex-start;
  }
  .navbar-menu{
    flex-direction: column;
    width: 100%;
  }
  .navbar-right{
    width: 100%;
  }
  .home {
    display: block;
  }
}
`
const Title = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding-left: 20px;
`
