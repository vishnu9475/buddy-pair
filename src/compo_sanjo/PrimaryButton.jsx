export default function PrimaryButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 bg-[#4B1E51] hover:bg-[#341538] text-white rounded-[14px] font-medium tracking-wide transition-colors uppercase text-sm ${className}`}
    >
      {children}
    </button>
  );
}
