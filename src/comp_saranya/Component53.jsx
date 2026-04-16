import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
const Component53 = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-2 sm:px-3 md:px-4 lg:px-5 pr-4 sm:pr-5 md:pr-6 lg:pr-8 py-4 sm:py-5 md:py-6 lg:py-7">

        {/* Leftpart Avatar and Text */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200"
            alt="Nazrul Islam"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-md"
          />

          <div className=''>
            <p className="font-aldrich font-semibold text-gray-700 text-base md:text-lg lg:text-xl xl:text-2xl">
              Nazrul Islam
            </p>
            <p className="font-aldrich text-sm md:text-base lg:text-lg text-gray-500">
              Never give up 💪
            </p>
          </div>
        </div>

        {/* Right part QR Icon */}
        <button className="text-green-700 hover:text-gray-500 transition-colors">
          <MdQrCodeScanner size={22} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
        </button>
      </div >
      <div className='h-px bg-gray-200'></div>
    </div>
  )
}

export default Component53