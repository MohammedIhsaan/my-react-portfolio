import styled from 'styled-components'
import About from './component/About';
import Intro from './component/Intro';
import NavBar from './component/NavBar';
import Project from './component/Project';

const Conatiner = styled.div`

`

function App() {
  return (
    <Conatiner>
      <NavBar/>
      <Intro/>
      <About/>
      <Project/>
    </Conatiner>
  );
}

export default App;
