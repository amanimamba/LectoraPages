import { Link } from 'react-router-dom';
import { Category } from '../../types';
import CategoryIcon from '../common/CategoryIcon';

interface CategorySpotlightProps {
  categories: Category[];
}

export default function CategorySpotlight({ categories }: CategorySpotlightProps) {
  return (
    <section className="px-6 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="group flex flex-col items-center gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
              >
                <CategoryIcon iconName={cat.icon} size={20} strokeWidth={2.5} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-accent text-center leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
