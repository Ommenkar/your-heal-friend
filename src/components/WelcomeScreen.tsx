import { Button } from "@/components/ui/button";
import { MessageSquare, Mic, Image as ImageIcon, Activity } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const features = [
    {
      icon: MessageSquare,
      title: "Text Chat",
      description: "Ask health questions in Hindi, Marathi, or English",
    },
    {
      icon: Mic,
      title: "Voice Chat",
      description: "Speak naturally in your preferred language",
    },
    {
      icon: ImageIcon,
      title: "Image Analysis",
      description: "Identify infections or medicines from photos",
    },
    {
      icon: Activity,
      title: "Health Tracking",
      description: "Monitor your wellness progress and routines",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 animate-fade-in">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Welcome to SmartHeal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your AI-powered multilingual health assistant. Get instant health insights,
            personalized tips, and track your wellness journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-soft group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-8 w-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          onClick={onStart}
          className="rounded-full bg-gradient-primary hover:shadow-glow transition-all text-lg px-8 py-6 h-auto"
        >
          Start Chatting
        </Button>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <span>🌍 Multilingual Support</span>
          <span>🔒 Secure & Private</span>
          <span>⚡ Instant Responses</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
