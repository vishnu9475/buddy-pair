import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { CircleCheckBig } from 'lucide-react';
const SignupForm4 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-md px-4 sm:px-6 py-6">

        {/* Header */}
        <h2  className="text-center text-lg sm:text-xl font-semibold mb-6">
          Sign up
        </h2>

        {/* Input Fields */}
        {[
          "Name",
          "Email",
          "Mobile",
          "Password",
          "Conform Password",
        ].map((label, i) => (
          <div key={i} className="mb-4">
            <label className="w-full text-sm text-gray-700">{label}</label>
            <input
              type={label.toLowerCase().includes("password") ? "password" : "text"}     
              placeholder="Value"
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        ))}

        {/* Generate OTP */}
        <div className="flex items-center gap-2   text-sm text-gray-700 mb-2">
          <span style={{ fontFamily: "Aldrich" }} className="font-medium underline">Generate OTP</span>
          <span  className="text-gray-500 cursor-pointer flex gap-1"><FiRefreshCcw size={12} />  <CircleCheckBig size={12} /> </span>
        </div>

        {/* OTP Input */}
        <div className="mb-5">
          <label className="text-sm text-gray-700">OTP</label>
          <input
            type="text"
            placeholder="We sent a code to Email/Phone"
            className="w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium mb-4 hover:bg-gray-800 transition">
          Register
        </button>

        {/* Social Login */}
        <button  className="w-full bg-purple-800 text-white py-3 rounded-lg font-medium mb-4 hover:bg-purple-700 transition">
          Social media Login
        </button>

        {/* Footer */}
        <p style={{ fontFamily: "Aldrich" }} className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span style={{ fontFamily: "Aldrich" }} className="text-pink-500 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
};

export default SignupForm4;
