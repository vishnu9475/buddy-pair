import React, { useState } from "react";
import { ArrowLeft, Search, MessageCircle, Phone, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "@fontsource/aldrich";
import Footer from "../comp_vishnu/AppFooter.jsx";

const groupsData = [
  { id: 1, name: "Team Align", avatar: "https://i.pravatar.cc/100?img=11" },
  { id: 2, name: "Team SAS", avatar: "https://i.pravatar.cc/100?img=12" },
  { id: 3, name: "Team REACT", avatar: "https://i.pravatar.cc/100?img=33" },
  { id: 4, name: "Team KINGS", avatar: "https://i.pravatar.cc/100?img=44" },
  { id: 5, name: "Team Alpha", avatar: "https://i.pravatar.cc/100?img=55" },
  { id: 6, name: "Team Beta", avatar: "https://i.pravatar.cc/100?img=66" },
];

const GroupsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter groups
  const filteredGroups = groupsData.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="h-screen bg-[#4B164C] flex flex-col"
      style={{ fontFamily: "Aldrich, sans-serif" }}
    >
      {/* HEADER */}
      <div className="px-6 pt-10 text-white">
        <h1 className="text-2xl font-light tracking-wide">BuddyPair</h1>

        <ArrowLeft
          size={20}
          className="cursor-pointer mb-4 mt-2 hover:opacity-70"
          onClick={() => navigate(-1)}
        />
      </div>

      {/* WHITE CONTAINER */}
      <div className="flex-1 bg-[#F3F3F3] rounded-t-[40px] px-6 pt-6 overflow-y-auto pb-28">
        
        {/* TOP SECTION */}
        <div className="relative flex items-center justify-center mb-8">
          
          {/* Search Input */}
          <div className="absolute left-0 flex items-center bg-[#DD88CF] px-3 py-2 rounded-full shadow-sm">
            <Search size={16} className="text-white mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white placeholder-white text-sm w-24"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <h2 className="text-lg font-medium text-[#000E08]">
            Groups
          </h2>
        </div>

        {/* GROUP LIST */}
        {filteredGroups.map((group) => (
          <div key={group.id} className="mb-5">
            
            <div className="flex items-center justify-between
                p-3 rounded-xl
                transition-colors duration-200 
                hover:bg-[#EFE3F0] 
                cursor-pointer"
                onClick={() => navigate(`/group/${group.id}`)}
                >
              
              {/* LEFT SIDE */}
              <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => navigate(`/group/${group.id}`)}
              >
                <img
                  src={group.avatar}
                  alt={group.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="text-gray-800 text-base font-medium">
                  {group.name}
                </p>
              </div>

              {/* RIGHT ICONS */}
              <div className="flex items-center gap-5 text-gray-400">
                <MessageCircle
                  size={20}
                  className="cursor-pointer hover:text-purple-600"
                  onClick={() => navigate(`/chat/${group.id}`)}
                />
                <Phone
                  size={20}
                  className="cursor-pointer hover:text-green-600"
                  onClick={() => alert(`Calling ${group.name}`)}
                />
                <Video
                  size={20}
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => alert(`Video calling ${group.name}`)}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="mt-5 h-[1px] bg-gray-200"></div>
          </div>
        ))}

        {filteredGroups.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No groups found
          </p>
        )}
      </div>

      {/* FOOTER FIXED */}
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default GroupsPage;