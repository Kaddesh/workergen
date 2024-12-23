import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import { FaFileContract } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineFileCopy } from "react-icons/md";
import { RiArrowDropUpLine } from "react-icons/ri";
import { HighlightIconText } from "./highlight";

interface Action {
    icon: React.ElementType; // React component type for icons
    text: string; // Text content
  }

const AgentSkill = ({ email }: { email: string }) => {

    const actions: Action[] = [
        { icon: IoPersonOutline, text: "any vendor" },
        { icon: FaFileContract, text: "confirmed purchase orders" },
        { icon: CgMenuLeft, text: "on-hand inventory" },
        { icon: MdOutlineFileCopy, text: "all sales orders" },
        { icon: MdOutlineFileCopy, text: "ship without delay" },
        { icon: MdOutlineFileCopy, text: "update the purchase order" },
      ];
  //Function to get Initials
  const getInitial = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  return (
    <main className="flex items-center lg:justify-center">
    <div className="md:w-[50%]"> 
        
       <div className="bg-white lg:p-8 shadow-2xl rounded-2xl">
        <div className="flex items-end justify-end mb-2">
      <IoIosClose size={25} className=" text-slate-400 cursor-pointer " />
      </div>
      <div className=" flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/images/Copilot-Logo.svg"
          alt="Copilot"
          width={24}
          height={24}
        />
        <h4 className="text-xs font-semibold text-gray-800">Agent skill</h4>
      </div>

      <div className="flex flex-col gap-4 rounded-lg shadow-md w-full p-4">
        <div className="flex items-center md:justify-between gap-5 lg:gap-0">
          <h4 className="text-xs font-medium text-slate-500">
            Check if on-hand inventory will allow all sales orders to ship
            without delay
          </h4>

          <RiArrowDropUpLine size={25} className="text-gray-400"/>
        </div>

        <p className="text-xs text-slate-500 ">
      When <HighlightIconText icon={actions[0].icon}>{actions[0].text}</HighlightIconText>{" "}
      sends an email with changes to{" "}
      <HighlightIconText icon={actions[1].icon}>{actions[1].text}</HighlightIconText>, check if the resulting{" "}
      <HighlightIconText icon={actions[2].icon}>{actions[2].text}</HighlightIconText>{" "}
      will allow{" "}
      <HighlightIconText icon={actions[3].icon}>{actions[3].text}</HighlightIconText>{" "}
      to <HighlightIconText icon={actions[4].icon}>{actions[4].text}</HighlightIconText>. If so,{" "}
      <HighlightIconText icon={actions[5].icon}>{actions[5].text}</HighlightIconText>{" "}
      to reflect the change.
    </p>
      </div>

      <div className="py-4 w-full bg-white space-y-3">
        {/* Header Section */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/email.png"
            alt="email"
            width={24}
            height={24}
          />
          <h4 className="text-xs font-semibold text-gray-800">
            Enable email access
          </h4>
        </div>
        <h4 className="text-xs text-slate-500">
          Allow the agent to access email inboxes to read mail from known
          vendors.
        </h4>

        {/* Email Input-like Component */}
        <div className="flex items-center justify-center gap-3">
        <div className="flex items-center border w-full border-gray-300 rounded-md p-2 bg-gray-50">
          {/* Circle with Initial */}
          <div className="h-6 w-6 flex items-center justify-center rounded-full bg-orange-200 text-gray-400 text-xs font-bold">
            {getInitial(email)}
          </div>
          {/* Email Text */}
          <span className="ml-2 text-xs text-gray-700">{email}</span>
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          {/* Close Button */}
          <button className="text-gray-500 hover:text-gray-700">
            <AiOutlineClose />
          </button>
        </div>

        {/* Allow Access Button */}
        <button className="py-2 px-3 text-xs font-semibold text-white text-nowrap bg-blue-600 rounded-md hover:bg-blue-700">
          Allow Access
        </button>
        </div>
      </div>

      <div className="flex items-end justify-end gap-3 mt-5 mb-3  ">
        <button className="text-xs text-slate-400 bg-gray-200 p-2 rounded-md">Activate</button>
        <button className="text-xs text-slate-700 font-medium border border-gray-400 p-2 rounded-md">Close</button>
      </div>
      </div>
      </div>
    </div>
    </main>
  );
};

export default AgentSkill;
