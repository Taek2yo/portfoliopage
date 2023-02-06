import React from "react";
import styled from "styled-components";
function Sidebar(props){
    console.log(props.toggleMenu)
    return(
        <Container>
            <span onClick={()=>{props.toggleMenu()}}>닫기</span>
            <ul className="menu-wrapper">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SKILLS</li>
                <li>PROJECT</li>
                <li>CONTACT</li>
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
`