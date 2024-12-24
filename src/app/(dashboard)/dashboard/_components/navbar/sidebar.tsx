'use client';

import React, { useState } from "react";
import Link from "next/link";
import { sidebarData } from "../../../../lib/sidebarDate";
import { IoMenu } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

interface SidebarProps {
  isVisible: boolean; // For collapsing/expanding in desktop
  isMobile: boolean; // Determines if sidebar should render in mobile
  toggleSidebar: () => void; // Toggles sidebar visibility in desktop
  handleMenu: () => void;
  closeMobile: () => void;
  
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, handleMenu, isMobile, toggleSidebar, closeMobile }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <main
          className={`hidden lg:block fixed top-0 left-0 z-20 pl-3 bg-gray-100 shadow-sidebarCustom py-12 overflow-auto transition-all duration-300 ${
            isVisible ? "w-14" : "w-44"
          } lg:h-full`}
        >
          <div className="flex flex-col">
            {/* Desktop menu toggle button */}
            <IoMenu
              size={25}
              onClick={toggleSidebar}
              className="cursor-pointer mb-4  "
            />

            {/* Render Sidebar Groups */}
            {sidebarData.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-6 ">
                {group.heading && !isVisible && (
                  <h3 className="text-xs font-bold text-[#413F3F] mb-1">
                    {group.heading}
                  </h3>
                )}
                <ul className="space-y-1">
                  {group.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <Link
                        href={item.link}
                        className={`group flex items-center space-x-3 py-[0.625rem] cursor-pointer ${
                          activeIndex === index
                            ? "text-gray-700"
                            : "text-gray-500"
                        } hover:text-slate-900 transition-all duration-300`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <item.icon className="w-4 h-4 group-hover:stroke-slate-900" />
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

                      {/* FaAngleDown only for 'Recent' and 'Pinned' */}
                      {groupIndex === 0 && (index === 1 || index === 2) && (
                        <div className="text-gray-400">
                          <FaAngleDown />
                        </div>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            ))}

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="bg-purple-700 text-white text-sm h-6 w-6 flex items-center justify-center">
                  S
                </div>
                <h4 className="text-xs text-gray-700">Sales</h4>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FaAngleUp className="text-gray-400" />
                <FaAngleDown className="text-gray-400" />
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <main
          className={`fixed top-0 left-0 z-20 bg-gray-100 shadow-sidebarCustom py-12 overflow-auto transition-transform duration-300 ${
            isMobile ? "translate-x-0" : "-translate-x-full"
          } w-full`}
        >
          <div className="flex flex-col pl-5">
            <div className="cursor-pointer flex items-end justify-end">
           <IoIosClose size={30} className="text-slate-400 " onClick={closeMobile}/>
           </div>

            {/* Render Sidebar Groups */}
            {sidebarData.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-6 block">
                {group.heading && (
                  <h3 className="text-xs font-bold text-[#413F3F] mb-1">
                    {group.heading}
                  </h3>
                )}
                <ul className="space-y-1">
                  {group.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <Link
                        href={item.link}
                        className={`group flex items-center space-x-3 py-[0.625rem] cursor-pointer ${
                          activeIndex === index
                            ? "text-gray-700"
                            : "text-gray-500"
                        } hover:text-slate-900 transition-all duration-300`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <item.icon className="w-4 h-4 group-hover:stroke-slate-900" />
                        {/* Mobile labels */}
                        <span className="text-xs font-[500] leading-6 tracking-[-0.16px]">
                          {item.label}
                        </span>
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      )}
    </section>
  );
};

export default Sidebar;
