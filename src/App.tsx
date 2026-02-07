import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Elections from "./pages/Elections";
import PollDay from "./pages/PollDay";
import Catalogue from "./pages/Catalogue";
import Reports from "./pages/Reports";
import SlipBox from "./pages/SlipBox";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Language from "./pages/Language";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/poll-day" element={<PollDay />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/slip-box" element={<SlipBox />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/language" element={<Language />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
