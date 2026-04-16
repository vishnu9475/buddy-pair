import React, { useState } from "react";
const AdminInfo46 = ({
  title = "Group Title",
  description = "Group Description",
  heading = "Make a Group\ncall with friend's",
  admin = {
    name: "Name",
    role: "Group Admin",
    avatar: "https://picsum.photos/seed/picsum/200/300",
  },
  members = [
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/picsum/200/300",
  ],

  /* 🔹 FUNCTION */
  onCreate
}) => {

    const handleAddMember = () => {
  const newMember = `https://picsum.photos/seed/${Math.random()}/200/300`;
  setMemberList([...memberList, newMember]);
};

  const [memberList, setMemberList] = useState(members);
  return (
     <div className="w-full max-w-full bg-[#FDF8FF] px-6 sm:px-8 lg:px-14 py-8 sm:py-10 lg:py-14">
      
      {/* CARD */}
      

        {/* TOP LABELS */}
        <p style={{ fontFamily: "Aldrich" }} className="text-base text-black">{title}</p>
        <p style={{ fontFamily: "Aldrich" }} className="text-sm text-gray-500 mb-5">{description}</p>

        {/* HEADING */}
        <h1 className="whitespace-pre-line text-[36px] sm:text-[36px] lg:text-[36px] leading-tight font-semibold text-[#121212] mb-6">
          {heading}
        </h1>

        {/* ADMIN */}
        <p style={{ fontFamily: "Aldrich" }} className="text-sm text-gray-400 mb-2">Group Admin</p>
        <div className="flex items-center gap-3 mb-8">
          <img
            src={admin.avatar}
            alt="admin"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
          <div>
            <p style={{ fontFamily: "Aldrich" }} className="text-sm font-medium text-[#121212]">
              {admin.name}
            </p>
            <p style={{ fontFamily: "Aldrich" }} className="text-xs text-gray-400">{admin.role}</p>
          </div>
        </div>

        {/* MEMBERS */}
        <p style={{ fontFamily: "Aldrich" }} className="text-sm text-gray-400 mb-4">Invited Members</p>

        <div className="flex flex-wrap gap-4 mb-10">
          {memberList.map((img, index) => (
            <div key={index} className="relative cursor-pointer">
              <img
                src={img}
                alt="member"
                className="w-14 h-14 sm:w-15 sm:h-15 rounded-full object-cover"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow text-xs font-semibold">
                +
              </span>
            </div>
          ))}

          {/* EMPTY ADD */}
          <div
            onClick={handleAddMember}
            className="w-14 h-14 sm:w-15 sm:h-15 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 cursor-pointer"
          >
            +
          </div>
        </div>

        {/*BUTTON*/}
        <button
          onClick={() =>{ alert("✅ Group Created")
          onCreate && onCreate();
          }}
          style={{ fontFamily: "Aldrich" }}
          className="w-full h-12 rounded-2xl bg-[#4B164C] text-white font-medium hover:opacity-90 transition"
        >
          Create
        </button>
      </div>
    
  );
};

export default AdminInfo46;
