import { Link, useLocation } from "react-router-dom";
import { FileText, Grid3X3, Home, Inbox, Vote } from "lucide-react";

const navItems = [
  { path: "/reports", icon: FileText, label: "Reports" },
  { path: "/catalogue", icon: Grid3X3, label: "Catalogue" },
  { path: "/", icon: Home, label: "", isHome: true },
  { path: "/slip-box", icon: Inbox, label: "Slip Box" },
  { path: "/poll-day", icon: Vote, label: "Poll Day" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

        if (item.isHome) {
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative -mt-8"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
            </Link>
          );
        }

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-colors ${
              isActive ? "nav-icon-active" : "nav-icon-inactive"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
