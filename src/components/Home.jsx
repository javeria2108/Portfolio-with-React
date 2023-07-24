import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Home = () => {
  return (
    <div>
        <div className='flex flex-row justify-between px-20 pt-10'>
        <div className='flex flex-col items-start' >
            <h1 className='text-5xl'>
                Hi, <br/> I'm Javeria
                <br/>
                Web Developer
            </h1>
            <h2 className='pt-5'>Frontend Developer / React and Next js Developer</h2>
           

        </div>
        <Link to="/contact" className='m-auto border-2 p-3 sm:p-5 text:xl sm:text-2xl' >CONTACT ME</Link>
        </div>
        <div className='flex flex-row mr-3 sm:mr-8 sm:text-xl text-lg px-20 pt-10
         text-white '>
              
                  <a 
                  target='_blank'
                  rel= "noreferrer"
                  href='https://www.linkedin.com/in/javeria-zaheer-689b87232/' >
                   <FontAwesomeIcon icon={faLinkedin} className='mx-3 sm:mx-4 hover:-translate-y-1 hover:scale-110 hover:text-greybg duration-300 '/>  
                  </a>
               
                
                  <a 
                  target='_blank'
                  rel= "noreferrer"
                  href='https://github.com/javeria2108' >
                   <FontAwesomeIcon icon={faGithub} className='mx-3 sm:mx-4 hover:-translate-y-1 hover:scale-110 hover:text-greybg duration-300 '/>  
                  </a>
               
                
                  <a 
                  target='_blank'
                  rel= "noreferrer"
                  href='https://twitter.com/_BeingSkeptic' >
                   <FontAwesomeIcon icon={faTwitter} className='mx-3 sm:mx-4 hover:-translate-y-1 hover:scale-110 hover:text-greybg duration-300 '/>  
                  </a>
            
             </div>
    </div>
  )
}

export default Home