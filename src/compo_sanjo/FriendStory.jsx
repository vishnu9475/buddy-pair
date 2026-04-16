const FriendStory = ({ name, img, bgColor = "bg-pink-100" }) => {
  return (
    <div className="flex flex-col items-center space-y-1 min-w-17">
      <div
        className={`w-16 h-16 rounded-full border-[3px] border-[#DD88CF] p-1`}
      >
        <img
          src={img}
          alt={name}
          className={`w-full h-full rounded-full object-cover ${bgColor}`}
        />
      </div>
      <span className="text-[14px] font-aldrich font-medium text-black">
        {name}
      </span>
    </div>
  );
};

export default FriendStory;
