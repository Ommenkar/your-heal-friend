import { useState } from "react";
import ChatHeader from "@/components/ChatHeader";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import FloatingCrosses from "@/components/FloatingCrosses";
import WelcomeScreen from "@/components/WelcomeScreen";
import LoginPage from "@/components/LoginPage";
import AppSidebar from "@/components/AppSidebar";
import HealthAssistant from "@/components/HealthAssistant";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

type PageState = "welcome" | "login" | "chat";

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [pageState, setPageState] = useState<PageState>("welcome");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);

  const handleLogin = () => {
    setPageState("chat");
    setShowAssistant(true);
  };

  const handleSendMessage = (content: string) => {
    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "I'm here to help with your health concerns. This is a demo response. In a full implementation, I would provide personalized health insights based on your query.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  if (pageState === "welcome") {
    return (
      <div className="flex flex-col h-screen bg-background text-foreground relative overflow-hidden">
        <FloatingCrosses />
        <WelcomeScreen onLogin={() => setPageState("login")} />
      </div>
    );
  }

  if (pageState === "login") {
    return (
      <div className="flex flex-col h-screen bg-background text-foreground relative overflow-hidden">
        <FloatingCrosses />
        <LoginPage onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <FloatingCrosses />
      
      {showAssistant && <HealthAssistant onDismiss={() => setShowAssistant(false)} />}
      
      <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1 min-w-0">
        <ChatHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex-1 relative overflow-hidden">
          <ScrollArea className="h-full">
            <div className="container mx-auto px-4 py-6 space-y-6 max-w-4xl">
              {messages.map((message, index) => (
                <ChatMessage key={index} role={message.role} content={message.content} />
              ))}
            </div>
          </ScrollArea>
        </div>

        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Index;
