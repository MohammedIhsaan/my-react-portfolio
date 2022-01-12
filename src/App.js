import {useContext} from 'react'
import styled from 'styled-components'

import About from './component/About';
import Intro from './component/Intro';
import NavBar from './component/NavBar';
import Project from './component/Project';
import Toggle from './component/Toggle'
import { ThemeContext } from './context';

const Conatiner = styled.div`

`

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <Conatiner style={{backgroundColor : darkMode ? '#222' : 'white',color: darkMode &&'white'}}>
      <NavBar/>
      <Toggle/>
      <Intro/>
      <About/>
      <Project/>
    </Conatiner>
  );
}

export default App;
