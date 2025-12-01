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
    company: 'Google',
    role: 'Senior Software Engineer',
    period: '2022 — Present',
    logo: 'https://picsum.photos/id/1/48/48',
  },
  {
    company: 'Spotify',
    role: 'Software Engineer',
    period: '2019 — 2022',
    logo: 'https://picsum.photos/id/2/48/48',
  },
  {
    company: 'StartUp Inc.',
    role: 'Frontend Developer',
    period: '2017 — 2019',
    logo: 'https://picsum.photos/id/3/48/48',
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

export const PROJECTS: Project[] = [
  {
    slug: 'planetaria',
    title: 'Planetaria',
    description: 'Real-time planet monitoring system with specialized dashboards for astronomers.',
    longDescription: 'Planetaria is a comprehensive platform designed for professional astronomers and space enthusiasts. It aggregates data from various observatories and space telescopes to provide real-time updates on planetary movements, atmospheric conditions, and celestial events. The system includes a custom-built 3D visualization engine that renders planetary surfaces with high fidelity.',
    icon: 'https://picsum.photos/id/10/48/48',
    link: '#',
    tech: ['React', 'Three.js', 'WebSocket', 'WebGL', 'Node.js'],
    screenshots: [
      'https://picsum.photos/id/10/800/450',
      'https://picsum.photos/id/11/800/450'
    ]
  },
  {
    slug: 'animaginary',
    title: 'Animaginary',
    description: 'High performance animation library for the modern web.',
    longDescription: 'Animaginary is a lightweight yet powerful animation library built for the modern web. It leverages the Web Animations API to deliver 60fps animations even on low-end devices. The library provides a simple, declarative syntax for complex sequences and physics-based interactions, making it a favorite among creative developers.',
    icon: 'https://picsum.photos/id/20/48/48',
    link: '#',
    tech: ['TypeScript', 'Web Animations API', 'Rollup'],
    screenshots: [
      'https://picsum.photos/id/20/800/450',
      'https://picsum.photos/id/22/800/450'
    ]
  },
  {
    slug: 'helios',
    title: 'Helios',
    description: 'A crypto-currency portfolio tracker allowing users to track their assets.',
    longDescription: 'Helios provides a secure and intuitive way to track cryptocurrency investments across multiple wallets and exchanges. It features advanced charting, real-time price alerts, and tax reporting tools. Privacy is a core tenet of Helios, with all data encrypted locally on the user\'s device.',
    icon: 'https://picsum.photos/id/30/48/48',
    link: '#',
    tech: ['Next.js', 'Prisma', 'Tailwind', 'PostgreSQL'],
    screenshots: [
      'https://picsum.photos/id/30/800/450',
      'https://picsum.photos/id/33/800/450'
    ]
  },
  {
    slug: 'openshuttle',
    title: 'OpenShuttle',
    description: 'The open-source shuttle launch schedule tracking API.',
    longDescription: 'OpenShuttle is a community-driven API that provides accurate and up-to-date schedules for space launches around the world. It aggregates data from official space agencies and private launch providers. The API is free to use and has been integrated into hundreds of apps and websites.',
    icon: 'https://picsum.photos/id/40/48/48',
    link: '#',
    tech: ['Node.js', 'GraphQL', 'Redis', 'Docker'],
    screenshots: [
      'https://picsum.photos/id/40/800/450',
      'https://picsum.photos/id/44/800/450'
    ]
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'crafting-a-design-system',
    title: 'Crafting a Design System for a Multi-Product Company',
    date: 'September 5, 2024',
    views: '3,210',
    excerpt: 'Most companies try to build a design system too early. Here is how we did it at scale.',
    category: 'Design',
    content: `
      <p class="mb-4">Building a design system is often seen as the silver bullet for consistency and speed. However, starting one too early can actually slow you down.</p>
      
      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">The Problem with Early Abstraction</h2>
      <p class="mb-4">When you abstract components before you have concrete use cases, you end up with a rigid system that doesn't fit anyone's needs. We found that it's better to duplicate code a few times until patterns emerge naturally.</p>
      
      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">Token Structure</h2>
      <p class="mb-4">We started with a simple set of tokens for colors and spacing.</p>

      <pre><code class="language-css">:root {
  --color-primary: #00b4d8;
  --color-surface: #ffffff;
  --spacing-unit: 4px;
}</code></pre>

      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">Our Approach</h2>
      <p class="mb-4">We adopted a "federated" model where individual product teams own their specific components, and only the most universally used elements (buttons, inputs, typography) make it into the core system.</p>
      <p class="mb-4">This allowed us to move fast while maintaining a cohesive look and feel across our product suite.</p>
      <blockquote class="border-l-4 border-teal-500 pl-4 italic my-6 text-zinc-700 dark:text-zinc-300">
        "Premature optimization is the root of all evil." - Donald Knuth
      </blockquote>
      <p>In the end, our design system became a living product, treated with the same care and roadmap as our customer-facing applications.</p>
    `
  },
  {
    slug: 'react-server-components',
    title: 'Understanding React Server Components',
    date: 'August 12, 2024',
    views: '5,543',
    excerpt: 'Server components are a mental model shift. Let\'s break down why they matter.',
    category: 'Engineering',
    content: `
      <p class="mb-4">React Server Components (RSC) represent one of the biggest shifts in the React ecosystem since hooks. But what problem do they actually solve?</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">Zero-Bundle-Size Components</h2>
      <p class="mb-4">The main benefit is that server components do not add to your JavaScript bundle. This means you can import massive libraries (like a markdown parser or a date formatter) and use them to render HTML on the server, without sending a single byte of that library code to the client.</p>
      
      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">Data Access Example</h2>
      <p class="mb-4">With RSCs, your components can be async functions. You can await database calls directly inside your component.</p>
      
      <pre><code class="language-javascript">import { db } from './database';

// This component runs entirely on the server
export default async function ProductPage({ id }) {
  // Direct database access!
  const product = await db.product.find(id);
  
  return (
    <div className="p-4">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}</code></pre>

      <p class="mt-4">This simplifies the data fetching story significantly, removing the need for <code>useEffect</code> chaining or complex state management for simple data display.</p>
    `
  },
  {
    slug: 'tailwind-tricks',
    title: 'Tailwind CSS Tricks You Probably Don\'t Know',
    date: 'July 15, 2024',
    views: '12,102',
    excerpt: 'Utility classes can be powerful. Here are some advanced patterns.',
    category: 'CSS',
    content: `
      <p class="mb-4">Tailwind CSS is more than just inline styles. It's a complete design engine. Here are a few tricks that changed my workflow.</p>
      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">The Group Modifier</h2>
      <p class="mb-4">You can style a child element based on the state of its parent using the <code>group</code> class.</p>
      
      <pre><code class="language-html"><div class="group card">
  <h3 class="group-hover:text-blue-500">
    Hover the card to change me!
  </h3>
</div></code></pre>

      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">Arbitrary Values</h2>
      <p class="mb-4">Need a specific pixel value that's not in your theme? Use square brackets:</p>
      <pre><code class="language-html"><div class="w-[432px] top-[17px]">
  Precise layout
</div></code></pre>

      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">Peer Modifier</h2>
      <p class="mb-4">Style an element based on the state of a sibling. Great for floating labels in forms.</p>
      <p>Mastering these patterns allows you to build complex, interactive UIs without leaving your HTML.</p>
    `
  },
  {
    slug: 'optimizing-react-performance',
    title: 'Optimizing React Performance: A Deep Dive',
    date: 'June 28, 2024',
    views: '4,100',
    excerpt: 'Stop guessing. Learn how to profile and fix React renders effectively.',
    category: 'Engineering',
    content: `
      <p class="mb-4">Performance issues in React often stem from unnecessary re-renders. Let's look at how to identify and fix them.</p>
      
      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">Using React.memo</h2>
      <p class="mb-4">Wrap components that render the same output given the same props.</p>
      
      <pre><code class="language-javascript">const ExpensiveComponent = React.memo(({ data }) => {
  // Intensive calculations...
  return <div>{data}</div>;
});</code></pre>
      
      <p class="mt-4">However, don't optimize prematurely. Use the React DevTools Profiler to find actual bottlenecks first.</p>
    `
  },
  {
    slug: 'git-workflow',
    title: 'My Git Workflow for Solo & Team Projects',
    date: 'May 10, 2024',
    views: '2,800',
    excerpt: 'Branching strategies, commit messages, and handling merge conflicts gracefully.',
    category: 'DevOps',
    content: `
      <p class="mb-4">A clean git history is a resume in itself. Here is the workflow I use.</p>
      
      <h2 class="text-xl font-bold mt-8 mb-4 text-zinc-800 dark:text-zinc-100">Interactive Rebase</h2>
      <p class="mb-4">Before merging a feature branch, I always squash messy "wip" commits.</p>
      
      <pre><code class="language-bash">git rebase -i HEAD~3</code></pre>
      
      <p class="mt-4">This opens your editor and lets you 'pick', 'squash', or 'reword' your commits. It keeps the main branch history clean and linear.</p>
    `
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  email: 'mailto:hello@example.com',
};