import React from 'react'

const Loginform5 = () => {
  return (
    <div className=' flex items-center justify-center px-3'>
      <div className='w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-md px-4 sm:px-6 py-6 mt-9'>
           <h2 className='text-2xl font-semibold text-center'>Login</h2>
   
           {["email/mobile",
             "password"].map((label,i) => (
              <div className="" key={i}>
                 <label className='w-full text-sm text-gray-700'>{label}</label>
                 <input className=' w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-400' type={label.toLowerCase().includes("password") ? "password" : "text"}     
                    placeholder="Value" 
                     />
              </div>
             ))

           }
         {/* button */}
           <button className='w-full rounded mt-4 px-4 py-2  mb-4 bg-black text-white  hover:bg-purple-700 transition '>Login</button>
            {/*footer  */}
            <a className='text-md text-gray-600 font-semibold underline' href="">Forgot password?</a>
             <p style={{ fontFamily: "Aldrich" }} className=" text-sm text-gray-600">
          Don’t have an account?{" "}
          <span className="text-pink-500 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Loginform5
