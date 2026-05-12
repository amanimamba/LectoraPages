export default function Privacy() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-black leading-none mb-12 tracking-tighter text-slate-900 dark:text-white">
          Politique de <br /> <span className="text-accent underline decoration-brand decoration-8 underline-offset-[8px]">Confidentialité</span>.
        </h1>
        
        <div className="prose prose-slate prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-black prose-p:font-medium prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed">
          <p className="lead italic text-2xl mb-12 text-slate-400">Dernière mise à jour : 12 mai 2026</p>
          
          <h2>Introduction</h2>
          <p>La protection de vos données personnelles est au cœur de nos préoccupations. Cette politique détaille comment LectoraMedia Group traite vos informations lors de votre navigation sur notre plateforme.</p>

          <h2>Collecte des données</h2>
          <p>Nous collectons les informations que vous nous fournissez volontairement lors de votre inscription à notre newsletter ou lors de la création de votre compte premium.</p>
          <ul>
            <li>Nom et Prénom</li>
            <li>Adresse e-mail</li>
            <li>Informations de paiement (via nos partenaires sécurisés)</li>
          </ul>

          <h2>Utilisation des informations</h2>
          <p>Nous utilisons vos données pour personnaliser votre expérience de lecture, traiter vos abonnements et vous envoyer nos actualités éditoriales hebdomadaires.</p>

          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ce droit à tout moment via notre page de contact.</p>
        </div>
      </div>
    </div>
  );
}
