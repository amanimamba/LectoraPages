export type UserRole = 'visitor' | 'contributor' | 'moderator' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
}

export type ArticleStatus = 'draft' | 'published' | 'scheduled';

export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  featuredImage: string;
  categoryId: string;
  authorId: string;
  status: ArticleStatus;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
  readingTime: number; // in minutes
  isPremium: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  description: string;
  icon?: string;
  color?: string;
}

export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  parentId?: string;
  content: string;
  likesCount: number;
  status: 'pending' | 'approved' | 'spam' | 'deleted';
  createdAt: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}
