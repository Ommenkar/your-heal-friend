import { Menu, Sun, Moon, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ChatHeaderProps {
  onToggleSidebar?: () => void;
}

const ChatHeader = ({ onToggleSidebar }: ChatHeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onToggleSidebar && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleSidebar}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl font-bold">
              <span className="text-[#FFD700]">Smart</span>
              <span className="text-health-green">Heal</span>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("hi")}>
                  हिंदी {language === "hi" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("mr")}>
                  मराठी {language === "mr" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
