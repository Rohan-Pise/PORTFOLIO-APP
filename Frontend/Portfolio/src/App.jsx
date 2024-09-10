

import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import {Toaster} from "react-hot-toast";
function App() {
  return (
    <>
    <div className='text-3xl'>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Skills/>
     <Contacts/>
     <Footer/>

    </div>
    <Toaster/>
    </>
  )
}

export default App
