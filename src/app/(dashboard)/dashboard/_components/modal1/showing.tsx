'use client'
import React, { useState } from 'react'
import { BsHandThumbsDown, BsHandThumbsUp } from 'react-icons/bs'

const Showing = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div> 
<div className="flex items-center justify-between w-full px-5 md:px-0 mt-2 md:mt-0">
  {/* Left Section */}
  <div className="flex items-center">
    <div>
      <h4 className="text-sm text-slate-600">Showing 1 of 9</h4>
    </div>

    <div className="h-5 border border-gray-200 md:mx-6"></div>

    <button className="hidden md:block text-blue-700 text-sm font-semibold">Show all</button>
  </div>

  {/* Center Section: Dot Representation */}
  <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className="flex items-center cursor-pointer"
          onClick={() => setActiveIndex(index)} // Update active index on click
        >
          {/* Dot */}
          {index === activeIndex ? 
            <div className="h-1 w-8 rounded-full bg-blue-700 ml-2"></div> : <div
            className="h-2 w-2 rounded-full bg-gray-300" ></div>
          }
        </div>
      ))}
    </div>


  {/* Right Section */}
  <div className="flex gap-6">
    <BsHandThumbsUp className='cursor-pointer'/>
    <BsHandThumbsDown className='cursor-pointer'/>
  </div>
</div>  
<div className='text-center md:hidden block'>
<button className=" text-blue-700 text-sm font-semibold mt-6">Show all</button>
</div>
</div>
)
}

export default Showing
