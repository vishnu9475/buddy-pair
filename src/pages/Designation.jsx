// import NavHeader from "../compo_sanjo/NavHeader";
// import MatchList from "../compo_sanjo/MatchList";
// import AppFooter from "../comp_vishnu/AppFooter";
// import StatItemList from "../compo_sanjo/StatItemList";
// import { useNavigate } from "react-router-dom";

// const Designation = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="w-full min-h-screen bg-[#FDF7FF] font-sans relative pb-32">
//       <div className="w-full px-4 md:px-6 pt-2">
//         {/* Header */}
//         <NavHeader
//           title="Designation"
//           onBack={() => navigate(-1)}
//           onFilter={() => console.log("Filter")}
//         />

//         {/* Stats Section */}
//         <StatItemList />

//         {/* Matches List */}
//         <MatchList />
//       </div>

//       {/* Footer Navigation */}
//       <AppFooter />
//     </div>
//   );
// };

// export default Designation;

// import NavHeader from "../compo_sanjo/NavHeader";
// import MatchList from "../compo_sanjo/MatchList";
// import AppFooter from "../comp_vishnu/AppFooter";
// import StatItemList from "../compo_sanjo/StatItemList";
// import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";

// import { useNavigate } from "react-router-dom";


// const Designation = () => {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);


//   return (
//     <div className="w-full min-h-screen bg-[#FDF7FF] font-sans pb-32">
      
//       {/* MAIN LAYOUT */}
//       <div className="flex w-full">

//         {/* LEFT CONTENT */}
//         <div className="flex-1 px-4 md:px-6 pt-2">
//           <NavHeader
//             title="Designation"
//             onBack={() => navigate(-1)}
//             onFilter={() => console.log("Filter")}
//           />

//           <StatItemList />
//           <MatchList />
//         </div>

//         {/* RIGHT SIDEBAR (DESKTOP ONLY) */}
//         <div className="hidden lg:block w-[320px]">
//           <ProfileSidebar50 inline />
//         </div>

//       </div>

//       {/* FOOTER */}
//       <AppFooter />
//     </div>
//   );
// };

// export default Designation;

import { useState } from "react";
import NavHeader from "../compo_sanjo/NavHeader";
import MatchList from "../compo_sanjo/MatchList";
import AppFooter from "../comp_vishnu/AppFooter";
import StatItemList from "../compo_sanjo/StatItemList";
import ProfileSidebar50 from "../comp_saranya/ProfileSidebar50";

import { useNavigate } from "react-router-dom";

const Designation = () => {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FDF7FF] font-sans pb-32">

      {/* MAIN LAYOUT */}
      <div className="flex w-full">

        {/* LEFT CONTENT */}
        <div className="flex-1 px-4 md:px-6 pt-2">
          <NavHeader
            title="Designation"
            onBack={() => navigate(-1)}
            onFilter={() => console.log("Filter")}
            onProfileClick={() => setIsSidebarOpen(true)} 
          />

          <StatItemList />
          <MatchList />
        </div>

        {/* RIGHT SIDEBAR (DESKTOP ONLY) */}
        <div className="hidden lg:block w-[320px]">
          <ProfileSidebar50 inline />
        </div>
      </div>

      {/* ✅ MOBILE SIDEBAR (OVERLAY) */}
      <ProfileSidebar50
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* FOOTER */}
      <AppFooter />
    </div>
  );
};

export default Designation;