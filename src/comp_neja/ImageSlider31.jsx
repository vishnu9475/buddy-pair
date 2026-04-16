import React, { useState } from "react";
import { Heart } from "lucide-react";

const ImageSlider31 = ({
  title = "Recent Messages",
  matches = [
    { id: 1, image: "https://picsum.photos/id/1011/200/200", likes: 32 },
    { id: 2, image: "https://picsum.photos/id/1005/200/200", likes: 21 },
    { id: 3, image: "https://picsum.photos/id/1027/200/200", likes: 15 },
    { id: 4, image: "https://picsum.photos/id/1012/200/200", likes: 18 },
    
  ],
}) => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#4b145f] p-4 pb-8 xl:px-20">
      <h2 style={{ fontFamily: "Aldrich" }} className="text-white text-lg mb-3">
        {title}
      </h2>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {matches.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              className="relative w-22 h-24 flex-shrink-0 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveId(item.id)}   
              onMouseLeave={() => setActiveId(null)}      
              onClick={() => handleToggle(item.id)}       
            >
              {/* Image */}
              <img
                src={item.image}
                alt="match"
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Overlay */}
              {isActive && (
                <div className="absolute inset-0 bg-pink-500/40 rounded-xl flex flex-col items-center justify-center text-white">
                  <Heart className="w-5 h-5 fill-white mb-1" />
                  <span style={{ fontFamily: "Aldrich" }} className="text-xs font-semibold">
                    {item.likes}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider31;
