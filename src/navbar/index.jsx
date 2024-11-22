import React from 'react'
import { FiSearch, FiVideo, FiBell, FiMenu } from "react-icons/fi";
function Navbar() {
  return (
    <header className="w-full h-14 bg-white shadow-md flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          className="h-5 md:h-6"
        />
      </div>
      <div className="flex items-center  w-[50%]">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button className="bg-gray-100 px-4 py-2 border border-gray-300 border-l-0 rounded-r-full">
          <FiSearch size={24} className="text-gray-600" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button className=" text-gray-600 hover:text-gray-800">
          <FiVideo size={22} />
        </button>
        <button className=" text-gray-600 hover:text-gray-800">
          <FiBell size={22} />
        </button>
        <button className=" text-gray-600 hover:text-gray-800">
          <FiMenu size={24} />
        </button>
      </div>
    </header>
  );
}


export default Navbar