const Modal = ({
  isOpen,
  onClose,
  children,
  isNextButton = false,
  onNext,
  nextButtonLabel = "Next",
}) => {
  if (!isOpen) return null;

  const handleNext = onNext || onClose;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 rounded"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-sm w-full mx-4 p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        {isNextButton && (
          <button
            onClick={handleNext}
            className="w-full py-2 mt-4 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-colors text-lg"
          >
            {nextButtonLabel}
          </button>
        )}
      </div>
    </div>
  );
};
export default Modal;
