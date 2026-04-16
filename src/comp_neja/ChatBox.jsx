import { useState, useRef, useEffect } from "react";
import { FiPaperclip } from "react-icons/fi";
import { IoMic, IoSend } from "react-icons/io5";

/* ================= MAIN COMPONENT ================= */

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "text",
      text: "Hi, Nicholas Good Evening 😊",
      time: "10:45",
      isOwn: false,
    },
    {
      id: 2,
      type: "text",
      text: "How was your UI/UX Design Course Like.? 😄",
      time: "12:45",
      isOwn: false,
    },
  ]);

  const [input, setInput] = useState("");
  const fileInputRef = useRef(null);
  const bottomRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ================= SEND TEXT ================= */
  const handleSend = () => {
    if (!input.trim()) return;

    addMessage({
      type: "text",
      text: input,
    });

    setInput("");
  };

  /* ================= ADD MESSAGE ================= */
  const addMessage = (msg) => {
    const newMsg = {
      id: Date.now(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
      ...msg,
    };

    setMessages((prev) => [...prev, newMsg]);
  };

  /* ================= ENTER SEND ================= */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  /* ================= FILE SELECT ================= */
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    if (file.type.startsWith("image")) {
      addMessage({ type: "image", url });
    } else {
      addMessage({ type: "file", name: file.name });
    }
  };

  /* ================= VOICE RECORD ================= */
  const handleVoice = async () => {
    if (mediaRecorderRef.current) {
      // stop recording
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];

    mediaRecorder.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      addMessage({ type: "audio", url });
    };

    mediaRecorder.start();
  };

  return (
    
      <div className="flex flex-col h-full">
        
        {/* DATE */}
        <div className="flex justify-center py-2">
          <span className="bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full">
            Today
          </span>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-4 space-y-3">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* INPUT */}
        <div className="p-3 bg-[#EDEDED] border-t border-gray-200">
  <div className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message"
            className="flex-1 px-3 py-2 rounded-full bg-gray-50 border border-gray-200 outline-none text-sm sm:text-base"
          />

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFile}
            hidden
          />

          <button
            onClick={() => fileInputRef.current.click()}
            className="p-2 text-gray-500"
          >
            <FiPaperclip size={20} />
          </button>

          {input ? (
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-2 sm:p-3 rounded-full"
            >
              <IoSend />
            </button>
          ) : (
            <button
              onClick={handleVoice}
              className="bg-blue-500 text-white p-2 sm:p-3 rounded-full"
            >
              <IoMic />
            </button>
          )}
        </div>
      </div>
  </div>
  );
};

/* ================= MESSAGE ================= */

const ChatMessage = ({ message }) => {
  const { type, text, url, name, time, isOwn } = message;

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[85%] sm:max-w-[75%]
          px-3 py-2 pb-5
          rounded-2xl relative text-sm break-words
          ${
            isOwn
              ? "bg-blue-100 text-gray-800 rounded-br-none"
              : "bg-purple-400 text-white rounded-bl-none"
          }
        `}
      >
        {type === "text" && <p className="pr-8">{text}</p>}

        {type === "image" && (
          <img src={url} alt="" className="rounded-lg max-h-40 w-full object-cover" />
        )}

        {type === "audio" && (
          <audio controls className="w-full max-w-[200px]">
            <source src={url} />
          </audio>
        )}

        {type === "file" && <p>📎 {name}</p>}

        <span className="absolute bottom-1 right-2 text-[10px] opacity-70 whitespace-nowrap">
          {time}
        </span>
      </div>
    </div>
  );
};

export default ChatBox;