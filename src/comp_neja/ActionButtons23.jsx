
import { FaStar, FaHeart, FaComment, FaXmark, FaPlus } from "react-icons/fa6";

const ACTIONS = [
  {
    id: "close",
    icon: FaXmark,
    bg: "bg-red-200",
    activeBg: "bg-red-300",
  },
  {
    id: "star",
    icon: FaStar,
    bg: "bg-purple-900",
    activeBg: "bg-purple-700",
  },
  {
    id: "add",
    icon: FaPlus,
    bg: "bg-purple-300",
    activeBg: "bg-purple-700",
  },
  {
    id: "like",
    icon: FaHeart,
    bg: "bg-pink-400",
    activeBg: "bg-pink-500",
  },
  {
    id: "comment",
    icon: FaComment,
    bg: "bg-pink-200",
    activeBg: "bg-pink-300",
  },
];

const ActionButtons23 = ({
  actions = ACTIONS,
  activeId,
  onAction = () => {},
}) => {
  
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white shadow-lg">
      {actions.map((action) => {
        const Icon = action.icon;
        const isActive = activeId === action.id;

        return (
          <button
            key={action.id}
            onClick={() => onAction(action.id)}
            className={`
              w-14 h-14 rounded-full
              flex items-center justify-center
              transition-all duration-200
              ${isActive ? action.activeBg : action.bg}
              hover:scale-105
            `}
          >
            <Icon className="text-white w-6 h-6" />
          </button>
        );
      })}
    </div>
  );
};

export default ActionButtons23;
