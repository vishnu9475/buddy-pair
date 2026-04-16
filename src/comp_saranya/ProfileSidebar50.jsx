import React, { useState } from "react";
import { FiXCircle } from "react-icons/fi";
import { SlLogout } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileSidebar50 = ({
  open = true,
  onClose = () => { },
  inline = false,
  user = {
    name: "Stone Stellar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    status: "Online",
    isPrime: true,
  },
  menuItems = [
    { name: "My Profile", path: "/homePage" },
    { name: "Sent Request", path: "/sent" },
    { name: "Viewed My Profile", path: "/viewed-profile" },
    { name: "Accept Request", path: "/accept" },
    { name: "Reject", path: "/reject" },
    { name: "Received", path: "/received" },
    { name: "Shortlisted By", path: "/shortlistedBy" },
    { name: "Shortlisted", path: "/shortlist" },
    { name: "Contacted", path: "/contacted" },
    { name: "Message", path: "/messages" },
    { name: "Groups", path: "/groups" },
    { name: "Settings", path: "/settings" },
  ],
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {open && !inline && (
        <div
          className="fixed inset-0 bg-black/40 z-90 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${inline ? "relative h-fit max-h-full w-full max-w-[250px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] shrink-0" : `fixed h-fit max-h-[100vh] top-0 right-0 z-100 w-full max-w-[250px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        bg-[#6B4468]/95 shadow-xl px-4 sm:px-5 md:px-6 lg:px-7 pb-2 sm:pb-3 md:pb-4 lg:pb-5 ${inline ? 'pt-1 sm:pt-2' : 'pt-4 sm:pt-5 md:pt-6 lg:pt-7'} border-l border-[#6B4468] text-white overflow-y-auto 
      `}>
        {/* CLOSE BUTTON */}
        {!inline && (
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6 text-white/80 hover:text-white cursor-pointer"
          >
            <FiXCircle size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        )}

        {/* PROFILE HEADER */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-7 p-2 sm:p-3 rounded-lg">
          <div className="relative">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-pink-600"
            />
            <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-[#6A2E5E]" />
          </div>

          <div style={{ fontFamily: "Aldrich, sans-serif" }}>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-pink-600">
              {user.name}
            </h3>

            {user.isPrime && (
              <p className="text-xs sm:text-sm md:text-base text-yellow-300">👑 Prime Member</p>
            )}

            <p className="text-xs sm:text-sm md:text-base text-green-400">{user.status}</p>
          </div>
        </div>


        {/* MENU LIST */}
        <div>
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <div key={item.name}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  style={{ fontFamily: 'Aldrich, sans-serif' }}
                  className={`w-full text-left px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-lg text-base sm:text-lg md:text-xl font-aldrich transition 
                  ${isActive ? "bg-white/25" : "hover:bg-white/10"}
                  `}
                >
                  {item.name}
                </button>

                {/* UNDERLINE HIDDEN ) */}
                {index !== menuItems.length - 1 &&  (
                  <div className="h-px bg-white/60 mx-3 sm:mx-4 md:mx-5" />
                )}
              </div>
            );
          })}
        </div>



        {/* LOGOUT */}
        <div className="mt-6 sm:mt-7 md:mt-8 flex justify-center">
          <button
            onClick={() => handleNavigation("/AppInterface")}
            className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-white/80 hover:text-white cursor-pointer"
          >
            <SlLogout size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar50;
