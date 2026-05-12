import { Link } from 'react-router-dom';
import { useUI } from '../../contexts/UIContext';
import { mockCategories } from '../../data/mockData';
import { cn } from '../../lib/utils';

export default function Footer() {
  const { t } = useUI();

  return (
    <footer className="bg-brand text-slate-400 py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-8 group">
              <span className="font-display font-black text-3xl tracking-tighter text-white uppercase group-hover:text-accent transition-colors">
                <span className="text-accent group-hover:text-white transition-colors">L</span>ectora
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-10 max-w-xs font-medium text-slate-400">
              {t('footer.desc')} Explorez les récits qui marquent notre époque avec profondeur et expertise.
            </p>
            <div className="flex gap-4">
               {[
                 { icon: '𝕏', label: 'Twitter' },
                 { icon: 'in', label: 'LinkedIn' },
                 { icon: 'ig', label: 'Instagram' }
               ].map(soc => (
                 <div key={soc.label} className="w-12 h-12 rounded-xl bg-white/5 hover:bg-accent hover:text-brand transition-all duration-300 flex items-center justify-center cursor-pointer text-white font-black group">
                   <span className="group-hover:scale-110 transition-transform">{soc.icon}</span>
                 </div>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-10">Rubriques</h4>
            <ul className="space-y-5 text-sm font-bold">
              {mockCategories.slice(0, 5).map(cat => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="hover:text-white hover:translate-x-1 transition-all inline-block">{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-10">L'Agence</h4>
            <ul className="space-y-5 text-sm font-bold">
              {['Notre équipe', 'Éthique éditoriale', 'Mentions légales', 'Plan du site'].map(item => (
                <li key={item}>
                  <Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">{item}</Link>
                </li>
              ))}
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block text-accent">Recrutement</Link></li>
            </ul>
          </div>

          <div>
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-6">Lectora Hebdo</h4>
              <p className="text-xs font-medium mb-8 text-slate-400 leading-relaxed">
                Rejoignez 12k abonnés et recevez nos analyses exclusives chaque vendredi.
              </p>
              <form className="flex flex-col gap-4">
                 <input 
                   type="email" 
                   placeholder="Votre@email.com"
                   className="bg-brand border border-white/10 rounded-xl px-5 py-4 text-xs outline-none focus:border-accent transition-colors text-white"
                 />
                 <button className="bg-accent text-brand font-black text-[10px] uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-accent/90 hover:scale-[1.02] active:scale-[0.98] transition-all">
                   S'abonner
                 </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <p>© 2026 Lectora Media Group. Tous droits réservés.</p>
          <div className="flex gap-12">
            <span className="hover:text-white transition-colors cursor-pointer">Confidentialité</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
            <span className="hover:text-white transition-colors cursor-pointer">Accessibilité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
