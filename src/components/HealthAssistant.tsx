import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { supabase } from "@/integrations/supabase/client";
import healthAssistantImage from "@/assets/health-assistant-full.png";

interface HealthAssistantProps {
  onDismiss: () => void;
}

const HealthAssistant = ({ onDismiss }: HealthAssistantProps) => {
  const { language } = useLanguage();
  const [showMessage, setShowMessage] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const messages = {
    en: "SmartHeal helps you understand your health quickly. You can talk to it, upload a photo of any infection or medicine, or type your question. Just choose your method, ask your query, and SmartHeal will guide you with instant advice, image analysis, and daily wellness support. Start by selecting voice, image, or text.",
    hi: "SmartHeal आपकी सेहत समझने में आपकी मदद करता है। आप इससे बात कर सकते हैं, किसी भी इन्फेक्शन या दवा की फोटो अपलोड कर सकते हैं, या अपना सवाल टाइप कर सकते हैं। बस अपनी पसंद का तरीका चुनें, सवाल पूछें, और SmartHeal तुरंत सलाह, इमेज विश्लेषण और वेलनेस सपोर्ट देता है। शुरू करने के लिए आवाज, फोटो या टेक्स्ट चुनें।",
    mr: "SmartHeal तुमची तब्येत समजून घेण्यासाठी मदत करते. तुम्ही त्याच्याशी बोलू शकता, कोणत्याही इंफेक्शनचा किंवा औषधाचा फोटो अपलोड करू शकता, किंवा तुमचा प्रश्न टाइप करू शकता. फक्त तुमचं पद्धत निवडा, प्रश्न विचारा, आणि SmartHeal लगेच सल्ला, इमेज विश्लेषण आणि वेलनेस सपोर्ट देते. सुरू करण्यासाठी आवाज, फोटो किंवा टेक्स्ट निवडा."
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
      speakMessage();
    }, 500);
    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [language]);

  const speakMessage = async () => {
    const message = messages[language as keyof typeof messages];
    setIsSpeaking(true);

    try {
      const { data, error } = await supabase.functions.invoke('text-to-speech', {
        body: { text: message, voice: 'nova' }
      });

      if (error) throw error;

      if (data?.audioContent) {
        const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
        audioRef.current = audio;
        
        audio.onended = () => {
          setIsSpeaking(false);
          audioRef.current = null;
        };

        await audio.play();
      }
    } catch (error) {
      console.error('Error playing speech:', error);
      setIsSpeaking(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <Button
        variant="ghost"
        size="icon"
        onClick={onDismiss}
        className="absolute top-4 right-4 rounded-full"
      >
        <X className="h-5 w-5" />
      </Button>

      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8">
        <div className="relative flex-1 max-w-2xl">
          <img
            src={healthAssistantImage}
            alt="SmartHeal AI Assistant"
            className="w-full h-auto animate-scale-in"
          />
        </div>

        <div className="flex-1 max-w-xl space-y-6">
          {isSpeaking && (
            <div className="flex justify-center items-center gap-2 animate-fade-in">
              <div className="w-3 h-12 bg-health-green animate-pulse rounded-full" style={{ animationDelay: '0s' }} />
              <div className="w-3 h-16 bg-health-green animate-pulse rounded-full" style={{ animationDelay: '0.15s' }} />
              <div className="w-3 h-20 bg-health-green animate-pulse rounded-full" style={{ animationDelay: '0.3s' }} />
              <div className="w-3 h-16 bg-health-green animate-pulse rounded-full" style={{ animationDelay: '0.45s' }} />
              <div className="w-3 h-12 bg-health-green animate-pulse rounded-full" style={{ animationDelay: '0.6s' }} />
            </div>
          )}

          <div className="flex justify-center">
            <Button
              onClick={onDismiss}
              size="lg"
              className="rounded-full bg-gradient-primary hover:shadow-glow transition-all px-12 py-6 h-auto font-bold text-lg hover:scale-105 duration-300"
            >
              {language === "hi" ? "शुरू करें" : language === "mr" ? "सुरू करा" : "Get Started"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAssistant;
