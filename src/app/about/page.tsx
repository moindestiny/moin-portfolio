import React from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 pt-8">
      <div className="order-2 md:order-1 space-y-12">
        <section className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Alex Dev. I live in New York City, where I design the future.
            </h1>
            <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
                I've loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.
            </p>
            <p>
                The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister's motorcycle helmet, counted down from three, and jumped. I spent the summer in a cast, but I never lost the desire to fly.
            </p>
            <p>
                Today, I'm the founder of Planetaria, where we're working on civil aerospace projects. I'm also a huge fan of open source software and contribute to React and Tailwind ecosystems regularly.
            </p>
            <p>
                I believe in the web as a platform. I focus heavily on Accessibility (a11y) and Performance. If you check out this site's Lighthouse score, you'll see green across the board.
            </p>
            </div>
        </section>
      </div>

      <div className="order-1 md:order-2 space-y-8">
         <div className="rotate-2 hover:rotate-0 transition-transform duration-300">
            <img 
               src="https://picsum.photos/id/1025/500/500" 
               alt="Portrait" 
               className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 shadow-xl" 
            />
         </div>
         <div className="flex flex-col gap-2">
            <a href={SOCIAL_LINKS.twitter} className="flex items-center gap-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 transition-colors">
               <Twitter size={18} /> Follow on Twitter
            </a>
            <a href={SOCIAL_LINKS.github} className="flex items-center gap-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 transition-colors">
               <Github size={18} /> Follow on GitHub
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="flex items-center gap-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 transition-colors">
               <Linkedin size={18} /> Follow on LinkedIn
            </a>
            <div className="border-t border-zinc-200 dark:border-zinc-700/50 my-2"></div>
            <a href={SOCIAL_LINKS.email} className="flex items-center gap-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 transition-colors">
               <Mail size={18} /> hello@alex.dev
            </a>
         </div>
      </div>
    </div>
  );
}