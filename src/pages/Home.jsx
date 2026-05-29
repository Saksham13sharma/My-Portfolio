import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Education from '../components/Education'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default Home
