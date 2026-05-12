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
  { id: 'cat-1', name: 'Culture', slug: 'culture', description: 'Explorez les richesses culturelles du monde entier.', icon: 'Palette', color: '#f59e0b' },
  { id: 'cat-2', name: 'Musique', slug: 'musique', description: 'Des rythmes ancestraux aux sonorités modernes.', icon: 'Music', color: '#0ea5e9' },
  { id: 'cat-3', name: 'Géographie', slug: 'geographie', description: 'Voyagez à travers les paysages et la dynamique terrestre.', icon: 'Map', color: '#10b981' },
  { id: 'cat-4', name: 'Tourisme', slug: 'tourisme', description: 'Les plus belles destinations et conseils d\'aventure.', icon: 'Plane', color: '#f43f5e' },
  { id: 'cat-5', name: 'Artistes', slug: 'artistes', description: 'Portraits et rencontres avec les grands créateurs.', icon: 'User', color: '#8b5cf6' },
  { id: 'cat-6', name: 'Pays', slug: 'pays', description: 'Immersion au cœur des nations et de leur histoire.', icon: 'Flag', color: '#ef4444' },
  { id: 'cat-7', name: 'Villes', slug: 'villes', description: 'Exploration urbaine des métropoles fascinantes.', icon: 'Building2', color: '#3b82f6' },
  { id: 'cat-8', name: 'Chansons tendances', slug: 'chansons-tendances', description: 'Le top des hits et les pépites musicales du moment.', icon: 'TrendingUp', color: '#ec4899' }
];

