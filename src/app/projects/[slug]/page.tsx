import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProject } from '@/lib/db';
import { ArrowLeft, Github, Layers, Globe } from 'lucide-react';

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative lg:px-8 xl:px-12">
      <div className="hidden xl:block absolute -left-16 top-2">
        <Link 
          href="/projects" 
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
        >
          <ArrowLeft className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
        </Link>
      </div>

      <Link 
            href="/projects" 
            className="xl:hidden group mb-8 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
        >
            <ArrowLeft className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
        
        <div className="space-y-12">
            <header className="flex flex-col gap-6">
                <div className="h-20 w-fit rounded-2xl bg-white dark:bg-zinc-800 p-2 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 overflow-hidden">
                    <img src={project.icon} alt="" className="h-full w-full rounded-xl object-cover" />
                </div>
                
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        {project.title}
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {project.description}
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-2">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 text-sm font-semibold transition-all shadow-sm"
                    >
                        <Globe size={18} /> Visit Website
                    </a>
                    <a 
                        href="#"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 text-sm font-semibold transition-all border border-zinc-200 dark:border-zinc-700"
                    >
                        <Github size={18} /> Source Code
                    </a>
                </div>
            </header>

            <div className="prose prose-zinc dark:prose-invert max-w-none prose-lg">
                 <p className="lead">{project.longDescription}</p>
                 <p>
                    This project was built with performance and accessibility in mind. The goal was to create a user experience that feels native, fluid, and intuitive. 
                    We focused heavily on optimizing the render cycle and minimizing layout shifts.
                 </p>
                 <p>
                    By leveraging modern web technologies, we achieved a perfect 100 score on Lighthouse for Performance, Accessibility, Best Practices, and SEO.
                 </p>
                 
                 <h3 className="text-zinc-900 dark:text-zinc-100 mt-6 mb-3 font-semibold">Core Features</h3>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pl-0 list-none my-0">
                    {['Real-time updates', 'Offline support', 'Dark mode', 'Responsive design', 'Accessible UI', 'Cloud sync'].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 pl-0 text-zinc-600 dark:text-zinc-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                 </ul>
            </div>

            <div className="space-y-6 pt-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                    Gallery
                </h3>
                <div className="space-y-12">
                    {project.screenshots?.map((shot, idx) => (
                        <div key={idx} className="group relative rounded-2xl bg-zinc-100 dark:bg-zinc-800 p-2 ring-1 ring-zinc-900/10 dark:ring-white/10 shadow-xl overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-200/50 dark:bg-zinc-700/50 flex items-center px-4 gap-2 z-10 backdrop-blur-sm border-b border-zinc-900/5 dark:border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                            </div>
                            <img 
                                src={shot} 
                                alt={`${project.title} screenshot ${idx + 1}`} 
                                className="w-full h-auto rounded-lg mt-6 shadow-sm transition duration-500 group-hover:scale-[1.01]" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="lg:pl-6">
             <div className="sticky top-24 space-y-8">
                
                <div className="rounded-3xl border border-zinc-200 dark:border-zinc-700/40 bg-white dark:bg-zinc-900/50 p-6 shadow-sm ring-1 ring-zinc-900/5">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                        <Layers size={18} className="text-zinc-400" />
                        Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700/50 hover:border-teal-500/30 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-default select-none">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                 <div className="rounded-3xl border border-zinc-200 dark:border-zinc-700/40 bg-white dark:bg-zinc-900/50 p-6 shadow-sm ring-1 ring-zinc-900/5">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                        Project Info
                    </h3>
                    <dl className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <dt className="text-zinc-500 dark:text-zinc-400">Client</dt>
                            <dd className="font-medium text-zinc-900 dark:text-zinc-100">Personal</dd>
                        </div>
                        <div className="border-t border-zinc-100 dark:border-zinc-800"></div>
                        <div className="flex justify-between text-sm">
                            <dt className="text-zinc-500 dark:text-zinc-400">Year</dt>
                            <dd className="font-medium text-zinc-900 dark:text-zinc-100">2023</dd>
                        </div>
                        <div className="border-t border-zinc-100 dark:border-zinc-800"></div>
                        <div className="flex justify-between text-sm">
                            <dt className="text-zinc-500 dark:text-zinc-400">Role</dt>
                            <dd className="font-medium text-zinc-900 dark:text-zinc-100">{project.role}</dd>
                        </div>
                    </dl>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
}