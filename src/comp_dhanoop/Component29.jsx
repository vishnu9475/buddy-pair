import React from "react";
import { ArrowLeft, Navigation } from "lucide-react";
import Component30 from "./Component30";

const ProfileCard = () => {
  return (
   <div className="flex items-center justify-center">

   <div className="relative w-[400px] h-screen md:w-full rounded-3xl overflow-hidden shadow-xl bg-black flex ">

      {/* Background Img */}
      <img
        src="/profileimg.jpg"
        alt="Profile"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient  */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-black/30 to-black/10" />

      {/* Top Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white">
        
        {/* Back Buttn */}
        <button  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center backdrop-blur">
          <ArrowLeft size={18} />
        </button>

        {/* Distance */}
        <div style={{ fontFamily: "Aldrich" }} className="px-3 py-1 rounded-full border border-white/40 backdrop-blur flex items-center gap-1 text-sm">
          <Navigation size={14} />
          2.5 km
        </div>
      </div>

      {/* Right Slider */}
      <div className="absolute right-3 top-24 h-28 w-1 bg-white/20 rounded-full">
        <div className="absolute top-16 left-0 w-full h-14 bg-white rounded-full" />
      </div>

      {/* Bottm Content */}
      <div className="absolute bottom-7 left-0 right-0 text-white text-center ">

        <h2 style={{ fontFamily: "Aldrich" }} className="text-3xl md:text-5xl font-semibold tracking-wide">
          Alfredo Calzoni, 20
        </h2>

        <p style={{ fontFamily: "Aldrich" }} className="text-sm md:text-md tracking-widest opacity-80 mt-1">
          HAMBURG, GERMANY
        </p>

        {/* Match Buttn */}
        <div className="mt-5 mb-2 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-pink-400 bg-purple-500/20 backdrop-blur">
          
          <div style={{ fontFamily: "Aldrich" }} className="w-9 h-9 md:w-12 md:h-12 rounded-full border border-pink-400 flex items-center justify-center text-sm md:text-2xl font-semibold">
            80
            <span  className="text-[10px] ml-0.5">%</span>
          </div>

          <span style={{ fontFamily: "Aldrich" }} className="text-lg font-medium md:text-3xl">Match</span>
        </div>
   
   {/* For about and other component
        <div className="mt-4 ">
           <Component30/>
        </div> */}

      </div>
 
    </div>
    </div>
  );
};

export default ProfileCard;
