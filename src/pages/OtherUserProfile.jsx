import { useEffect, useState } from "react";
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
import AlertBox from "../comp_neja/AlertBox";
import UpgradeAlertBox from "../comp_neja/UpgradeAlertBox";

const OtherUserProfile = () => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [smoothY, setSmoothY] = useState(0);
  const overlap = Math.min(smoothY * 0.15, 60);
  const [alertMsg, setAlertMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const isPremiumUser = true;
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
  return (
    <div
  className={`relative min-h-screen bg-purple-950 overflow-x-hidden ${
    !isPremiumUser ? "overflow-hidden" : ""
  }`}
>
  <div
    className={`relative ${
      !isPremiumUser ? "blur-md pointer-events-none select-none" : ""
    }`}
  >
      {/* PAGE CONTAINER */}
      <div className="relative z-10">
        <ProfileCard29 
           scrollY={smoothY} 
           maxScroll={600} 
           onBack={() => navigate(-1)}
        />
      </div>
        {/* WHITE SHEET */}
       <div
           className="relative z-20 bg-white rounded-t-3xl pt-6 pb-20 shadow-2xl"
           style={{
              marginTop: `-${overlap}px`
           }}
        >
          <div className="mx-auto w-full max-w-[1280px] 2xl:max-w-[1320px]">
          {/* DRAG INDICATOR */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 rounded-full bg-gray-300" />
          </div>

          {/* ABOUT */}
          <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-3">
            <AboutSection30 />
          </section>

          {/* INTERESTS */}
          <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-3">
            <InterestSection26 />
          </section>

          {/* HOBBIES */}
          <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-3">
            <h3 className="text-sm text-gray-400 mb-2 font-[Aldrich]">
              Hobbies
            </h3>
            <div className="flex flex-wrap gap-2">
              <SingleCard27 emoji="📖" label="Reading" />
              <SingleCard27 emoji="🍳" label="Cooking" />
              <SingleCard27 emoji="🏊‍♂️" label="Swimming" />
            </div>
          </section>

          {/* PROFILE IMAGES */}
          <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-3">
            <ProfileImageCards
              images={[
                "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
              ]}
            />
          </section>

          {/* INFO GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-6 md:px-8 lg:px-10 py-3">
            <div>
              <h3 className="text-sm text-gray-400 mb-2 font-[Aldrich]">
                Date of Birth
              </h3>
              <InfoBox icon="🎂" text="12/12/1990" />
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-2 font-[Aldrich]">
                Location
              </h3>
              <InfoBox text="Bangalore, India" />
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-2 font-[Aldrich]">
                Qualification
              </h3>
              <InfoBox icon="🎓" text="Bachelor of Computer Science" />
            </div>
          </section>

          {/* HABITS */}
          <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-3">
            <h3 className="text-sm text-gray-400 mb-2 font-[Aldrich]">
              Habits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <QuestionInfoCard label="Smoking habits" value="No" />
              <QuestionInfoCard label="Drinking habits" value="Yes" />
            </div>
          </section>

          {/* IMAGES */}
          <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-3">
            <h3 className="text-sm text-gray-400 mb-2 font-[Aldrich]">
              Images
            </h3>
            <ImageGridSection
              images={[
                "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
              ]}
              onOpen={() => setIsMediaOpen(true)}
              onClose={() => setIsMediaOpen(false)}
            />
          </section>

          {/* VIDEOS */}
          <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-3">
            <h3 className="text-sm text-gray-400 mb-2 font-[Aldrich]">
              Short Reels
            </h3>
            <VideoGridSection
              videos={[
                "https://youtube.com/shorts/ibpP7w5MY_o",
                "https://www.pexels.com/video/a-person-is-walking-on-a-grassy-hillside-17133509/",
              ]}
              onOpen={() => setIsMediaOpen(true)}
              onClose={() => setIsMediaOpen(false)}
            />
          </section>
          </div>
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

        
      </div>
    {!isPremiumUser && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-black/30">
    <UpgradeAlertBox
      onUpgrade={() => navigate("/upgrade")}
      onBackClose={() => navigate(-1)}
    />
  </div>
)}
    </div>
  );
};

export default OtherUserProfile;

