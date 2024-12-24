import Image from "next/image";
import React from "react";
import { BsQuestion } from "react-icons/bs";
import { FaPlus, FaCog, FaQuestionCircle, FaUser, FaRegLightbulb } from "react-icons/fa";
import { TbChartGridDots } from "react-icons/tb";

const BlackNav = () => {
  return (
    <nav className="flex fixed top-0 z-50 w-full items-center justify-between p-1 bg-gray-800 text-slate-400 px-4  shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="flex items-center gap-2">
          
          
            <TbChartGridDots size={16} />
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold">Dynamic365</span>
            <span className="border-l border-gray-600 h-6 mx-1"></span>
            <span className="text-xs">Sales Hub</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
      <FaRegLightbulb size={12} className="cursor-pointer" title="bulb"/>
        
        <FaPlus size={12} className="cursor-pointer" title="Add" />
        <FaCog size={12} className="cursor-pointer" title="Settings" />
        <BsQuestion  size={16} className="cursor-pointer" title="Help" />
        <FaUser size={12} className="cursor-pointer" title="Profile" />
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/woman1.jpg"
            alt="User Avatar"
            width={50}
            height={50}
            className="h-4 w-4 rounded-full border border-gray-600"
          />
        </div>
      </div>
    </nav>
  );
};

export default BlackNav;
