import React from 'react'
import { LuCalendarRange } from 'react-icons/lu'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { dashboardData } from "../../../../lib/dashmodal";
import Image from 'next/image';


const Activity = () => {
    const { greeting, activities } = dashboardData;
  return (
    
    <div className='w-full lg:w-[40%]'>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm text-slate-400 font-medium">Other Key Activities</h3>
        {activities.map((activity, index) => (
            
          <div key={index} className="flex flex-col px-3 py-2 border rounded-md shadow-xl items-start gap-2">
            <div className="flex gap-2">
          
            {index === 0 ? <div className='h-8 w-8 rounded-full flex items-center justify-center bg-gray-400'><Image
              src={activity.image}
              alt={activity.title}
              width={16}
              height={16}
              className='object-contain'
            /> </div> : <div><Image
            src={activity.image}
            alt={activity.title}
            width={20}
            height={20}
          /> </div> }
         
            <div className="flex flex-col">
              <h4 className="text-xs font-bold">{activity.title}</h4>
              <p className="text-[0.625rem] text-gray-900">{activity.details}</p>
            </div>
            </div>
            {index === 0 ? <div className="flex gap-1 bg-slate-100 rounded-md p-1  ">
                <MdOutlineMarkEmailUnread />
                <h4 className="text-[0.625rem]">{activity.action}</h4>
              </div> : <div className="flex gap-1 bg-slate-200 rounded-md p-1">
                <LuCalendarRange />
                <h4 className="text-[0.625rem]">{activity.action}</h4>
              </div> }
          </div>
        ))}
        <h4 className='text-xs text-blue-700 mt-5'>Show all key activities</h4>
      </div>
    </div>
  )
}

export default Activity
