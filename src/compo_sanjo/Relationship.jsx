import Modal from "./modal";

const Relationship = ({ isModelOpen, onNext, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isModelOpen}
        onClose={onClose}
        isNextButton={true}
        onNext={onNext}
      >
        <div className="flex flex-col p-2">
          <h2 className="text-center text-xl mb-8 text-black">
            Relationship Goals
          </h2>

          <div className="flex flex-col space-y-6 mb-10 pl-4">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="short-term"
                className="w-5 h-5 accent-gray-800  cursor-pointer"
              />
              <label
                htmlFor="short-term"
                className="text-lg cursor-pointer text-gray-800"
              >
                Short Term Relationship
              </label>
            </div>

            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="long-term"
                className="w-5 h-5 accent-gray-800  cursor-pointer"
              />
              <label
                htmlFor="long-term"
                className="text-lg cursor-pointer text-gray-800"
              >
                Long Term Relationship
              </label>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Relationship;
