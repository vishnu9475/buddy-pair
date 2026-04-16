import { useState } from "react";
import Tag from "./Tag";

const TagInput = ({ label, tags, onRemove, onAdd, type, suggestions }) => {
   const [input, setInput] = useState("");
   const [showSuggestions, setShowSuggestions] = useState(false);

   const filtered = suggestions.filter(
      (suggestion) =>
         suggestion.toLowerCase().includes(input.toLowerCase()) &&
         !tags.includes(suggestion),
   );

   const addTag = (tag) => {
      if (tag && !tags.includes(tag)) onAdd(tag);
      setInput("");
      setShowSuggestions(false);
   };

   return (
      <div className="mb-5">
         <label className="block text-sm font-semibold text-gray-700 mb-2">
            {label}
         </label>

         <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
               <Tag key={tag} label={tag} onRemove={onRemove} type={type} />
            ))}
         </div>

         <div className="relative">
            <input
               type="text"
               value={input}
               onChange={(e) => {
                  setInput(e.target.value);
                  setShowSuggestions(true);
               }}
               onFocus={() => setShowSuggestions(true)}
               onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
               onKeyDown={(e) => e.key === "Enter" && addTag(input.trim())}
               placeholder={`Add ${label.toLowerCase()}...`}
               className="w-full text-sm bg-[#f8f8f8] border border-[#d8d8d8] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
            />

            {showSuggestions && filtered.length > 0 && (
               <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {filtered.slice(0, 5).map((suggestion) => (
                     <button
                        key={suggestion}
                        type="button"
                        onMouseDown={() => addTag(suggestion)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                     >
                        {suggestion}
                     </button>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default TagInput;
