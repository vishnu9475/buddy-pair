import React from 'react'
import { useState  } from 'react' 
import Trial4 from './Trial4'

const Trial3 = () => {
    
   const [visible,setvisible]=useState()
    
    return (
          <div className='w-full flex justify-between'>
               <div className=' '>
                    <button onClick={()=>setvisible(true)} className='w-25 h-10 bg-black text-white rounded-full'> click me</button>
               </div>
               <div>
                  {visible && <Trial4 onclose={()=>setvisible(false)}/>} 
               </div>
              

          </div>
    )
}
export default Trial3