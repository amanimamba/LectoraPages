import { motion } from 'motion/react';
import { Target, Users, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">L'Agence</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-none mb-12 tracking-tighter text-slate-900 dark:text-white">
            Redéfinir le <br /> <span className="text-accent underline decoration-brand decoration-8 underline-offset-[12px]">Journalisme</span>.
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-display italic leading-relaxed">
              "Lectora est né d'une conviction simple : le monde a besoin de récits qui ne se contentent pas de survoler les faits, mais qui plongent au cœur des enjeux culturels et géographiques."
            </p>
            <div className="prose prose-slate prose-lg dark:prose-invert">
              <p>
                Depuis 2024, nous explorons les territoires de la culture, de la musique et de la géographie avec une obsession pour la vérité et la beauté du récit. Notre rédaction indépendante s'efforce de décrypter la complexité du monde moderne pour une génération de lecteurs exigeants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 dark:bg-white/5 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                icon: <Target className="text-accent" />, 
                title: "Précision", 
                desc: "Chaque fait est vérifié, chaque source est croisée pour une fiabilité absolue." 
              },
              { 
                icon: <Users className="text-secondary" />, 
                title: "Communauté", 
                desc: "Nous construisons un dialogue constant avec nos 45 000 lecteurs passionnés." 
              },
              { 
                icon: <Award className="text-accent" />, 
                title: "Excellence", 
                desc: "Une esthétique soignée au service d'un contenu de haute volée." 
              },
              { 
                icon: <ShieldCheck className="text-brand dark:text-accent" />, 
                title: "Indépendance", 
                desc: "Une liberté éditoriale totale, sans compromis commercial." 
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-8">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-black mb-4 dark:text-white uppercase tracking-tighter">{value.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-20 tracking-tighter dark:text-white">Notre Équipe Éditioriale.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-[2rem] bg-slate-100 dark:bg-slate-800 mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?q=80&w=400&h=500&auto=format&fit=crop`} 
                    alt="Team member"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h4 className="text-lg font-display font-black dark:text-white uppercase tracking-tight">Rédacteur {i}</h4>
                <p className="text-accent text-[10px] font-black uppercase tracking-widest mt-1">Spécialiste {i % 2 === 0 ? 'Culture' : 'Géographie'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
