import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type Language = 'fr' | 'en';

interface UIContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.contact': 'Contact',
    'nav.subscribe': 'S\'abonner',
    'hero.featured': 'À la une',
    'hero.read': 'Lire l\'article',
    'section.latest': 'Dernières publications',
    'section.all': 'Voir tout',
    'footer.desc': 'La plateforme de référence pour le journalisme de qualité.',
    'footer.newsletter': 'Recevez les meilleures analyses directement dans votre boîte mail.',
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Une question, une suggestion ou simplement envie de discuter ? Notre équipe est à votre écoute.',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Adresse email',
    'contact.form.message': 'Votre message',
    'contact.form.send': 'Envoyer le message',
    'contact.newsletter.title': 'Notre Newsletter',
    'contact.newsletter.desc': 'Rejoignez plus de 5,000 lecteurs passionnés.',
    'contact.newsletter.button': 'Je m\'abonne',
    'reading_time': 'min de lecture'
  },
  en: {
    'nav.home': 'Home',
    'nav.contact': 'Contact',
    'nav.subscribe': 'Subscribe',
    'hero.featured': 'Featured',
    'hero.read': 'Read Article',
    'section.latest': 'Latest Publications',
    'section.all': 'View All',
    'footer.desc': 'The reference platform for quality journalism.',
    'footer.newsletter': 'Get the best analyses directly in your inbox.',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'A question, a suggestion, or just want to chat? Our team is here to listen.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Your message',
    'contact.form.send': 'Send Message',
    'contact.newsletter.title': 'Our Newsletter',
    'contact.newsletter.desc': 'Join over 5,000 passionate readers.',
    'contact.newsletter.button': 'Subscribe now',
    'reading_time': 'min read'
  }
};

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'light');
  const [language, setLanguageState] = useState<Language>(() => (localStorage.getItem('lang') as Language) || 'fr');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const setLanguage = (lang: Language) => setLanguageState(lang);

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <UIContext.Provider value={{ theme, language, toggleTheme, setLanguage, t }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
