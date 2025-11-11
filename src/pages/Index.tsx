import { useState } from "react";
import ChatHeader from "@/components/ChatHeader";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import FloatingCrosses from "@/components/FloatingCrosses";
import WelcomeScreen from "@/components/WelcomeScreen";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleSendMessage = (content: string) => {
    if (showWelcome) {
      setShowWelcome(false);
    }

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

  return (
    <div className="flex flex-col h-screen bg-background text-foreground relative overflow-hidden">
      <FloatingCrosses />
      
      <ChatHeader />

      <div className="flex-1 relative">
        {showWelcome ? (
          <WelcomeScreen onStart={() => setShowWelcome(false)} />
        ) : (
          <ScrollArea className="h-full">
            <div className="container mx-auto px-4 py-6 space-y-6 max-w-4xl">
              {messages.map((message, index) => (
                <ChatMessage key={index} role={message.role} content={message.content} />
              ))}
            </div>
          </ScrollArea>
        )}
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Index;
