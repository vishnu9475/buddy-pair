import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
const Component53 = () => {
  return (
   <div>
   <div className="flex items-center justify-between px-2 py-3">
        
        {/* Leftpart Avatar and Text */}
        <div className="flex items-center gap-3">
          <img
            src="/img1.png"
            alt="Nazrul Islam"
            className="w-14 h-14 md:w-18 md:h-18 rounded-full object-cover"
          />

          <div className=''>
            <p style={{fontfamily:"caros"}} className="font-semibold text-gray-900 text-md md:text-2xl">
              Nazrul Islam
            </p>
            <p style={{fontFamily:"Circular Std"}}className="text-xs text-gray-500 md:text-md">
              Never give up 💪
            </p>
          </div>
        </div>

        {/* Right part QR Icon */}
        <button className="text-green-700 hover:text-gray-500 ">
          <MdQrCodeScanner size={22} />
        </button>
      </div >
         <div className='h-px bg-gray-200'></div>
      </div>
  )
}

export default Component53
