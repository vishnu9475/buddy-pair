import { useState } from "react";

const CategoryToggle = () => {
  const [activeCategory, setActiveCategory] = useState("Near by");
  const categories = ["Near by", "Education", "Qualification"];

  return (
    <div className="p-4">
      <div className="flex bg-[#FBEFFF] rounded-full font-aldrich border-4 border-white">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-full transition-all duration-200 ${
              activeCategory === category
                ? "bg-white shadow-sm text-[#007AFF]"
                : "text-black hover:text-[#007AFF]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryToggle;
