import { useState } from "react";
import StoryHeader from "../comp_neja/StoryHeader";
import MyStoryBody from "../comp_neja/MyStoryBody";
import { useNavigate } from "react-router-dom";

const MyStoryPage = () => {
  const navigate = useNavigate();

  const [story, setStory] = useState(null);

  const handleDelete = () => {
    setStory(null);
  };

  const handleImageChange = (img) => {
    setStory(img);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      <StoryHeader
        avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        isOwn={true}
        onBack={() => navigate(-1)}
      />

      <MyStoryBody
        image={story}
        views={245}
        onDelete={handleDelete}
        onImageChange={handleImageChange}
      />

    </div>
  );
};

export default MyStoryPage;