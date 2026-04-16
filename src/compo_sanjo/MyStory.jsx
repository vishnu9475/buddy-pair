import { FiPlus } from "react-icons/fi";

const MyStory = () => {
  return (
    <div className="flex flex-col items-center space-y-1 min-w-17">
      <div className="relative">
        <div className="w-16 h-16 rounded-full p-1 bg-pink-50">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="My Story"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-[#DD88CF] text-white rounded-full p-1 border-2 border-white flex items-center justify-center">
          <FiPlus size={10} />
        </div>
      </div>
      <span className="text-[14px] font-aldrich font-medium text-black">
        My Story
      </span>
    </div>
  );
};

export default MyStory;
