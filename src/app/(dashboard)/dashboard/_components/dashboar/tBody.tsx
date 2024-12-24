import React from "react";
import { TableRow } from "../../../../type/tbodyType";

interface TableBodyProps {
  data: TableRow[];
}

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((item, index) => (
        <tr
          key={index}
          className="border-b hover:bg-gray-100 text-xs transition-colors"
        >
          <td className="p-1 lg:p-2 text-nowrap">
            <input type="checkbox" className="cursor-pointer" />
            <span className="ml-1 lg:ml-2 text-blue-400 ">{item.name}</span>
          </td>
          <td className="p-1 lg:p-2 text-nowrap">{item.topic}</td>
          <td className="p-1 lg:p-2 text-nowrap">{item.status}</td>
          <td className="flex flex-col lg:flex-row gap-1 p-1 lg:p-2 text-nowrap">
            {item.createdOn}
            <span className="ml-2">({item.time})</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
