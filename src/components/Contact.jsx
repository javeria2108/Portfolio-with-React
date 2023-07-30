import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';
const Contact = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [Submit,setSubmit]=useState(false)
  const onSubmit=(data)=>{
    setSubmit(true);
    emailjs.send('service_mcnxzhe', 'template_onciros',{
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
        }, 'JNPp3hnmLUJ8SEULM')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    

  }
  return (
    <div id='contact'>
       <div className='flex flex-col items-center justify-center
         mt-5 pt-10 text-2xl sm:text-4xl font-helvetica bg-stars mb-5'>
        <div className='flex flex-col w-full sm:w-3/4 font-helvetica  text-center  m-auto px-5 py-5 sm:px-10 bg- rounded-2xl shadow-inner shadow-navbar border-b border-b-navbar'>
     <h1>{"<"} Contact Me {"/>"}</h1>
    
      <form onSubmit={handleSubmit(onSubmit)} className='mx-3 my-5 flex flex-col'>
        <div></div>
        <input type='text' placeholder='Name..' {...register("name", {
            required: "Required",
           
          })}

        className='bg-black text-white placeholder:text-white my-3 px-8 py-2 rounded-full opacity-60'></input>
        <p className="text-sm text-center text-red-700 m-1"> {errors.name && errors.name.message}</p>
       <input type='email' placeholder='Email..'
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
        className='bg-black text-white placeholder:text-white my-3 px-8 py-2 rounded-full opacity-60'></input>
       <p className="text-sm text-center text-red-700 m-1"> {errors.email && errors.email.message}</p>
      <textarea placeholder='type a message...'
        name="message"
        {...register("message", {
           required: "Required",
          
         })}
       className='bg-black text-white placeholder:text-white my-3 px-8 py-2 rounded-lg opacity-60'></textarea>
      <p className="text-sm text-center text-red-700 m-1"> {errors.message && errors.message.message}</p>
       <button className='w-48 sm:w-56 font-helvetica text-xl sm:text-2xl my-4
               p-2 sm:p-3 sm:my-5 border border-white   hover:-translate-y-1 hover:scale-110 duration-300' >Send</button>
      </form>
      {Submit &&  <p className='py-2 text:2xl sm:text-3xl'>Email sent to  <br/> 
     javeriazh@gmail.com</p>}
      </div>
      </div>
    </div>
  )
}

export default Contact