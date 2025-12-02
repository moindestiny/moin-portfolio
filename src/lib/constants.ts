import { NavItem, Project, BlogPost, WorkExperience, SkillCategory } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Articles', path: '/articles' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Destiny IT Pvt. Ltd.',
    role: 'Associate Software Developer (Offline)',
    period: '2024 — Present',
    logo: '/assets/projects/destiny/icon.jpg',
  },
  {
    company: 'Unitifusion Tech Solutions',
    role: 'UI/UX Design Intern (Remote - Night)',
    period: 'Feb 2025 — Oct 2025',
    logo: '/assets/projects/unityfusion/icon.svg',
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'HTML/CSS', 'SQL', 'Rust', 'GraphQL']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Node.js', 'Express', 'Framer Motion', 'Three.js', 'Jest', 'React Query']
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'GitHub Actions', 'Kubernetes', 'Terraform', 'PostgreSQL', 'Redis']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'crafting-a-design-system',
    title: 'Crafting a Design System for a Multi-Product Company',
    date: 'September 5, 2024',
    views: '3,210',
    excerpt: 'Most companies try to build a design system too early. Here is how we did it at scale.',
    category: 'Design',
    content: ''
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    date: 'August 12, 2024',
    views: '5,543',
    excerpt: 'Server components are a mental model shift. Let\'s break down why they matter.',
    category: 'Engineering',
    content: ''
  },
  {
    slug: 'tailwind-tricks',
    title: 'Tailwind CSS Tricks You Probably Don\'t Know',
    date: 'July 15, 2024',
    views: '12,102',
    excerpt: 'Utility classes can be powerful. Here are some advanced patterns.',
    category: 'CSS',
    content: ''
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/moinahmad25',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com/in/moin-ahmad-2a2619335',
  email: 'mailto:moinahmadunacademy@gmail.com',
};