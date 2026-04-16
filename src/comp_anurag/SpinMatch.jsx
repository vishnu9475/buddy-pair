import React, { useState } from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa6";

const SpinMatch = ({
    name,
    age,
    distance,
    image,
    onBack,
    onSpin
  }) => {
  const [spinning, setSpinning] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    onSpin && onSpin();

    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#5a1b5d] to-[#4b1450] text-white flex flex-col justify-between relative overflow-hidden">

      {/* BACK BUTTON */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center"
      >
        <FaChevronLeft />
      </button>

      {/* PROFILE SECTION */}
      <div
        style={{ fontFamily: "Aldrich" }}
        className="mt-20 flex flex-col items-center gap-5"
      >
        <p className="text-white/80">{distance}</p>

        {/* PROFILE IMAGE */}
        <div className="relative w-32 h-32 flex items-center justify-center">

          {/* OUTER RING */}
          <div className="absolute w-full h-full rounded-full bg-[#e686e6]" />

          {/* INNER RING */}
          <div className="absolute inset-[6px] rounded-full bg-[#5a1b5d]" />

          {/* IMAGE */}
          <img
            src={image}
            alt="profile"
            className={`relative w-[104px] h-[104px] rounded-full object-cover
            ${spinning ? "animate-[spin_1.2s_linear_infinite]" : ""}
            `}
          />
        </div>

        {/* NAME */}
        <p className="text-lg font-semibold">
          {name} - {age}
        </p>

        {/* LIKE BUTTON */}
        <button
          onClick={() => setLiked(!liked)}
          className={`px-5 py-1 rounded-full flex items-center gap-2 text-sm transition
          ${liked ? "bg-[#e686e6]" : "bg-white/20"}
          `}
        >
          <RiCheckDoubleFill />
          Like
        </button>
      </div>

      {/* RADAR SECTION */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-30">

        <svg
          viewBox="0 0 500 500"
          className={`w-full h-full ${spinning ? "animate-spin" : ""}`}
          style={{ animationDuration: "20s" }}
        >
          <circle cx="250" cy="250" r="200" fill="none" stroke="white" strokeWidth="2" strokeDasharray="180 60"/>
          <circle cx="250" cy="250" r="160" fill="none" stroke="white" strokeDasharray="300 40"/>
          <circle cx="250" cy="250" r="120" fill="none" stroke="white" strokeWidth="4" strokeDasharray="120 60"/>
          <circle cx="250" cy="250" r="90" fill="none" stroke="white" strokeDasharray="200 40"/>
          <circle cx="250" cy="250" r="60" fill="none" stroke="white" strokeWidth="4" strokeDasharray="100 80"/>
          <circle cx="250" cy="250" r="40" fill="none" stroke="white" strokeDasharray="150 40"/>
        </svg>

      </div>

      {/* SPIN BUTTON */}
      <div className="relative w-full flex justify-center pb-8">

        <div className="relative w-[clamp(260px,85vw,420px)]">

          {/* COLOR ORB */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-[-32px]
            w-14 h-14 rounded-full
            bg-[conic-gradient(red,orange,yellow,green,cyan,blue,violet,red)]
            shadow-lg
            z-20
            ${spinning ? "animate-spin" : "animate-pulse"}
            `}
          />

          {/* BUTTON */}
          <button
            onClick={handleSpin}
            className="relative w-full h-[70px] active:scale-[0.97] transition"
          >
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
                Z"
                fill="white"
              />
            </svg>

            <span
              className="absolute inset-0 flex items-center justify-center text-black text-lg translate-y-3"
              style={{ fontFamily: "Aldrich" }}
            >
              Spin here
            </span>

          </button>
        </div>
      </div>
    </div>
  );
};

export default SpinMatch;