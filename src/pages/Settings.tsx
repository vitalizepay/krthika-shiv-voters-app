import { ChevronLeft, Image, History, Tag, FileText, Users, Globe, ListChecks, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";

const settingsGroups = [
  {
    title: "Set Election",
    items: [
      { icon: Image, label: "App Banner", path: "/settings/banner" },
      { icon: History, label: "History", path: "/history" },
    ],
  },
  {
    title: "Category",
    items: [
      { icon: FileText, label: "Voter Slip", path: "/settings/voter-slip" },
      { icon: Tag, label: "Party", path: "/settings/party" },
      { icon: Globe, label: "Religion", path: "/settings/religion" },
      { icon: Users, label: "Caste", path: "/settings/caste" },
      { icon: ListChecks, label: "Caste Category", path: "/settings/caste-category" },
    ],
  },
];

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-gradient px-4 py-4 flex items-center gap-4 sticky top-0 z-40">
        <Link to="/" className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">Settings</h1>
      </header>

      <main className="p-4 pb-24">
        {settingsGroups.map((group) => (
          <div key={group.title} className="mb-6">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">
              {group.title}
            </h2>
            <div className="bg-card rounded-xl card-shadow border border-border/50 overflow-hidden">
              {group.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center gap-4 px-4 py-4 hover:bg-accent/30 transition-colors ${
                      index !== group.items.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="flex-1 font-medium text-foreground">{item.label}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {/* Default Election */}
        <div className="bg-card rounded-xl p-4 card-shadow border border-border/50">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Set Default Election
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-medium text-foreground">Krthika Shiv Demo</span>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                UPDATE
              </button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Settings;
