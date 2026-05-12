import { Article, Category, User, Comment } from '../types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Elena Vance',
    email: 'elena@articulus.com',
    role: 'admin',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop'
  },
  {
    id: 'user-2',
    name: 'Julian Casablancas',
    email: 'julian@articulus.com',
    role: 'contributor',
    isActive: true,
    createdAt: '2024-02-15T00:00:00Z',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop'
  }
];

export const mockCategories: Category[] = [
  { id: 'cat-1', name: 'Actualité', slug: 'actualite', description: 'Les dernières nouvelles du monde entier.', icon: 'Newspaper', color: '#3b82f6' },
  { id: 'cat-2', name: 'Technologie', slug: 'technologie', description: 'Innovations, IA et futur numérique.', icon: 'Cpu', color: '#60a5fa' },
  { id: 'cat-3', name: 'Culture', slug: 'culture', description: 'Arts, littérature et expressions humaines.', icon: 'Palette', color: '#f59e0b' },
  { id: 'cat-4', name: 'Sciences', slug: 'sciences', description: 'Recherche, santé et découvertes.', icon: 'Microscope', color: '#10b981' },
  { id: 'cat-5', name: 'Sport', slug: 'sport', description: 'Performance et passion athlétique.', icon: 'Trophy', color: '#ef4444' },
  { id: 'cat-6', name: 'Économie', slug: 'economie', description: 'Finances, marchés et enjeux globaux.', icon: 'BadgeEuro', color: '#6366f1' },
  { id: 'cat-7', name: 'Monde', slug: 'monde', description: 'Diplomatie et relations internationales.', icon: 'Globe', color: '#8b5cf6' }
];

