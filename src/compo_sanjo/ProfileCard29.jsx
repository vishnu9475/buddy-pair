import React from "react";
import { ChevronLeft, Navigation } from "lucide-react";

const ProfileCard29 = ({
  image = "https://picsum.photos/id/1005/800/1200",
  name = "Alfredo Calzoni",
  age = 20,
  location = "Hamburg, Germany",
  distance = "2.5 km",
  match = 80,
  ButoonText = "Match",
  onBack = () => {},
}) => {
  return (
    <div className="relative w-full h-screen min-h-[78vh] overflow-hidden shadow-2xl">
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-purple-950 via-black/40 to-black/10" />

      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
        {/* Back */}
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full border border-white/40 backdrop-blur-md flex items-center justify-center"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Distance */}
        <div
          style={{ fontFamily: "Aldrich" }}
          className="px-3 py-2 rounded-full border border-white/40 backdrop-blur-md flex items-center gap-1 text-sm"
        >
          <Navigation size={14} />
          {distance}
        </div>
      </div>

      {/* Right Slider */}
      <div className="absolute right-3 top-28 h-20 w-2 bg-white/20 rounded-full z-10">
        <div className="absolute top-16 left-0 w-full h-12 bg-white rounded-full" />
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center text-white z-10">
        {/* Name */}
        <h2
          style={{ fontFamily: "Aldrich" }}
          className="text-3xl font-semibold tracking-wide"
        >
          {name}, {age}
        </h2>

        {/* Location */}
        <p
          style={{ fontFamily: "Aldrich" }}
          className="text-xs tracking-widest uppercase opacity-80 mt-1"
        >
          {location}
        </p>

        <div className="mt-6 inline-flex items-center gap-3 px-2 py-2 rounded-full border border-pink-400/70 bg-purple-600/20 backdrop-blur-md shadow-[0_0_15px_rgba(236,72,153,0.35)]">
          <div className="relative w-11 h-11 rounded-full border-4 border-pink-400 flex items-center justify-center">
            <span
              style={{ fontFamily: "Aldrich" }}
              className="text-lg font-semibold leading-none"
            >
              {match}
            </span>
            <span
              style={{ fontFamily: "Aldrich" }}
              className="absolute bottom-0 right-3 text-[9px]"
            >
              %
            </span>
          </div>

          <span
            style={{ fontFamily: "Aldrich" }}
            className="text-lg font-medium tracking-wide"
          >
            {ButoonText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard29;
