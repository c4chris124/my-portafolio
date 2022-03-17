import React from 'react'
import About from './components/About/About'
import Intro from './components/Intro/Intro'
import ProjectList from './components/ProjectList/ProjectList'


const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProjectList/>
    </div>
  )
}

export default App