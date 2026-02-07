import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";
import profileAvatar from "@/assets/profile-avatar.png";

const elections = [
  {
    id: 1,
    name: "Modakkurichi AC",
    type: "17th TN Assembly",
    state: "Tamil Nadu",
    image: profileAvatar,
  },
  {
    id: 2,
    name: "GBA - Demo",
    type: "Body not specified",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Aldona AC - GOA",
    type: "Body not specified",
    state: "Goa",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Karim Nagar - Ward 23",
    type: "Body not specified",
    state: "Telangana",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=200&h=200&fit=crop",
  },
];

const Elections = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-gradient px-4 py-4 flex items-center gap-4 sticky top-0 z-40">
        <Link to="/" className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">Your Elections</h1>
      </header>

      {/* Elections Grid */}
      <main className="p-4 pb-24">
        <div className="grid grid-cols-2 gap-4">
          {elections.map((election) => (
            <div
              key={election.id}
              className="bg-card rounded-xl card-shadow overflow-hidden border border-border/50 cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={election.image}
                  alt={election.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-foreground">{election.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{election.type}</p>
                <p className="text-xs text-muted-foreground">{election.state}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Elections;
