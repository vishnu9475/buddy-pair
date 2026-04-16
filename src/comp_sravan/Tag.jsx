const tagColors = {
   location: "bg-[#5f5f5f] text-white border border-[#5f5f5f]",
   hobby: "bg-[#5f5f5f] text-white border border-[#5f5f5f]",
};

const Tag = ({ label, onRemove, type = "location" }) => {
   return (
      <span
         className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${tagColors[type]} transition-all`}
      >
         {label}
         <button
            type="button"
            onClick={() => onRemove(label)}
            className="ml-1 text-xs leading-none opacity-80 hover:opacity-100 font-bold cursor-pointer"
            aria-label={`Remove ${label}`}
         >
            ×
         </button>
      </span>
   );
};

export default Tag;
