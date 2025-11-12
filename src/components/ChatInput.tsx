import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Send, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const { t } = useLanguage();
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const QUICK_PROMPTS = [
    { key: "analyzeSymptoms", label: t("analyzeSymptoms") },
    { key: "fitnessTips", label: t("fitnessTips") },
    { key: "healthProgress", label: t("healthProgress") },
    { key: "medicineInfo", label: t("medicineInfo") },
    { key: "dietAdvice", label: t("dietAdvice") },
  ];

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

  const handleQuickPrompt = (label: string) => {
    setMessage(label);
  };

  return (
    <div className="sticky bottom-0 border-t border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          {QUICK_PROMPTS.map((prompt) => (
            <Button
              key={prompt.key}
              variant="outline"
              size="sm"
              className="rounded-full text-xs border-[#FFD700] hover:border-health-green transition-colors"
              onClick={() => handleQuickPrompt(prompt.label)}
            >
              {prompt.label}
            </Button>
          ))}
        </div>

        <div className="flex items-end gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 h-10 w-10 hover:border hover:border-health-green transition-all"
            onClick={() => {}}
          >
            <Camera className="h-5 w-5" />
          </Button>

          <div className="flex-1 relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("messagePlaceholder")}
              disabled={disabled}
              className="min-h-[48px] max-h-[120px] resize-none rounded-xl bg-card border-border focus-visible:ring-primary"
              rows={1}
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "shrink-0 h-10 w-10 transition-all",
              isRecording 
                ? "text-red-500 animate-pulse border border-red-500" 
                : "hover:border hover:border-health-green"
            )}
            onClick={toggleRecording}
          >
            <Mic className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            disabled={!message.trim() || disabled}
            onClick={handleSend}
            className="shrink-0 h-10 w-10 hover:border hover:border-health-green transition-all disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          {t("aiDisclaimer")}
        </p>
      </div>
    </div>
  );
};

export default ChatInput;
