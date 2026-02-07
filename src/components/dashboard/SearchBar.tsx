import { Search, ScanLine } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Voter Id or Voter Name"
            className="search-input pr-10"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>
        <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors">
          <ScanLine className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
