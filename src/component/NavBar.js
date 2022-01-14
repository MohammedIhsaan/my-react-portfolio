import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll"
import { mobile} from '../reponsive'
import {Menu } from '@material-ui/icons';




const Container = styled.div`
background-color: #24292f;
color: white;
font-size: 18px;
display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
padding: 10px 10px;
position: fixed;
width: 100%;
z-index: 4;
${mobile({height:'20px',paddingLeft:'0px'})}

`

const Logo = styled.div`
font-weight: 500;
${mobile({paddingLeft:'10px'})}

`

const Menus = styled.div`
display: flex;
justify-content: space-between;
position: relative;
padding-right: 20px;

@media (max-width:680px){
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    max-height: ${({isOpen})=>isOpen? "300px": "0px"};
    transition: max-height 1s ease-in-out;
    /* padding: 10px; */
    background-color:#24292f;
}
`
const MenuItem = styled.div`
font-size: 15px;
font-weight: 500;
cursor: pointer;
margin-left: 25px;

${mobile({padding:'5px',paddingLeft:'0px'})}


&:hover{
    opacity: 0.8;
    transform: scale(1.1);
}
`
const Toggle = styled.span`
display: none;
${mobile({display:'flex'})}
color: white;
background: #24292f;
padding-right: 20px;
`
export default function NavBar() {

    const [isOpen,setIsOpen]=useState(false)

    return (
        <Container>
                <Logo>MOHAMMED IHSAANUL HAQUE</Logo>
                <Toggle onClick={()=>setIsOpen(!isOpen)}>
                <Menu ></Menu>
                </Toggle>         
                <Menus isOpen={isOpen}>
                  <MenuItem ><Link to='intro' onClick={()=>setIsOpen(!isOpen)}>HOME</Link>  </MenuItem>
                  <MenuItem ><Link to='about' onClick={()=>setIsOpen(!isOpen)}>ABOUT</Link> </MenuItem>
                  <MenuItem ><Link to='project' onClick={()=>setIsOpen(!isOpen)}>MY PROJECT</Link> </MenuItem>
                </Menus>         
                
        </Container>
    )
}
