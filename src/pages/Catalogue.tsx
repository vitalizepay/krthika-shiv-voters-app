import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";

const catalogueItems = [
  {
    id: 1,
    name: "Krthika Shiv App",
    price: "₹.3",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Voter List",
    price: "₹.1",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Voter Photo",
    price: "₹.1",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    name: "SlipBox - Paper",
    price: "₹.2,500",
    image: "https://images.unsplash.com/photo-1586953208270-767889fa9b8b?w=300&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Selftest",
    price: "₹.50",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Reports Package",
    price: "₹.100",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
  },
];

const Catalogue = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-gradient px-4 py-4 flex items-center gap-4 sticky top-0 z-40">
        <Link to="/" className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">Catalogue</h1>
      </header>

      <main className="p-4 pb-24">
        <div className="grid grid-cols-2 gap-4">
          {catalogueItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl card-shadow overflow-hidden border border-border/50 cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-primary/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-foreground">{item.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Catalogue;
