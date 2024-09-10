import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <>
    <footer className=''>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex space-x-4 text-xl'>
          <BsLinkedin/>
          <FaSquareGithub/>
          <FaSquareInstagram/>
          <IoLogoWhatsapp/>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
          <p className='text-sm'>
            &copy; 2024 Portfolio, All rights reserved.
          </p>
          <p className='text-sm'> Created By - Rohan Pise ❤️ </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
