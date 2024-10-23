import React from 'react'

 import {FaGithub} from  'react-icons/fa'
import {IoLogoVercel} from 'react-icons/io5'
import {FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import Link from "next/link"
const Footer = () => {
  return (
    <div>
        <footer className=" body-font  bg-green-100 rounded-2xl">
  <div className="container p-4 px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
    <Image className='rounded-lg' src={"/organiclogo.jpg"} 
    width={70}
     height={50} 
     alt='logo 
    '/>
      <span className="ml-3 text-2xl  hover:text-black text-green-800 font-bold font-serif ">OrganicFit</span>
    </a>
    <p className=" text-green-600 text-lg  font-serif font-bold  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 OrganicFit 
      
    </p>
     <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link 
      target='blank' href={"https://github.com/SaimaAmjad786"} className="text-gray-600">
      <FaGithub className='text-3xl ' />
      </Link>

      <Link
      target='blank' href={"https://vercel.com/new/saima-amjads-projects"} className="ml-3 text-gray-900">
      <IoLogoVercel className='text-3xl' />
      </Link>
      
      <Link
      target='blank' href={"https://www.linkedin.com/in/saima-amjad-2263012b6/"} className="ml-3 text-blue-500">
        <FaLinkedin className='text-3xl ' />
      </Link>
    </span>  
  </div>
</footer>

    </div>
  )
}

export default Footer