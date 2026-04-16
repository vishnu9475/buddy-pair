import React from "react";
import { useNavigate } from "react-router-dom";
import AppHeader from "../comp_neja/AppHeader";
import AdminInfo46 from "../comp_neja/AdminInfo46";
import BottomNavigation from "../comp_neja/BottomNavigation";

const CreateGroupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDF8FF] flex flex-col relative">
      
      {/* 🔹 HEADER */}
      <AppHeader
        showBrand={true}
        brand="BuddyPair"
        showBack={true}
        showCenterTitle={true}
        centerTitle="Create Group"
        showNotification={true}
        onBackClick={() => navigate(-1)}
        onNotificationClick={() => navigate("/notifications")}
      />

      {/* 🔹 BODY */}
      <div className="flex-1 overflow-y-auto pb-28">
        <AdminInfo46
          title="Group Title"
          description="Group Description"
          heading={`Make a Group\ncall with friend's`}
          admin={{
            name: "Rashid Khan",
            role: "Group Admin",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          }}
          members={[
            "https://randomuser.me/api/portraits/men/11.jpg",
            "https://randomuser.me/api/portraits/men/12.jpg",
            "https://randomuser.me/api/portraits/men/13.jpg",
            "https://randomuser.me/api/portraits/men/14.jpg",
            "https://randomuser.me/api/portraits/women/15.jpg",
            "https://randomuser.me/api/portraits/men/16.jpg",
          ]}
          onCreate={() => {
            console.log("Group Created");
            navigate("/pagegroups");
          }}
          onAddMember={() => {
            console.log("Add Member Clicked");
          }}
        />
      </div>

      {/* 🔹 BOTTOM NAV */}
      <BottomNavigation />
    </div>
  );
};

export default CreateGroupPage;