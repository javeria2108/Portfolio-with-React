import React from 'react'
import { ProjectsData } from './projectsData'
const Projects = () => {
  return (
    <div >
         <div className='flex flex-col items-center justify-center
         mt-5 pt-10 text-2xl sm:text-4xl font-helvetica bg-stars'>
            <h1 className='mb-4'>{"<"} Projects {"/>"}</h1>
        {ProjectsData.map((project,index)=>(
             <div key={index} className='bg-black bg-opacity-60 py-3 flex flex-col w-11/12 sm:w-3/4  items-center text-center my-10 mx-auto px-5 sm:px-10  rounded-2xl shadow-inner shadow-navbar border-b border-b-navbar'>
             <h3 className='font-coolvetica py-3'>{project.title}</h3>
             <p className='text-2xl py-2'>{project.description}</p>
             <div className='image-container w-full sm:w-62 h-48 overflow-hidden'>
             <img src={project.imageUrl} alt={project.title}
             className='w-full h-full object-cover ' />
               </div>
             <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
             className='text-2xl py-3 hover:underline'>
               GitHub Repository {">"}
             </a>
           </div>
        ))}
        </div>
    </div>
  )
}

export default Projects