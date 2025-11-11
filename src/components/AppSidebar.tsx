import { History, User, Plus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppSidebar = ({ isOpen, onClose }: AppSidebarProps) => {
  const conversations = [
    { id: 1, title: "Fever and cold symptoms", date: "Today" },
    { id: 2, title: "Healthy diet tips", date: "Yesterday" },
    { id: 3, title: "Skin infection check", date: "2 days ago" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 bg-card border-r border-border z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border">
            <Button className="w-full justify-start gap-2 bg-gradient-primary hover:shadow-glow">
              <Plus className="h-4 w-4" />
              New Chat
            </Button>
          </div>

          <ScrollArea className="flex-1 px-3 py-4">
            <div className="space-y-2">
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">
                Recent Chats
              </div>
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  className="w-full flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 text-left transition-colors group"
                >
                  <MessageSquare className="h-4 w-4 mt-1 text-muted-foreground group-hover:text-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate text-foreground">
                      {conv.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{conv.date}</p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>

          <div className="p-3 border-t border-border space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <History className="h-4 w-4" />
              History
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
            >
              <User className="h-4 w-4" />
              Account
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
