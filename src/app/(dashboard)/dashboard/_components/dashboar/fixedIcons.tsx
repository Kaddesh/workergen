import React from "react";
import { FaPhone, FaChartBar, FaHome, FaUser, FaRegCommentAlt } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { MdAddchart } from "react-icons/md";

const FixedIcons = () => {
  return (
    <div className="hidden fixed top-20 right-2 transform -translate-y-1/2 lg:flex flex-col items-center gap-4">
      {/* Icon 1 */}

      <FiCopy  size={12}   className=" cursor-pointer hover:text-gray-500"/>
      <LuPhone  size={12}  className=" cursor-pointer hover:text-gray-500"/>
      <MdAddchart size={12}  className=" cursor-pointer hover:text-gray-500"/>
      <FaRegCommentAlt size={12}  className=" cursor-pointer hover:text-gray-500"/>
    </div>
  );
};

export default FixedIcons;
