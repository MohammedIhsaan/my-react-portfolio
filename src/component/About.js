import React from 'react'
import styled from 'styled-components'
import myImage from '../images/ihsaan.jpeg'
import reactImg from '../images/reactjs.png'
import javaScriptImg from '../images/JavaScript-logo.png'
import htmlImg from '../images/html.png'
import cssImg from '../images/css3.png'
import reduxImg from '../images/redux.png'
import bootstrapImg from '../images/bootstrap.png'

const Container = styled.div`
display: flex;
height: 100vh;
/* align-items: center;
justify-content: space-between; */
`
const LeftContainer = styled.div`
flex: 1;
display: flex;
height: 100%;
align-items: center;
justify-content: center;
/* position: absolute; */

`

const Card = styled.div`
width: 60%;
height: 70vh;
border-radius: 30px;
position: relative;
overflow: hidden;
background-color: ${props=>props.type==='back' ? '#333':'white'};
top: ${props=>props.type==='back' ? '-50px':'0'};
left: ${props=>props.type==='back' ? '100px':'-100px'};
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

const RightContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-right: 40px;
`
const Title = styled.h1`
font-weight: 400;
text-align: center;
`
const Desc1 = styled.p`
margin: 10px 0px;
`
const Desc = styled.p`
font-weight: 300 ;
`

const Skills = styled.div`
padding-top: 40px;
display: flex;
`

const Icon = styled.img` 
width: 120px;
height: 120px;
`



export default function About() {
    return (
        <Container>
            <LeftContainer>
                <Card type='back'></Card>
                <Card >
                <Image src={myImage}/>
                </Card>
            </LeftContainer>
            <RightContainer>
              <Title>About Me</Title>
              <Desc1>
                      I have compelted my Post Graduation in Structural Engineering(CIVIL).
                      I have developed a keen interest for Web Development. 
                      I have completed some React.js projects, You can check in My Work section.
              </Desc1>
              <Desc>
                      My expertise are in React.js, Redux ,JavaScript, HTML5, CSS3, Bootstrap, Material UI, 
                      and also working as freelancer web developer. 
                      I'm also learning Back-End Development and looking forward to be a Full Stack Web Developer.
              </Desc>
             <Skills>
                 <Icon src={reactImg} ></Icon>
                 <Icon src={javaScriptImg} ></Icon>
                 <Icon src={reduxImg} ></Icon>
                 <Icon src={htmlImg} ></Icon>
                 <Icon src={cssImg} ></Icon>
                 <Icon src={bootstrapImg} ></Icon>
             </Skills>
            </RightContainer>
        </Container>
    )
}
