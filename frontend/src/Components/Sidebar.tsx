import React from 'react'
import { Link } from "react-router-dom";

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='bg-back flex-col h-screen font-montserrat '>
        <span className="flex justify-center items-center  text-xl">
        <img src={require("../assets/icon_podify.png")} alt=""className="object-scale-down h-12"/>
      <Link to="/" className="ml-4">
        Home
      </Link>
      </span>
      <hr className="border-1 border-black-500"/>
      <Link to="/dashboard"> 
      <div className="p-2.5 mt-3 mx-2 flex items-center rounded-md px-4 cursor-pointer hover:bg-senary  hover:border border-black-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span className="text-xm ml-4 font-medium">Dashboard</span>
      </div>
      </Link>
      <Link to="/"> 
      <div className="p-2.5 mt-3 mx-2 flex items-center rounded-md px-4 cursor-pointer hover:bg-senary  hover:border border-black-500">
        <i className="">i</i>
        <span className="text-xm ml-4 font-medium">Your Podcast</span>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar