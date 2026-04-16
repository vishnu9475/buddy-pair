import React from "react";

const UpgradeAlertBox = ({ onUpgrade, onClose, position = "center" }) => {
  const isBottom = position === "bottom";

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center transition-all duration-500 ${
        onClose ? "pointer-events-auto" : "pointer-events-none"
      } ${
        isBottom
          ? "justify-end pb-32 md:pb-40 px-4"
          : "justify-center bg-black/20 px-4"
      }`}
    >
      {/* 
          GRADIENT SPREAD BLUR OVERLAY (Background for bottom position)
      */}
      {isBottom && (
        <div
          onClick={onClose}
          className="absolute inset-0 bg-white/10 backdrop-blur-3xl transition-opacity duration-700 pointer-events-auto"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 90%)",
          }}
        />
      )}

      {/* Backdrop for Center position */}
      {!isBottom && (
        <div
          onClick={onClose}
          className="absolute inset-0 backdrop-blur-2xl transition-opacity duration-500 pointer-events-auto"
        />
      )}

      {/* 
          FLOATING UPGRADE CARD 
      */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white shadow-[0_25px_60px_-15px_rgba(74,20,75,0.25)] flex flex-col items-center pointer-events-auto transition-all duration-700 overflow-hidden text-center ${
          isBottom
            ? "rounded-[40px] p-10 py-12 w-full max-w-sm md:max-w-md scale-100 opacity-100 shadow-2xl"
            : "rounded-[40px] p-10 py-12 w-full max-w-sm scale-110 opacity-100"
        }`}
      >
        <h2 className="font-aldrich text-4xl md:text-5xl text-[#4A144B] leading-tight font-medium mb-10 max-w-[280px] md:max-w-md">
          Upgrade to view more
        </h2>

        {/* Action Button - Dark Purple/Black style */}
        <button
          onClick={onUpgrade}
          className="w-full bg-[#4A144B] hover:bg-[#341135] text-white py-4.5 md:py-5 rounded-full font-michroma text-[13px] md:text-sm tracking-widest transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-xl uppercase font-bold"
        >
          Upgrade
        </button>

        {/* Minimal indicator as seen in top-centered modals */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-neutral-100 opacity-50" />
      </div>
    </div>
  );
};

export default UpgradeAlertBox;
