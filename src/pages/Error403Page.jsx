import { useNavigate } from "react-router-dom";

export default function Error403Page() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#4B164C] text-white px-6">

            {/* 404 Number */}
            <h1 className="text-[120px] md:text-[160px] font-bold text-[#F4E7A1] drop-shadow-lg">
                403
            </h1>

            {/* Oops Text */}
            <p className="text-4xl mt-4 tracking-wide text-gray-200"
              style={{ fontFamily: "Aldrich, sans-serif" }}>
               Access Denied
            </p>

            {/* Sub Text */}
            <p className="text-lg mt-2 text-gray-300 text-center"
             style={{ fontFamily: "Aldrich, sans-serif" }}>
                Sorry,You dont have access to this page
            </p>

            {/* Button */}
            <button
                onClick={() => navigate("/")}
                className="mt-10 px-6 py-3 border-2 border-white rounded-xl text-white font-semibold flex items-center gap-2 hover:bg-white hover:text-[#5B1B5E] transition duration-300"
            >
               Go back to the previous page
                <span className="text-xl">›</span>
            </button>

        </div>
    );
}
