import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Send, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recording logic would go here
  };

  return (
    <div className="sticky bottom-0 border-t border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-xs border-border hover:bg-card"
            onClick={() => onSendMessage("Analyze my symptoms")}
          >
            🔍 Analyze Symptoms
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-xs border-border hover:bg-card"
            onClick={() => onSendMessage("Give me fitness tips")}
          >
            💪 Fitness Tips
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-xs border-border hover:bg-card"
            onClick={() => onSendMessage("Check my health progress")}
          >
            📈 Health Progress
          </Button>
        </div>

        <div className="flex items-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 h-10 w-10 rounded-xl hover:bg-card"
            onClick={() => {}}
          >
            <ImageIcon className="h-5 w-5" />
          </Button>

          <div className="flex-1 relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about your health..."
              disabled={disabled}
              className="min-h-[48px] max-h-[120px] resize-none rounded-xl bg-card border-border pr-12 focus-visible:ring-primary"
              rows={1}
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "shrink-0 h-10 w-10 rounded-xl transition-all",
              isRecording && "bg-destructive text-destructive-foreground animate-pulse-glow"
            )}
            onClick={toggleRecording}
          >
            <Mic className="h-5 w-5" />
          </Button>

          <Button
            size="icon"
            disabled={!message.trim() || disabled}
            onClick={handleSend}
            className="shrink-0 h-10 w-10 rounded-xl bg-gradient-primary hover:shadow-glow transition-all disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          AI SmartHeal can make mistakes. Please verify important information.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;
