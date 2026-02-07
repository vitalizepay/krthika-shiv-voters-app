import { ChevronLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
];

const Language = () => {
  const [selected, setSelected] = useState("en");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-gradient px-4 py-4 flex items-center gap-4 sticky top-0 z-40">
        <Link to="/" className="p-2 rounded-lg hover:bg-accent/50 transition-colors">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </Link>
        <h1 className="text-xl font-semibold text-foreground">Choose Language</h1>
      </header>

      <main className="p-4 pb-24">
        <div className="grid grid-cols-2 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className={`bg-card rounded-xl p-6 card-shadow border-2 transition-all text-center ${
                selected === lang.code
                  ? "border-primary bg-primary/5"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              <div className="flex items-center justify-center mb-2">
                {selected === lang.code && (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
              </div>
              <p className="font-semibold text-foreground text-lg">{lang.name}</p>
              <p className="text-muted-foreground">{lang.native}</p>
            </button>
          ))}
        </div>

        <button className="w-full mt-6 bg-primary text-primary-foreground py-4 rounded-xl font-medium text-lg hover:bg-primary/90 transition-colors">
          Submit
        </button>
      </main>
    </div>
  );
};

export default Language;
