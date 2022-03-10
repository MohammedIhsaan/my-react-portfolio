import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
import { projectData, projectData2 } from "../component/projectData";

import { mobile } from "../reponsive";

const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({ marginTop: "270px", padding: "10px" })}
`;
const TopContainer = styled.div``;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 40px;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export default function Project() {
  return (
    <Container className="project">
      <TopContainer>
        <Title>My Projects</Title>
      </TopContainer>
      <BottomContainer>
        {projectData.map((item, i) => (
          <ProjectCard key={i} data={item} />
        ))}
      </BottomContainer>
      <BottomContainer>
        {projectData2.map((item, i) => (
          <ProjectCard2 key={i} data={item} />
        ))}
      </BottomContainer>
    </Container>
  );
}
