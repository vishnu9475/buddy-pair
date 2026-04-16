import React, { useState } from 'react'
import Component51 from './Component51'

const Trial1 = () => {
  const [open,setOpen] =useState()
  return (
    <div>
       <div>
        <button onClick={()=> setOpen(true)} className='w-60 h-10 bg-amber-950 rounded-2xl text-white'>menu
          
        </button>
       </div>
   
    <div>
      {open && <Component51 onclose={
       
        ()=>setOpen(false)}/>}
    </div>
     </div>
  )
}

export default Trial1
