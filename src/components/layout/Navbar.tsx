import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { useUI } from '../../contexts/UIContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, language, setLanguage, t } = useUI();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500 px-6',
          scrolled 
            ? 'bg-white/80 dark:bg-brand/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 py-3 shadow-xl' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 group-hover:rotate-12 transition-all">
                <span className="text-white font-display font-black text-2xl">L</span>
              </div>
              <span className="font-display font-black text-2xl tracking-tighter text-slate-900 dark:text-white uppercase transition-colors group-hover:text-accent">
                Lectora
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { name: 'Actualités', path: '/category/technologie' },
                { name: 'Analyses', path: '/analyses' },
                { name: 'Dossiers', path: '/dossiers' },
                { name: 'Reportages', path: '/reportages' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-accent",
                    scrolled ? "text-slate-500 dark:text-slate-400" : "text-slate-600 dark:text-slate-300"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">
              <Search size={14} className="text-slate-400" />
              <input 
                type="text" 
                placeholder={t('nav.search')}
                className="bg-transparent border-none outline-none text-[10px] font-bold text-slate-600 dark:text-slate-300 w-32 placeholder:text-slate-400 uppercase tracking-widest"
              />
            </div>
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-white/10 mx-2" />
            
            <button 
              onClick={toggleTheme}
              className="p-3 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-yellow-400 hover:scale-110 active:scale-90 transition-all shadow-sm"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button 
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-[9px] font-black uppercase text-slate-500 dark:text-slate-400 hover:border-accent hover:text-accent transition-all"
            >
              {language}
            </button>

            <Link to="/contact" className="ml-2 px-8 py-3 rounded-xl bg-brand dark:bg-accent text-white dark:text-brand font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand/20 dark:shadow-accent/30">
              S'abonner
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              className="p-2 text-slate-900 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Ticker */}
      <div 
        className={cn(
          "fixed transition-all duration-300 w-full z-40 bg-accent text-[#0a0a0f] h-9 flex items-center overflow-hidden",
          scrolled ? "top-[60px]" : "top-[70px]"
        )}
      >
        <div className="h-full px-5 bg-[#0a0a0f] text-accent flex items-center text-[10px] font-black uppercase tracking-widest z-10">
          En direct
        </div>
        <div className="flex-1 relative overflow-hidden whitespace-nowrap">
          <div className="inline-flex gap-12 px-6 animate-ticker">
            {["🌍 Sommet de l'UA à Addis-Abeba : accords historiques signés", "📈 Marchés : le franc burundais se stabilise face au dollar", "🔬 Découverte d'un nouveau vaccin contre le paludisme", "🏆 CAN 2026 : les qualifications s'intensifient", "💡 Innovation : Kigali classée 3ème ville tech d'Afrique"].map((t, i) => (
              <span key={i} className="text-[12px] font-bold flex items-center shrink-0">
                {t}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {["🌍 Sommet de l'UA à Addis-Abeba : accords historiques signés", "📈 Marchés : le franc burundais se stabilise face au dollar", "🔬 Découverte d'un nouveau vaccin contre le paludisme", "🏆 CAN 2026 : les qualifications s'intensifient", "💡 Innovation : Kigali classée 3ème ville tech d'Afrique"].map((t, i) => (
              <span key={`dup-${i}`} className="text-[12px] font-bold flex items-center shrink-0">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[106px]" /> {/* Spacer */}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-slate-950 p-6 md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-display font-black text-2xl tracking-tighter uppercase">
                <span className="text-accent">L</span>ectora
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Actualités', path: '/category/technologie' },
                { name: 'Analyses', path: '/analyses' },
                { name: 'Dossiers', path: '/dossiers' },
                { name: 'Reportages', path: '/reportages' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-4xl font-display font-black dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-4" />
              <div className="flex flex-col gap-6">
                 <button 
                   onClick={toggleTheme}
                   className="flex items-center gap-4 text-xl font-bold dark:text-white"
                 >
                   {theme === 'light' ? <Moon /> : <Sun />}
                   Mode {theme === 'light' ? 'sombre' : 'clair'}
                 </button>
                 <button 
                   onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                   className="flex items-center gap-4 text-xl font-bold dark:text-white"
                 >
                   <Languages />
                   Langue: {language.toUpperCase()}
                 </button>
              </div>
              <Link 
                to="/contact" 
                className="mt-4 px-8 py-4 bg-accent text-[#0a0a0f] rounded-xl font-bold text-center text-lg"
                onClick={() => setIsOpen(false)}
              >
                S'abonner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
