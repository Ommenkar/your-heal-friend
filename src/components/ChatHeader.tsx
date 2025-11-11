import logo from "@/assets/logo.jpg";

const ChatHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="SmartHeal Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              AI-Powered Health Assistant
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
