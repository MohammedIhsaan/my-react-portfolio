import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import projectData from '../component/projectData'

const Container = styled.div`
padding: 50px 100px;
display: flex;
flex-direction: column;
align-items: center;
`
const TopContainer = styled.div``

const Title = styled.h1`
font-size: 50px;
font-weight: 600;
`

const BottomContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
`

export default function Project() {
    return (
        <Container>
            <TopContainer>
                <Title>My Projects</Title>
            </TopContainer>
            <BottomContainer>
                {
                    projectData.map(item=> <ProjectCard data={item}/>)
                }
               
                
            </BottomContainer>
        </Container>
    )
}
