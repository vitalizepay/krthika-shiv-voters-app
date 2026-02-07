import { Users, UserCheck, UsersRound, ClipboardList } from "lucide-react";

const tiles = [
  { icon: Users, label: "Cadre", sublabel: "Manager" },
  { icon: UserCheck, label: "Voter", sublabel: "Manager" },
  { icon: UsersRound, label: "Family", sublabel: "Manager" },
  { icon: ClipboardList, label: "Survey", sublabel: "Manager" },
];

const ManagerTiles = () => {
  return (
    <div className="grid grid-cols-4 gap-2 px-4">
      {tiles.map((tile) => {
        const Icon = tile.icon;
        return (
          <div
            key={tile.label}
            className="manager-tile cursor-pointer"
          >
            <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
            <div className="text-center">
              <p className="text-xs font-medium text-foreground">{tile.label}</p>
              <p className="text-[10px] text-muted-foreground">{tile.sublabel}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ManagerTiles;
