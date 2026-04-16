// import React from "react";
// import { useNavigate } from "react-router-dom";
// import MyStoryIcon from "./MyStoryIcon.jsx";
// import OtherStoryIcon from "./OtherStoryIcon.jsx";
// import "@fontsource/aldrich";

// const StoryIconList = () => {
//   const navigate = useNavigate();
//   const goTOMystory = () =>{
//     navigate("/viewstory")
//   }

//   const goToOtherstory = () =>{
//     navigate("/viewstory")
//   }

//   return (
//     <div
//       className="
//         flex
//         gap-6
//         mx-2
//         overflow-x-auto
//         scrollbar-hide
//         snap-x
//         snap-mandatory
//       "
//       style={{ fontFamily: "Aldrich, sans-serif" }}
//     >
//       {/* Inner wrapper prevents flex shrink */}
//       <div className="flex gap-6 snap-start">
//         <MyStoryIcon goTOMystory={goTOMystory} />
//         <OtherStoryIcon goToOtherstory={goToOtherstory}/>
  
//       </div>
//     </div>
//   );
// };

// export default StoryIconList;

import React from "react";
import { useNavigate } from "react-router-dom";
import MyStoryIcon from "./MyStoryIcon.jsx";
import OtherStoryIcon from "./OtherStoryIcon.jsx";
import "@fontsource/aldrich";
import '../index.css'; 

const StoryIconList = () => {
  const navigate = useNavigate();

  const goTOMystory = () => {
    navigate("/mystory");
  };

  const goToOtherstory = () => {
    navigate("/viewstory");
  };

  return (
    <div className="w-full overflow-hidden">
      <ul
        className="
          flex
          items-center
          gap-4
          px-2
          overflow-x-auto
          scroll-smooth
          no-scrollbar
        "
        style={{ fontFamily: "Aldrich, sans-serif" }}
      >
        {/* My Story */}
        <MyStoryIcon goTOMystory={goTOMystory} />

        {/* Other Stories */}
        <OtherStoryIcon goToOtherstory={goToOtherstory} />
      </ul>
    </div>
  );
};

export default StoryIconList;
