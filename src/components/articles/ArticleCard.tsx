import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, Heart, Bookmark } from 'lucide-react';
import { Article, Category } from '../../types';
import { cn } from '../../lib/utils';
import { useUI } from '../../contexts/UIContext';

interface ArticleCardProps {
  article: Article;
  category?: Category;
  index: number;
  key?: string | number;
}

export default function ArticleCard({ article, category, index }: ArticleCardProps) {
  const { t, language } = useUI();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex flex-col bg-white dark:bg-slate-900/40 rounded-[2rem] border border-slate-200/60 dark:border-slate-800/50 overflow-hidden hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2"
    >
      <Link to={`/article/${article.slug}`} className="relative h-64 overflow-hidden">
        <img
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          {category && (
            <span className="bg-accent text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-lg shadow-lg">
              {category.name}
            </span>
          )}
          {article.isPremium && (
            <span className="bg-slate-900 text-accent text-[9px] font-black uppercase px-3 py-1.5 rounded-lg shadow-lg">
              Premium
            </span>
          )}
        </div>

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300">
          <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
            <Heart size={15} />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
            <Bookmark size={15} />
          </button>
        </div>
      </Link>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <span className="text-secondary">{article.tags[0]}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-accent" />
            {article.readingTime} {t('reading_time')}
          </div>
        </div>

        <Link to={`/article/${article.slug}`}>
          <h3 className="text-2xl font-display font-black mb-4 leading-tight group-hover:text-accent dark:text-white transition-colors">
            {article.title}
          </h3>
        </Link>

        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 line-clamp-3 font-medium leading-relaxed">
          {article.summary}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-[10px] text-slate-500 border border-slate-200 dark:border-slate-700">
              {article.id[0]}
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rédaction</span>
          </div>
          <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">
            {new Date(article.publishedAt || article.createdAt).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { month: 'short', day: 'numeric' })}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
