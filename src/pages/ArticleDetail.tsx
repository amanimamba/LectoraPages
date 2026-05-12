import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Calendar, Share2, Bookmark, Heart, MessageSquare, ArrowLeft, Twitter, Facebook, ExternalLink } from 'lucide-react';
import { mockArticles, mockCategories, mockUsers } from '../data/mockData';
import { useUI } from '../contexts/UIContext';
import { cn } from '../lib/utils';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useUI();
  const article = mockArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 dark:bg-slate-950">
        <h1 className="text-4xl font-display font-bold mb-4 dark:text-white text-slate-900">Article introuvable</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Désolé, l'article que vous recherchez n'existe pas.</p>
        <Link to="/" className="bg-[#0a0a0f] text-white px-8 py-3 rounded-full font-bold">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const author = mockUsers.find(u => u.id === article.authorId);
  const category = mockCategories.find(c => c.id === article.categoryId);
  const relatedArticles = mockArticles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-12">
          <Link to="/" className="hover:text-accent transition-colors">Lectora</Link>
          <span className="opacity-30">/</span>
          <Link to={`/`} className="hover:text-accent transition-colors">{category?.name}</Link>
          <span className="opacity-30">/</span>
          <span className="text-slate-900 dark:text-white truncate max-w-[200px]">{article.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <main className="lg:col-span-8">
             <header className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-accent text-[#0a0a0f] text-[10px] font-black uppercase px-2 py-1 rounded">
                    {category?.name}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Clock size={12} className="text-accent" />
                    {article.readingTime} {t('reading_time')}
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black leading-[0.95] mb-10 text-slate-900 dark:text-white tracking-tighter">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-slate-100 dark:border-slate-900">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800">
                       <img src={author?.avatar} alt={author?.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <p className="text-sm font-black uppercase tracking-tight text-slate-900 dark:text-white">{author?.name}</p>
                       <p className="text-xs text-slate-400">{new Date(article.publishedAt || article.createdAt).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                     <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg text-slate-400 hover:text-accent transition-all">
                        <Heart size={16} />
                        <span className="text-xs font-black uppercase">2.4k</span>
                     </button>
                     <button className="flex items-center justify-center w-10 h-10 bg-slate-50 dark:bg-slate-900 rounded-lg text-slate-400 hover:text-accent transition-all">
                        <Share2 size={16} />
                     </button>
                  </div>
                </div>
             </header>

             <motion.figure 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-slate-900 ring-1 ring-slate-200 dark:ring-slate-800"
             >
                <img 
                  src={article.featuredImage} 
                  alt={article.title} 
                  className="w-full h-full object-cover aspect-video"
                />
             </motion.figure>

             <motion.article 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="prose prose-slate prose-lg lg:prose-xl max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-black prose-p:font-display prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-blockquote:font-display prose-blockquote:italic prose-blockquote:font-medium prose-blockquote:text-2xl prose-blockquote:text-slate-900 dark:prose-blockquote:text-white prose-blockquote:border-accent"
             >
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
             </motion.article>

             {/* Author Bio Section */}
             <section className="mt-20 p-10 bg-[#f8f6f1] dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col md:row items-center gap-8">
                   <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-white dark:border-slate-800 shadow-xl">
                      <img src={author?.avatar} alt={author?.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="text-center md:text-left">
                      <h4 className="font-display font-black text-2xl mb-2 text-slate-900 dark:text-white">Rédigé par {author?.name}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4">
                        Éditeur en chef chez Lectora. Passionné par l'intersection entre technologie et culture humaine. Explore les récits qui façonnent notre avenir commun.
                      </p>
                      <div className="flex justify-center md:justify-start gap-4">
                         <span className="text-[10px] font-black uppercase tracking-widest text-accent cursor-pointer hover:underline flex items-center gap-1">
                            Tous ses articles <ArrowLeft size={10} className="rotate-180" />
                         </span>
                      </div>
                   </div>
                </div>
             </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
             <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 space-y-8">
                <div>
                   <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6">Continuer la lecture</h3>
                   <div className="space-y-6">
                      {relatedArticles.map(rel => (
                        <Link key={rel.id} to={`/article/${rel.slug}`} className="group flex gap-4">
                           <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                              <img src={rel.featuredImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                           </div>
                           <div className="flex flex-col justify-center">
                              <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest mb-1">{mockCategories.find(c => c.id === rel.categoryId)?.name}</span>
                              <h4 className="text-sm font-display font-bold leading-tight group-hover:text-accent dark:text-white transition-colors">{rel.title}</h4>
                           </div>
                        </Link>
                      ))}
                   </div>
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                   <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6">Partager</h3>
                   <div className="flex gap-2">
                      <button className="flex-1 py-3 bg-[#1da1f2] text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-all">
                         <Twitter size={16} />
                      </button>
                      <button className="flex-1 py-3 bg-[#4267b2] text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-all">
                         <Facebook size={16} />
                      </button>
                      <button className="flex-1 py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-lg flex items-center justify-center hover:bg-slate-800 transition-all">
                         <ExternalLink size={16} />
                      </button>
                   </div>
                </div>
             </div>

             <div className="bg-accent p-8 rounded-[2rem] text-[#0a0a0f] space-y-6">
                <h3 className="font-display font-black text-2xl leading-tight">Accédez à l'intégralité de nos expertises.</h3>
                <p className="text-sm font-bold opacity-80 leading-relaxed italic">
                   "{t('footer.newsletter')}"
                </p>
                <div className="space-y-3">
                   <input 
                     type="email" 
                     placeholder="Votre email" 
                     className="w-full bg-white/20 border border-black/10 rounded-lg px-4 py-3 text-sm focus:bg-white/40 outline-none placeholder:text-[#0a0a0f]/50 text-[#0a0a0f] font-bold"
                   />
                   <button className="w-full bg-[#0a0a0f] text-white font-black text-[10px] uppercase tracking-widest py-4 rounded-lg hover:scale-105 transition-all">
                     S'abonner maintenant
                   </button>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
