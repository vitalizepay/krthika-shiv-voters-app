import { ChevronLeft, Search, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";

const historyItems = [
  { year: "2024", type: "PC", label: "2024-MP", color: "bg-blue-600" },
  { year: "2021", type: "AC", label: "2021-MLA", color: "bg-green-600" },
  { year: "2022", type: "ULB", label: "2022-Local Body", color: "bg-red-500" },
  { year: "", type: "", label: "Not Voted", color: "bg-gray-400", isNotVoted: true },
];

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-gradient px-4 py-4 flex items-center gap-4 sticky top-0 z-40">
        <Link to="/settings" className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">History</h1>
      </header>

      <main className="p-4 pb-24">
        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search voting history..."
            className="search-input pr-12"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>

        {/* History Items */}
        <div className="space-y-4">
          {historyItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 card-shadow border border-border/50 flex items-center gap-4"
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex flex-col items-center justify-center text-white`}>
                {item.isNotVoted ? (
                  <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-xs">✕</span>
                  </div>
                ) : (
                  <>
                    <span className="text-sm font-bold">{item.year}</span>
                    <span className="text-xs">{item.type}</span>
                  </>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{item.label}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors">
                  <Pencil className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors">
                  <Trash2 className="w-4 h-4 text-destructive" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default History;