export const mockArticles: Article[] = [
  {
    id: '1',
    title: "L'Intelligence Artificielle Redéfinit le Journalisme de Demain",
    slug: 'ia-journalisme-demain',
    summary: "Les rédactions du monde entier intègrent désormais des outils IA pour automatiser la collecte de données, générer des premières ébauches et personnaliser l'expérience lecteur.",
    content: `
      <p>L'essor de l'intelligence artificielle transforme profondément les salles de rédaction à travers le globe. Des outils comme les grands modèles de langage permettent désormais aux journalistes de se concentrer sur l'essentiel : l'enquête, l'analyse et la narration humaine.</p>
      <p>Les agences de presse pionnières expérimentent des systèmes capables de rédiger des comptes-rendus sportifs ou financiers en quelques secondes, libérant ainsi les reporters pour des investigations plus approfondies.</p>
      <p>Mais cette révolution soulève aussi des questions fondamentales sur l'authenticité, la vérification des faits et le rôle irremplaçable du regard humain dans la construction de l'information.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-2',
    authorId: 'user-2',
    status: 'published',
    publishedAt: '2026-05-12T10:00:00Z',
    createdAt: '2026-05-12T10:00:00Z',
    updatedAt: '2026-05-12T10:00:00Z',
    viewCount: 24300,
    readingTime: 7,
    isPremium: false,
    tags: ['IA', 'Journalisme', 'Technologie']
  },
  {
    id: '2',
    title: "Le Roman Africain Conquiert les Scènes Internationales",
    slug: 'roman-africain-scene-mondiale',
    summary: "Une nouvelle génération d'auteurs du continent africain impose sa voix sur la scène littéraire mondiale, bousculant les codes et offrant des perspectives inédites.",
    content: `
      <p>De Nairobi à Dakar, en passant par Lagos et Kinshasa, une vague d'auteurs redéfinit ce que signifie écrire depuis l'Afrique aujourd'hui. Leurs œuvres, traduites dans des dizaines de langues, cartographient des réalités complexes avec une précision et une poésie qui captivent les lecteurs du monde entier.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-3',
    authorId: 'user-1',
    status: 'published',
    publishedAt: '2026-05-11T10:00:00Z',
    createdAt: '2026-05-11T10:00:00Z',
    updatedAt: '2026-05-11T10:00:00Z',
    viewCount: 18700,
    readingTime: 5,
    isPremium: false,
    tags: ['Littérature', 'Afrique', 'Culture']
  },
  {
    id: '3',
    title: "Vaccin ARNm : Une Révolution Médicale au-delà du Covid",
    slug: 'vaccin-arnm-revolution-medicale',
    summary: "La technologie qui a permis de combattre la pandémie ouvre maintenant des perspectives révolutionnaires pour traiter des cancers et des maladies auto-immunes.",
    content: `
      <p>La plateforme ARNm, propulsée sur le devant de la scène par les vaccins anti-Covid, révèle aujourd'hui son véritable potentiel. Des essais cliniques avancés montrent des résultats prometteurs contre certains types de cancers du pancréas et du mélanome.</p>
      <p>Cette technologie permet de programmer le système immunitaire avec une précision sans précédent, ouvrant la voie à des traitements personnalisés basés sur le profil génétique unique de chaque patient.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-4',
    authorId: 'user-1',
    status: 'published',
    publishedAt: '2026-05-10T10:00:00Z',
    createdAt: '2026-05-10T10:00:00Z',
    updatedAt: '2026-05-10T10:00:00Z',
    viewCount: 31200,
    readingTime: 9,
    isPremium: true,
    tags: ['Médecine', 'Santé', 'ARNm']
  },
  {
    id: '4',
    title: "Cryptomonnaies : Le Grand Retour ou une Nouvelle Bulle ?",
    slug: 'cryptomonnaies-retour-ou-bulle',
    summary: "Après deux années de turbulences, les marchés crypto repartent à la hausse. Analystes et investisseurs débattent des fondamentaux derrière ce rebond.",
    content: `
      <p>Bitcoin a franchi de nouveaux sommets historiques en ce début 2026, entraînant dans son sillage l'ensemble de l'écosystème crypto. Mais derrière les chiffres spectaculaires se cachent des dynamiques complexes : adoption institutionnelle accrue, nouveaux cadres réglementaires et innovations technologiques qui changent la nature même de ces actifs numériques.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-6',
    authorId: 'user-2',
    status: 'published',
    publishedAt: '2026-05-09T10:00:00Z',
    createdAt: '2026-05-09T10:00:00Z',
    updatedAt: '2026-05-09T10:00:00Z',
    viewCount: 42100,
    readingTime: 6,
    isPremium: false,
    tags: ['Finance', 'Bitcoin', 'Économie']
  },
  {
    id: '5',
    title: "Afrique de l'Est : Vers une Intégration Régionale Renforcée",
    slug: 'afrique-est-integration-regionale',
    summary: "Les pays membres de la Communauté d'Afrique de l'Est accélèrent leur intégration économique avec de nouveaux accords sur la libre circulation.",
    content: `
      <p>Le sommet de Bujumbura a marqué un tournant décisif pour l'intégration régionale est-africaine. Les dirigeants des sept pays membres ont signé un protocole historique simplifiant les procédures douanières et créant un espace de libre circulation élargi, renforçant ainsi le poids économique collectif de la région.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-7',
    authorId: 'user-1',
    status: 'published',
    publishedAt: '2026-05-08T10:00:00Z',
    createdAt: '2026-05-08T10:00:00Z',
    updatedAt: '2026-05-08T10:00:00Z',
    viewCount: 15800,
    readingTime: 4,
    isPremium: false,
    tags: ['Diplomatie', 'Afrique', 'Monde']
  },
  {
    id: '6',
    title: "Les Villes du Futur : Durabilité et Technologie",
    slug: 'villes-futur-durabilite',
    summary: "De Singapour à Kigali, des métropoles du monde entier expérimentent des modèles urbains inédits alliant IA et énergies renouvelables.",
    content: `
      <p>L'urbanisation galopante qui caractérise notre époque s'accompagne d'une prise de conscience croissante : les villes doivent repenser leur modèle pour être à la fois efficaces, durables et équitables. Des projets pilotes innovants émergent sur tous les continents, proposant de nouvelles visions de la vie urbaine au XXIe siècle.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13ad1b?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-1',
    authorId: 'user-2',
    status: 'published',
    publishedAt: '2026-05-07T10:00:00Z',
    createdAt: '2026-05-07T10:00:00Z',
    updatedAt: '2026-05-07T10:00:00Z',
    viewCount: 27400,
    readingTime: 8,
    isPremium: false,
    tags: ['Société', 'Urbanisme', 'Actualité']
  },
  {
    id: '7',
    title: "Le Télescope James Webb Découvre des Galaxies Impossibles",
    slug: 'james-webb-galaxies-impossibles',
    summary: "Des structures galactiques formées peu après le Big Bang défient les modèles cosmologiques actuels, forçant les astronomes à repenser l'histoire de l'univers.",
    content: `<p>Les dernières images du télescope spatial James Webb révèlent des galaxies massives et structurées là où les théories classiques ne prévoyaient que des nuages de gaz primordiaux.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-4',
    authorId: 'user-1',
    status: 'published',
    publishedAt: '2026-05-06T10:00:00Z',
    createdAt: '2026-05-06T10:00:00Z',
    updatedAt: '2026-05-06T10:00:00Z',
    viewCount: 52000,
    readingTime: 12,
    isPremium: true,
    tags: ['Espace', 'Science', 'Astronomie']
  },
  {
    id: '8',
    title: "JO 2024 : L'Héritage Urbain et Social de Paris",
    slug: 'jo-2024-heritage-paris',
    summary: "Deux ans après l'événement, quel est le véritable impact des Jeux Olympiques sur les infrastructures et la cohésion sociale de la capitale française ?",
    content: `<p>Le village olympique reconverti en éco-quartier et les nouveaux aménagements de transport sont au cœur d'un débat passionné sur l'utilité réelle des grands événements sportifs.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1551632432-c735e97994ce?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-5',
    authorId: 'user-2',
    status: 'published',
    publishedAt: '2026-05-05T10:00:00Z',
    createdAt: '2026-05-05T10:00:00Z',
    updatedAt: '2026-05-05T10:00:00Z',
    viewCount: 12000,
    readingTime: 6,
    isPremium: false,
    tags: ['Sport', 'Urbanisme', 'Paris']
  }
];

export const mockComments: Comment[] = [
  {
    id: 'com-1',
    articleId: '1',
    userId: 'user-1',
    content: 'Excellent article ! Je pense effectivement que l\'hybridation est la clé.',
    likesCount: 12,
    status: 'approved',
    createdAt: '2024-05-01T11:00:00Z'
  }
];
