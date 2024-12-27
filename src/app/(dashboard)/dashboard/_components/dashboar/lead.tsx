   'use client'
import React, { useState } from "react";
import { LuCalendarRange } from "react-icons/lu";
import { dashboardData } from "../../../../lib/dashmodal";
import Image from "next/image";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { VscSparkleFilled } from "react-icons/vsc";
import EngageJane from "../modal1/EngageJane";

interface CardProps {
  handleCard: () => void
}
const Lead: React.FC<CardProps> = ({handleCard}) => {
  const { leads } = dashboardData;

  return (
    <div className="w-full lg:w-[70%]">
      <h4 className="text-xs text-gray-600 text-wrap">
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
                <h4 className="flex items-center gap-2 text-[0.625rem] text-nowrap text-gray-500">
                  {lead.position}
                  <div className="h-1 w-1 bg-black rounded-full"></div>
                  {lead.company}
                </h4>
              </div>
            </div>

            {/* Description and Actions */}
            <div className="relative flex flex-col gap-2 px-2 py-3 bg-slate-200 rounded-md cursor-pointer " onClick={handleCard}>
              {index === 0 ? <div className="flex gap-2 ">
                <MdOutlineMarkEmailUnread />
                <h4 className="text-xs font-semibold">{lead.iconDescrip}</h4>
              </div> : <div className="flex gap-2">
                <LuCalendarRange/>
                <h4 className="text-xs font-semibold ">{lead.iconDescrip}</h4>
              </div> }
              <p className="text-xs text-gray-600">{lead.description}</p>

              <div className="absolute top-0 right-0 p-1 bg-gray-50 rounded-sm">
                      <VscSparkleFilled size={10} className=" text-blue-900" />
                    </div>
            </div>

            

            {/* Tags */}
            <div className="flex items-center">
  {lead.tags.map((tag, i) => (
    <span key={i} className="text-[0.625rem] text-gray-600 flex items-center">
      {tag}
      {i < lead.tags.length - 1 && (
        <div className="h-1 w-1 bg-black rounded-full mx-1"></div>
      )}
    </span>
  ))}
</div>

          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Lead;
