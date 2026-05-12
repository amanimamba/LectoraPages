import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { mockCategories } from '../data/mockData';
import * as Icons from 'lucide-react';

export default function Categories() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Exploration</span>
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-none mb-12 tracking-tighter text-slate-900 dark:text-white">
            Nos <br /> <span className="text-accent underline decoration-brand decoration-8 underline-offset-[12px]">Catégories</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-display italic leading-relaxed max-w-2xl">
            "Parcourez notre univers éditorial à travers nos huit piliers thématiques, conçus pour nourrir votre curiosité."
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {mockCategories.map((cat, idx) => {
            const IconComponent = (Icons as any)[cat.icon || 'Hash'];
            
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link 
                  to={`/category/${cat.slug}`}
                  className="group block h-full p-10 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/5 hover:border-accent dark:hover:border-accent transition-all duration-500 shadow-2xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2"
                >
                  <div 
                    className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                  >
                    {IconComponent && <IconComponent size={36} strokeWidth={2.5} />}
                  </div>
                  
                  <h3 className="text-3xl font-display font-black mb-6 text-slate-900 dark:text-white uppercase tracking-tighter group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8">
                    {cat.description}
                  </p>
                  
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-accent transition-colors">
                    Explorer <Icons.ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
