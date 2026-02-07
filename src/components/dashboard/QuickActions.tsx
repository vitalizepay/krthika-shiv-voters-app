import { 
  MapPin, 
  Map, 
  Home, 
  FileText, 
  Users, 
  UserX, 
  Shield, 
  Globe,
  Cake,
  Star,
  Smartphone,
  UserPlus
} from "lucide-react";

const actions = [
  { icon: MapPin, label: "Cadre", color: "text-blue-600" },
  { icon: Map, label: "Part", color: "text-red-500" },
  { icon: Home, label: "Voter", color: "text-emerald-600" },
  { icon: FileText, label: "Form-6", color: "text-orange-500" },
  { icon: Users, label: "Transgender", color: "text-pink-500" },
  { icon: UserX, label: "Fatherless", color: "text-blue-500" },
  { icon: Shield, label: "Guardian", color: "text-teal-600" },
  { icon: Globe, label: "Overseas", color: "text-cyan-600" },
  { icon: Cake, label: "Birthday", color: "text-purple-500" },
  { icon: Star, label: "Star", color: "text-amber-500" },
  { icon: Smartphone, label: "Mobile", color: "text-indigo-500" },
  { icon: UserPlus, label: "85 Above", color: "text-rose-500" },
];

const QuickActions = () => {
  return (
    <div className="px-4 py-2">
      <div className="grid grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <div
              key={action.label}
              className="action-icon-container"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/60 flex items-center justify-center">
                <Icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <span className="text-xs text-foreground font-medium text-center">{action.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
