import MyStory from "./MyStory";
import FriendStory from "./FriendStory";

const StorySection = () => {
  const stories = [
    {
      id: 1,
      name: "Selena",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Selena",
      bgColor: "bg-[#FFD1DC]",
    },
    {
      id: 2,
      name: "Clara",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Clara",
      active: true,
      bgColor: "bg-[#D1F2FF]",
    },
    {
      id: 3,
      name: "Fabian",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fabian",
      bgColor: "bg-[#FFEAD1]",
    },
    {
      id: 4,
      name: "George",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=George",
      bgColor: "bg-[#E2D1FF]",
    },
    {
      id: 5,
      name: "Anna",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
      bgColor: "bg-[#D1FFD6]",
    },
    {
      id: 6,
      name: "David",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      bgColor: "bg-[#FFF4D1]",
    },
    {
      id: 7,
      name: "Emma",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      bgColor: "bg-[#FFD1E8]",
    },
    {
      id: 8,
      name: "Felix",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
      bgColor: "bg-[#D1FFF0]",
    },
    {
      id: 9,
      name: "Grace",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
      bgColor: "bg-[#EAD1FF]",
    },
    {
      id: 10,
      name: "Henry",
      img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Henry",
      bgColor: "bg-[#F2FFD1]",
    },
  ];

  return (
    <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar">
      {/* My Story */}
      <MyStory />

      {/* Friends Stories */}
      {stories.map((story) => (
        <FriendStory
          key={story.id}
          name={story.name}
          img={story.img}
          bgColor={story.bgColor}
        />
      ))}
    </div>
  );
};

export default StorySection;
