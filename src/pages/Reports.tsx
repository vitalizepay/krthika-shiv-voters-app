import { ChevronLeft, FileText, BarChart3, PieChart, TrendingUp, Download } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";

const reportTypes = [
  { icon: FileText, label: "Voter Summary", description: "Complete voter demographics" },
  { icon: BarChart3, label: "Area Analysis", description: "Region-wise statistics" },
  { icon: PieChart, label: "Caste Distribution", description: "Category breakdown" },
  { icon: TrendingUp, label: "Voting Trends", description: "Historical data analysis" },
  { icon: Download, label: "Export Data", description: "Download full reports" },
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-gradient px-4 py-4 flex items-center gap-4 sticky top-0 z-40">
        <Link to="/" className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">Reports</h1>
      </header>

      <main className="p-4 pb-24">
        <div className="space-y-3">
          {reportTypes.map((report) => {
            const Icon = report.icon;
            return (
              <div
                key={report.label}
                className="bg-card rounded-xl p-4 card-shadow border border-border/50 flex items-center gap-4 cursor-pointer hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{report.label}</h3>
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                </div>
                <ChevronLeft className="w-5 h-5 text-muted-foreground rotate-180" />
              </div>
            );
          })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Reports;
