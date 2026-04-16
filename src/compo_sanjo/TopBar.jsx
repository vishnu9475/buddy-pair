import { X, ArrowLeft } from "lucide-react";

export default function TopBar({
  onLeftClick,
  onRightClick,
  rightText,
  iconType = "close",
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={onLeftClick}
        className="p-2 -ml-2 hover:bg-gray-200 rounded-full transition-colors shrink-0"
      >
        {iconType === "close" ? (
          <X className="w-8 h-8 text-black" strokeWidth={2.5} />
        ) : (
          <ArrowLeft className="w-8 h-8 text-black" strokeWidth={2} />
        )}
      </button>
      {rightText && (
        <button
          onClick={onRightClick}
          className="text-lg font-semibold text-black hover:opacity-75 tracking-wide"
        >
          {rightText}
        </button>
      )}
    </div>
  );
}
