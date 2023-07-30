import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = () => {
  return (
    <div className=''>
        <div className='flex flex-col items-center  justify-between pl-5 pr-3 sm:px-20 pt-10'>
        <motion.div initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
         className='flex flex-col items-center text-center' >
            <h1 className='text-3xl sm:text-6xl'>
                Hi, I'm Javeria Zaheer
                <br/>
                Web Developer
            </h1>
            <h2 className='font-helvetica text-2xl sm:text-3xl text-center pt-5'>Frontend Developer / React and Next js Developer</h2>
           

        </motion.div>
        <AnchorLink href='#contact' className='mt-5 w-36 sm:w-48 border-2 p-2 sm:p-5 text-sm text-center sm:text-2xl
        hover:-translate-y-1 hover:scale-110  hover:bg-darkestBlue duration-300 font-helvetica' >Let's Connect</AnchorLink>
        </div>
        <div className='flex flex-row items-center justify-center pb-10 sm:text-2xl text-xl pl-5 sm:px-20 pt-10 
      
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
  )
}

export default Header