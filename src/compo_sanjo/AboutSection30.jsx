import React from "react";

const AboutSection30 = ({ showHeading = true }) => {
  return (
    <div className="flex items-center justify-center m-0">
      <div className="w-full bg-white rounded-t-2xl">
        
        {showHeading && (
          <h3
            style={{ fontFamily: "Aldrich" }}
            className="text-gray-400 text-base mb-2 text-start"
          >
            About
          </h3>
        )}

        <p
          style={{ fontFamily: "Aldrich" }}
          className="text-sm md:text-base text-gray-700 text-start"
        >
          A good listener. I love having a good talk to know each other’s side 😍.
        </p>
      </div>
    </div>
  );
};

export default AboutSection30;
