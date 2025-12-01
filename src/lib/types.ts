export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string; // For the details page
  icon: string; // URL to icon
  link: string; // External link
  tech: string[];
  screenshots?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  views: string;
  excerpt: string;
  category?: string;
  content?: string; // HTML or Markdown string for the full article
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  logo: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  isThinking?: boolean;
}