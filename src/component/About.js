import React from "react";
import styled from "styled-components";
import myImage from "../images/MohammedIhsaan.jpeg";
import reactImg from "../images/reactjs.png";
import javaScriptImg from "../images/JavaScript-logo.png";
import htmlImg from "../images/html.png";
import cssImg from "../images/css3.png";
import reduxImg from "../images/redux.png";
import bootstrapImg from "../images/bootstrap.png";
import gitImg from "../images/git.png";
import styledComponent from "../images/styledComponent.jpg";
import { mobile } from "../reponsive";

const Container = styled.div`
  display: flex;
  height: 100vh;
  ${mobile({ flexDirection: "column", marginTop: "70px" })}
`;
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

const Card = styled.div`
  width: 60%;
  height: 85vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => (props.type === "back" ? "#59b256" : "white")};
  top: ${(props) => (props.type === "back" ? "-40px" : "0")};
  left: ${(props) => (props.type === "back" ? "100px" : "-100px")};
  ${mobile({
    // width:'90%',
    height: "40vh",
    left: (props) => (props.type === "back" ? "20px" : "-60px"),
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 40px;
  ${mobile({ paddingRight: "0px" })}
`;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  ${mobile({ display: "none" })}
`;
const SkillTitle = styled.h1`
  font-weight: 400;
  text-align: center;
`;
const Desc1 = styled.p`
  margin: 10px 0px;
  ${mobile({ margin: "15px", paddingTop: "20px" })}
`;
const Desc = styled.p`
  font-weight: 300;
  ${mobile({ margin: "15px" })}
`;

const Skills = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${mobile({
    flexDirection: "row",
  })}
`;
const SkillSet = styled.div`
  display: flex;
  ${mobile({
    paddingBottom: "30px",
    flexDirection: "column",
    paddingRight: (props) => (props.type === "right" ? "0px" : "25px"),
    paddingLeft: (props) => (props.type === "right" ? "25px" : "0px"),
  })}
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IconTitle = styled.div``;

const Icon = styled.img`
  width: 110px;
  height: 110px;
  padding: 10px 40px;
`;

export default function About() {
  return (
    <Container className="about">
      <LeftContainer>
        <Card type="back"></Card>
        <Card>
          <Image src={myImage} />
        </Card>
      </LeftContainer>
      <RightContainer>
        <Title>About Me</Title>
        <Desc1>
          Hi, I am Mohammed Ihsaan. Motivated web developer , Passionate about
          building first-class web applications. I have compelted my Post
          Graduation in Structural Engineering(CIVIL). I have developed a keen
          interest for Web Development. I have completed some React.js projects,
          You can check in My Work section.
        </Desc1>
        <Desc>
          My expertise are in React.js, Redux ,JavaScript, HTML5, CSS3,
          Bootstrap, Material UI, and I'm also learning Back-End Development and
          looking forward to be a Full Stack Web Developer.
        </Desc>
        <Skills>
          <SkillTitle style={{ paddingBottom: "15px" }}>
            Languages and Tools
          </SkillTitle>
          <Wrapper>
            <SkillSet>
              <Wrap>
                <IconTitle>REACT.JS</IconTitle>
                <Icon src={reactImg}></Icon>
              </Wrap>
              <Wrap>
                <IconTitle>JAVASCRIPT</IconTitle>
                <Icon src={javaScriptImg}></Icon>
              </Wrap>
              <Wrap>
                <IconTitle>REDUX</IconTitle>
                <Icon src={reduxImg}></Icon>
              </Wrap>
              <Wrap>
                <IconTitle>STYLED-COMPONENT</IconTitle>
                <Icon src={styledComponent}></Icon>
              </Wrap>
            </SkillSet>
            <SkillSet type="right">
              <Wrap>
                <IconTitle>HTML5</IconTitle>

                <Icon src={htmlImg}></Icon>
              </Wrap>
              <Wrap>
                <IconTitle>CSS3</IconTitle>

                <Icon src={cssImg}></Icon>
              </Wrap>
              <Wrap>
                <IconTitle>BOOTSTRAP</IconTitle>
                <Icon src={bootstrapImg}></Icon>
              </Wrap>
              <Wrap>
                <IconTitle>GIT</IconTitle>
                <Icon src={gitImg}></Icon>
              </Wrap>
            </SkillSet>
          </Wrapper>
        </Skills>
      </RightContainer>
    </Container>
  );
}
