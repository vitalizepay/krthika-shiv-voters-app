import { useState } from "react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import ProfileSidebar from "@/components/layout/ProfileSidebar";
import ManagerTiles from "@/components/dashboard/ManagerTiles";
import SearchBar from "@/components/dashboard/SearchBar";
import QuickActions from "@/components/dashboard/QuickActions";
import CampaignBanner from "@/components/dashboard/CampaignBanner";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ProfileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <main className="pb-20">
        <div className="header-gradient pt-2 pb-6 -mt-1">
          <ManagerTiles />
        </div>
        
        <SearchBar />
        <QuickActions />
        <CampaignBanner />
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
