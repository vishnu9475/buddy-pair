import { FiPlus, FiImage, FiVideo } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
   const navigate = useNavigate();

   return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
         <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
               <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
                  Personal Details
               </h2>
               <form className="space-y-4">
                  <input
                     type="number"
                     placeholder="Age"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <input
                     type="date"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <input
                     type="text"
                     placeholder="Hobbies"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <input
                     type="text"
                     placeholder="Interests"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <input
                     type="text"
                     placeholder="Smoking Habits"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <input
                     type="text"
                     placeholder="Drinking Habits"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Qualifications"
                        className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                     />
                     <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
                     >
                        <FiPlus size={18} />
                     </button>
                  </div>
                  <input
                     type="text"
                     placeholder="Location"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Profile Pic"
                        readOnly
                        className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 focus:outline-none"
                     />
                     <label className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer">
                        <FiImage size={18} />
                        <input
                           type="file"
                           accept="image/*"
                           className="hidden"
                        />
                     </label>
                  </div>
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Add More Images"
                        readOnly
                        className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 focus:outline-none"
                     />
                     <label className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer">
                        <FiImage size={18} />
                        <input
                           type="file"
                           accept="image/*"
                           multiple
                           className="hidden"
                        />
                     </label>
                  </div>
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Short Reel"
                        readOnly
                        className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 focus:outline-none"
                     />
                     <label className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer">
                        <FiVideo size={18} />
                        <input
                           type="file"
                           accept="video/*"
                           className="hidden"
                        />
                     </label>
                  </div>
                  <button
                     type="submit"
                     onClick={() => navigate("/jobstatus")}
                     className="w-full mt-2 cursor-pointer bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition"
                  >
                     Next
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PersonalDetails;
