import React ,{useContext} from 'react'
import styled from 'styled-components'
import Sun from '../images/sun.png'
import Moon from '../images/moon.png'
import {ThemeContext} from '../context'
import { mobile } from '../reponsive'

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
/* ${mobile({right:'100px'})} */

`
const Image = styled.img`
width: 22px;
height: 22px;
cursor: pointer;

`
const Button = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: #999;
position: absolute;

`

export default function Toggle() {
    const theme = useContext(ThemeContext)
    const handelClick = ()=>{
        theme.dispatch({type:'TOGGLE'})
    }
    return (
        <Container>
           <Image onClick={handelClick} style={{width:'15px',height:'15px',paddingRight:'2px'}} src={Moon}/>
           <Image onClick={handelClick} src={Sun}/>
           <Button  style={{left:theme.state.darkMode? 0 : 25}}></Button>
        </Container>
    )
}
