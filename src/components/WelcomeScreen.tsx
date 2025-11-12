import { Button } from "@/components/ui/button";
import { Camera, Mic, MessageSquare, Heart, TrendingUp } from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";

interface WelcomeScreenProps {
  onLogin: () => void;
}

const WelcomeScreen = ({ onLogin }: WelcomeScreenProps) => {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-12 animate-fade-in relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight">
            <span className="text-[#FFD700]">Smart</span>
            <span className="text-health-green">Heal</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-muted-foreground font-light">
            A Smart Way to Care for Your Health
          </p>
        </div>

        <div className="space-y-16">
          <div className="h-px bg-gradient-to-r from-transparent via-health-green/30 to-transparent" />
          
          <section className="space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What Is SmartHeal?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                SmartHeal is a smart health assistant that uses artificial intelligence (AI) to help people take care of their health easily.
              </p>
              <p>
                You can talk, type, or send a photo to SmartHeal, and it gives you quick and simple health advice — in your own language like English, Hindi, or Marathi.
              </p>
              <p className="text-health-green font-semibold text-xl">
                It's like having a friendly health helper in your phone — anytime, anywhere!
              </p>
            </div>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />

          <section className="space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why We Made It
            </h2>
            <p className="text-muted-foreground text-lg">Many people face problems like:</p>
            <ul className="space-y-3 text-muted-foreground max-w-xl mx-auto text-lg">
              <li className="flex items-center justify-center gap-3">
                <span className="text-health-green text-2xl">✓</span>
                <span>Not knowing if an illness is serious or not</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-health-green text-2xl">✓</span>
                <span>Not understanding medicine names</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-health-green text-2xl">✓</span>
                <span>Living in areas without doctors nearby</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-health-green text-2xl">✓</span>
                <span>Not being comfortable speaking or typing in English</span>
              </li>
            </ul>
            <p className="text-muted-foreground text-lg pt-4">
              SmartHeal was created to solve all these problems and make health help easy, quick, and available for everyone.
            </p>
          </section>

          <div className="h-px bg-gradient-to-r from-transparent via-health-green/30 to-transparent" />

          <section className="space-y-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What SmartHeal Can Do
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-health-green/50 transition-all hover:shadow-lg hover:scale-105 duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-health-green/10">
                    <Camera className="h-10 w-10 text-health-green" />
                  </div>
                </div>
                <h3 className="font-bold mb-3 text-foreground text-lg">Check with Photos</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Upload a photo of a skin infection or medicine, and SmartHeal will try to identify it.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-health-green/50 transition-all hover:shadow-lg hover:scale-105 duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-health-green/10">
                    <Mic className="h-10 w-10 text-health-green" />
                  </div>
                </div>
                <h3 className="font-bold mb-3 text-foreground text-lg">Talk to It</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Speak in Hindi, Marathi, or English — SmartHeal listens and answers.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-health-green/50 transition-all hover:shadow-lg hover:scale-105 duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-health-green/10">
                    <MessageSquare className="h-10 w-10 text-health-green" />
                  </div>
                </div>
                <h3 className="font-bold mb-3 text-foreground text-lg">Chat by Text</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Type health questions and get simple answers.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-health-green/50 transition-all hover:shadow-lg hover:scale-105 duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-health-green/10">
                    <Heart className="h-10 w-10 text-health-green" />
                  </div>
                </div>
                <h3 className="font-bold mb-3 text-foreground text-lg">Health Tips</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get tips for fitness, skincare, and a healthy lifestyle.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-health-green/50 transition-all hover:shadow-lg hover:scale-105 duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-health-green/10">
                    <TrendingUp className="h-10 w-10 text-health-green" />
                  </div>
                </div>
                <h3 className="font-bold mb-3 text-foreground text-lg">Track Your Progress</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Keep track of your health routines and habits.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-health-green/50 transition-all hover:shadow-lg hover:scale-105 duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-health-green/10">
                    <MessageSquare className="h-10 w-10 text-health-green" />
                  </div>
                </div>
                <h3 className="font-bold mb-3 text-foreground text-lg">24/7 Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get health guidance anytime, anywhere — day or night.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-center pt-8">
          <Button
            size="lg"
            onClick={onLogin}
            className="rounded-full bg-gradient-primary hover:shadow-glow transition-all text-xl px-20 py-8 h-auto font-bold hover:scale-105 duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
