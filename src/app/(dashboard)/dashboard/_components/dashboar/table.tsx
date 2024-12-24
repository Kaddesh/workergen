 'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import TableBody from "./tBody";
import { tableData } from "../../../../lib/tableData";
import { IoIosArrowRoundDown } from "react-icons/io";
import SearchInput from "./searchInput";
import { TableRow } from "../../../../type/tbodyType";

const Table = () => {
  const [filteredData, setFilteredData] = useState<TableRow[]>(tableData);

  const handleSearchResults = (results: TableRow[]) => {
    setFilteredData(results);
  };

  return (
    <div className="border rounded-md shadow-lg">
      {/* Search Input */}
      <SearchInput data={tableData} onSearch={handleSearchResults} />

      {/* Table Wrapper for Horizontal Scrolling */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="text-xs font-semibold text-gray-700 bg-gray-100">
              <th className="p-1 lg:p-2 border-b border-gray-300 text-nowrap">
                <div className="flex items-center">
                  Name
                  <FaChevronDown className="ml-1 cursor-pointer" />
                </div>
              </th>
              <th className="p-1 lg:p-2 border-b border-gray-300 text-nowrap">
                <div className="flex items-center">
                  Topic
                  <FaChevronDown className="ml-1 cursor-pointer" />
                </div>
              </th>
              <th className="p-1 lg:p-2 border-b border-gray-300 text-nowrap">
                <div className="flex items-center">
                  Status
                  <FaChevronDown className="ml-1 cursor-pointer" />
                </div>
              </th>
              <th className="p-1 lg:p-2 border-b border-gray-300 text-nowrap">
                <div className="flex items-center">
                  Created On
                  <IoIosArrowRoundDown className="ml-1 cursor-pointer" />
                  <FaChevronDown className="ml-1 cursor-pointer" />
                </div>
              </th>
            </tr>
          </thead>
          {/* Pass filtered data to TableBody */}
          <TableBody data={filteredData} />
        </table>
      </div>
    </div>
  );
};

export default Table;
