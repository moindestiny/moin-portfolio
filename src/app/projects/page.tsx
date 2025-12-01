import React from 'react';
import { PROJECTS } from '@/lib/constants';
import { Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="space-y-12 pt-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Things I've made trying to put my dent in the universe.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group relative flex flex-col items-start hover:bg-zinc-50 dark:hover:bg-zinc-800/50 p-4 -m-4 rounded-2xl transition-colors duration-200">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <img src={project.icon} alt="" className="h-8 w-8 rounded-full object-cover" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-teal-500 transition-colors">
              <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
              <Link href={`/projects/${project.slug}`}>
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative z-10">{project.title}</span>
              </Link>
            </h2>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 flex-1">
              {project.description}
            </p>
            <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 items-center">
              <LinkIcon size={14} className="mr-2" />
              <span className="mr-4">View Details</span>
            </div>
            <div className="relative z-10 mt-4 flex gap-2 flex-wrap">
               {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-700/50 text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400">
                     {t}
                  </span>
               ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}