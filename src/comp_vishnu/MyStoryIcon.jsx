// import React from "react";
// import profile_pic from "../assets/img1.jpg";

// const MyStoryIcon = ({ goTOMystory }) => {
//   return (
//     <ul className="flex space-x-4 sm:space-x-6">
//       <li className="flex flex-col items-center space-y-1 flex-shrink-0">
        
//         {/* Story Ring */}
//         <div className="relative bg-linear-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
//           <div
//             onClick={goTOMystory}
//             className="block p-1 rounded-full bg-white cursor-pointer"
//           >
//             <img
//               src={profile_pic}
//               alt="My Story"
//               className="
//                 rounded-full
//                 h-16 w-16
//                 sm:h-20 sm:w-20
//                 md:h-24 md:w-24
//                 object-cover
//               "
//             />
//           </div>

//           {/* Plus Button */}
//           <button
//             className="
//               absolute
//               bottom-0
//               right-0
//               sm:right-1
//               bg-blue-400
//               h-6 w-6
//               sm:h-7 sm:w-7
//               md:h-8 md:w-8
//               rounded-full
//               text-base
//               sm:text-xl
//               md:text-2xl
//               font-semibold
//               border-2
//               sm:border-4
//               border-white
//               flex
//               items-center
//               justify-center
//               font-mono
//               hover:bg-blue-700
//               text-white
//             "
//           >
//             +
//           </button>
//         </div>

//         {/* Label */}
//         <p
//           onClick={goTOMystory}
//           className="text-xs sm:text-sm md:text-base text-gray-800 cursor-pointer"
//         >
//           My Story
//         </p>
//       </li>
//     </ul>
//   );
// };

// export default MyStoryIcon;

import React from "react";
import profile_pic from "../assets/img1.jpg";

const MyStoryIcon = ({ goTOMystory }) => {
  return (
    <li className="flex flex-col items-center space-y-1 flex-shrink-0">
      
      {/* Story Ring */}
      <div className="relative bg-linear-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
        <div
          onClick={goTOMystory}
          className="block p-1 rounded-full bg-white cursor-pointer"
        >
          <img
            src={profile_pic}
            alt="My Story"
            className="
              rounded-full
              h-16 w-16
              sm:h-20 sm:w-20
              md:h-24 md:w-24
              object-cover
            "
          />
        </div>

        {/* Plus Button */}
        <button
          className="
            absolute bottom-0 right-0 sm:right-1
            bg-blue-400
            h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8
            rounded-full
            text-base sm:text-xl md:text-2xl
            font-semibold
            border-2 sm:border-4 border-white
            flex items-center justify-center
            font-mono
            hover:bg-blue-700 text-white
          "
        >
          +
        </button>
      </div>

      {/* Label */}
      <p
        onClick={goTOMystory}
        className="text-xs sm:text-sm md:text-base text-gray-800 cursor-pointer"
      >
        My Story
      </p>
    </li>
  );
};

export default MyStoryIcon;