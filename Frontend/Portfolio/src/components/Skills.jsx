import React from 'react'
import java from '../../public/java.png'
import javascript from '../../public/javascript.png'
import html from '../../public/html.png'
import css from '../../public/css.jpg'
import mongodb from '../../public/mongodb.jpg'
import node from'../../public/node.png'
import express from'../../public/express.png'
import react from '../../public/reactjs.png'

function Skills() {
  const skillSet=[
    {
      id:1,
      logo:java,
      name:"Java"
    },
    {
      id:2,
      logo:javascript,
      name:"Javascript"
    },
    {
      id:3,
      logo:html,
      name:"HTML"
    },
    {
      id:4,
      logo:css,
      name:"CSS"
    },
    {
      id:5,
      logo:react,
      name:"React.JS"
    },
    {
      id:6,
      logo:node,
      name:"Node.JS"
    },
    {
      id:7,
      logo:express,
      name:"Express.JS"
    },
    {
      id:8,
      logo:mongodb,
      name:"MongoDB"
    },

  ]
  return (
    <>
      <div name='Skills'
       className="w-full px-4 py-2 md:px-15  md:items-center  h-auto my-20  ">
      <h1 className='text-3xl mb-5'>Skills</h1>

      <div className='grid grid-cols-1 md:grid md:grid-cols-4 gap-4'>
       {
        skillSet.map(({id , logo , name})=>(
         <div className='md:w-[200px] md:h-[200px] rounded-full shadow-lg p-1 hover:scale-110 duration-300 flex flex-col justify-center items-center' key={id}>
           <img src={logo} 
           className='w-[150px] pt-5 rounded-full border-none' />
         <div className='text-sm'>
          {name}
         </div>
         </div>
        ))
       }
      </div>
      </div>
      <hr />
    </>
  )
}

export default Skills
