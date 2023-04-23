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
      <div className="p-2 mt-3 mx-2 flex items-center rounded-md px-4 cursor-pointer hover:bg-senary  hover:border border-black-500">
        <span className="bg-senary rounded-2xl p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
        </span>
        <span className="text-xm ml-4 font-medium">Dashboard</span>
      </div>
      </Link>
      <Link to="/yourpodcast"> 
      <div className="p-2.5 mt-3 mx-2 flex items-center rounded-md px-4 cursor-pointer hover:bg-senary  hover:border border-black-500">
      <span className="bg-senary rounded-2xl p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
        </svg>

        </span>
        <span className="text-xm ml-4 font-medium">Your Podcast</span>
      </div>
      </Link>
      <Link to="/fav"> 
      <div className="p-2.5 mt-3 mx-2 flex items-center rounded-md px-4 cursor-pointer hover:bg-senary  hover:border border-black-500">
      <span className="bg-senary rounded-2xl p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>

        </span>
        <span className="text-xm ml-4 font-medium">Favourites</span>
      </div>
      </Link>
      <Link to="/audiopodcast"> 
      <div className="p-2.5 mt-3 mx-2 flex items-center rounded-md px-4 cursor-pointer hover:bg-senary  hover:border border-black-500">
      <span className="bg-senary rounded-2xl p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
        <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
        </svg>
        </span>
        <span className="text-xm ml-4 font-medium">Audio Podcast</span>
      </div>
      </Link>
      <Link to="/videopodcast"> 
      <div className="p-2.5 mt-3 mx-2 flex items-center rounded-md px-4 cursor-pointer hover:bg-senary  hover:border border-black-500">
      <span className="bg-senary rounded-2xl p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
        </svg>

        </span>
        <span className="text-xm ml-4 font-medium">Video Podcast</span>
      </div>
      </Link>
      <Link to="/profile"> 
      <div className="p-2.5 mt-3 mx-2 flex items-center rounded-md px-4 cursor-pointer hover:bg-senary  hover:border border-black-500">
      <span className="bg-senary rounded-2xl p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
        </span>
        <span className="text-xm ml-4 font-medium">Profile</span>
      </div>
      </Link>
      </div>
  )
}

export default Sidebar