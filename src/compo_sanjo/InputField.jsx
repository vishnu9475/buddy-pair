export default function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-[13px] font-bold text-gray-900 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-2 border-b-[1.5px] border-gray-900 bg-transparent focus:outline-none focus:border-[#4B1E51] text-xl font-medium placeholder-gray-500 rounded-none"
      />
    </div>
  );
}
