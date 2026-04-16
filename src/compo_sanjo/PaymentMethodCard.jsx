import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export default function PaymentMethodCard({
  type,
  title,
  subtitle,
  selected,
  onClick,
  className = "",
}) {
  const isCash = type === "cash";

  const renderIcon = () => {
    switch (type) {
      case "mastercard":
        return <FaCcMastercard className="w-12 h-12 text-[#EB001B]" />;
      case "visa":
        return (
          <div className="font-bold italic text-3xl text-gray-100 tracking-tighter">
            VISA
          </div>
        );
      case "paypal":
        return (
          <div className="font-bold italic text-3xl text-[#003087]">P</div>
        );
      case "cash":
        return (
          <div className="`w-13 h-8 bg-[#FFB800] rounded-md flex items-center justify-center text-white font-bold text-xl">
            $
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`w-full py-4 px-2 rounded-2xl flex items-center bg-white cursor-pointer transition-all ${
        selected
          ? "border border-[#E23B35] shadow-sm"
          : "border-2 opacity-95 border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      } ${className}`}
    >
      <div className="flex items-center justify-center w-18 shrink-0">
        {renderIcon()}
      </div>
      <div className="flex flex-col grow">
        <span
          className={`font-semibold text-black ${isCash ? "text-lg" : type === "paypal" ? "text-[15px]" : "text-[22px] tracking-widest translate-y-1"}`}
        >
          {title}
        </span>
        {subtitle && (
          <span
            className={`text-[11px] font-medium text-gray-400 ${type !== "cash" && type !== "paypal" ? "`-translate-y-0.5" : ""}`}
          >
            {subtitle}
          </span>
        )}
      </div>
      {isCash && (
        <div className="mr-3 w-6.5 h-6.5 rounded-full bg-[#1C3E6E] flex items-center justify-center shrink-0">
          <ChevronDown className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
      )}
    </div>
  );
}
