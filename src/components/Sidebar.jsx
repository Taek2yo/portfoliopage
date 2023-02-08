import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Xbtn from "../assets/img/x-button.png"
import velog from "../assets/img/velog.png"
import github from "../assets/img/github.png"
function Sidebar(props){
    const url1 ='https://github.com/Taek2yo'
    const url2 = 'https://velog.io/@taek2yo'
    const navigate = useNavigate();
    return(
        <Container>

        <div style={{padding:"40px 70px 60px"}}>
            <Close onClick={()=>{props.toggleMenu()}}></Close>
            <Wrapper>
                <Menu><span onClick={()=>{navigate("/")}}>HOME</span></Menu>
                <Menu><span onClick={()=>{navigate("/about")}}>ABOUT</span></Menu>
                <Menu><span onClick={()=>{navigate("/skills")}}>SKILLS</span></Menu>
                <Menu><span onClick={()=>{navigate("/project")}}>PROJECT</span></Menu>
                <Menu><span onClick={()=>{navigate("/contact")}}>CONTACT</span></Menu>
            </Wrapper>
            <div style={{display:"flex" , flexDirection:"column", position:"fixed", bottom:"0", paddingBottom:"20px"}}>
                <Icon>
                    <img src={github} alt="asdasdasd" onClick={()=>{window.open(url1)}}/>
                    <img src={velog} alt="" onClick={()=>{window.open(url2)}}/>
                </Icon>
                <Copy>© 2023. KANG MIN TAEK. <br/>ALL RIGHTS RESERVED.</Copy>
            </div>
        </div>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`
    width: 34.725rem;
    height: 100%;
    background-color: #101010;
    position: fixed;
    z-index: 40;
    top: 0;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 760px){
        width: 50vw;
    }
`

const Close = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background-image: url(${Xbtn});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 90px;
`

const Menu = styled.div`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.1;
    padding: 0.3125rem 0;
    letter-spacing: -0.02em;
    color: #ccc;
    padding: 20px;   
    span{
        cursor: pointer;
    :hover{ 
        color: #1A39AA;
        }
    }
`

const Icon = styled.div`
    display: flex;
    color: #ccc;
    width: 100%;
    font-size: 12px;
    padding: 15px;
    gap: 15px;
    img{
        width: 3rem;
        border-radius: 100%;
        cursor: pointer;
    }
`

const Copy = styled.div`
    color: #ccc;
    width: 100%;
    font-size: 12px;
    padding: 15px;
`