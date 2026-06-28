import React from 'react'
import Navbar from './components/Navbar'
import Heropage from './components/Heropage'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  
  return (
    <div>
    <Navbar/>
    <Heropage/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App