   'use client'
import React, { useState } from "react";
import { LuCalendarRange } from "react-icons/lu";
import { dashboardData } from "../../../../lib/dashmodal";
import Image from "next/image";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { VscSparkleFilled } from "react-icons/vsc";
import EngageJane from "../modal1/EngageJane";

const Lead = () => {
  const { leads } = dashboardData;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[60%]">
      <h4 className="text-xs text-gray-300 text-wrap">
        Copilot has pinpointed 20 key leads that show strong purchase intent and
        are actively engaging. These leads need your focus
      </h4>

      <div className="flex flex-col lg:flex-row gap-3">
        {leads.map((lead, index) => (
          <div key={index} className="flex flex-col gap-2 p-3 shadow-md rounded-lg">
            {/* Lead Information */}
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full flex items-center justify-center gap-2 overflow-hidden bg-gray-200">
                <Image
                  src={lead.image}
                  alt={lead.name}
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xs font-semibold">{lead.name}</h4>
                <h4 className="flex gap-2 text-[0.625rem] text-gray-400">
                  {lead.position}
                  <div className="h-1 w-1 bg-black rounded-full"></div>
                  {lead.company}
                </h4>
              </div>
            </div>

            {/* Description and Actions */}
            <div className="relative flex flex-col gap-2 px-2 py-3 bg-slate-200 rounded-md cursor-pointer" onClick={handleCardClick}>
              {index === 0 ? <div className="flex gap-2 ">
                <MdOutlineMarkEmailUnread />
                <h4 className="text-xs font-semibold">{lead.iconDescrip}</h4>
              </div> : <div className="flex gap-2">
                <LuCalendarRange/>
                <h4 className="text-xs font-semibold ">{lead.iconDescrip}</h4>
              </div> }
              <p className="text-xs text-gray-400">{lead.description}</p>

              <div className="absolute top-0 right-0 p-1 bg-gray-50 rounded-sm">
                      <VscSparkleFilled size={10} className=" text-blue-900" />
                    </div>
            </div>

            

            {/* Tags */}
            <div>
              {lead.tags.map((tag, i) => (
                <span key={i} className="text-[0.625rem] text-slate-400">
                  {tag}
                  <div className="h-1 w-1 bg-black rounded-full inline-block"></div>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 mt-11 z-50 flex items-center justify-center ">
          <EngageJane onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default Lead;