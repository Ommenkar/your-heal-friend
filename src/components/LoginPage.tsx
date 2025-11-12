import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [isSignup, setIsSignup] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/signup
    onLogin();
  };

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-12 animate-fade-in relative">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>
      <Card className="w-full max-w-md p-8 space-y-6 bg-card border-border shadow-glow">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">
            <span className="text-[#FFD700]">Smart</span>
            <span className="text-health-green">Heal</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            {isSignup ? "Sign up to start your health journey" : "Welcome Back"}
          </p>
        </div>

        <Button
          variant="outline"
          className="w-full gap-2 hover:bg-muted/50 transition-all"
          size="lg"
          onClick={() => {/* Google OAuth */}}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </Button>

        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">OR</span>
          <Separator className="flex-1" />
        </div>

        <div className="flex gap-2 p-1 bg-muted rounded-lg">
          <Button
            type="button"
            variant={loginMethod === "email" ? "default" : "ghost"}
            className="flex-1 gap-2"
            onClick={() => setLoginMethod("email")}
          >
            <Mail className="h-4 w-4" />
            Email
          </Button>
          <Button
            type="button"
            variant={loginMethod === "phone" ? "default" : "ghost"}
            className="flex-1 gap-2"
            onClick={() => setLoginMethod("phone")}
          >
            <Phone className="h-4 w-4" />
            Phone
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background"
              />
            </div>
          )}
          
          {loginMethod === "email" ? (
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-background"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:shadow-glow transition-all"
            size="lg"
          >
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="text-sm text-primary hover:underline"
          >
            {isSignup
              ? "Already have an account? Login"
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
