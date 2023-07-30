import React from 'react'
import About from './About'
import Contact from './Contact'
import Layout from './Layout'
import Skills from './Skills'
import Footer from './Footer'
import Certificates from './Certificates'
import Projects from './Projects'
const Home = () => {
  return (
    <div>
         <div className="bg-stars bg-cover bg-no-repeat">
    <Layout/>
    </div>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>

    </div>
  )
}

export default Home