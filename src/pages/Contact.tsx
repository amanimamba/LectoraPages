import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, MapPin, Phone, MessageSquare, Heart, Bookmark, ArrowRight } from 'lucide-react';
import { useUI } from '../contexts/UIContext';
import { cn } from '../lib/utils';

export default function Contact() {
  const { t } = useUI();
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-1 bg-accent" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Connexion</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-black leading-none mb-8 tracking-tighter text-slate-900 dark:text-white"
          >
            Rejoignez-nous.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-500 dark:text-slate-400 font-display italic leading-relaxed max-w-2xl"
          >
            "{t('contact.subtitle')}"
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Subscription Section */}
          <div className="lg:col-span-12">
             <div className="bg-[#0a0a0f] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div>
                      <h2 className="text-4xl md:text-6xl font-display font-black mb-8 leading-tight">
                        La vérité n'a pas de prix, mais elle a une adresse.
                      </h2>
                      <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12 max-w-lg">
                        Abonnez-vous à notre newsletter hebdomadaire pour recevoir nos enquêtes exclusives et nos analyses en avant-première.
                      </p>
                      <div className="flex flex-wrap gap-8">
                         <div className="flex items-center gap-3">
                            <Heart className="text-accent" size={24} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Contenu Indépendant</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <Bookmark className="text-accent" size={24} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Archives complètes</span>
                         </div>
                      </div>
                   </div>

                   <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12">
                      {isSubscribed ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12"
                        >
                          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                             <Send size={32} className="text-[#0a0a0f]" />
                          </div>
                          <h3 className="text-3xl font-display font-black mb-4">Bienvenue à bord.</h3>
                          <p className="text-slate-400 font-medium">Votre accès est en cours de validation. Vérifiez vos emails.</p>
                        </motion.div>
                      ) : (
                        <form 
                          onSubmit={(e) => { e.preventDefault(); setIsSubscribed(true); }}
                          className="space-y-6"
                        >
                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Email privilégié</label>
                             <input 
                               type="email" 
                               required 
                               placeholder="votre@email.com" 
                               className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-5 outline-none focus:border-accent transition-all text-white placeholder:text-white/20"
                             />
                          </div>
                          <div className="space-y-4">
                             <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" required className="mt-1 accent-accent" />
                                <span className="text-xs text-white/50 leading-relaxed group-hover:text-white transition-colors">
                                   J'accepte de recevoir les communications de Lectora et je reconnais avoir pris connaissance de la politique de confidentialité.
                                </span>
                             </label>
                          </div>
                          <button className="w-full bg-accent text-[#0a0a0f] py-6 rounded-xl font-black text-xs uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                             {t('contact.newsletter.button')}
                             <ArrowRight size={18} />
                          </button>
                        </form>
                      )}
                   </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -mr-64 -mt-64" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] -ml-32 -mb-32" />
             </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
             {[
                { icon: MapPin, title: 'Bureaux', detail: '123 Avenue de la République, Paris', color: 'text-accent' },
                { icon: Mail, title: 'Email', detail: 'redaction@lectora.media', color: 'text-accent' },
                { icon: MessageSquare, title: 'Support', detail: 'Assistance 24/7 pour abonnés', color: 'text-accent' }
             ].map((item, idx) => (
               <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[2rem] group hover:border-accent transition-colors">
                  <div className={cn("w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all", item.color)}>
                     <item.icon size={24} />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.title}</h4>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{item.detail}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
