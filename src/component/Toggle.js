import React ,{useContext} from 'react'
import styled from 'styled-components'
import {ThemeContext} from '../context'
import { mobile } from '../reponsive'
import {NightsStay ,Brightness4 } from '@material-ui/icons';


const Container = styled.div`
width: 50px;
height: 25px;
border-radius: 20px;
border: 1px solid #24292f;
background-color: white;
position: fixed;
top: 60px;
right:10px;
z-index:999;
display: flex;
align-items: center;
justify-content: space-around;
/* ${mobile({right:'100px'})} */

`
const Button = styled.div`
width: 23px;
height: 23px;
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
           <NightsStay onClick={handelClick}  style={{fontSize:'20px',color:'#24292f',cursor:'pointer'}}/>
           <Brightness4 onClick={handelClick}  style={{fontSize:'20px',color:'#24292f',cursor:'pointer'}}/>
           <Button  style={{left:theme.state.darkMode? 0 : 25}}></Button>
        </Container>
    )
}
