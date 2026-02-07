import { Menu, QrCode, Tag } from "lucide-react";
import { ChevronDown } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="header-gradient px-4 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-accent/50 transition-colors"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>
        <div className="flex items-center gap-1">
          <span className="font-semibold text-lg text-foreground">Krthika Shiv</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <QrCode className="w-5 h-5 text-foreground" />
        </button>
        <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <Tag className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
