import React from 'react'
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
const Component54 = ({icon,text1,text2}) => {
  return (
    <div className='flex gap-3 p-2 w-full bg-white items-center'>
      {/* left */}
      <div className='w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center'>
         {icon}
      </div>
      {/* Right */}
      <div className='flex flex-col '>
    <p style={{fontFamily:"caros"}} className='font-semibold text-sm md:text-lg text-black'>{text1}</p>
        <p style={{fontFamily:"Circular Std"}} className='text-xs md:text-md text-gray-800'>{text2}</p>
      </div>
    </div>
  )
}

export default Component54
