import Modal from "./modal";
import { FiPlus } from "react-icons/fi";

const AdditionalDetails = ({ onNext, isModelOpen, onClose }) => {
  const handleNext = () => {
    if (onNext) {
      onNext();
    }
    if (onClose) {
      onClose();
    }
  };

  const fields = [
    { placeholder: "Annual Income" },
    { placeholder: "Family Type" },
    { placeholder: "Family Name" },
    { placeholder: "Father's Name" },
    { placeholder: "Father's Occupation" },
    { placeholder: "Mother's Name" },
    { placeholder: "Mother's Occupation" },
    { placeholder: "Number of Siblings" },
    { placeholder: "Number of Siblings Married", icon: true },
    { placeholder: "Siblings Name & Details" },
    { placeholder: "Height" },
    { placeholder: "Weight" },
    { placeholder: "Body Type" },
    { placeholder: "Complexion" },
    { placeholder: "Disabilities", icon: true },
    { placeholder: "Religion" },
    { placeholder: "Cast/Community" },
    { placeholder: "Expectations from Partner" },
  ];

  return (
    <>
      <Modal
        isOpen={isModelOpen}
        onClose={onClose}
        isNextButton={true}
        onNext={handleNext}
      >
        <div className="flex flex-col p-2 w-full h-[80vh]">
          <h2 className="text-center text-xl mb-6 text-black font-medium sticky top-0 bg-white pb-2 z-10">
            Additional Details
          </h2>

          <div className="flex flex-col space-y-4 mb-4 overflow-y-auto pr-2 custom-scrollbar">
            {fields.map((field, index) => (
              <Input
                key={index}
                placeholder={field.placeholder}
                icon={field.icon}
              />
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdditionalDetails;

const Input = ({ placeholder, icon }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 p-3 rounded-lg outline-none text-gray-700 placeholder-gray-400"
      />
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer">
          <FiPlus className="text-black text-xl" />
        </div>
      )}
    </div>
  );
};
