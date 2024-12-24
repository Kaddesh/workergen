import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaAngleUp } from "react-icons/fa";

const barData = [
  { label: "Won $18m", value: 18, color: "bg-green-300" },
  { label: "Committed $8m", value: 8, color: "bg-blue-300" },
  { label: "Best Case $7m", value: 7, color: "bg-purple-300" },
  { label: "Qualified $3m", value: 3, color: "bg-yellow-300" },
  { label: "Leads $75m", value: 75, color: "bg-gray-300" },
];

const HorizontalBar = () => {
  // Calculate total value to derive percentages
  const totalValue = barData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="w-full lg:w-[40%] flex items-start gap-1">
      <div className="">
      <div className="flex items-center justify-between px-2">
        <div className="flex gap-1">
        <CiClock1 />
        <p className="text-slate-400 text-[0.625rem]">1 month until Q4 ends</p>
        </div>

        <div className="flex gap-1">
          <p className="text-slate-400 text-[0.625rem]">Target</p>
          <p className="text-slate-400 text-[0.625rem]">45million</p>
        </div>

        <div><p className="text-slate-400 text-[0.625rem]">68% of target achieved</p></div>
        </div>
      {/* Horizontal Bar */}
      <div className="h-3 flex rounded-lg overflow-hidden border border-gray-300">
        {barData.map((item, index) => (
          <div
            key={index}
            className={`${item.color} h-full`}
            style={{ width: `${(item.value / totalValue) * 100}%` }}
            title={item.label}
          ></div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1 mt-1 px-2">
        {barData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className={`h-2 w-2 rounded-full ${item.color}`}></span>
            <span className="text-[0.625rem]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    <FaAngleUp size={25} className="text-gray-400"/>
    </div>
  );
};

export default HorizontalBar;
