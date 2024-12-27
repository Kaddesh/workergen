import React from 'react'
import { GrFormNext } from 'react-icons/gr'

const Next = () => {
  return (
    <div className='h-10 w-10 flex items-center justify-center rounded-full absolute top-1/2 -right-0 bg-white border-2 border-gray-200 cursor-pointer'>
      <GrFormNext size={25} className='text-blue-700'/>
    </div>
  )
}

export default Next
