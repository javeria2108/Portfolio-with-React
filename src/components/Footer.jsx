import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div>
      
      <div className='py-10 sm:px-10 px-3 flex flex-row items-center justify-between
      font-coolvetica text-xl sm:text-2xl'>
        <h1 className='font-laBelle text-2xl sm:text-3xl pl-10 sm:pl-16 md:text-4xl'>Javeria Zaheer</h1>
      <div className='flex flex-col sm:flex-row items-center'>
        <ul >
          <li>
          <AnchorLink href='#about'>
            About
            </AnchorLink>
          </li>
          <AnchorLink href='#projects'>
          <li>Projects</li>
          </AnchorLink>
          <AnchorLink href='#skills'>
          <li>Skills</li>
          </AnchorLink>
          <AnchorLink href='#contact'>
          <li>Contact</li>
          </AnchorLink>
        </ul>
        <div className='flex flex-row items-center justify-center pb-10 sm:text-2xl text-xl pl-5 pr-10 sm:pr-16  pt-10 
      
      text-white '>
           
               <a 
               target='_blank'
               rel= "noreferrer"
               href='https://www.linkedin.com/in/javeria-zaheer-689b87232/' >
                <FontAwesomeIcon icon={faLinkedin} className='mx-3 sm:mx-4 hover:-translate-y-1 hover:scale-110 hover:text-darkBlue duration-300 '/>  
               </a>
            
             
               <a 
               target='_blank'
               rel= "noreferrer"
               href='https://github.com/javeria2108' >
                <FontAwesomeIcon icon={faGithub} className='mx-3 sm:mx-4 hover:-translate-y-1 hover:scale-110 hover:text-darkBlue duration-300 '/>  
               </a>
            
             
               <a 
               target='_blank'
               rel= "noreferrer"
               href='https://twitter.com/_BeingSkeptic' >
                <FontAwesomeIcon icon={faTwitter} className='mx-3 sm:mx-4 hover:-translate-y-1 hover:scale-110 hover:text-darkBlue duration-300 '/>  
               </a>
         
          </div>
          </div>

      </div>
    </div>
  )
}

export default Footer