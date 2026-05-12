import { motion } from 'motion/react';
import { mockArticles } from '../data/mockData';
import ArticleCard from '../components/articles/ArticleCard';
import SectionHeader from '../components/layout/SectionHeader';
import { FolderOpen, ShieldCheck, Zap } from 'lucide-react';

export default function Dossiers() {
  // Use a different selection of articles
  const articles = mockArticles.slice(0, 4);

  return (
    <div className="flex flex-col gap-0">
      <SectionHeader 
        title="Dossiers"
        subtitle="Enquêtes exclusives et dossiers spéciaux sur les sujets qui transforment notre société."
        categoryName="Investigation"
        gradient="bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 dark:from-brand/20 dark:via-slate-950 dark:to-accent/5"
      />

      <section className="py-24 px-6 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1 space-y-8">
               <div className="p-8 bg-brand rounded-[2.5rem] text-white">
                  <FolderOpen className="text-accent mb-6" size={32} />
                  <h3 className="text-2xl font-display font-bold mb-4">Séries Spéciales</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">Explorez nos archives thématiques soigneusement curatées par nos journalistes.</p>
                  <button className="w-full py-4 bg-white/10 hover:bg-white/20 transition-all rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/10">Explorer l'index</button>
               </div>

               <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                  <ShieldCheck className="text-secondary mb-4" size={24} />
                  <h4 className="font-bold mb-2 dark:text-white">Indépendance</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Nos dossiers sont financés à 100% par nos abonnés pour garantir une neutralité absolue.</p>
               </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
              {articles.map((art, idx) => (
                <ArticleCard 
                  key={art.id} 
                  article={art} 
                  index={idx} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section for "Richness" */}
      <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="bg-secondary/5 dark:bg-secondary/10 rounded-[4rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1">
                  <Zap className="text-secondary mb-8" size={48} />
                  <h2 className="text-4xl md:text-6xl font-display font-black leading-tight mb-8 dark:text-white">
                     L'Information sans Compromis.
                  </h2>
                  <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
                     Accédez à plus de 200 dossiers d'enquête exclusifs. Chaque semaine, une nouvelle thématique est passée au crible par notre équipe d'investigation.
                  </p>
                  <button className="px-10 py-5 bg-secondary text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-secondary/20">
                     S'abonner aux Dossiers
                  </button>
               </div>
               <div className="flex-1 grid grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-2xl even:translate-y-8">
                       <img src={`https://images.unsplash.com/photo-${1500000000000 + i*10000}?q=80&w=400&fit=crop`} alt="decor" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
