import React from 'react'
import styled, {keyframes} from 'styled-components'
import myImage from '../images/ihsaan.jpeg'

const Container = styled.div`
display: flex;
height: 100vh;

`
const LeftContainer = styled.div`
flex: 1;
display: flex;
height: 100vh;
align-items: center;
justify-content: center;
`
const Wrapper =styled.div`
padding: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Introduction = styled.h2`
font-size: 30px;
font-weight: 300;
`
const MyName = styled.h1`
font-size: 50px;
`
const JobTitle = styled.div`
height: 50px;
overflow: hidden;
`
const move = keyframes`
 100%{
     transform: translateY(-50px)
 }
`
const TitleWrapper = styled.div`
height: 100%;
animation: ${move} 5s ease-in-out infinite alternate ;
`

const Title = styled.div`
display: flex;
align-items: center;
height: 50px;
font-size: 30px;
font-weight: bold;
color: #59b256;
`
const Desc = styled.div``

const RightContainer = styled.div`
flex: 1;
padding-top: 50px;
`
const Image = styled.img`
width: 90%;
height: 100%;


`

export default function Intro() {
    return (
        <Container>
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
                <Desc>Motivated web developer , Passionate about building first-class web applications.
                     I have compelted my Post Graduation in Structural Engineering(CIVIL).
                      I have developed a keen interest for Web Development. 
                      I have completed some React.js projects, You can check in My Work section. 
                      My expertise are in React.js, Redux ,JavaScript, HTML5, CSS3, Bootstrap, Material UI, and also working as freelancer web developer. 
                      I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.</Desc>
                </Wrapper>
            </LeftContainer>
            <RightContainer>
                <Image src={myImage}/>
            </RightContainer>
        </Container>
    )
}
