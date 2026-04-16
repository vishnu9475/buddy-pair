import { useNavigate } from "react-router-dom";

const MatchCard = ({
  image,
  name,
  age,
  location,
  distance,
  matchPercentage,
  isOnline,
  onClick,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate("/profile");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full max-w-70 aspect-3/4 rounded-[40px] p-1.5 bg-linear-to-b from-[#E996D1] to-[#D379B8] shadow-lg overflow-hidden group"
    >
      <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

        {/* MATCH PERCENTAGE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#EE99D5]/80 backdrop-blur-md px-5 py-1 rounded-b-2xl border-x border-b border-white/30">
          <span className="text-[#e5e0e3] font-aldrich text-[11px] md:text-sm font-bold whitespace-nowrap">
            {matchPercentage}% Match
          </span>
        </div>

        {/* DISTANCE */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md px-4 py-1 rounded-full border border-white/20">
          <span className="text-[#e3e0e2] font-michroma text-[11px] md:text-xs font-medium whitespace-nowrap">
            {distance} away
          </span>
        </div>

        {/* USER INFO */}
        <div className="absolute bottom-4 left-0 right-0 text-center flex flex-col items-center">
          <div className="flex items-center gap-2">
            <h3 className="text-[#f5f5f5] font-aldrich text-xl md:text-2xl font-bold">
              {name}, {age}
            </h3>

            {isOnline && (
              <div className="w-2.5 h-2.5 bg-[#00FFBB] rounded-full shadow-[0_0_8px_rgba(0,255,187,0.8)]" />
            )}
          </div>

          <p className="text-[#e9e3e7] font-aldrich text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mt-1">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