export const mockArticles: Article[] = [
  {
    id: '1',
    title: "L'Art de Vivre à Kyoto : Immersion dans la Tradition Japonaise",
    slug: 'art-de-vivre-kyoto',
    summary: "Découvrez comment l'ancienne capitale impériale préserve ses rituels ancestraux au cœur de la modernité.",
    content: `
      <p>Kyoto reste le cœur culturel du Japon. Des temples millénaires aux quartiers de geishas, la ville offre une leçon de résilience culturelle.</p>
      <p>La cérémonie du thé, le port du kimono et le respect des saisons ne sont pas de simples apparats touristiques, mais le fondement même de la vie quotidienne des habitants.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-1',
    authorId: 'user-1',
    status: 'published',
    publishedAt: '2026-05-12T10:00:00Z',
    createdAt: '2026-05-12T10:00:00Z',
    updatedAt: '2026-05-12T10:00:00Z',
    viewCount: 45000,
    readingTime: 12,
    isPremium: true,
    tags: ['Culture', 'Japon', 'Tradition']
  },
  {
    id: '2',
    title: "Afrobeats : La Révolution Musicale qui Conquiert le Monde",
    slug: 'afrobeats-revolution-musicale',
    summary: "De Lagos à Londres, l'Afrobeats s'impose comme le genre dominant de la scène mondiale contemporaine.",
    content: `
      <p>L'ascension fulgurante de l'Afrobeats ne montre aucun signe de ralentissement. Porté par des artistes visionnaires comme Burna Boy et Wizkid, ce mix de rythmes traditionnels et de production moderne redéfinit les charts mondiaux.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1514525253361-bee8718a7c7d?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-2',
    authorId: 'user-2',
    status: 'published',
    publishedAt: '2026-05-11T10:00:00Z',
    createdAt: '2026-05-11T10:00:00Z',
    updatedAt: '2026-05-11T10:00:00Z',
    viewCount: 32000,
    readingTime: 8,
    isPremium: false,
    tags: ['Musique', 'Afrobeats', 'Afrique']
  },
  {
    id: '3',
    title: "Les Fjords de Norvège : Un Chef-d'œuvre Géographique",
    slug: 'fjords-norvege-geographie',
    summary: "Exploration des formations géologiques spectaculaires qui définissent le paysage scandinave.",
    content: `
      <p>Nés de l'érosion glaciaire, les fjords norvégiens sont bien plus que des paysages de cartes postales. Ils sont le témoin de la puissance brute de la géographie terrestre.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1458668383970-8ddd39f46d56?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-3',
    authorId: 'user-1',
    status: 'published',
    publishedAt: '2026-05-10T10:00:00Z',
    createdAt: '2026-05-10T10:00:00Z',
    updatedAt: '2026-05-10T10:00:00Z',
    viewCount: 28000,
    readingTime: 10,
    isPremium: false,
    tags: ['Géographie', 'Norvège', 'Nature']
  },
  {
    id: '4',
    title: "Santorin : Guide pour un Tourisme Responsable",
    slug: 'santorin-tourisme-responsable',
    summary: "Comment profiter de la perle des Cyclades sans contribuer à sa saturation touristique.",
    content: `
      <p>Santorin fait face à des défis majeurs liés au surtourisme. Il existe pourtant des moyens de découvrir son charme hors des sentiers battus et en respectant les communautés locales.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-4',
    authorId: 'user-1',
    status: 'published',
    publishedAt: '2026-05-09T10:00:00Z',
    createdAt: '2026-05-09T10:00:00Z',
    updatedAt: '2026-05-09T10:00:00Z',
    viewCount: 15140,
    readingTime: 7,
    isPremium: true,
    tags: ['Tourisme', 'Grèce', 'Conseils']
  },
  {
    id: '5',
    title: "Banksy : L'Artiste Invisible qui Défie les Institutions",
    slug: 'banksy-artiste-invisible',
    summary: "Analyse de l'impact social et politique de l'œuvre du street-artiste le plus célèbre au monde.",
    content: `
      <p>Banksy continue de bousculer le marché de l'art par son anonymat et son engagement politique féroce. Ses pochoirs sont devenus des icônes de la rébellion culturelle.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-5',
    authorId: 'user-2',
    status: 'published',
    publishedAt: '2026-05-08T10:00:00Z',
    createdAt: '2026-05-08T10:00:00Z',
    updatedAt: '2026-05-08T10:00:00Z',
    viewCount: 38200,
    readingTime: 15,
    isPremium: false,
    tags: ['Artistes', 'Street-Art', 'Portrait']
  },
  {
    id: '6',
    title: "Le Brésil : Entre Croissance Économique et Défis Écologiques",
    slug: 'bresil-economie-ecologie',
    summary: "Immersion dans un pays en pleine mutation, cherchant l'équilibre entre développement et préservation de l'Amazonie.",
    content: `
      <p>Le Brésil est à la croisée des chemins. Poumon vert de la planète, il cherche également sa place parmi les grandes puissances économiques mondiales.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-6',
    authorId: 'user-1',
    status: 'published',
    publishedAt: '2026-05-07T10:00:00Z',
    createdAt: '2026-05-07T10:00:00Z',
    updatedAt: '2026-05-07T10:00:00Z',
    viewCount: 12600,
    readingTime: 9,
    isPremium: false,
    tags: ['Pays', 'Brésil', 'Economie']
  },
  {
    id: '7',
    title: "Vienne : La Ville où la Qualité de Vie est Reine",
    slug: 'vienne-ville-qualite-vie',
    summary: "Pourquoi la capitale autrichienne trône systématiquement en tête des classements mondiaux de vivabilité.",
    content: `<p>Vienne offre un modèle d'urbanisme social et culturel qui intrigue les municipalités du monde entier, mêlant héritage impérial et modernité durable.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-7',
    authorId: 'user-2',
    status: 'published',
    publishedAt: '2026-05-06T10:00:00Z',
    createdAt: '2026-05-06T10:00:00Z',
    updatedAt: '2026-05-06T10:00:00Z',
    viewCount: 19400,
    readingTime: 6,
    isPremium: false,
    tags: ['Villes', 'Vienne', 'Urbanisme']
  },
  {
    id: '8',
    title: "Top 10 : Les Chansons qui Dominent les Charts ce Printemps",
    slug: 'top-10-chansons-printemps-2026',
    summary: "Découvrez les morceaux qui tournent en boucle et les surprises du dernier trimestre musical global.",
    content: `<p>De la pop indie au nouveau hip-hop, voici les titres qui définissent la bande-son de cette saison à travers les plateformes de streaming.</p>`,
    featuredImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    categoryId: 'cat-8',
    authorId: 'user-2',
    status: 'published',
    publishedAt: '2026-05-05T10:00:00Z',
    createdAt: '2026-05-05T10:00:00Z',
    updatedAt: '2026-05-05T10:00:00Z',
    viewCount: 55200,
    readingTime: 5,
    isPremium: false,
    tags: ['Chansons tendances', 'Pop', 'Hip-Hop']
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
