import { AiOutlineEye } from "react-icons/ai";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { useRef } from "react";

const MyStoryBody = ({
  image,
  views = 0,
  onDelete,
  onImageChange,
}) => {
  const fileRef = useRef();

  const handlePick = () => {
    fileRef.current.click();
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageChange(url);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* 🔥 HIDDEN INPUT */}
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={handleFile}
        className="hidden"
      />

      {/* ❌ NO STORY */}
      {!image && (
        <div className="w-full h-full flex flex-col items-center justify-center text-white">

          <div
            onClick={handlePick}
            className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
          >
            <FiPlus size={30} />
          </div>

          <p className="mt-4 text-sm text-gray-300">Add to My Story</p>
        </div>
      )}

      {/* ✅ HAS STORY */}
      {image && (
        <>
          {/* IMAGE */}
          <img
            src={image}
            alt="story"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          {/* FOOTER */}
          <div className="absolute bottom-6 left-4 right-4 z-30">
            <div className="bg-black/60 backdrop-blur-lg rounded-2xl px-4 py-3 flex items-center justify-between">

              {/* 👁️ VIEWS */}
              <div className="flex items-center gap-2 text-white">
                <AiOutlineEye size={20} />
                <span className="text-sm">{views}</span>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-3">

                {/* EDIT */}
                <button
                  onClick={handlePick}
                  className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center text-white"
                >
                  <MdEdit size={20} />
                </button>

                {/* DELETE */}
                <button
                  onClick={onDelete}
                  className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center text-white"
                >
                  <MdDeleteOutline size={20} />
                </button>

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyStoryBody;