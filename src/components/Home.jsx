import React from 'react'
import About from './About'
import Contact from './Contact'
import Layout from './Layout'
const Home = () => {
  return (
    <div>
         <div className="bg-stars bg-cover bg-no-repeat">
    <Layout/>
    </div>
    <About/>
    <Contact/>
    </div>
  )
}

export default Home