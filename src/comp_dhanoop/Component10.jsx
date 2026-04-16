import React, { useState } from "react";
import {Link} from "react-router-dom";
const Component10 = () => {
  

  return (
   
   <div className="flex items-center justify-center h-screen w-full">
   <div className="md:w-[70%] w-[90%] bg-white rounded-2xl p-6 shadow-xl shadow-gray-100">
      {/* Title */}
      <h2 className="text-center text-lg md:text-3xl font-semibold mb-6">
        Job Details
      </h2>

      <div className="space-y-0 mb-6">
        {["Company Name", "Designation", "Location"].map((item) => (
          <div
            key={item}
            className="w-full  "
          >
             <input
        type="text"
        placeholder=  {item}
        className="w-full mb-4 px-4 py-3 border rounded-xl text-sm md:text-lg outline-none focus:ring-1 focus:ring-gray-400"
      />
          </div>
        ))}
      </div>

      {/* Button */}
     <Link to="/jobseeker">
        <button className="w-full bg-[#2b2b2b] text-white py-3 rounded-xl text-sm md:text-lg font-medium">
        Next
      </button>
     </Link>
      
    </div>
    </div>
  );
};

export default Component10;
