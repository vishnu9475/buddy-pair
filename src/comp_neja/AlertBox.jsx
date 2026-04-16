
import React from "react";

const AlertBox = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
      <div className="px-5 py-3 rounded-full bg-pink-200 text-pink-900 shadow-lg text-sm animate-fadeIn">
        {message}
      </div>
    </div>
  );
};

export default AlertBox;