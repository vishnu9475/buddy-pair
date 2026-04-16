import { useRef, useState } from "react";

const RangeSlider = ({ min, max, value, onChange, unit, label }) => {
   const trackRef = useRef(null);
   const [dragging, setDragging] = useState(null); // "min" | "max" | null

   const minVal = value[0];
   const maxVal = value[1];

   const minPercent = ((minVal - min) / (max - min)) * 100;
   const maxPercent = ((maxVal - min) / (max - min)) * 100;

   const clamp = (num, minValue, maxValue) =>
      Math.min(Math.max(num, minValue), maxValue);

   const getValueFromClientX = (clientX) => {
      if (!trackRef.current) return min;

      const rect = trackRef.current.getBoundingClientRect();
      const percent = clamp((clientX - rect.left) / rect.width, 0, 1);
      return Math.round(min + percent * (max - min));
   };

   const updateMin = (clientX) => {
      const newMin = getValueFromClientX(clientX);
      onChange([Math.min(newMin, maxVal - 1), maxVal]);
   };

   const updateMax = (clientX) => {
      const newMax = getValueFromClientX(clientX);
      onChange([minVal, Math.max(newMax, minVal + 1)]);
   };

   const handleMouseMove = (e) => {
      if (!dragging) return;
      if (dragging === "min") updateMin(e.clientX);
      if (dragging === "max") updateMax(e.clientX);
   };

   const handleTouchMove = (e) => {
      if (!dragging || !e.touches[0]) return;
      const clientX = e.touches[0].clientX;
      if (dragging === "min") updateMin(clientX);
      if (dragging === "max") updateMax(clientX);
   };

   const stopDragging = () => setDragging(null);

   const startDragMin = (e) => {
      e.preventDefault();
      setDragging("min");
   };

   const startDragMax = (e) => {
      e.preventDefault();
      setDragging("max");
   };

   const handleTrackClick = (e) => {
      const clickedValue = getValueFromClientX(e.clientX);

      const distanceToMin = Math.abs(clickedValue - minVal);
      const distanceToMax = Math.abs(clickedValue - maxVal);

      if (distanceToMin <= distanceToMax) {
         onChange([Math.min(clickedValue, maxVal - 1), maxVal]);
      } else {
         onChange([minVal, Math.max(clickedValue, minVal + 1)]);
      }
   };

   return (
      <div
         className="mb-5 select-none"
         onMouseMove={handleMouseMove}
         onMouseUp={stopDragging}
         onMouseLeave={stopDragging}
         onTouchMove={handleTouchMove}
         onTouchEnd={stopDragging}
         onTouchCancel={stopDragging}
      >
         <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700">
               {label}
            </label>
            <span className="text-xs font-medium text-[#4b4b4b]">
               {unit}
               {minVal}–{maxVal}
            </span>
         </div>

         <div className="relative h-8 flex items-center">
            {/* Full track */}
            <div
               ref={trackRef}
               onClick={handleTrackClick}
               className="relative w-full h-1 rounded-full bg-[#d9d9d9] cursor-pointer"
            >
               {/* Selected range */}
               <div
                  className="absolute h-1 rounded-full bg-[#8f8f8f]"
                  style={{
                     left: `${minPercent}%`,
                     width: `${maxPercent - minPercent}%`,
                  }}
               />

               {/* Left thumb */}
               <button
                  type="button"
                  onMouseDown={startDragMin}
                  onTouchStart={startDragMin}
                  className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f2f2f] cursor-grab active:cursor-grabbing"
                  style={{
                     left: `${minPercent}%`,
                     zIndex: dragging === "min" ? 3 : 2,
                  }}
                  aria-label={`${label} minimum`}
               />

               {/* Right thumb */}
               <button
                  type="button"
                  onMouseDown={startDragMax}
                  onTouchStart={startDragMax}
                  className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2f2f2f] cursor-grab active:cursor-grabbing"
                  style={{
                     left: `${maxPercent}%`,
                     zIndex: dragging === "max" ? 4 : 2,
                  }}
                  aria-label={`${label} maximum`}
               />
            </div>
         </div>
      </div>
   );
};

export default RangeSlider;
