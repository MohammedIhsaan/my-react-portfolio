import React from "react";
import styled, { keyframes } from "styled-components";
import myImage from "../images/ihsaan1.png";
import { mobile } from "../reponsive";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  height: 100vh;
  ${mobile({ flexDirection: "column" })}
`;
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  ${mobile({ marginTop: "50px" })}
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ padding: "10px", paddingTop: "50px", textAlign: "center" })}
`;
const Introduction = styled.h2`
  font-size: 30px;
  font-weight: 300;
`;
const MyName = styled.h1`
  font-size: 50px;
  padding-bottom: 25px;
`;
const JobTitle = styled.div`
  height: 50px;
  overflow: hidden;
`;
const move = keyframes`
 100%{
     transform: translateY(-50px)
 }
`;
const TitleWrapper = styled.div`
  height: 100%;
  animation: ${move} 5s ease-in-out infinite alternate;
  ${mobile({ paddingLeft: "15px" })}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #59b256;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 40%; */
  padding-top: 40px;
  /* ${mobile({ marginRight: "20px" })} */
`;

const Icon = styled.a`
  border: 1px solid #59b256;
  padding: 5px;
  margin-right: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: inherit;
  ${mobile({ margin: "10px" })}

  :hover {
    background-color: #59b256;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  padding-top: 50px;
  ${mobile({ paddingTop: "15px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  ${mobile({ width: "100%" })}
`;

export default function Intro() {
  return (
    <Container className="intro">
      <LeftContainer>
        <Wrapper>
          <Introduction>Hello, My name is</Introduction>
          <MyName>Mohammed Ihsaan</MyName>
          <JobTitle>
            <TitleWrapper>
              <Title>Web Developer</Title>
              <Title>React JS Developer</Title>
            </TitleWrapper>
          </JobTitle>
          <IconWrapper>
            <Icon href="https://github.com/MohammedIhsaan" target="_blank">
              <GitHub style={{ fontSize: "40px" }} />
            </Icon>
            <Icon href="https://www.linkedin.com/in/mohammed-ihsaan-haque-895732222/">
              <LinkedIn style={{ fontSize: "40px" }} />
            </Icon>
            <Icon href="https://twitter.com/ihsaanul_haque" target="_blank">
              <Twitter style={{ fontSize: "40px" }} />
            </Icon>
          </IconWrapper>
        </Wrapper>
      </LeftContainer>
      <RightContainer>
        <Image src={myImage} />
      </RightContainer>
    </Container>
  );
}
