import React from 'react'

const Trial = ({label,icon,onclick}) => {
  return (
   <button 
   type='button'
   onClick={onclick}
    className={` inline-flex items-center gap-2
        px-4 py-1.5
        rounded-full
        border
        text-sm font-medium
        whitespace-nowrap
        transition
        focus:outline-none
     
 ${active?"bg-pink-400 border-pink-500 text-white"
         :"bg-white border-gray-300 text-purple-700 hover:bg-pink-200"
           
      }


      `}
     
   >
    <span>{icon}</span>
    <span>{label}</span>
   </button>
  )
}

export default Trial
