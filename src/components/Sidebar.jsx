import React from "react";
import { useNavigate } from "react-router";
import styled, { keyframes,css } from "styled-components";
import Xbtn from "../assets/img/x-button.png"
import velog from "../assets/img/velog.png"
import github from "../assets/img/github.png"
function Sidebar(props){
    const url1 ='https://github.com/Taek2yo'
    const url2 = 'https://velog.io/@taek2yo'
    const navigate = useNavigate();
    return(
        <Container /*  disappear={!props.toggleMenu()} */>
        <Wrap>
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
        </Wrap>
        </Container>
    )
}

export default Sidebar;

const slideOpen = keyframes`
    from{
        transform: translateX(30.725rem);
    }
    to{
        transform: translateX(0px);
    }
`
const slideClose = keyframes`
    from{
        transform: translateX(0px);
    }
    to{
        transform: translateX(30.725rem);
    }
`
const Container = styled.div`
    width: 30.725rem;
    height: 100%;
    background-color: #101010;
    position: fixed;
    z-index: 40;
    top: 0;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 768px){
        width: 70%
    }
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-name: ${slideOpen};
    ${props =>
    props.disappear &&
    css`
      animation-name: ${slideClose};
    `}
    animation-fill-mode: forwards;
`

const Close = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background-image: url(${Xbtn});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`
const Wrap = styled.div`
    padding: 40px 70px 60px;
    @media screen and (max-width: 768px){
        width: 50%;
        padding: 20px 35px 30px;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 90px;
`

const Menu = styled.div`
    font-size: 2rem;
    font-family: var(--font-googleTiltNeon);
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
    transition: all 0.8s ease-out;
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
        :hover{
          opacity: 0.5;
        }
    }
`

const Copy = styled.div`
    color: #ccc;
    width: 100%;
    font-size: 12px;
    padding: 15px;
`