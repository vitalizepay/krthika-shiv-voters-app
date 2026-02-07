import { ChevronLeft, Printer, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";

const SlipBox = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-gradient px-4 py-4 flex items-center gap-4 sticky top-0 z-40">
        <Link to="/" className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">Slip Box</h1>
      </header>

      <main className="p-4 pb-24">
        {/* Toggle Buttons */}
        <div className="flex bg-muted rounded-full p-1 mb-6">
          <button className="flex-1 py-3 px-4 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-colors">
            Slip Box
          </button>
          <button className="flex-1 py-3 px-4 rounded-full text-muted-foreground font-medium text-sm transition-colors hover:text-foreground">
            Voter Slip
          </button>
        </div>

        {/* Slip Box Settings */}
        <div className="bg-card rounded-xl p-6 card-shadow border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Slip Box Setting</h2>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              ×
            </button>
          </div>
          
          <p className="text-muted-foreground mb-6">Enable Bluetooth to discover devices</p>

          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Printer className="w-12 h-12 text-primary" />
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-xl text-base font-medium">
            Enable Bluetooth
          </Button>
        </div>

        {/* Recent Slips */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Slips</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-4 card-shadow border border-border/50 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">Slip #{1000 + i}</p>
                  <p className="text-xs text-muted-foreground">Part {i} • 2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SlipBox;
