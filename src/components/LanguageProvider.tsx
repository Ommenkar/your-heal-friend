import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "hi" | "mr";

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    mr: string;
  };
}

const translations: Translations = {
  smartHeal: {
    en: "SmartHeal",
    hi: "स्मार्टहील",
    mr: "स्मार्टहील",
  },
  tagline: {
    en: "A Smart Way to Care for Your Health",
    hi: "आपके स्वास्थ्य की देखभाल का एक स्मार्ट तरीका",
    mr: "तुमच्या आरोग्याची काळजी घेण्याचा एक स्मार्ट मार्ग",
  },
  getStarted: {
    en: "Get Started",
    hi: "शुरू करें",
    mr: "सुरू करा",
  },
  login: {
    en: "Login",
    hi: "लॉगिन",
    mr: "लॉगिन",
  },
  signup: {
    en: "Sign Up",
    hi: "साइन अप करें",
    mr: "साइन अप",
  },
  newChat: {
    en: "New Chat",
    hi: "नई चैट",
    mr: "नवीन चॅट",
  },
  searchChat: {
    en: "Search Chat",
    hi: "चैट खोजें",
    mr: "चॅट शोधा",
  },
  account: {
    en: "Account",
    hi: "खाता",
    mr: "खाते",
  },
  analyzeSymptoms: {
    en: "Analyze Symptoms",
    hi: "लक्षणों का विश्लेषण करें",
    mr: "लक्षणांचे विश्लेषण करा",
  },
  fitnessTips: {
    en: "Fitness Tips",
    hi: "फिटनेस टिप्स",
    mr: "फिटनेस टिप्स",
  },
  healthProgress: {
    en: "Health Progress",
    hi: "स्वास्थ्य प्रगति",
    mr: "आरोग्य प्रगती",
  },
  medicineInfo: {
    en: "Medicine Info",
    hi: "दवा की जानकारी",
    mr: "औषध माहिती",
  },
  dietAdvice: {
    en: "Diet Advice",
    hi: "आहार सलाह",
    mr: "आहार सल्ला",
  },
  aiDisclaimer: {
    en: "AI SmartHeal can make mistakes. Please verify important information.",
    hi: "AI स्मार्टहील गलतियाँ कर सकता है। कृपया महत्वपूर्ण जानकारी सत्यापित करें।",
    mr: "AI स्मार्टहील चुका करू शकतो. कृपया महत्त्वाची माहिती सत्यापित करा.",
  },
  messagePlaceholder: {
    en: "Ask me anything about your health...",
    hi: "अपने स्वास्थ्य के बारे में कुछ भी पूछें...",
    mr: "तुमच्या आरोग्याबद्दल काहीही विचारा...",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return (stored as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
