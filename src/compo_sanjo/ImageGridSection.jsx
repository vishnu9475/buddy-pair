import React, { useState, useEffect } from "react";

const ImageGridSection = ({
  images = [],
  onOpen = () => {},
  onClose = () => {},
}) => {
  const [expanded, setExpanded] = useState(false);
  const [maxVisible, setMaxVisible] = useState(3);
  const [activeImage, setActiveImage] = useState(null);

  /* Responsive visible count */
  useEffect(() => {
    const updateMaxVisible = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setMaxVisible(6);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setMaxVisible(4);
      } else {
        setMaxVisible(3);
      }
    };

    updateMaxVisible();
    window.addEventListener("resize", updateMaxVisible);
    return () => window.removeEventListener("resize", updateMaxVisible);
  }, []);

  const extraCount = images.length - maxVisible;

  const visibleImages = expanded
    ? images
    : images.slice(0, maxVisible);

  return (
    <>
      {/* IMAGE GRID */}
      <div className="w-full">
        <div
          className="
            grid gap-2 transition-all duration-300
            grid-cols-3
            sm:grid-cols-4
            lg:grid-cols-6
          "
        >
          {visibleImages.map((img, index) => {
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
                    setActiveImage(img);
                    onOpen(); 
                  }
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* +MORE OVERLAY */}
                {showMoreOverlay && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
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
              className="text-xs text-gray-500 hover:text-gray-700 transition"
              style={{ fontFamily: "Aldrich" }}
            >
              Show less
            </button>
          </div>
        )}
      </div>

      {/* FULLSCREEN IMAGE VIEWER */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => {
            setActiveImage(null);
            onClose(); 
          }}
        >
          <img
            src={activeImage}
            alt=""
            className="max-w-full max-h-full object-contain"
          />

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage(null);
              onClose(); 
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default ImageGridSection;
