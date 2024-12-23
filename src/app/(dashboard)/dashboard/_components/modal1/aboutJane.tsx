import React from 'react'
import { IoChevronDown } from 'react-icons/io5'

const AboutJane = () => {
  return (
    <div className=" flex flex-col gap-3 p-5 shadow-xl rounded-lg ">
          <div className="flex items-center justify-between">
            <h3 className="text-sm  font-semibold">About Jane</h3>
            <IoChevronDown size={25} className="text-slate-400" />
          </div>

          <p className="text-xs text-slate-700">
            Jane Reyes, the Chief Operating Officer of Northwind Traders, is a
            dynamic leader with track record in operating operations and
            enhancing customer experience. Under her guidance, Northwind
            Traders' in-store coffee shops have flourished, becoming a hallmark
            of quality and innovation. Jane's commitment to excellence makes her
            an ideal partner for First Coffee. She is always seeking top-tier
            equipment to elevate her coffee shops' offerings, ensuring
            consistent, high-quality service.
          </p>
        </div>
  )
}

export default AboutJane
