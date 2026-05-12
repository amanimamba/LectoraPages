import { motion } from 'motion/react';
import { mockArticles } from '../data/mockData';
import ArticleCard from '../components/articles/ArticleCard';
import SectionHeader from '../components/layout/SectionHeader';
import { Camera, MapPin, Globe } from 'lucide-react';

export default function Reportages() {
  const articles = [mockArticles[2], mockArticles[4], mockArticles[1]];

  return (
    <div className="flex flex-col gap-0">
      <SectionHeader 
        title="Reportages"
        subtitle="Sur le terrain, là où l'histoire s'écrit. Des récits immersifs au plus proche des réalités du monde."
        categoryName="Terrain"
        gradient="bg-gradient-to-br from-teal-50/50 via-white to-sky-50/30 dark:from-brand/20 dark:via-slate-950 dark:to-teal-500/5"
      />

      <section className="py-24 px-6 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Highlights Band */}
          <div className="flex flex-wrap justify-between gap-12 mb-24 border-b border-slate-100 dark:border-slate-800 pb-12">
             <div className="flex items-center gap-4">
                <Camera className="text-vibrant" size={32} />
                <div>
                   <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Visuel</h4>
                   <p className="font-bold dark:text-white">Photographies 4K</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <MapPin className="text-accent" size={32} />
                <div>
                   <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Localisations</h4>
                   <p className="font-bold dark:text-white">24 Pays Couverts</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <Globe className="text-secondary" size={32} />
                <div>
                   <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Réseau</h4>
                   <p className="font-bold dark:text-white">Correspondants Locaux</p>
                </div>
             </div>
          </div>

          <div className="space-y-24">
             {articles.map((art, idx) => (
                <div key={art.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                   <div className="flex-1 w-full relative">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl relative group"
                      >
                         <img src={art.featuredImage} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                         <div className="absolute bottom-10 left-10 text-white">
                            <span className="bg-vibrant px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest mb-4 inline-block shadow-lg">Récit Photo</span>
                            <h3 className="text-3xl font-display font-medium italic">En direct de l'événement.</h3>
                         </div>
                      </motion.div>
                      {/* Floating accent */}
                      <div className={`absolute -z-10 w-64 h-64 blur-3xl opacity-20 rounded-full ${idx % 2 === 0 ? 'bg-vibrant -top-10 -left-10' : 'bg-secondary -bottom-10 -right-10'}`} />
                   </div>
                   
                   <div className="flex-1">
                      <div className="flex items-center gap-3 mb-6 text-[10px] font-black uppercase tracking-widest text-vibrant">
                        <span className="w-2 h-2 rounded-full bg-vibrant animate-pulse" /> Live Report
                      </div>
                      <h2 className="text-4xl md:text-6xl font-display font-black leading-tight mb-8 dark:text-white">{art.title}</h2>
                      <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-display italic">"{art.summary}"</p>
                      <button className="px-10 py-5 bg-brand dark:bg-white dark:text-brand text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                         Lire le Reportage
                      </button>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
