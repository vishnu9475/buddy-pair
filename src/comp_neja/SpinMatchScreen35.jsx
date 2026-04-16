import React, { useState } from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa6";

const SpinMatchScreen35 = ({
  onBack = () => {},
}) => {
  const user = {
    name: "Sona",
    age: 27,
    distance: "1 km near you",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  };

  const [spinning, setSpinning] = useState(false);
  const [liked, setLiked] = useState(false);
  const handleSpin = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 2000);
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#5a1b5d] to-[#4b1450] text-white flex flex-col justify-between overflow-hidden relative">

      {/* BACK */}
      <button
            onClick={onBack}
            className="absolute top-6 left-6 w-10 h-10 rounded-full
             border border-white/40 flex items-center justify-center
             text-xl text-white"
            >
  <FaChevronLeft />
</button>

      {/* PROFILE */}
      <div style={{ fontFamily: "Aldrich" }} className="mt-15 flex flex-col items-center gap-8">
        <p className="text-base opacity-80">{user.distance}</p>

        <div className="relative w-28 h-28 flex items-center justify-center">
  
  <div className="absolute inset-0 rounded-full bg-[#e686e6]" />

  
  <div className="absolute inset-[4px] rounded-full bg-[#5a1b5d]" />

  {/* Profile image */}
  <img
    src={user.image}
    alt="profile"
    className="relative w-[92px] h-[92px] rounded-full object-cover"
  />
</div>


        <p style={{ fontFamily: "Aldrich" }} className="text-lg font-medium -mt-4">
          {user.name} - {user.age}
        </p>

        <button
        style={{ fontFamily: "Aldrich" }}
  onClick={() => setLiked(!liked)}
  className={`px-4 py-1 rounded-full text-sm flex items-center gap-2 -mt-8
    transition-all duration-200
  active:scale-95
    ${liked ? "bg-[#e686e6]" : "bg-white/20"}
  `}
>
  <RiCheckDoubleFill 
    className={`text-base transition-colors duration-300
      ${liked ? "text-white" : "text-white/70"}
    `}
  />
  Like
</button>

      </div>

      {/* RADAR */}
      <div className="relative w-full h-[380px] flex items-end justify-center">
        <div
          className={`absolute bottom-[-250px] w-[520px] h-[520px] xl:w-[720px] xl:h-[720px]  xl:bottom-[-350px] pointer-events-none
          ${spinning
            ? "animate-[spin_6s_linear_infinite]"
            : "animate-[spin_30s_linear_infinite]"}`}
        >
          <svg viewBox="0 0 520 520" className="w-full h-full opacity-30">
            <circle cx="260" cy="260" r="180" fill="none" stroke="white" strokeWidth="2" strokeDasharray="180 60" />
            <circle cx="260" cy="260" r="130" fill="none" stroke="white" strokeWidth="" strokeDasharray="300 40" />
            <circle cx="260" cy="260" r="100" fill="none" stroke="white" strokeWidth="5" strokeDasharray="120 50" />
            <circle cx="260" cy="260" r="70" fill="none" stroke="white" strokeWidth="2" strokeDasharray="180 40" />
            <circle cx="260" cy="260" r="50" fill="none" stroke="white" strokeWidth="5" strokeDasharray="120 180" />
             <circle cx="260" cy="260" r="35" fill="none" stroke="white" strokeWidth="2" strokeDasharray="180 30" />
          </svg>
        </div>
      </div>

      
<div className="relative w-full flex justify-center pb-4">

  
  <div className="relative w-[clamp(240px,85vw,420px)]">

    {/* ORB */}
    <div
      className={`absolute left-1/2 top-[-35px] -translate-x-1/2
      w-14 h-14 rounded-full
      bg-[conic-gradient(red,orange,yellow,green,cyan,blue,violet,red)]
      drop-shadow-[0_-2px_6px_rgba(0,0,0,0.15)]
      z-20
      ${spinning ? "animate-spin" : "animate-pulse"}`}
    />

    <button onClick={handleSpin} className="relative w-full h-[70px] active:scale-[0.98] transition-transform">
    <svg
       viewBox="0 0 400 80"
       preserveAspectRatio="none"
       className="w-full h-full"
    >
      <path
        d="M 40 0
           H 125
           C 150 0, 165 38, 200 38
           C 235 38, 250 0, 275 0
           H 360
           C 385 0, 400 20, 400 40
           C 400 60, 385 80, 360 80
           H 40
           C 15 80, 0 60, 0 40
           C 0 20, 15 0, 40 0
           Z
         "
        fill="white"
      />
      </svg>
      <span style={{ fontFamily: "Aldrich" }} className="absolute inset-0 flex items-center justify-center text-black text-lg translate-y-3">
        Spin here
      </span>
    </button>
  </div>
</div>

    </div>
  );
};

export default SpinMatchScreen35;
