import React from "react";
import Image from "next/image";
import { LuCalendarRange } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { dashboardData } from "../../../lib/dashmodal";
import HorizontalBar from "./dashboar/horizontalBar";
import Activity from "./dashboar/activity";
import Lead from "./dashboar/lead";

const DashboardModaal: React.FC = () => {
  

  return (
    <section className="rounded-2xl border-2 border-[#49A2FA] pl-4 pr-2 py-6 ">
      {/* Greeting Section */}
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
        <Lead />

      <div className="h-52 hidden lg:block shadow-lg w-px mx-3 bg-gray-400"></div>

       {/* Activities Section */}
       <Activity />
      </div>
    </section>
  );
};

export default DashboardModaal;
