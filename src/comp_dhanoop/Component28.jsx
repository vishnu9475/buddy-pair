import React from "react";

const AroundMeCard = () => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl border shadow-sm p-5">
      
      {/* HeadeR */}
      <h2 style={{ fontFamily: "Aldrich" }} className="text-xl font-semibold text-gray-900">Around me</h2>
      <p style={{ fontFamily: "Aldrich" }} className="text-sm text-gray-500 mt-1">
        People with <span className="text-pink-500 font-medium">“Music”</span> interest around you
      </p>

      {/* Map div */}
      <div className="relative mt-4 h-72 rounded-2xl overflow-hidden bg-gray-100">

        {/* Fake Map img*/}
   <img
  src="/img2.png"
  alt=""
  className="absolute inset-0 w-full h-full object-cover"
/>






        {/* Clara imGE */}
        <div className="absolute left-16 top-24">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Clara"
              className="w-16 h-16 rounded-full border-4 border-[#4B164C]"
            />

            {/* Connect Bubble */}
            <div style={{ fontFamily: "Aldrich" }} className=" absolute -top-13 -left-16 bg-[#4B164C] text-white px-1 py-2 rounded-full text-xs flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2  bg-white rounded-full animate-pulse"></span>
              Connect with Clara 👋
            </div>
          </div>
        </div>

        {/* Other Person img */}
        <div className="absolute right-14 bottom-16">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-white shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default AroundMeCard;
