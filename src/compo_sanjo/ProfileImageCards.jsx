import { useState } from "react";

const ProfileImageCard = ({ images }) => {
  const [activeImage, setActiveImage] = useState(null);
  const isSingle = images.length === 1;

  return (
    <>
      {/* GRID */}
      <div className={`grid gap-1 ${isSingle ? "grid-cols-1" : "grid-cols-2"}`}>
        {images.map((img, index) => {
          const cornerClass = isSingle
            ? "rounded-r-2xl rounded-l-2xl"
            : index === 0
              ? "rounded-l-2xl"
              : index === 1
                ? "rounded-r-2xl"
                : "";

          return (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className={`
                cursor-pointer
                ${isSingle ? "h-52" : "h-40 lg:h-60"}
                overflow-hidden
                shadow-[8px_10px_25px_rgba(88,24,124,0.45)]
                ${cornerClass}
              `}
            >
              <img
                src={img}
                alt={`hobby-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-999 bg-black/80 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="full-view"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default ProfileImageCard;
