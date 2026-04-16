import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Component55 = () => {
  const [twoFA, setTwoFA] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white p-5 rounded-t-3xl">
      {/* Handle */}
      <div className="flex justify-center mb-4 ">
        <div className="w-9 h-1 bg-gray-300 rounded-full" />
      </div>

      {/* Sign-in Email */}
      <div className="flex justify-between items-center mt-8">
        <span className="text-gray-600 text-base md:text-lg lg:text-xl font-semibold">Sign-in Email</span>
        <span className="text-gray-900 text-base md:text-lg lg:text-xl">johnsmith@gmail.com</span>
      </div>

      {/* Password */}
      <div className="flex justify-between items-center py-3">
        <span className="font-semibold text-gray-600 text-base md:text-lg lg:text-xl">Password</span>
        <button
          onClick={() => navigate('/change-password')}
          className="text-blue-500 text-base md:text-lg lg:text-xl font-medium"
        >
          Change password
        </button>
      </div>
      {/* dividr */}
      <div className='h-px w-[98%] bg-gray-400 mt-2'>
      </div>

      {/* 2FA */}
      <div className="flex justify-between items-center py-3">
        <span className="font-semibold text-gray-700 text-base md:text-lg lg:text-xl">2-FA authentication</span>

        <button
          onClick={() => setTwoFA(!twoFA)}
          className={`w-12 h-6 flex items-center rounded-full p-1 transition ${twoFA ? "bg-purple-700" : "bg-gray-300"
            }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow transform transition ${twoFA ? "translate-x-6" : ""
              }`}
          />
        </button>
      </div>

      {/* Phone numr */}
      <div className="flex justify-between items-center py-1">
        <span className=" font-semibold text-gray-600 text-base md:text-lg lg:text-xl">Phone number</span>
        <span className="text-gray-900 text-base md:text-lg lg:text-xl">+380 93 123 45 67</span>
      </div>

      {/* partner */}
      <div
        onClick={() => navigate('/partner-preference')}
        className="py-2 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-700 text-base md:text-lg lg:text-xl">Partner Preference</span>
      </div>

      {/* dividr */}
      <div className='h-px w-[98%] bg-gray-300 mt-2'>
      </div>

      {/* Last sign in */}
      <div className="mb-4 ">
        <p className="text-gray-700 text-base md:text-lg lg:text-xl font-medium mb-1">
          Last sign in
        </p>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg">
          today at 18:34, Safari 198.123.23.23
        </p>
      </div>

      {/* Sessns */}
      <div>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl font-medium mb-3">
          Total active sessions (5)
        </p>


        {/* Sess 1 */}
        <div className=" space-y-3 mt-2">
          <p className="text-base md:text-lg lg:text-xl text-gray-800 space-x-2">
            DESKTOP-6TIG6EC • Kyiv, Ukraine
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-500">
            Chrome • Used right now
          </p>
        </div>
        {/* dividr */}
        <div className='h-px w-[98%] bg-gray-300 mt-2'>
        </div>




        {/* Sess 2 */}
        <div className="space-y-3 mt-2">
          <p className="text-base md:text-lg lg:text-xl text-gray-800">
            iPhone 11 • Kyiv, Ukraine
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-500">
            Chrome • 04/19/2022
          </p>
        </div>
      </div>
    </div>

  );
};

export default Component55;
