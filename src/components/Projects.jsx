import React from 'react'
import QuranImg from '../assets/images/QuranWorld.png'
import WeatherImg from '../assets/images/WeatherApp.png'
import PokemonImg from '../assets/images/Pokedox.png'
const ProjectsData=[
    {
        title:"Quran World",
        description: "An interactive and easy to use Quran app made with React, Redux and Tailwind CSS.",
        imageUrl: QuranImg,
        githubLink:"https://github.com/javeria2108/Quran-app-with-React-and-Redux"
    },
    {
        title:"Weather App",
        description: "A javascript weather app which displays weather data of any city",
        imageUrl: WeatherImg,
        githubLink:"https://github.com/javeria2108/Javascript-Weather-App"
    },
    {
        title:"Pokedox",
        description: "A pokemon search app made with React and Axios",
        imageUrl: PokemonImg,
        githubLink:"https://github.com/javeria2108/Pokemon-Search-App-with-React"
    }
]
const Projects = () => {
  return (
    <div id='projects'>
         <div className='flex flex-col items-center justify-center
         mt-5 pt-10 text-2xl sm:text-4xl font-helvetica bg-stars mb-5'>
            <h1 className='mb-4'>{"<"} Projects {"/>"}</h1>
            <div className='flex-wrap  mb-5'>
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
    </div>
  )
}

export default Projects