import Modal from "./modal";

const Interested = ({ isModelOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isModelOpen} onClose={onClose}>
        <div className="flex flex-col p-2 w-full">
          <h2 className="text-center text-xl mb-12 text-black font-medium">
            Interested
          </h2>

          <div className="flex flex-col space-y-8 mb-10 px-4">
            <button className="w-full py-2 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-colors text-lg">
              Dating
            </button>

            <button className="w-full py-2 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-colors text-lg">
              Matrimony
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Interested;
