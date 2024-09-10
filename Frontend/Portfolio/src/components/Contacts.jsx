import React from 'react'
import {useForm} from 'react-hook-form';
import axios from "axios"
import toast from 'react-hot-toast'

function Contacts() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const  onSubmit = async (data) => {
    const userInfo = {
      name : data.name,
      email : data.email,
      message:data.message

    }
    try{
      await axios.post("https://getform.io/f/amdpolxb" , userInfo);
      toast.success("Your msg has been sent");
    }catch(error){
      console.log(error);
      toast.error("Something went Wrong");
    }
  }

  return (
    <>
   
    <div name='Contact'
     className="w-full px-4 py-2 md:px-15  md:items-center  h-auto my-20  ">
    <h1 className='text-3xl mb-5'>Contact Me</h1>
    <span className='text-lg'>Please fill the form given below to contact me</span>
    <div className='text-lg flex flex-col  items-center'>
      <form 
      onSubmit={handleSubmit(onSubmit)}
     //</div> action="https://getform.io/f/amdpolxb" 
     //method='POST' 
     className='bg-slate-200 pl-1 w-96 flex flex-col items-center rounded-md mt-4 pb-4 pt-4 text-sm font-normal'>
        <h1 className='text-lg mb-6'>Send Your Message</h1>
        <div className='text-xl'>

          
          <span className='text-lg'>Enter Name:</span>
          <br />

          <input
           {...register("name", { required: true })} 
          className= 'rounded-md font-normal ' type="text"  placeholder='' name='name' />
           {errors.name && <span className='text-sm pl-1'>required*</span>}
          <br />


          <span className='text-lg'>Email Address:</span>
          <br />

          <input
          {...register("email", { required: true })} 
          className= 'rounded-md  ' type="email" name='email' placeholder='' />
          {errors.email && <span className='text-sm pl-1'> required*</span>}
          <br />



          <span className='text-lg'>Message:</span>

          <br />
          <textarea 
          {...register("msg", { required: true })} 
          className= 'rounded-md ' type="text" name='msg' placeholder='' />
          {errors.msg && <span className='text-sm pl-1'>required*</span>}


        </div>
        <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
      </form>
      <button onClick={()=>window.open('https://drive.google.com/file/d/1ZxzOGCL489cjkRyNPVPiYQX0L7BhLMeV/view?usp=sharing','_blank')} className='text-lg p-3 bg-green-500 text-white hover:bg-green-700 shadow-lg rounded-lg mt-6'>Get-Resume</button>
    </div>
      
    </div>

    </>
  )
}

export default Contacts
