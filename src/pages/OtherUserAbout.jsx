import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard29 from "../comp_neja/ProfileCard29";
import AboutSection30 from "../comp_neja/AboutSection30";
import InterestSection26 from "../comp_neja/InterestSection26";
import ActionButtons23 from "../comp_neja/ActionButtons23";
import SingleCard27 from "../comp_neja/SingleCard27";
import ProfileImageCards from "../comp_neja/ProfileImageCards";
import InfoBox from "../comp_neja/InfoBox";
import QuestionInfoCard from "../comp_neja/QuestionInfoCard";
import ImageGridSection from "../comp_neja/ImageGridSection";
import VideoGridSection from "../comp_neja/VideoGridSection";
import UpgradeAlertBox from "../comp_neja/UpgradeAlertBox";
import DetailsBox from "../comp_neja/DetailsBox";
import AlertBox from "../comp_neja/AlertBox";

const OtherUserAbout = () => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about"); 
  const [isPrepaidUser] = useState(true); 
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [smoothY, setSmoothY] = useState(0);
  const overlap = Math.min(smoothY * 0.15, 60);
  const [alertMsg, setAlertMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
  let rafId;

  const onScroll = () => {
    const target = window.scrollY;

    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      setSmoothY(prev => {
  const delta = target - prev;
  return prev + delta * 0.18;
});
    });
  };

  window.addEventListener("scroll", onScroll);
  return () => {
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(rafId);
  };
}, []);

const navigate = useNavigate();

