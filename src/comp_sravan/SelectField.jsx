const SelectField = ({ label, options, value, onChange }) => {
   return (
      <div className="mb-5">
         <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            {label}
         </label>

         <div className="relative">
            <select
               value={value}
               onChange={(e) => onChange(e.target.value)}
               className="w-full appearance-none bg-[#f8f8f8] border border-[#d8d8d8] text-gray-600 text-sm rounded-xl px-4 py-2.5 pr-9 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all cursor-pointer"
            >
               <option value="">Select {label}</option>
               {options.map((option) => (
                  <option key={option} value={option}>
                     {option}
                  </option>
               ))}
            </select>

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
               ▾
            </span>
         </div>
      </div>
   );
};

export default SelectField;
