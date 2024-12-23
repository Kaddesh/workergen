import React from 'react';
import { FaChartBar, FaEye, FaPlus, FaSync, FaUsers, FaTrash, FaBrain, FaFilter, FaColumns } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between ml-[12rem] mr-[2rem] text-[0.625rem]  p-1 bg-gray-100 border-b rounded-md border-gray-300">
      {/* Open Lead Dropdown */}
      <div className="flex items-center space-x-1">
        <span className="font-medium text-gray-700">Open Lead:</span>
        <RiArrowDropDownLine className='cursor-pointer' />
      </div>

      {/* Action Icons */}
      
      <nav className="flex items-center">
        <button className="flex items-center space-x-1 px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
          <FaChartBar />
          <span>Show Chart</span>
        </button>
        <button className="flex items-center space-x-1 px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
          <FaEye />
          <span>Focused View</span>
        </button>
        <button className="flex items-center space-x-1 px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
          <FaPlus />
          <span>New</span>
        </button>
        <button className="flex items-center space-x-1 px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
          <FaSync />
          <span>Refresh</span>
        </button>
        <button className="flex items-center space-x-1 px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
          <FaUsers />
          <span>Collaborate</span>
        </button>
        <button className="flex items-center space-x-1 px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
          <FaTrash />
          <span>Delete</span>
        </button>

      {/* Shadowed Div */}
      <div className='flex items-center gap-2'>
        <button className="flex items-center space-x-1 px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md shadow-md">
          <FaBrain />
          <span>Smart Data</span>
        </button>
        <button className="flex items-center space-x-1 px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md shadow-md">
          <FaFilter />
          <span>Edit Filters</span>
        </button>
        <button className="flex items-center space-x-1 px-2 py-2 text-gray-700 hover:bg-gray-200 rounded-md shadow-md">
          <FaColumns />
          <span>Edit Columns</span>
        </button>
        <button className="flex items-center space-x-1 px-2 py-2 bg-blue-800 hover:bg-blue-600 rounded-md shadow-md">
          <FaColumns />
          <div className="h-4 w-px bg-white"></div>
          <RiArrowDropDownLine className='cursor-pointer text-white'/>
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
