import { Button } from "@/components/ui/button";
import { Camera, Mic, MessageSquare, Heart, TrendingUp } from "lucide-react";

interface WelcomeScreenProps {
  onLogin: () => void;
}

const WelcomeScreen = ({ onLogin }: WelcomeScreenProps) => {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            SmartHeal
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            A Smart Way to Care for Your Health
          </p>
        </div>

        <div className="space-y-8 text-left">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
              <Heart className="h-7 w-7 text-health-green" />
              What Is SmartHeal?
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                SmartHeal is a smart health assistant that uses artificial intelligence (AI) to help people take care of their health easily.
              </p>
              <p>
                You can talk, type, or send a photo to SmartHeal, and it gives you quick and simple health advice — in your own language like English, Hindi, or Marathi.
              </p>
              <p className="text-primary font-medium">
                It's like having a friendly health helper in your phone — anytime, anywhere!
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Why We Made It
            </h2>
            <p className="text-muted-foreground">Many people face problems like:</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="flex items-start gap-2">
                <span className="text-health-green mt-1">•</span>
                <span>Not knowing if an illness is serious or not</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-health-green mt-1">•</span>
                <span>Not understanding medicine names</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-health-green mt-1">•</span>
                <span>Living in areas without doctors nearby</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-health-green mt-1">•</span>
                <span>Not being comfortable speaking or typing in English</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              SmartHeal was created to solve all these problems and make health help easy, quick, and available for everyone.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What SmartHeal Can Do
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-health-green/50 transition-all">
                <Camera className="h-8 w-8 mb-3 text-health-green" />
                <h3 className="font-semibold mb-2 text-foreground">Check with Photos</h3>
                <p className="text-sm text-muted-foreground">
                  Upload a photo of a skin infection or medicine, and SmartHeal will try to identify it.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-health-green/50 transition-all">
                <Mic className="h-8 w-8 mb-3 text-health-green" />
                <h3 className="font-semibold mb-2 text-foreground">Talk to It</h3>
                <p className="text-sm text-muted-foreground">
                  Speak in Hindi, Marathi, or English — SmartHeal listens and answers.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-health-green/50 transition-all">
                <MessageSquare className="h-8 w-8 mb-3 text-health-green" />
                <h3 className="font-semibold mb-2 text-foreground">Chat by Text</h3>
                <p className="text-sm text-muted-foreground">
                  Type health questions and get simple answers.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-health-green/50 transition-all">
                <Heart className="h-8 w-8 mb-3 text-health-green" />
                <h3 className="font-semibold mb-2 text-foreground">Health Tips</h3>
                <p className="text-sm text-muted-foreground">
                  Get tips for fitness, skincare, and a healthy lifestyle.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-health-green/50 transition-all sm:col-span-2">
                <TrendingUp className="h-8 w-8 mb-3 text-health-green" />
                <h3 className="font-semibold mb-2 text-foreground">Track Your Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Keep track of your health routines and habits.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-center pt-8">
          <Button
            size="lg"
            onClick={onLogin}
            className="rounded-full bg-gradient-primary hover:shadow-glow transition-all text-lg px-12 py-6 h-auto"
          >
            Get Started - Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
