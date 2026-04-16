import React from 'react'
import { IoMdClose } from "react-icons/io";

const menu = [
    "Dating","Matrimony","E commerce","Study abroad","job portal",
];
const Component51 = ({onclose}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-start justify-end p-4'>
      {/*card  */}
       <div className='w-[90%] md:w-[50%] rounded-2xl bg-[#5C2B5C] backdrop-blur-md text-white shadow-xl overflow-hidden '>
        {/* button */}
        <div className='flex items-center m-2 justify-center w-2 h-2 rounded-full border p-3'>
            <button 
            onClick={onclose}
            className='  
            text-white  hover:opacity-80 focus:outline-none '>
              <IoMdClose size={20} />
            </button>
       
        </div>
           
           <div className='px-4 pb-4 space-y-2'>
            {
                menu.map((item,index) => (
                    <div key={item}>
                         <div  style={{ fontFamily: "Saira" }} className={`py-3 text-center md:text-2xl text-lg rounded-lg cursor-pointer hover:bg-white/20 hover:font-semibold                            
                                `}>

                            {item}
                         </div>
                  
                  
                     {/* Dividr */}
                            {index !== menu.length - 1 ? (
                        <div className="h-px bg-white/30 my-2" />
                        ) : null}
              {/* <div className='h-px bg-white my-2'>

              </div> */}
                    
                    
        </div>
                ))
            }
           </div>

       </div>
    </div>
  )
}

export default Component51
