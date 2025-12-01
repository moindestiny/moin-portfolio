import React from 'react';
import { SKILLS } from '@/lib/constants';
import { Terminal, Cpu, PenTool } from 'lucide-react';

const getIconForCategory = (title: string) => {
    if (title.includes('Languages')) return Terminal;
    if (title.includes('Frameworks')) return Cpu;
    return PenTool;
};

export default function Skills() {
  return (
    <div className="space-y-12 pt-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Tools & Technologies
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I use a wide range of tools to build software. Here is a curated list of the technologies I work with on a daily basis. 
          I believe in choosing the right tool for the job, but I also have my favorites that I reach for by default.
        </p>
      </div>

      <div className="space-y-10">
        {SKILLS.map((category) => {
            const Icon = getIconForCategory(category.title);
            return (
                <div key={category.title} className="rounded-2xl border border-zinc-100 p-6 md:p-8 dark:border-zinc-700/40 bg-white dark:bg-zinc-900 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400">
                             <Icon size={20} />
                        </div>
                        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                            {category.title}
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {category.skills.map((skill) => (
                            <div 
                                key={skill} 
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors select-none"
                            >
                                <div className="h-2 w-2 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        })}
      </div>
      
      <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 p-6 md:p-8">
         <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Hardware</h3>
         <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            For those interested in my physical setup.
         </p>
         <ul className="space-y-4">
            <li className="flex gap-4 items-start">
               <span className="font-medium text-zinc-900 dark:text-zinc-200 text-sm min-w-[120px]">Main Machine</span>
               <span className="text-zinc-600 dark:text-zinc-400 text-sm">MacBook Pro 16" M3 Max (64GB RAM)</span>
            </li>
            <li className="flex gap-4 items-start">
               <span className="font-medium text-zinc-900 dark:text-zinc-200 text-sm min-w-[120px]">Display</span>
               <span className="text-zinc-600 dark:text-zinc-400 text-sm">Apple Pro Display XDR</span>
            </li>
            <li className="flex gap-4 items-start">
               <span className="font-medium text-zinc-900 dark:text-zinc-200 text-sm min-w-[120px]">Keyboard</span>
               <span className="text-zinc-600 dark:text-zinc-400 text-sm">HHKB Professional Hybrid Type-S</span>
            </li>
         </ul>
      </div>
    </div>
  );
}