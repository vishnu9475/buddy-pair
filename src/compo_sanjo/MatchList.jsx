import MatchCard from "./MatchCard";

const MatchList = ({ hideHeader = false, onCardClick }) => {
  const matches = [
    {
      id: 1,
      name: "James",
      age: 20,
      location: "HANOVER",
      distance: "1.3 km",
      matchPercentage: 100,
      isOnline: true,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500",
    },
    {
      id: 2,
      name: "Eddie",
      age: 23,
      location: "DORTMUND",
      distance: "2 km",
      matchPercentage: 94,
      isOnline: true,
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500",
    },
    {
      id: 3,
      name: "Brandon",
      age: 20,
      location: "HAMBURG",
      distance: "2.5 km",
      matchPercentage: 89,
      isOnline: false,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500",
    },
    {
      id: 4,
      name: "Alfredo",
      age: 20,
      location: "HAMBURG",
      distance: "2.5 km",
      matchPercentage: 80,
      isOnline: true,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500",
    },
    {
      id: 5,
      name: "James",
      age: 20,
      location: "HANOVER",
      distance: "1.3 km",
      matchPercentage: 100,
      isOnline: true,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500",
    },
    {
      id: 6,
      name: "Eddie",
      age: 23,
      location: "DORTMUND",
      distance: "2 km",
      matchPercentage: 94,
      isOnline: true,
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500",
    },
  ];

  return (
    <div>
      {/* Header */}
      {!hideHeader && (
        <div className="mb-6 flex items-baseline gap-2 px-1">
          <h2 className="text-[#760656] font-aldrich text-xl tracking-wide font-medium">
            Your Matches
          </h2>

          <span className="text-[#E996D1] font-aldrich text-xl font-medium">
            47
          </span>
        </div>
      )}

      {/* 2x2 GRID LIST
          'grid-cols-2' is the key here. It forces exactly 2 items per row.
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-4 w-full mx-auto">
        {matches.map((user) => (
          <MatchCard
            key={user.id}
            {...user}
            onClick={() => onCardClick && onCardClick(user)}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
