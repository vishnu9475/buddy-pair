import { useState } from "react";
import { BiMessage, BiSend } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const StoryBody = ({ image, tag = "# Tea Time" }) => {
  const [message, setMessage] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
 const handleSend = () => {
  if (!message.trim()) return;

  console.log("Send:", message);

  setShowAlert(true); // ✅ show alert
  setMessage("");

  setTimeout(() => {
    setShowAlert(false); // auto hide
  }, 2000);
};
const handleClose = () => {
  setShowInput(false); // hide input
  setMessage(""); // clear text
};
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Background */}
      <img
        src={image}
        alt="story"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* Center Text */}
      <div className="absolute bottom-28 left-0 right-0 z-20 text-center">
        <h1
          style={{ fontFamily: "Aldrich" }}
          className="text-white text-4xl md:text-3xl font-light tracking-wide"
        >
          {tag}
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-3 xl:px-20 lg:px-15 md:px-10">

  {showInput ? (
    <>
      {/* INPUT */}
      <div className="relative flex-1 bg-purple-900 rounded-xl border border-gray-400 px-4 py-3 flex items-center">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ fontFamily: "Aldrich" }}
          className="w-full bg-transparent text-white placeholder-gray-300 outline-none text-sm"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <BiMessage size={22} className="absolute right-3 text-white opacity-70" />
      </div>

      {/* BUTTON */}
      {message.trim() ? (
        // ✅ SEND
        <button
          onClick={handleSend}
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white active:scale-95 transition"
        >
          <BiSend size={20} />
        </button>
      ) : (
        // ✅ CLOSE
        <button
          onClick={handleClose}
          className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white active:scale-95 transition"
        >
          <IoClose />
        </button>
      )}
    </>
  ) : (
    // ✅ MESSAGE ICON (when input hidden)
    <div className="w-full flex justify-end">
    <button
      onClick={() => setShowInput(true)}
      className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white active:scale-95 transition"
    >
      <BiMessage size={22} />
    </button>
    </div>
  )}

</div>
      {showAlert && (
  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
    <div className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium animate-bounce">
      Message sent successfully 🚀
    </div>
  </div>
)}
    </div>
    
  );
};

export default StoryBody;