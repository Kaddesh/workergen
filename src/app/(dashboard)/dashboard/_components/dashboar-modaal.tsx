   'use client'
import React, { useState } from "react";
import Image from "next/image";
import { LuCalendarRange } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { dashboardData } from "../../../lib/dashmodal";
import HorizontalBar from "./dashboar/horizontalBar";
import Activity from "./dashboar/activity";
import Lead from "./dashboar/lead";
import EngageJane from "./modal1/EngageJane";

const DashboardModaal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className=" relative rounded-2xl border-2 border-[#49A2FA] lg:pl-4 lg:pr-2 py-6 ">
      {/* Greeting Section */}
      <div className="px-2">
        <div className="flex flex-col lg:flex-row  w-full gap-4">
        <div className="flex items-center w-full lg:w-[60%] gap-2">
        <Image src='/assets/images/Copilot-Logo.svg' alt="copilot" width={50} height={50} />
        <h3 className=" text-sm font-semibold ">
        Hi Mona, <span className="text-blue-600">68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads
        </h3>
        </div>
        <HorizontalBar />
        </div>

      {/* Leads Section */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 w-full mt-10">
        <Lead  handleCard={handleCardClick}/>

      <div className="h-52 hidden lg:block shadow-lg w-px mx-3 bg-gray-400"></div>

       {/* Activities Section */}
       <Activity />
      </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="absolute -top-16 z-30 flex items-center lg:justify-center mt-11  ">
          <EngageJane onClose={handleCloseModal} isOpen={isModalOpen}/>
        </div>
      )}
    </section>
  );
};

export default DashboardModaal;
