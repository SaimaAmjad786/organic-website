import React from 'react'
import Image from "next/image"
import Link from "next/link"
function Navbar() {
  return (
    <div className="z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-green-100 rounded-lg">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-bold items-center  mb-4 md:mb-0">
      <Image src={"/organiclogo.jpg"}
      width={80}
      height={50}
      alt='logo'
      className='rounded-xl'/>
      <span className="ml-2 text-3xl font-bold font-serif text-green-700 hover:text-black">OrganicFit</span>
    </a>
    <nav className="md:ml-auto  items-center text-base justify-center">
      <Link  className="mr-7 hover:text-black text-green-600 font-bold  text-xl" href={"#Home"}>Home</Link>
      <Link  className="mr-7 hover:text-black text-green-600 font-bold  text-xl" href={"#About"}>About</Link>
      <Link  className="mr-7 hover:text-black text-green-600 font-bold  text-xl" href={"#Product"}>Product</Link>
      <Link className="mr-7 hover:text-black text-green-600 font-bold  text-xl" href={"#Contact"}>Contact</Link>
    </nav>
  </div>
</header>

    </div>
  )
}

export default Navbar