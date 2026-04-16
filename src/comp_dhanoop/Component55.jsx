import React, { useState } from "react";

const Component55 = () => {
  const [twoFA, setTwoFA] = useState(true);

  return (
    
     <div className="flex  items-center justify-center mt-7 ">
      <div className="w-full md:w-[70%] bg-white rounded-3xl p-5 shadow-xl ">
        {/* Handle */}
        <div className="flex justify-center mb-4 ">
          <div className="w-9 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Sign-in Email */}
        <div className="flex justify-between items-center mt-10">
          <span className="text-gray-600 text-sm font-semibold">Sign-in Email</span>
          <span className="text-gray-900 text-sm ">johnsmith@gmail.com</span>
        </div>

        {/* Password */}
        <div className="flex justify-between items-center py-2">
          <span className="font-semibold text-gray-600 text-sm">Password</span>
          <button className="text-blue-500 text-sm font-medium">
            Change password
          </button>
        </div>
          {/* dividr */}
    <div className='h-px w-[98%] bg-gray-400 mt-2'>
        </div>

        {/* 2FA */}
        <div className="flex justify-between items-center py-3">
          <span className="font-semibold text-gray-700 text-sm">2-FA authentication</span>

          <button
            onClick={() => setTwoFA(!twoFA)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              twoFA ? "bg-purple-700" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                twoFA ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* Phone numr */}
        <div className="flex justify-between items-center py-2">
          <span className=" font-semibold text-gray-600 text-sm">Phone number</span>
          <span className="text-gray-900 text-sm">+380 93 123 45 67</span>
        </div>

        {/* partner */}
        <div className="py-3">
          <span className="font-semibold text-gray-700 text-sm">Partner Preference</span>
        </div>

         {/* dividr */}
    <div className='h-px w-[98%] bg-gray-300 mt-2'>
        </div>

        {/* Last sign in */}
        <div className="mb-4">
          <p className="text-gray-700 text-sm font-medium mb-1">
            Last sign in
          </p>
          <p className="text-gray-500 text-xs">
            today at 18:34, Safari 198.123.23.23
          </p>
        </div>

        {/* Sessns */}
        <div>
          <p className="text-gray-700 text-sm font-medium mb-3">
            Total active sessions (5)
          </p>


    
         {/* dividr */}
    <div className='h-px w-[98%] bg-gray-300 mt-2'>
        </div>

      

          {/* Sess 1 */}
          <div className="">
            <p className="text-sm text-gray-800">
              DESKTOP-6TIG6EC • Kyiv, Ukraine
            </p>
            <p className="text-xs text-gray-500">
              Chrome • Used right now
            </p>
          </div>

       

          {/* Sess 2 */}
          <div className="pt-3">
            <p className="text-sm text-gray-800">
              iPhone 11 • Kyiv, Ukraine
            </p>
            <p className="text-xs text-gray-500">
              Chrome • 04/19/2022
            </p>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Component55;
