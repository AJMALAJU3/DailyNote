import React from 'react'
import { FiMenu, FiSearch, FiSettings } from 'react-icons/fi';
import profilePic from '../../assets/dust.jpg';

function Header() {
  return (
<nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 text-white shadow-md z-50 border-b border-gray-600 h-16">
      <div className="flex items-center space-x-2">
      <FiMenu className="text-2xl text-teal-400 cursor-pointer " />
        <span className="text-xl  font-bold">DAILY NOTE</span>
      </div>

      <div className="flex items-center bg-zinc-800 rounded-full px-3 py-1 w-full max-w-md">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white px-2 w-full"
        />
      </div>

      <div className="flex items-center space-x-4">
        {/* <FiMenu className="text-2xl cursor-pointer hover:text-gray-400" /> */}
        <FiSettings className="text-2xl cursor-pointer hover:text-gray-400" />
        <img
          src={profilePic}
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover cursor-pointer border-2 border-gray-600"
        />

      </div>
    </nav>
  )
}

export default Header
