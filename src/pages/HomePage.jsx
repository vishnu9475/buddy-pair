
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import AppHeader from '../comp_vishnu/AppHeader';
import CategoryItems from '../comp_saranya/CategoryItems';
import ProfileSidebar50 from '../comp_saranya/ProfileSidebar50';

import StoryIconList from '../comp_vishnu/StoryIconList.jsx';
import CategoryToggleBar from '../comp_vishnu/CategoryToggleBar.jsx';
import ProfileList from '../comp_vishnu/ProfileList.jsx';
import Footer from '../comp_vishnu/AppFooter.jsx';

const Page12 = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const navigate = useNavigate();

  // simplified navigation
  const handleDesignation = () => navigate("/designation");
  const handleQualification = () => navigate("/qualification");
  const handleNotification = () => navigate("/notifications");

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] w-full">
      
      {/* Header */}
      <AppHeader 
        onMenuClick={() => setLeftOpen(true)}
        onProfileClick={() => setRightOpen(true)}
        handleNotification= {handleNotification}
      />

      <div className="flex flex-1 overflow-hidden">

        {/* Left Sidebar - Desktop */}
        <div className="hidden lg:flex shrink-0 items-stretch h-full shadow-lg z-10">
          <CategoryItems inline={true} />
        </div>

        {/* Left Sidebar - Mobile */}
        <div className="lg:hidden">
          <CategoryItems 
            inline={false} 
            open={leftOpen} 
            onclose={() => setLeftOpen(false)}  
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 flex flex-col items-center gap-6 overflow-y-auto w-full">

          {/* STORIES */}
          <section className="shrink-0">
            <StoryIconList />
          </section>

          {/* CATEGORY TOGGLE */}
          <section className="px-4 mt-8 w-full max-w-full sm:max-w-xl lg:max-w-5xl">
            <CategoryToggleBar 
              handleDesignation={handleDesignation}
              handleQualification={handleQualification}
            />
          </section>

          {/* PROFILE CARDS */}
          <section className="px-4 mt-4">
            <ProfileList />
          </section>

        </main>

        {/* Right Sidebar - Desktop */}
        <div className="hidden lg:flex shrink-0 items-stretch h-full shadow-lg z-10">
          <ProfileSidebar50 inline={true} />
        </div>

        {/* Right Sidebar - Mobile */}
        <div className="lg:hidden">
          <ProfileSidebar50 
            inline={false} 
            open={rightOpen} 
            onClose={() => setRightOpen(false)} 
          />
        </div>

      </div>

      {/* Footer - moved outside */}
      <Footer />

    </div>
  );
};

export default Page12;
