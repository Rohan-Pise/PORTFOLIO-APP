import React from 'react'
import NoteNest from '../../public/NoteNest.mp4'
import Wapp from '../../public/Wapp.mp4'
import Pfio from '../../public/Pfio.mp4'

function Projects() {
 const cardItems=[
    {
      id:1,
      logo:NoteNest,
      name:" NoteNest ",
      description:"It is a Note Making web app , In which user can SIGNUP and LOGIN to its account and can CREATE , READ UPDATE and DELETE the notes , It uses JWT token based Authentication along with the frontend technologies such as REACT.JS ,and Backend such as EXPRESS.JS , NODE along with MONGO DB as a database, Multiple users can create their account and make their own notes without hindering any ohters account ,It is a Software as a Service (SaaS) which can handle multitenancy ",
      link:"https://github.com/Rohan-Pise/NoteNest"
    },
    {
      id:2,
      logo:Pfio,
      name:"Portfolio Website",
      description:"It is a Website which uses react to showcase varoius aspects of my Journey ,IT uses React a javascript library to build reusable components and put all the components together to make a fully-fledged single page Application along with it Tailwind CSS is a highly customizable, utility-first CSS framework designed to rapidly build custom user interfaces. Unlike traditional CSS frameworks (like Bootstrap), which provide pre-designed components, Tailwind provides low-level utility classes that can be combined to build any design directly in your markup.",
       link:"https://github.com/Rohan-Pise/NoteNest"
    },
    {
      id:3,
      logo:Wapp,
      name:"Weather App",
      description:"It shows the weather details in real time created using HTML, CSS ,JS and OPEN WEATHER API to fetch the weather information , The user can put the city information in the input box and the api can provide them with the weather details in real time",
       link:"https://github.com/Rohan-Pise/weather-app"

    }
  ] 

  const handleClick=(link)=>{
      window.open(link ,'_blank');
  }
  return (
    <>
      <div name='Projects' 
      className="w-full px-4 py-2 md:px-15  md:items-center  h-auto my-20  ">
      <h1 className='text-3xl mb-5'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
      {cardItems.map(({ id, logo, name ,description, link}) => (
        <div key={id} className=" mt-4 border rounded-lg p-4 bg-white shadow-md hover:scale-105 duration-300">
          <div className="mb-4">
            <video className="w-full h-auto rounded-lg" controls>
              <source src={logo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-sm text-gray-700">
            <strong><span className='bg-green-400 rounded-sm'>{name}</span></strong>
            <p className="mt-2">
              {description}
            </p>
          </div>
          <div className="mt-4 flex justify-center ">
            <button onClick={()=> handleClick(link)} className="bg-blue-500 text-white py-2 px-4 rounded text-sm text-center">Source-Code</button>
          </div>
        </div>
      ))}

</div>
        
      </div> 
      <hr />
    </>
  )
}

export default Projects
