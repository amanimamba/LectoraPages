import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, TrendingUp, Sparkles, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockArticles, mockCategories } from '../data/mockData';
import { cn } from '../lib/utils';
import { useUI } from '../contexts/UIContext';
import ArticleCard from '../components/articles/ArticleCard';

export default function Home() {
  const { t, language } = useUI();
  const [activeCategory, setActiveCategory] = useState("Tout");
  
  const filteredArticles = useMemo(() => {
    if (activeCategory === "Tout") return mockArticles;
    return mockArticles.filter(art => {
      const category = mockCategories.find(c => c.id === art.categoryId);
      return category?.name === activeCategory;
    });
  }, [activeCategory]);

  const featuredArticle = filteredArticles[0];
  const restArticles = filteredArticles.slice(1);
  const trendingArticles = [...mockArticles].sort((a, b) => b.viewCount - a.viewCount).slice(0, 4);

  const categoryNames = ["Tout", ...mockCategories.map(c => c.name)];

  return (
    <div className="flex flex-col gap-24 py-12 bg-white dark:bg-transparent">
      {/* Hero Section */}
      {featuredArticle && (
        <section className="px-6 relative overflow-hidden">
          {/* Decorative mixed gradients as requested */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] -z-10 opacity-30 blur-[120px] pointer-events-none">
             <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full" />
             <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-vibrant/20 rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <motion.div 
                className="lg:col-span-7"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                    <Sparkles size={14} className="text-accent" />
                    <span className="text-accent text-[10px] font-black uppercase tracking-widest">
                      {t('hero.featured')}
                    </span>
                  </div>
                  <div className="h-[1px] w-12 bg-slate-200 dark:bg-slate-800" />
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest">
                    {featuredArticle.readingTime} {t('reading_time')}
                  </span>
                </div>
                
                <Link to={`/article/${featuredArticle.slug}`} className="block group">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-black leading-[0.95] mb-8 text-slate-900 dark:text-white tracking-tighter group-hover:text-accent transition-colors duration-500">
                    {featuredArticle.title}
                  </h1>
                </Link>
                
                <p className="text-lg md:text-xl lg:text-2xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl font-display italic font-medium">
                  "{featuredArticle.summary}"
                </p>
                
                <div className="flex flex-wrap gap-6 items-center">
                  <Link
                    to={`/article/${featuredArticle.slug}`}
                    className="flex items-center gap-3 bg-brand dark:bg-accent text-white dark:text-brand px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-brand/20 dark:shadow-accent/20 hover:scale-105 active:scale-95 transition-all group"
                  >
                    {t('hero.read')}
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </Link>
                  
                  <div className="h-12 w-[1px] bg-slate-100 dark:bg-slate-800 hidden md:block" />
                  
                  <div className="flex items-center gap-4">
                     <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-[#0f1117] bg-slate-200 dark:bg-slate-800 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                          </div>
                        ))}
                     </div>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">+12k lecteurs</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="lg:col-span-5 relative"
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <Link to={`/article/${featuredArticle.slug}`} className="block relative group perspective-1000">
                  <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl h-[550px] border-[12px] border-white dark:border-slate-800/80 ring-1 ring-slate-200 dark:ring-white/5 transition-all duration-700 group-hover:rotate-1 group-hover:scale-[1.02]">
                    <img
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <p className="text-white text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Zap size={12} className="text-accent" /> Prochaine lecture
                      </p>
                      <h4 className="text-white font-display font-bold text-lg leading-tight">Découvrez l'envers du décor de notre dernière enquête exclusive.</h4>
                    </div>
                  </div>
                  
                  {/* Background Accents */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Trending Bar */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto py-8 border-y border-slate-100 dark:border-slate-800">
           <div className="flex flex-col lg:flex-row lg:items-center gap-12">
              <div className="flex items-center gap-4 shrink-0">
                 <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20">
                    <TrendingUp size={20} />
                 </div>
                 <span className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Tendances</span>
              </div>
              <div className="flex flex-1 overflow-x-auto no-scrollbar gap-12">
                 {trendingArticles.map((art, i) => (
                   <Link key={art.id} to={`/article/${art.slug}`} className="flex items-start gap-4 shrink-0 group max-w-[280px]">
                      <span className="text-4xl font-display font-black text-slate-100 dark:text-slate-800 group-hover:text-accent transition-colors duration-300">0{i + 1}</span>
                      <div>
                         <h4 className="text-sm font-bold leading-tight line-clamp-2 dark:text-slate-200 group-hover:text-accent transition-colors">{art.title}</h4>
                         <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2 block">{mockCategories.find(c => c.id === art.categoryId)?.name}</span>
                      </div>
                   </Link>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Trending Bar section ... (already there) */}

      {/* Categories Spotlight */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {mockCategories.map((cat, idx) => {
              return (
                <Link 
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  className="group flex flex-col items-center gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-accent hover:-translate-y-1 transition-all duration-300"
                >
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                  >
                    <span className="font-bold text-lg">
                      {cat.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-accent text-center leading-tight">
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter & Grid ... */}
      <section className="px-6 mb-20 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
             <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                {categoryNames.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative shrink-0 rounded-xl border",
                      activeCategory === cat 
                        ? "bg-brand text-white border-brand dark:bg-accent dark:text-brand dark:border-accent shadow-xl" 
                        : "text-slate-400 border-slate-100 dark:border-slate-800 hover:border-accent hover:text-accent"
                    )}
                  >
                    {cat}
                  </button>
                ))}
             </div>
             
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                Dernière mise à jour : 10:42
             </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredArticles.map((art, idx) => (
                <ArticleCard 
                  key={art.id} 
                  article={art} 
                  category={mockCategories.find(c => c.id === art.categoryId)} 
                  index={idx} 
                />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center bg-white dark:bg-slate-900/50 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-800">
               <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8">
                  <TrendingUp className="text-slate-300 dark:text-slate-700" size={32} />
               </div>
               <h3 className="text-3xl font-display font-black mb-4 dark:text-white">Bientôt disponible</h3>
               <p className="text-slate-400 max-w-sm mx-auto font-medium">Nous préparons du contenu exceptionnel pour cette catégorie. Revenez très bientôt.</p>
            </div>
          )}
        </div>
      </section>

      {/* Membership / CTA */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
           {/* Gradient background with mixed colors as requested */}
           <div className="relative rounded-[4rem] bg-gradient-to-br from-brand via-[#2d3a5a] to-[#1a2238] overflow-hidden p-12 md:p-24 text-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] -mr-64 -mt-64" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -ml-48 -mb-48" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-vibrant/10 rounded-full blur-[100px]" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                 <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                    Lectora Club
                 </span>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black text-white leading-[0.95] mb-10 tracking-tighter">
                   Informez-vous sans limites ni frontières.
                 </h2>
                 <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-12 italic">
                   "Rejoignez nos 45,000 abonnés et accédez à des enquêtes exclusives, des newsletters personnalisées et une expérience sans publicité."
                 </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="w-full sm:w-auto px-12 py-6 bg-accent text-brand rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-accent/20">
                       Démarrer l'essai gratuit
                    </button>
                    <button className="w-full sm:w-auto px-12 py-6 bg-white/10 border border-white/10 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                       Voir les tarifs <ChevronRight size={18} />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

