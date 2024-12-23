import Image from "next/image";
import React from "react";
import { listItems } from "../../../../lib/bullet";
import { VscSparkleFilled } from "react-icons/vsc";

const Why = () => {
  return (
    <div className="flex relative flex-col gap-3 lg:p-5 bg-gradient-to-b from-blue-50 to-purple-50 rounded-lg w-full">
      <h3 className="text-sm text-blue-800 font-semibold">
        Why I picked this lead
      </h3>

      <ul className="space-y-2 px-1 lg:pl-2">
            <li className="flex items-center text-xs text-wrap ">
              <p>
              Jane is a key decision maker and was browsing{" "}
              <strong className="mx-1">'espresso machines'</strong> on first Coffee's website.
              </p>
                

                <span className="ml-2 px-1 py-0.5 bg-white text-gray-700 border border-gray-300 rounded-md">
              1
            </span>
            </li>
            <li className="flex items-center text-xs ">
              <p>
              Multiple people at her company have reported 'slowness' during{" "}
              <strong className="mx-1">service requests</strong>{" "}
              </p>
                <span className="ml-4 px-1 py-0.5 bg-white text-gray-700 border border-gray-300 rounded-md">
              2
            </span>
            </li>
            <li className="flex items-center text-xs ">
              <p>
              Northwind Traders currently see{" "} <strong className="mx-1">$200M in revenue</strong> from their in-store coffee shops.
              </p>
                

                <span className="ml-8 px-1 py-0.5 bg-white text-gray-700 border border-gray-300 rounded-md">
              3
            </span>
            </li>
            </ul>

      <div className="flex flex-col md:flex-row  relative gap-2">
        <div className="flex gap-2 p-3 rounded-lg bg-white shadow-xl w-full md:min-w-44">
          <Image src="" alt="" width={50} height={50} />
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-700">Decision maker</p>
            <h3 className="text-sm text-purple-600">Yes</h3>
          </div>
        </div>

        <div className="flex gap-2 p-3 rounded-lg bg-white shadow-xl w-full md:min-w-44">
          <Image src="" alt="" width={50} height={50} />
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-700">Potential deal value</p>
            <h3 className="text-sm text-purple-600">$1M</h3>
          </div>
        </div>

        <div className="flex gap-2 p-3 rounded-lg bg-white shadow-xl w-full md:min-w-44">
          <Image src="" alt="" width={50} height={50} />
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-700">Intent</p>
            <h3 className="text-sm text-purple-600">High</h3>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 p-2 bg-gray-50 rounded-sm">
        <VscSparkleFilled size={25} className=" text-blue-600" />
      </div>
    </div>
  );
};

export default Why;
