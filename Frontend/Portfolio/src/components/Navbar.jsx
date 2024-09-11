import React, { useState } from 'react'
import pic from "/Pic.jpg"
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {Link} from 'react-scroll'
function Navbar() {
  const [menu , setMenu] = useState(false);
  const navItems = [
    {
      id:1,
      text:"Home"
    },
    {
     id:2,
     text:"About us"
    },
    {
      id:3,
      text:"Projects",
    },
    {
      id:4,
      text:"Skills"
    },
    {
      id:5,
      text:"Contact"
    }

  ]
  return (
    <>
    <div className='w-full px-4 py-2 md:px-15 md:mx-auto md:items-center  h-auto shadow-lg sticky bg-white top-0 z-10'>
    <div className="  md:flex-row  flex justify-between ">
      <div className='flex space-x-2'>
         <div>
          <img src={pic }className="h-12 w-12 rounded-full" alt="" />
         </div>
         <div>
          <h1 className='font-semibold text-xl cursor-pointer'>Rohan Pise</h1>
          <p className='font-semibold text-sm'>Web Developer</p>
         </div>
      </div>

      <div >
          <ul className='hidden font-semibold md:flex md:space-x-8 text-xl'>
           {
            navItems.map(({id,text})=>(
              <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'> {text}</Link>
               </li>
            ))
           }
          </ul>


          <div className='md:hidden' onClick={()=>setMenu(!menu)}>{menu ? <IoClose /> :<IoMdMenu/> }</div>
      </div>

      
      
    </div>
{
  menu && (
    <div >
<ul className='md:hidden flex flex-col items-center justify-center h-screen font-semibold text-xl space-y-3'>
{
            navItems.map(({id,text})=>(
              <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                <Link 
                onClick={()=>setMenu(!menu)}
                to={text} smooth={true} duration={500} offset={-70} activeClass='active'> {text}</Link>
                </li>
            ))
           }
</ul>
</div>
  )
}


</div>

</>
  )
}

export default Navbar
