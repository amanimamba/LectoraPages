import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TrendingUp, Bell } from 'lucide-react';
import { mockArticles, mockCategories } from '../data/mockData';
import { useUI } from '../contexts/UIContext';
import ArticleCard from '../components/articles/ArticleCard';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useUI();
  const category = mockCategories.find(c => c.slug === slug);
  const articles = mockArticles.filter(a => a.categoryId === category?.id);

  if (!category) return (
     <div className="py-32 text-center">
        <h1 className="text-4xl font-display font-black mb-4">Catégorie non trouvée</h1>
        <Link to="/" className="text-accent underline font-bold uppercase tracking-widest text-xs">Retourner à l'accueil</Link>
     </div>
  );

  return (
    <div className="py-0">
      <header className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-secondary/5 to-accent/5 dark:from-[#0f1117] dark:via-secondary/10 dark:to-accent/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-1 bg-accent" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Rubrique</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
             <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black leading-none mb-8 tracking-tighter text-slate-900 dark:text-white"
                >
                  {category.name}.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl lg:text-2xl text-slate-500 dark:text-slate-400 font-display italic leading-relaxed max-w-xl"
                >
                  "{category.description}"
                </motion.p>
             </div>
             <div className="flex flex-col items-start lg:items-end gap-8 pb-3">
                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                   <div className="flex items-center gap-2">
                      <span className="text-secondary">{articles.length}</span> Articles
                   </div>
                   <span className="w-1 h-1 rounded-full bg-slate-300" />
                   <div className="flex items-center gap-2">
                      <TrendingUp size={14} className="text-accent" /> Populaire
                   </div>
                </div>
                <button className="flex items-center gap-3 px-10 py-5 bg-brand dark:bg-accent text-white dark:text-brand text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand/20 dark:shadow-accent/20">
                   <Bell size={16} /> S'abonner au flux
                </button>
             </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((art, idx) => (
            <ArticleCard 
              key={art.id} 
              article={art} 
              category={category}
              index={idx} 
            />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="py-40 text-center border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[4rem]">
             <div className="w-24 h-24 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border border-slate-200 dark:border-slate-800">
                <TrendingUp size={32} className="text-slate-300 dark:text-slate-700" />
             </div>
             <h3 className="text-3xl font-display font-black mb-4 dark:text-white">Silence radio.</h3>
             <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto font-medium">Bientôt, cette page sera remplie de récits passionnants. Revenez nous voir.</p>
          </div>
        )}
      </div>
    </div>
  );
}
