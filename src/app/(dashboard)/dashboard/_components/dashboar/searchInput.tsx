import React from "react";
import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="relative mt-4 mb-5 ml-3 max-w-md">
      <input
        type="text"
        placeholder="Sort, filter, and search with Copilot"
        className="w-full pl-4 pr-10 py-1 border-2 border-[#49A2FA] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        {/* Replace the src below with your Copilot image */}
        <Image
          src="/assets/images/Copilot-Logo.svg"
          alt="Copilot"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default SearchInput;
