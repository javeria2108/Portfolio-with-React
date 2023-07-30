import React from 'react'

const Contact = () => {
  return (
    <div>
       <div className='flex flex-col items-center justify-center
         mt-5 pt-10 text-2xl sm:text-4xl font-helvetica bg-stars mb-5'>
        <div className='flex flex-col w-full sm:w-3/4 font-helvetica  text-center  m-auto px-5 py-5 sm:px-10 bg- rounded-2xl shadow-inner shadow-navbar border-b border-b-navbar'>
     <h1>{"<"} Contact Me {"/>"}</h1>
     <p className='py-2 text:2xl sm:text-3xl'>You can send me an Email at <br/> 
     javeriazh@gmail.com</p>
      <form className='mx-3 my-5' action="">
        <div></div>
        <input type='text' placeholder='Name..'
        className='bg-black text-white placeholder:text-white my-3 px-8 py-2 rounded-full opacity-60'></input>
       <input type='email' placeholder='Email..'
        className='bg-black text-white placeholder:text-white my-3 px-8 py-2 rounded-full opacity-60'></input>
      <textarea placeholder='type a message...'
       className='bg-black text-white placeholder:text-white my-3 px-8 py-2 rounded-lg opacity-60'></textarea>
       <button className='w-48 sm:w-56 font-helvetica text-xl sm:text-2xl my-4
               p-2 sm:p-3 sm:my-5 border border-white   hover:-translate-y-1 hover:scale-110 duration-300' >Send</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Contact