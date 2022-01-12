import React from 'react'
import styled from 'styled-components'
import Sun from '../images/sun.png'
import Moon from '../images/moon.png'


const Container = styled.div`
width: 50px;
height: 25px;
border-radius: 20px;
border: 1px solid #999;
background-color: white;
position: fixed;
top: 60px;
right:10px;
z-index:999;
display: flex;
align-items: center;
justify-content: space-between;
`
const Image = styled.img`
width: 22px;
height: 22px;
`
const Button = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: #999;
position: absolute;
cursor: pointer;
`

export default function Toggle() {
    return (
        <Container>
           <Image src={Sun}/>
           <Image style={{width:'15px',height:'15px'}} src={Moon}/>
           <Button></Button>
        </Container>
    )
}
