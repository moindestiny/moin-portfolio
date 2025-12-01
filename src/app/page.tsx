import React from 'react';
import { SOCIAL_LINKS, PROJECTS, WORK_EXPERIENCE, BLOG_POSTS } from '@/lib/constants';
import { Github, Twitter, Linkedin, Mail, ArrowRight, Download, Briefcase } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group -m-1 p-1"
  >
    <Icon className="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
  </a>
);

const rotataions = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

const GALLERY_IMAGES = [
  'https://picsum.photos/id/1/600/800',
  'https://picsum.photos/id/20/600/800',
  'https://picsum.photos/id/12/600/800',
  'https://picsum.photos/id/60/600/800',
];

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="pt-8 sm:pt-12">
        <div className="max-w-4xl">
          <div className="mb-8 h-16 w-16 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1 ring-1 ring-zinc-900/5 dark:ring-white/10 shadow-sm">
             <Link href="/">
              <img 
                src="https://picsum.photos/id/64/400/400" 
                alt="Alex" 
                className="h-full w-full rounded-full object-cover" 
              />
             </Link>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl leading-[1.15]">
            Software engineer, founder, and amateur astronaut.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I'm <strong className="text-zinc-900 dark:text-zinc-100 font-medium">Alex</strong>, a software engineer based in New York City. I'm the founder of <span className="font-medium text-teal-500">Planetaria</span>, where we develop technologies that empower regular people to explore space on their own terms.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialIcon href={SOCIAL_LINKS.github} icon={Github} />
            <SocialIcon href={SOCIAL_LINKS.twitter} icon={Twitter} />
            <SocialIcon href={SOCIAL_LINKS.linkedin} icon={Linkedin} />
            <SocialIcon href={SOCIAL_LINKS.email} icon={Mail} />
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-4 sm:px-8">
         <div className="flex justify-center gap-5 sm:gap-8 py-4 w-full max-w-4xl">
            {GALLERY_IMAGES.map((src, idx) => (
               <div 
                  key={idx}
                  className={clsx(
                     "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 shadow-lg transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-10",
                     rotataions[idx % rotataions.length]
                  )}
               >
                  <img 
                     src={src} 
                     alt="" 
                     className="absolute inset-0 h-full w-full object-cover" 
                     loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-xl pointer-events-none"></div>
               </div>
            ))}
         </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <section className="space-y-10">
          <div className="flex flex-col gap-6">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="group relative flex flex-col items-start">
                <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div className="absolute -inset-y-4 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                  <Link href={`/blog/${post.slug}`} className="relative z-10">
                    <span className="absolute -inset-y-4 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative z-10">{post.title}</span>
                  </Link>
                </h3>
                <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime={post.date}>
                  <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  </span>
                  {post.date}
                </time>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                  Read article
                  <ArrowRight size={14} className="ml-1" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="space-y-10">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-white dark:bg-zinc-900 shadow-sm">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              <Briefcase className="h-5 w-5 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500 mr-3" />
              <span className="ml-0">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
              {WORK_EXPERIENCE.map((role, i) => (
                <li key={i} className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img src={role.logo} alt="" className="h-7 w-7 rounded-full object-cover" />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {role.company}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                      {role.role}
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                      {role.period}
                    </dd>
                  </dl>
                </li>
              ))}
            </ol>
            <button className="group mt-6 w-full flex items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 text-sm font-medium text-zinc-900 transition active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50">
              Download CV
              <Download size={16} className="text-zinc-400 group-hover:text-zinc-500" />
            </button>
          </div>
          
           <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-white dark:bg-zinc-900 shadow-sm">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Featured Projects</h2>
              <ul className="space-y-4">
                 {PROJECTS.slice(0, 3).map((p, i) => (
                    <li key={i} className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-700">
                          <img src={p.icon} alt="" className="h-full w-full object-cover opacity-80" />
                       </div>
                       <div className="flex-1 min-w-0">
                          <Link href={`/projects/${p.slug}`} className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                            {p.title}
                          </Link>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{p.description}</p>
                       </div>
                    </li>
                 ))}
              </ul>
              <Link href="/projects" className="mt-4 block text-sm text-teal-500 hover:text-teal-600 font-medium">View all projects &rarr;</Link>
           </div>
        </div>
      </div>
    </div>
  );
}