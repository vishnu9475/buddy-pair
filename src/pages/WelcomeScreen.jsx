
import { motion } from "framer-motion";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { PiMapPinFill } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import { useState } from "react";
import AuthModal from "./AuthModel";

const outerProfiles = [
   { src: "https://randomuser.me/api/portraits/women/1.jpg", size: 60 },
   { src: "https://randomuser.me/api/portraits/men/2.jpg", size: 50 },
   { src: "https://randomuser.me/api/portraits/women/3.jpg", size: 70 },
   { src: "https://randomuser.me/api/portraits/men/4.jpg", size: 55 },
   { src: "https://randomuser.me/api/portraits/women/5.jpg", size: 65 },
];

const innerProfiles = [
   { src: "https://randomuser.me/api/portraits/men/6.jpg", size: 45 },
   { src: "https://randomuser.me/api/portraits/women/7.jpg", size: 30 },
];

function Orbit({ items, radius, duration }) {
   return (
      <motion.div
         animate={{ rotate: 360 }}
         transition={{
            repeat: Infinity,
            duration,
            ease: "linear",
         }}
         className="absolute w-full h-full z-20"
      >
         {items.map((item, index) => {
            const angle = (index / items.length) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
               <div
                  key={index}
                  className="absolute"
                  style={{
                     left: "50%",
                     top: "50%",
                     transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
               >
                  <motion.img
                     src={item.src}
                     alt=""
                     style={{ width: item.size, height: item.size }}
                     className="rounded-full object-covershadow-lg"
                     animate={{ rotate: -360 }}
                     transition={{
                        repeat: Infinity,
                        duration,
                        ease: "linear",
                     }}
                  />
               </div>
            );
         })}
      </motion.div>
   );
}

const WelcomeScreen = () => {
   const [authMode, setAuthMode] = useState(null);

   const openSignUp = () => setAuthMode("signup");
   const openLogin = () => setAuthMode("login");
   const closeModal = () => setAuthMode(null);

   return (
      <div className="min-h-screen bg-[#F6F3F8] flex flex-col md:flex-row items-center md:items-center justify-start md:justify-center pt-15 md:pt-0 px-6 md:px-12 lg:px-20 md:gap-32 gap-16">
         <div className="relative w-[320px] h-80 sm:w-90 sm:h-90 flex items-center justify-center scale-80 md:scale-100">
            <div className="absolute w-full h-full pointer-events-none z-10">
               <div
                  className="absolute text-fuchsia-700/50"
                  style={{
                     left: "50%",
                     top: "50%",
                     transform: "translate(-50%, -50%) translate(64px, -139px)",
                  }}
               >
                  <PiMapPinFill size={28} />
               </div>

               <div
                  className="absolute text-fuchsia-700/50"
                  style={{
                     left: "50%",
                     top: "50%",
                     transform:
                        "translate(-50%, -50%) translate(-107px, 110px)",
                  }}
               >
                  <IoChatbubbleEllipses size={28} />
               </div>
            </div>

            <div className="absolute w-60 h-60 rounded-full bg-pink-300/30 opacity-80" />
            <div className="absolute w-37.5 h-37.5 rounded-full bg-[#F6F3F8]" />
            <div className="absolute w-77.5 h-77.5 rounded-full border-2 border-dashed border-[#E1B8F2]" />

            <Orbit items={outerProfiles} radius={160} duration={25} />
            <Orbit items={innerProfiles} radius={110} duration={15} />

            <div className="z-30 rounded-full flex items-center justify-center shadow-xl">
               <img
                  src="https://randomuser.me/api/portraits/women/8.jpg"
                  alt="center"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
               />
            </div>
         </div>
         <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium2C4A] leading-snug">
               Let’s meeting new <br /> people around you
            </h1>
            <div className="w-full mt-8 space-y-4">
               <button
                  className="relative cursor-pointer w-full bg-[#5A1E63] text-white py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
                  onClick={openLogin}
               >
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
                     <LuPhoneCall size={20} className="text-[#5A1E63]" />
                  </div>
                  <span className="block text-center">
                     Login with Email/Phone
                  </span>
               </button>
               <button className="relative cursor-pointer w-full bg-[#E8DDEA] text-[#5A1E63] py-3 rounded-full font-medium hover:bg-[#DCC9E3] transition">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
                     <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="w-5 h-5"
                     />
                  </div>
                  <span className="block text-center">Login with Google</span>
               </button>
            </div>
            <p className="mt-6 text-sm text-[#7C6A85]">
               Don’t have an account?{" "}
               <button
                  onClick={openSignUp}
                  className="text-[#C06BB6] font-medium cursor-pointer"
               >
                  Sign Up
               </button>
            </p>
         </div>
         {authMode && (
            <AuthModal
               mode={authMode}
               setMode={setAuthMode}
               setAuthMode={setAuthMode}
               onClose={closeModal}
            />
         )}
      </div>
   );
};

export default WelcomeScreen;