const showCustomAlert = (msg) => {
  setAlertMsg(msg);
  setShowAlert(true);

  setTimeout(() => {
    setShowAlert(false);
  }, 2000);
};
const handleAction = (id) => {
  switch (id) {
    case "comment":
      navigate("/chat");
      break;

    case "like":
      showCustomAlert("Interest sent ❤️");
      break;

    case "star":
      showCustomAlert("Added to favorites ⭐");
      break;

    case "add":
      showCustomAlert("Request sent ✅");
      break;

    case "close":
      showCustomAlert("Profile skipped ❌");
      break;

    default:
      showCustomAlert("Done");
  }
};

  const handleContactClick = () => {
  setActiveTab("contact");

  if (!isPrepaidUser) {
    setShowUpgrade(true);
  }
};
  
  const contactData = {
    "House Name": "Manjali House",
    "Address": "Thopumpadi PO, Ernakulam, Pin 620112",
    "Mobile": "02012121",
    "parents Contact": "012122201",
    
  }; 

  const backendData = {
    "Father's Name": "Abc",
    "Father's Occupation": "Business",
    "Mother's Name": "Xyz",
    "Mother's Occupation": "Teacher",
    "Number of Siblings": "3",
  }; 

  return (
    <div className="min-h-screen bg-neutral-100">
      

        {/* HERO */}
        <div className="w-full">
          <ProfileCard29 scrollY={smoothY} 
           maxScroll={600} 
           onBack={() => navigate(-1)}/>
        </div>
        {/* WHITE CONTENT */}
        <div className="relative z-20 bg-white rounded-t-3xl pt-4 pb-24 transition"
        style={{
    marginTop: `-${overlap}px`
  }}
        >
        <div className="w-full max-w-[1280px] 2xl:max-w-[1320px] mx-auto relative overflow-hidden">
          {/* TABS */}
          <div className="px-6 mb-2">
            <div className="bg-purple-200 rounded-2xl flex p-1">
              <button
                onClick={() => {
                  setActiveTab("about");
                  setShowUpgrade(false);
                }}
                style={{ fontFamily: "Aldrich" }}
                className={`flex-1 py-2 rounded-2xl text-base font-medium transition ${
                  activeTab === "about"
                    ? "bg-white shadow text-purple-900"
                    : "text-purple-900"
                }`}
              >
                About
              </button>

              <button
                onClick={handleContactClick}
                style={{ fontFamily: "Aldrich" }}
                className={`flex-1 py-2 rounded-2xl text-base font-medium transition ${
                  activeTab === "contact"
                    ? "bg-white shadow text-purple-900"
                    : "text-purple-900"
                }`}
              >
                Contact info
              </button>
            </div>
          </div>

          {/* ABOUT */}
          {activeTab === "about" && (
            <>
              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <AboutSection30 showHeading={false}/>
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <InterestSection26 />
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                  Hobbies
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <SingleCard27 emoji="📖" label="Reading" />
                  <SingleCard27 emoji="🍳" label="Cooking" />
                  <SingleCard27 emoji="🎨" label="Painting" />
                </div>
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <ProfileImageCards
                  images={[
                    "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                  ]}
                />
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10 mt-3">
                <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                  Location
                </h3>
                <InfoBox text="Bangalore, India" />
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10 lg:mt-3">
                <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                  Qualification
                </h3>
                <InfoBox icon="🎓" text="Bachelor of Computer Science" />
              </div>
 
              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                  Date of Birth
                </h3>
                <InfoBox icon="🎂" text="12/12/1990" />
              </div>
            </div>
              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                       Height 
                    </h3>
                    <InfoBox icon="" text="170 cm" />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                      Weight 
                    </h3>
                    <InfoBox icon="" text="60 kg" />
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                       Body Type 
                    </h3>
                    <InfoBox icon="" text="Slim" />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                      Complexion 
                    </h3>
                    <InfoBox icon="" text="Brown" />
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                       Religion 
                    </h3>
                    <InfoBox icon="" text="Hindu" />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                      Cast/Community 
                    </h3>
                    <InfoBox icon="" text="OBC" />
                  </div>
                </div>
              </div>

            <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                       Family Type 
                    </h3>
                    <InfoBox icon="" text="Nuclear" />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                      Annual Income
                    </h3>
                    <InfoBox icon="" text="10 lakh" />
                  </div>
                </div>
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                    <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                       Family Details 
                    </h3>
                 <DetailsBox data={backendData} />
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                  Habits
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <QuestionInfoCard label="Smoking habits" value="No" />
                <QuestionInfoCard label="Drinking habits" value="Yes" />
                </div>
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                  Images
                </h3>
                <ImageGridSection
                  images={[
                    "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
                  ]}
                  onOpen={() => setIsMediaOpen(true)}
                  onClose={() => setIsMediaOpen(false)}
                />
              </div>

              <div className="px-6 py-3 px-6 py-3 lg:px-8 lg:py-2 sm:px-10">
                <h3 className="text-base text-gray-400 mb-2" style={{ fontFamily: "Aldrich" }}>
                  Short Reels
                </h3>
                <VideoGridSection
                  videos={[
                    "https://youtube.com/shorts/ibpP7w5MY_o?si=DSMgJeokUat16FkE",
                  ]}
                  onOpen={() => setIsMediaOpen(true)}
                  onClose={() => setIsMediaOpen(false)}
                />
              </div>
            </>
          )}
           
          {/* CONTACT */}
        {activeTab === "contact" && (
  <div className="px-6 py-3 relative">
    
    <h3
      className="text-base text-gray-400 mb-2"
      style={{ fontFamily: "Aldrich" }}
    >
      Contact Details
    </h3>

    {/* 🔒 BLUR ONLY DATA */}
    <div
      className={`relative ${
        !isPrepaidUser ? "blur-sm pointer-events-none" : ""
      }`}
    >
      <DetailsBox data={contactData} />
    </div>

    {/* 🔥 UPGRADE BOX INSIDE SECTION */}
    {!isPrepaidUser && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 w-[260px] text-center">
          
          <h2 className="text-lg font-semibold mb-4">
            Upgrade to view contact
          </h2>

          <button
            onClick={() => navigate("/paymentmethods")}
            className="bg-purple-800 text-white px-6 py-2 rounded-full shadow-md"
          >
            Upgrade
          </button>

        </div>
      </div>
    )}

  </div>
)}

        </div>

        
        <AlertBox message={alertMsg} show={showAlert} />
        {/* ACTION BUTTONS */}
        {!isMediaOpen && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
            <ActionButtons23 
              onAction={handleAction}
            />
          </div>
        )}

        {/* UPGRADE BOX OVERLAY */}
        {showUpgrade && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* dark overlay */}
            <div
              className="absolute inset-0 backdrop-blur-md bg-black/30"
              onClick={() => setShowUpgrade(false)}
            />

            {/* modal */}
            <UpgradeAlertBox onBackClose={() => setShowUpgrade(false)} onUpgrade={() => navigate("/paymentmethods")}/>
          </div>
        )}

      </div>
   </div>
  );
};

export default OtherUserAbout;
