import React from 'react'
import { PhoneCall } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";

const LoginOption2 = () => {
  return (
    <div className='flex items-center justify-center p-1 mt-3 flex-col gap-3'>
      <div className='flex items-center justify-center mt-6 mb-6'>
        <p style={{ fontFamily: "Aldrich" }} className='text-3xl text-center'>Let’s meeting new people around you</p>
      </div>
       {/* button 1*/}
         <div className='w-[295px] h-[56px] bg-[#4B164C] rounded-full flex items-center px-2'>
             <div className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center'><PhoneCall className=''/></div>
             <p style={{ fontFamily: "Aldrich" }} className='text-white mx-2 text-[18px] font-aldrich'> login with email/phone</p>
         </div>
         {/* button 2 */}
         <div className='w-[295px] h-[56px] bg-[#DD88CF] rounded-full flex items-center px-2'>
             <div className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center'><FcGoogle className='text-[32px]'/></div>
             <p style={{ fontFamily: "Aldrich" }} className='text-white mx-2 text-[18px] font-aldrich'> login with google</p>
         </div>
         {/* para */}
            <div>
                <p style={{ fontFamily: "Aldrich" }} className=''>Dont Have an Account?<a style={{ fontFamily: "Aldrich" }} href="" className="text-[#DD88CF] font-aldrich">Sign Up</a></p>
            </div>
    </div>
  )
}

export default LoginOption2
