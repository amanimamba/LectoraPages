import { motion } from 'motion/react';
import { mockArticles } from '../data/mockData';
import ArticleCard from '../components/articles/ArticleCard';
import SectionHeader from '../components/layout/SectionHeader';
import { Lightbulb, TrendingUp, BarChart3 } from 'lucide-react';

export default function Analyses() {
  const articles = mockArticles.filter(a => a.isPremium || a.viewCount > 40000);

  return (
    <div className="flex flex-col gap-0">
      <SectionHeader 
        title="Analyses"
        subtitle="Décryptage approfondi des enjeux contemporains par nos experts et contributeurs."
        categoryName="Perspective"
        gradient="bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/30 dark:from-brand/20 dark:via-slate-950 dark:to-secondary/5"
      />

      <section className="py-24 px-6 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Stats / Featured Features for "Richness" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
             {[
               { icon: Lightbulb, title: 'Expertise', text: 'Analyses rédigées par des docteurs et spécialistes.', color: 'text-amber-500' },
               { icon: TrendingUp, title: 'Tendances', text: 'Identification des signaux faibles de demain.', color: 'text-sky-500' },
               { icon: BarChart3, title: 'Données', text: 'Infographies et data-journalisme exclusif.', color: 'text-indigo-500' }
             ].map((feat, i) => (
               <div key={i} className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group hover:border-accent transition-all">
                  <feat.icon className={feat.color + " mb-6"} size={32} />
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{feat.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feat.text}</p>
               </div>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((art, idx) => (
              <ArticleCard 
                key={art.id} 
                article={art} 
                index={idx} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section for "Richness" */}
      <section className="py-32 px-6 bg-[#1e293b] text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 block">Le mot de la rédaction</span>
            <h2 className="text-3xl md:text-5xl font-display font-medium italic leading-tight mb-12">
              "L'analyse n'est pas seulement une explication des faits, c'est une boussole dans la complexité du monde moderne."
            </h2>
            <div className="flex items-center justify-center gap-4">
               <div className="w-12 h-12 rounded-full bg-accent text-brand flex items-center justify-center font-black">L</div>
               <div className="text-left">
                  <p className="font-bold">Léonard Staff</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Éditeur en chef</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
