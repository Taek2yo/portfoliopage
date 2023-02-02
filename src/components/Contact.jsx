import React from "react";
import styled from "styled-components";
function Contact() {
  return (
    <Container>
      <Title>
        Contact Me.
      </Title>
      <Content>
      항상 다양한 의견을 듣고 배우겠습니다.
어떤 말씀이건 소중히 담겠습니다.
      </Content>
      <Wrap>
        <SendSection>

        </SendSection>
        <ContactSection>
        <SectionTitle>Blog</SectionTitle>
        <SectionTitle>Github</SectionTitle>
        <SectionTitle>Github</SectionTitle>
        <SectionTitle>Github</SectionTitle>
        </ContactSection>
      </Wrap>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2.5rem;
`;

const Content = styled.div`
  
`
const Wrap = styled.div`
  width: 50vw;
  height: 60vh;
  display: flex;
  border: 1px solid blue;
  justify-content: space-between;
`;

const SendSection = styled.div`
  width: 100%;
  float: left;
  border: 1px solid skyblue;

`;
const ContactSection = styled.div`
  width: 100%;
  float: right;
  border: 1px solid red;
`;


const SectionTitle = styled.div`
  color: whitesmoke;
`
