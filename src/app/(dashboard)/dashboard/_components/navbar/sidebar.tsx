'use client'

import React, { useState } from "react";
import Link from "next/link";
import { sidebarData } from "../../../../lib/sidebarDate";
import { IoMenu } from "react-icons/io5";

interface SidebarProps {
  isVisible: boolean;
  closeSidebar: () => void; // Prop to close the sidebar
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, closeSidebar, toggleSidebar }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className={`fixed top-[4.375rem] z-20 lg:top-0 flex flex-col w-[${isVisible ? "3rem" : "11rem"}] text-xs h-[41.25rem] md:h-[61.875rem] lg:h-full bg-gray-100 pl-3 shadow-sidebarCustom py-6 overflow-auto transition-all duration-300`}
    >
      <div>
        <IoMenu
          size={25}
          onClick={toggleSidebar}
          className="cursor-pointer mb-4"
        />
        {sidebarData.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-6">
            {group.heading && !isVisible && (
              <h3 className="text-xs font-bold text-[#413F3F] mb-1">
                {group.heading}
              </h3>
            )}
            <ul className="space-y-1">
              {group.items.map((item, index) => (
                <div key={index} className="flex items-center">
                  <Link
                    href={item.link}
                    className={`group flex items-center space-x-3 py-[0.625rem] cursor-pointer ${
                      activeIndex === index ? "text-gray-700" : "text-gray-500"
                    } hover:text-slate-900 transition-all duration-300`}
                    onClick={() => {
                      setActiveIndex(index);
                      
                    }}
                  >
                    <item.icon
                      className="w-6 h-6 group-hover:stroke-slate-900"
                    />
                    {!isVisible && (
                      <span
                        className={`text-xs font-[500] leading-6 tracking-[-0.16px] ${
                          activeIndex === index ? "text-gray-700" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                    )}
                  </Link>
                  
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
