import { MapPin, MessageCircle } from "lucide-react";

const outerItems = [
  { type: "img", src: "/img1.png" },
  { type: "img", src: "/img1.png" },
  { type: "icon", icon: MessageCircle },
  { type: "img", src: "/img1.png" },
  { type: "img", src: "/img1.png" },
  { type: "icon", icon: MapPin },
  { type: "img", src: "/img1.png" },
];

const innerImages = ["/img1.png", "/img1.png"];

const RotAnimation1 = () => {
  return (
    <div className="relative w-[420px] h-[420px] mx-auto mt-20">

      {/* Outer dashed orbit */}
      <div className="absolute top-1/2 left-1/2 w-[410px] h-[410px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full border-2 border-dashed border-pink-200" />

      {/* Soft pink circles */}
      <div className="absolute top-1/2 left-1/2 w-[310px] h-[310px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-pink-100/50" />

      <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-white" />

      {/* Center image */}
      <div className="absolute top-1/2 left-1/2 z-20 w-20 h-20
        -translate-x-1/2 -translate-y-1/2
        rounded-full overflow-hidden bg-pink-200">
        <img src="/img1.png" className="w-full h-full object-cover" />
      </div>

      {/* Inner orbit */}
      <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px]
        -translate-x-1/2 -translate-y-1/2
        [animation:spin_18s_linear_infinite_reverse]">

        {innerImages.map((src, index) => {
          const angle = (360 / innerImages.length) * index;
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(110px) rotate(-${angle}deg)`
              }}
            >
              <img src={src} className="w-12 h-12 rounded-full border border-pink-300" />
            </div>
          );
        })}
      </div>

      {/* Outer orbit */}
      <div className="absolute top-1/2 left-1/2 w-[410px] h-[410px]
        -translate-x-1/2 -translate-y-1/2
        [animation:spin_30s_linear_infinite]">

        {outerItems.map((item, index) => {
          const angle = (360 / outerItems.length) * index;
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(205px) rotate(-${angle}deg)`
              }}
            >
              {item.type === "img" ? (
                <img src={item.src} className="w-14 h-14 rounded-full border border-pink-300" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-pink-500 border border-pink-300">
                  <item.icon size={26} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RotAnimation1;
