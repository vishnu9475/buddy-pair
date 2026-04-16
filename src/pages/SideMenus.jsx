import React, { useState } from 'react';
import AppHeader from '../comp_saranya/AppHeader';
import CategoryItems from '../comp_saranya/CategoryItems';
import ProfileSidebar50 from '../comp_saranya/ProfileSidebar50';

const SideMenus = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50 w-full">
      {/* Header */}
      <AppHeader 
        onMenuClick={() => setLeftOpen(true)}
        onProfileClick={() => setRightOpen(true)}
      />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Permanent Desktop */}
        <div className="hidden lg:flex shrink-0 items-stretch h-full shadow-lg z-10">
          <CategoryItems inline={true} open={true} />
        </div>

        {/* Left Sidebar - Mobile Overlay */}
        <div className="lg:hidden">
          <CategoryItems inline={false} open={leftOpen} onclose={() => setLeftOpen(false)} />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-8 flex flex-col items-center justify-center overflow-y-auto relative w-full">
          {/* <div className="max-w-xl text-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            
          </div> */}
        </main>

        {/* Right Sidebar - Permanent Desktop */}
        <div className="hidden lg:flex shrink-0 items-stretch h-full shadow-lg z-10">
          <ProfileSidebar50 inline={true} open={true} />
        </div>

        {/* Right Sidebar - Mobile Overlay */}
        <div className="lg:hidden">
          <ProfileSidebar50 inline={false} open={rightOpen} onClose={() => setRightOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default SideMenus;
