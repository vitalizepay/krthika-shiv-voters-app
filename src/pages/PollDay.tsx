import { ChevronLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";

const partNumbers = Array.from({ length: 28 }, (_, i) => i + 1);

const PollDay = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-gradient px-4 py-4 flex items-center gap-4 sticky top-0 z-40">
        <Link to="/" className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">Poll Day</h1>
      </header>

      <main className="p-4 pb-24">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by part number"
            className="search-input pl-12"
          />
        </div>

        {/* Part Numbers Grid */}
        <div className="grid grid-cols-4 gap-3">
          {partNumbers.map((num) => (
            <div key={num} className="part-number-tile aspect-square">
              {num}
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default PollDay;
