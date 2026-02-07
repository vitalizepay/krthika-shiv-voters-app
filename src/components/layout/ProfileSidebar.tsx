import { X, User, Vote, Settings, RefreshCw, Languages, Lock, FileText, ScrollText, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import profileAvatar from "@/assets/profile-avatar.jpg";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: User, label: "My Profile", path: "/profile" },
  { icon: Vote, label: "Your Elections", path: "/elections" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: RefreshCw, label: "Update App", path: "#" },
  { icon: Languages, label: "App Language", path: "/language" },
  { icon: Lock, label: "Change Password", path: "/change-password" },
  { icon: FileText, label: "Privacy Policy", path: "/privacy" },
  { icon: ScrollText, label: "Terms & Conditions", path: "/terms" },
];

const ProfileSidebar = ({ isOpen, onClose }: ProfileSidebarProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-card z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with profile */}
        <div className="header-gradient p-6 pb-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex items-center gap-4 mt-4">
            <div className="relative">
              <img
                src={profileAvatar}
                alt="Krthika Shiv"
                className="w-20 h-20 rounded-full object-cover border-4 border-card shadow-lg"
              />
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md">
                <Camera className="w-3.5 h-3.5 text-primary-foreground" />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Krthika Shiv</h2>
              <p className="text-sm text-muted-foreground">Super Admin</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-4 overflow-y-auto h-[calc(100%-200px)]">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={onClose}
                className="flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-accent/50 transition-colors border-b border-border/50 last:border-b-0"
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-foreground font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Version */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-xs text-muted-foreground">V.1.0 | 07-Feb-2026</p>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
