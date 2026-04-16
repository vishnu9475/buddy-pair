import React from 'react';

export default function UpgradeCard({ title, subtitle, buttonText, onClick }) {
  return (
    /* We remove min-h-screen from here so the parent component controls centering */
    <div className="flex items-center justify-center p-6 w-full">
      
      {/* 1. Increased max-width from 320px to 500px 
          2. Increased padding (p-14) for a more spacious, premium feel
      */}
      <div className="bg-white w-full max-w-[500px] p-14 rounded-[55px] shadow-2xl flex flex-col items-center text-center border border-gray-100">
        
        {/* Increased text size to 36px and added tracking-tight for a modern look */}
        <h2 className="text-[36px] font-bold text-gray-900 leading-[1.1] mb-12 font-michroma tracking-tight">
          {title} <br /> 
          <span className="text-gray-600">{subtitle}</span>
        </h2>

        {/* 1. Button is now larger (py-5)
            2. Text size increased to 16px (text-base)
            3. Added uppercase for a stronger "Call to Action"
        */}
        <button 
          className="w-full bg-[#3d1442] hover:bg-[#521c59] text-white text-base font-bold py-5 px-12 rounded-full transition-all hover:shadow-lg active:scale-95 shadow-md font-michroma uppercase tracking-wider"
          onClick={onClick}
        >
          {buttonText}
        </button>

      </div>

    </div>
  );
}