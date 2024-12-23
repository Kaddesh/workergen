"use client"

import Image from "next/image";
import React, { useState } from "react";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import Upgrading from "./upgrading";
import Why from "./why";
import AboutJane from "./aboutJane";
import Showing from "./showing";
import Next from "./next";

interface EngageJaneProps {
  onClose: () => void
}

const EngageJane: React.FC<EngageJaneProps>  = ({onClose}) => {
  const [activeButton, setActiveButton] = useState<string>("Engage");
  const [close, setClose] = useState<boolean>(false);

  const handleClose = () => {
    setClose(!close)
}
  return (
    <main className="flex items-center lg:justify-center ">
    <div className="relative w-full lg:w-[80%] p-px bg-gradient-to-b from-blue-400 to-purple-600 rounded-2xl shadow-lg">
      <div className="bg-white rounded-2xl  md:px-3 pb-4">
        <div className="pt-4 lg:p-4 ">
      <div className="flex flex-col items-center justify-center gap-4 ">

        {/*Engage with Jane */}
        <div className="flex items-center justify-between px-5 w-full">
          <div className="flex items-center  gap-2">
            <div className="h-4 w-4">
            <Image src='/assets/images/mail2.png' alt='mail2' width={50} height={50} className="object-cover"/>
            </div>
            
            <h4 className="text-sm font-semibold">Engage with Jane Reyes</h4>
          </div>
          <IoIosClose size={30} className="text-slate-400 cursor-pointer" onClick={onClose}/>
        </div>
    
         {/* short Profile */}
        <div className="flex gap-1 items-center rounded-2xl shadow-lg bg-white w-full px-5 py-3">
          <div className="h-20 w-20 rounded-full flex items-center justify-center gap-2 overflow-hidden bg-gray-200">
            <Image
              src="/assets/images/woman1.jpg"
              alt="woman1"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-1 ">
            <h4 className="text-sm font-normal">Jane Reyes</h4>
            <div className="flex ">
                <div className="h-3 w-3">
              <Image
                src="/assets/images/linkedin.png"
                alt="twitter"
                width={20}
                height={20}
                className="object-cover cursor-pointer"
              />
              </div>
              <div className="h-4 border border-slate-300 mx-1"></div>
              <p className="text-xs text-gray-400">COO, Northwind Traders</p>
            </div>
          </div>
        </div>

          {/* Upgrading by Jane */}
        <div className="w-full  ">
          <Upgrading />
         

           {/* engage */}
           <div className="flex px-5 py-4 gap-4 rounded-lg shadow-md mt-3">
      <button
        className={`relative text-gray-400 cursor-pointer hover:text-slate-500 transition ${
          activeButton === "Engage" ? "text-slate-800" : ""
        }`}
        onClick={() => setActiveButton("Engage")}
      >
        Engage
        {activeButton === "Engage" && (
          <span className="absolute left-0 bottom-[-15px] w-full h-[4px] bg-blue-500 rounded"></span>
        )}
      </button>
      <button
        className={`relative text-gray-400 cursor-pointer hover:text-slate-500 transition ${
          activeButton === "Research" ? "text-slate-800" : ""
        }`}
        onClick={() => setActiveButton("Research")}
      >
        Research
        {activeButton === "Research" && (
          <span className="absolute left-0 bottom-[-15px] w-full h-[4px] bg-blue-500 rounded"></span>
        )}
      </button>
    </div>
        </div>

           {/* Why I picked */}
        <div className=" flex flex-col gap-3 p-5 rounded-2xl shadow-lg w-full ">
            <Why />
         

          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
            <div className="flex items-center gap-1">
              <div className="bg-gray-300 flex items-center justify-center p-2 rounded-lg">
                <div className="h-5 w-5">
                <Image src="/assets/images/customer-journey.png" alt="" width={50} height={50} className="object-cover"/>
                </div>
              </div>

              <div className="bg-gray-300 flex items-center justify-center gap-2 p-2 rounded-lg">
                <p className="text-xs text-gray-500">1</p>
                <div className="h-5 w-5">
                <Image src="/assets/images/pie.png" alt="" width={50} height={50} className="object-cover"/>
                </div>
                <h4 className="text-xs text-gray-500">D365 Sales</h4>
              </div>

              <div className="bg-gray-300 flex items-center justify-center p-2 rounded-lg">
                <p className="text-xs text-gray-500">+2</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-gray-300 flex items-center justify-center p-1 rounded-lg">
                <h3 className="text-slate-500 text-xs">
                  AI-generated content may be incorrect
                </h3>
              </div>

              <BsHandThumbsUp className="cursor-pointer"/>
              <BsHandThumbsDown className="cursor-pointer"/>
            </div>
          </div>
        </div>
          
          {/* About Jane */}
        <AboutJane /> 

         
        
         {/* nclickable next page */}
           <Next />
      </div>
       {/* showing */}
      
      </div>
      <Showing />
    </div>
    </div>
    </main>
  );
};

export default EngageJane;
