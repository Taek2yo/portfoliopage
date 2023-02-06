import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
function Sidebar(props){
    const navigate = useNavigate();
    return(
        <Container>
            <span onClick={()=>{props.toggleMenu()}}>닫기</span>
            <ul className="menu-wrapper">
                <li onClick={()=>{navigate("/")}}>HOME</li>
                <li onClick={()=>{navigate("/about")}}>ABOUT</li>
                <li onClick={()=>{navigate("/skills")}}>SKILLS</li>
                <li onClick={()=>{navigate("/project")}}>PROJECT</li>
                <li onClick={()=>{navigate("/contact")}}>CONTACT</li>
            </ul>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
    width: 34.375rem;
    height: 100%;
    background-color: #101010;
    position: fixed;
    z-index: 40;
    top: 0;
    right: 0;
    bottom: 0;
    li{
        cursor: pointer;
    }
`