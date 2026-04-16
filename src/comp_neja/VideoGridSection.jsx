import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const VideoGridSection = ({
  videos = [],
  onOpen = () => {},
  onClose = () => {},
}) => {
  const [expanded, setExpanded] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [maxVisible, setMaxVisible] = useState(3); 

  
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setMaxVisible(6); 
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setMaxVisible(4); 
      } else {
        setMaxVisible(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const extraCount = videos.length - maxVisible;

  const visibleVideos = expanded
    ? videos
    : videos.slice(0, maxVisible);

  return (
    <>
      {/* GRID */}
      <div className="w-full">
        <div
          className="
            grid gap-3
            grid-cols-3
            sm:grid-cols-4
            lg:grid-cols-6
          "
        >
          {visibleVideos.map((video, index) => {
            const showMoreOverlay =
              !expanded &&
              index === maxVisible - 1 &&
              extraCount > 0;

            return (
              <div
                key={index}
                className="
                  relative aspect-square
                  rounded-lg overflow-hidden
                  border border-gray-200
                  cursor-pointer
                "
                onClick={() => {
                  if (showMoreOverlay) {
                    setExpanded(true);
                  } else {
                    setActiveVideo(video);
                    onOpen(); 
                  }
                }}
              >
               
                <video
                  src={video}
                  muted
                  preload="metadata"
                  className="w-full h-full object-cover"
                />

                {/* PLAY ICON */}
                {!showMoreOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-black/60 flex items-center justify-center">
                      <FaPlay className="text-white text-xs ml-[1px]" />
                    </div>
                  </div>
                )}

                {/* +MORE OVERLAY */}
                {showMoreOverlay && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      +{extraCount} more
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SHOW LESS */}
        {expanded && extraCount > 0 && (
          <div className="mt-2 flex justify-end">
            <button
              onClick={() => setExpanded(false)}
              className="text-sm text-gray-500 hover:text-gray-700"
              style={{ fontFamily: "Aldrich" }}
            >
              Show less
            </button>
          </div>
        )}
      </div>

      {/* FULLSCREEN PLAYER */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black">
          {/* BACK BUTTON */}
          <button
            onClick={() => {
              setActiveVideo(null);
              onClose(); 
            }}
            className="absolute top-4 left-4 z-50 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>

          {/* VIDEO */}
          <video
            src={activeVideo}
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default VideoGridSection;
