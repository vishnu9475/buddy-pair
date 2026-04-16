import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard29 from "../compo_sanjo/ProfileCard29";
import AboutSection30 from "../compo_sanjo/AboutSection30";
import InterestSection26 from "../compo_sanjo/InterestSection26";
import ActionButtons23 from "../compo_sanjo/ActionButtons23";
import SingleCard27 from "../compo_sanjo/SingleCard27";
import ProfileImageCards from "../compo_sanjo/ProfileImageCards";
import InfoBox from "../compo_sanjo/InfoBox";
import QuestionInfoCard from "../compo_sanjo/QuestionInfoCard";
import ImageGridSection from "../compo_sanjo/ImageGridSection";
import VideoGridSection from "../compo_sanjo/VideoGridSection";

const Page21 = () => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const navigate = useNavigate();
  const handleAction = (id) => {
    switch (id) {
      case "close":
        navigate("/home");
        break;

      case "star":
        navigate("/favorites");
        break;

      case "add":
        navigate("/add");
        break;

      case "like":
        navigate("/likes");
        break;

      case "comment":
        navigate("/chat");
        break;

      default:
        break;
    }
  };
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* PAGE CONTAINER */}
      <div className="w-full">
        {/* HERO */}
        <ProfileCard29 />
      </div>
      {/* WHITE SHEET */}
      <div className="relative z-20 bg-white rounded-t-3xl -mt-6 pt-6 pb-32">
        <div className="mx-auto w-full max-w-7xl `2xl:max-w-330">
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

      {/* ACTION BUTTONS */}
      {!isMediaOpen && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
          <ActionButtons23 onAction={handleAction} />
        </div>
      )}
    </div>
  );
};

export default Page21;
