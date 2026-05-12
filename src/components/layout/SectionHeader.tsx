import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  categoryName: string;
  gradient?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, categoryName, gradient, className }: SectionHeaderProps) {
  return (
    <header className={cn("relative overflow-hidden pt-32 pb-20 px-6", className)}>
      {/* Mixed color gradient background as requested */}
      <div className={cn(
        "absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-900/20",
        gradient || "bg-gradient-to-br from-white via-blue-50/30 to-amber-50/20 dark:from-slate-950 dark:via-brand/10 dark:to-accent/5"
      )} />
      
      {/* Decorative blurred circles for "attractive" mixing */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-1 bg-accent" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">{categoryName}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
           <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black leading-none mb-8 tracking-tighter text-slate-900 dark:text-white"
              >
                {title}.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl lg:text-2xl text-slate-500 dark:text-slate-400 font-display italic leading-relaxed max-w-xl"
              >
                "{subtitle}"
              </motion.p>
           </div>
        </div>
      </div>
    </header>
  );
}
