import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/components/LanguageProvider";
import { useState } from "react";

const allLanguages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी (Hindi)" },
  { code: "mr", name: "मराठी (Marathi)" },
  { code: "es", name: "Español (Spanish)" },
  { code: "fr", name: "Français (French)" },
  { code: "de", name: "Deutsch (German)" },
  { code: "pt", name: "Português (Portuguese)" },
  { code: "ru", name: "Русский (Russian)" },
  { code: "ja", name: "日本語 (Japanese)" },
  { code: "ko", name: "한국어 (Korean)" },
  { code: "zh", name: "中文 (Chinese)" },
  { code: "ar", name: "العربية (Arabic)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "ta", name: "தமிழ் (Tamil)" },
  { code: "te", name: "తెలుగు (Telugu)" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const mainLanguages = allLanguages.slice(0, 3);
  const filteredLanguages = allLanguages.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as any);
    setDialogOpen(false);
    setSearchQuery("");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-muted">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-card z-[100]">
        {mainLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`cursor-pointer ${
              language === lang.code ? "bg-muted" : ""
            }`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              More languages...
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md bg-card">
            <DialogHeader>
              <DialogTitle>Select Language</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Search languages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-background"
              />
              <div className="max-h-[300px] overflow-y-auto space-y-1">
                {filteredLanguages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant="ghost"
                    className={`w-full justify-start ${
                      language === lang.code ? "bg-muted" : ""
                    }`}
                    onClick={() => handleLanguageSelect(lang.code)}
                  >
                    {lang.name}
                  </Button>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
