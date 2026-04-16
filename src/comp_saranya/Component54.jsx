import React from 'react'

const Component54 = ({ icon, text1, text2, onClick }) => {
  return (
    <div onClick={onClick} className='flex gap-3 sm:gap-4 md:gap-5 py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-5 w-full bg-white items-center hover:bg-gray-50 transition-colors cursor-pointer'>
      {/* left */}
      <div className='w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center text-[#44034f] text-lg sm:text-xl md:text-2xl'>
        {icon}
      </div>
      {/* Right */}
      <div className='flex flex-col gap-1'>
        <p className='font-aldrich font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-black'>{text1}</p>
        <p className='font-aldrich text-base md:text-lg lg:text-xl text-gray-500'>{text2}</p>
      </div>
    </div>
  )
}

export default Component54