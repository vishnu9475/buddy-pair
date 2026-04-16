import { useNavigate } from "react-router-dom";
import { FiRefreshCw } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const AuthModal = ({ mode, setMode, setAuthMode, onClose }) => {
   const navigate = useNavigate();
   const isLogin = mode === "login";

   return (
      <>
         <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />
         <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-xl p-8">
               <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
                  {isLogin ? "Login" : "Sign up"}
               </h2>
               <button
                  onClick={onClose}
                  className="absolute right-4 top-4 cursor-pointer"
               >
                  <IoMdClose size={25} />
               </button>
               {isLogin ? (
                  <>
                     <form className="space-y-4">
                        <div>
                           <label className="block text-sm mb-1 text-gray-700">
                              Email/Mobile
                           </label>
                           <input
                              type="text"
                              placeholder="Value"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                           />
                        </div>
                        <div>
                           <label className="block text-sm mb-1 text-gray-700">
                              Password
                           </label>
                           <input
                              type="password"
                              placeholder="Value"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                           />
                        </div>
                        <button
                           type="button"
                           onClick={() => navigate("/personal-details")}
                           className="w-full cursor-pointer bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition"
                        >
                           Login
                        </button>
                     </form>
                     <p className="text-sm mt-6 underline cursor-pointer">
                        Forgot Password?{" "}
                     </p>
                     <p className="text-sm text-gray-600 mt-1">
                        Don’t have an account?{" "}
                        <button
                           onClick={() => setMode("signup")}
                           className="text-purple-600 font-medium cursor-pointer"
                        >
                           Sign Up
                        </button>
                     </p>
                  </>
               ) : (
                  <>
                     <form className="space-y-4">
                        <div>
                           <label className="block text-sm mb-1 text-gray-700">
                              Name
                           </label>
                           <input
                              type="text"
                              placeholder="Value"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                           />
                        </div>
                        <div>
                           <label className="block text-sm mb-1 text-gray-700">
                              Email
                           </label>
                           <input
                              type="email"
                              placeholder="Value"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                           />
                        </div>
                        <div>
                           <label className="block text-sm mb-1 text-gray-700">
                              Mobile
                           </label>
                           <input
                              type="tel"
                              placeholder="Value"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                           />
                        </div>
                        <div>
                           <label className="block text-sm mb-1 text-gray-700">
                              Password
                           </label>
                           <input
                              type="password"
                              placeholder="Value"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                           />
                        </div>
                        <div>
                           <label className="block text-sm mb-1 text-gray-700">
                              Confirm Password
                           </label>
                           <input
                              type="password"
                              placeholder="Value"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                           />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                           <button
                              type="button"
                              className="flex cursor-pointer items-center gap-2 text-purple-700 font-medium hover:underline"
                           >
                              Generate OTP
                              <FiRefreshCw className="text-purple-700" />
                           </button>
                        </div>
                        <div>
                           <label className="block text-sm mb-1 text-gray-700">
                              OTP
                           </label>
                           <input
                              type="text"
                              placeholder="We sent a code to Email/Phone"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                           />
                        </div>
                        <button
                           type="submit"
                           onClick={() => setAuthMode("login")}
                           className="w-full cursor-pointer bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-black transition"
                        >
                           Register
                        </button>
                        <button
                           type="button"
                           className="w-full cursor-pointer bg-[#5A1E63] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
                        >
                           Social media Login
                        </button>
                     </form>
                     <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <button
                           onClick={() => setMode("login")}
                           className="text-purple-600 font-medium cursor-pointer"
                        >
                           Log In
                        </button>
                     </p>
                  </>
               )}
            </div>
         </div>
      </>
   );
};

export default AuthModal;
