import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
const colors=[,,,,]
const skills=[{name:"Html",percent:90,color:"#2F0048"},{name:"CSS",percent:75,color:"#4634B9"},{name:"Javascript",percent:90,color:"#777777"}
,{name:"React Js",percent:88,color:"#12006E"},{name:"Tailwind CSS",percent:80,color:"#12006E"},{name:"Redux",percent:85,color:"#00D5FA"},
{name:"Recoil",percent:75,color:"#8CC84B"},{name:"Styled Components",percent:80,color:"#00D5FA"}]
const Skills = () => {
  return (
    <div className='flex flex-col items-center justify-center
    mt-5 pt-10 text-2xl sm:text-4xl font-helvetica'>
      <h1 className='mb-4'>{"<"} Skills {"/>"}</h1>
      <div className='flex flex-col w-full sm:w-3/4 font-helvetica  text-center  m-auto px-5 py-5 sm:px-10 bg- rounded-2xl shadow-inner shadow-navbar border-b border-b-navbar'>
        {skills.map((skill,index)=>(
          <div className='m-5 md:mx-10 flex flex-row justify-between' key={index}>
            <h1 className=''>{skill.name}</h1>
            <ProgressBar className= 'w-40 sm:w-48 md:w-64' completed = {skill.percent} bgColor = {skill.color} animateOnRender = {true} />
          </div>
        ))}
        </div>
    </div>
  )
}

export default Skills