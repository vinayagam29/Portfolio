import React from 'react'
import Navbar from './components/Navbar'
import Heropage from './components/Heropage'
import Projects from './components/Projects'
import About from './components/About'


const App = () => {
  
  return (
    <div>
    <Navbar/>
    <Heropage/>
    <Projects/>
    <About/>
    </div>
  )
}

export default App