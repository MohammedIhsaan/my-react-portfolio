import React from 'react'
import styled from 'styled-components'
import { mobile } from '../reponsive'

const Container = styled.div`
width: 30%;
${mobile({width:'100%',paddingTop:'20px',paddingLeft:'10px'})}

`
const TopContainer = styled.div``

const Title = styled.h3`
text-align: center;
`

const BottomContainer = styled.div`
width: 90%;
height: 40vh;
margin: 20px 10px;
border: 2px solid #24292f;
border-radius: 10px 10px 0px 0px;
overflow: hidden;
`
const Browser = styled.div`
z-index: 1;
height: 20px;
display: flex;
align-items: center;
background-color: #24292f;
`
const Circle = styled.div`
width: 6px;
height: 6px;
border-radius: 50%; 
background-color: white;
margin: 3px;
`
const Project = styled.a``
const Image = styled.img`
z-index: 2;
width: 100%;
object-fit: cover;
transition: all 10s ease;
:hover{
    transform: translateY(-100%);
}
`

export default function ProjectCard({data}) {
    return (
        <Container key={data.id}>
            <TopContainer>

            <Title>{data.projectName}</Title>
            </TopContainer>
            <BottomContainer>
                <Browser>
                  <Circle/>
                  <Circle/>
                  <Circle/>
                </Browser>
                <Project href={data.projectLink} target='_black' >
                    <Image src={data.projectImage} />
                </Project>
            </BottomContainer>
        </Container>
    )
}
