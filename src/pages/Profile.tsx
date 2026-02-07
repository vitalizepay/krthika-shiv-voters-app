import { ChevronLeft, Camera, Mail, Phone, MapPin, Calendar, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/layout/BottomNav";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-gradient px-4 py-4 flex items-center gap-4 sticky top-0 z-40">
        <Link to="/" className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">My Profile</h1>
        <div className="flex-1" />
        <button className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <Pencil className="w-5 h-5 text-primary" />
        </button>
      </header>

      <main className="pb-24">
        {/* Profile Header */}
        <div className="header-gradient px-4 py-8 flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={profileAvatar}
              alt="Krthika Shiv"
              className="w-28 h-28 rounded-full object-cover border-4 border-card shadow-xl"
            />
            <button className="absolute bottom-0 right-0 w-9 h-9 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Camera className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Krthika Shiv</h2>
          <p className="text-muted-foreground">Super Admin</p>
        </div>

        {/* Profile Details */}
        <div className="p-4 space-y-4">
          <div className="bg-card rounded-xl card-shadow border border-border/50 overflow-hidden">
            <div className="flex items-center gap-4 px-4 py-4 border-b border-border/50">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">krthikashiv@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-4 border-b border-border/50">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-4 border-b border-border/50">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">Chennai, Tamil Nadu</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Joined</p>
                <p className="font-medium text-foreground">January 2024</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-card rounded-xl p-4 card-shadow border border-border/50 text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground">Elections</p>
            </div>
            <div className="bg-card rounded-xl p-4 card-shadow border border-border/50 text-center">
              <p className="text-2xl font-bold text-primary">4.5K</p>
              <p className="text-xs text-muted-foreground">Voters</p>
            </div>
            <div className="bg-card rounded-xl p-4 card-shadow border border-border/50 text-center">
              <p className="text-2xl font-bold text-primary">89</p>
              <p className="text-xs text-muted-foreground">Parts</p>
            </div>
          </div>

          <Button className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground py-6 rounded-xl text-base font-medium">
            Logout
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
