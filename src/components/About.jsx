import React from 'react'
import codingimg from '../assets/images/coding.png'
import reactlogo from '../assets/images/react-logo.png'
import jslogo from '../assets/images/jslogo.png'
const About = () => {
  return (
    <div id='about' className=''>
        <div className='flex flex-col items-center justify-center
         m-auto pt-10 text-2xl sm:text-4xl font-helvetica '>
            <h1 className='mb-4'>{"<"} About me {"/>"}</h1>
    
            <div className='flex flex-col w-full sm:w-3/4 font-coolvetica items-center text-center m-auto px-5 sm:px10 bg- rounded-2xl shadow-inner shadow-navbar border-b border-b-navbar'>
              <p className='p-5 text-lg sm:text-xl'>
                I am a Computer Engineering sophomore from Lahore, Pakistan.
                Currently I develop frontend applications using React js and I am interested in learning full
                stack development. I am in love with tech and my goal is to never stop learning in the fast paced
                world of technology. 
              </p>
              <div className='flex flex-row items-center justify-center'>
             <img src={reactlogo} className='w-16 h-16 sm:w-20 sm:h-20 mt-28 pl-2 sm:mt-32  rounded-full shadow-md shadow-navbar p-2'/>
              <img src={codingimg} className='w-48 sm:w-56 p-4 rounded-full shadow-md shadow-navbar'></img>
              <img src={jslogo} className='w-16 h-16 sm:w-20 sm:h-20 mt-28 pr-2 sm:mt-32  rounded-full shadow-md shadow-navbar p-2'/>
              </div>
              <button className='w-48 sm:w-56 font-helvetica text-xl sm:text-2xl my-4
               p-2 sm:p-3 sm:my-5 border border-white   hover:-translate-y-1 hover:scale-110 duration-300' >Download Resume</button>
            </div>
        </div>
        </div>
  )
}

export default About