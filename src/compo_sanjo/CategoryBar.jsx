import Modal from "./modal";

const CategoryBar = ({
  onMenClick,
  onWomenClick,
  onBothClick,
  isModelOpen,
  onClose,
}) => {
  const handleSelection = (callback) => {
    if (callback) {
      callback();
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <Modal isOpen={isModelOpen} onClose={onClose}>
        <div className="flex flex-col p-4 w-full items-center">
          <h2 className="text-center text-xl mb-8 text-black font-medium">
            Interested in
          </h2>

          <div className="flex flex-col space-y-4 w-full max-w-xs">
            <button
              onClick={() => handleSelection(onMenClick)}
              className="w-full py-3 bg-[#5B5CEB] text-white rounded-full font-bold tracking-wider hover:opacity-90 transition-opacity text-sm"
            >
              MEN
            </button>

            <button
              onClick={() => handleSelection(onWomenClick)}
              className="w-full py-3 bg-[#FF406E] text-white rounded-full font-bold tracking-wider hover:opacity-90 transition-opacity text-sm"
            >
              WOMEN
            </button>

            <button
              onClick={() => handleSelection(onBothClick)}
              className="w-full py-3 bg-linear-to-r from-[#007AFF] to-[#FFAABF] text-white rounded-full font-bold tracking-wider hover:opacity-90 transition-opacity text-sm"
            >
              BOTH
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CategoryBar;
