import React from 'react'
import { GrFormEdit } from 'react-icons/gr'
import { LuSendHorizontal } from 'react-icons/lu'
import { VscSparkleFilled } from 'react-icons/vsc'

const Upgrading = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-2 lg:p-3 bg-gradient-to-b from-blue-50 to-purple-50 lg:rounded-full px-5">
    <div className="flex items-center gap-2">
    <VscSparkleFilled size={25} className="text-blue-600"/>
      <p className="text-xs text-blue-500 text-center">
        Jane may be interested in upgrading espressor machines for her{" "}
        <span className="text-purple-300">in-store coffee shops</span>{" "}
      </p>
    </div>

    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center text-xs px-3 py-2 bg-white rounded-md shadow-sm cursor-pointer">
        <GrFormEdit size={25} />
        Edit{" "}
      </div>
      <button className="flex items-center gap-2 py-2 px-3 text-xs bg-gradient-to-b from-blue-600 to-purple-600 text-white rounded-md cursor-pointer">
        <LuSendHorizontal size={20}/> Approve and send
      </button>
    </div>
    </div>
  )
}

export default Upgrading
