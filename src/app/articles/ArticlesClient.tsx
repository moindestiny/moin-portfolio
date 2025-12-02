'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { BlogPost } from '@/lib/types';

export default function ArticlesClient({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(posts.map(post => post.category).filter(Boolean));
    return Array.from(cats) as string[];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, posts]);

  return (
    <div className="space-y-12 pt-8">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Writing on software design, company building, and the aerospace industry.
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
         <div className="relative flex-1 max-w-md">
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 rounded-xl px-4 py-3 pl-11 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all outline-none"
            />
            <Search className="absolute left-3.5 top-3.5 text-zinc-400 h-5 w-5" />
         </div>
         
         <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button
               onClick={() => setSelectedCategory(null)}
               className={clsx(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                  selectedCategory === null 
                     ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" 
                     : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
               )}
            >
               All
            </button>
            {categories.map(cat => (
               <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={clsx(
                     "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                     selectedCategory === cat 
                        ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900" 
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  )}
               >
                  {cat}
               </button>
            ))}
         </div>
      </div>

      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
         <div className="flex max-w-3xl flex-col space-y-16">
            {filteredPosts.length > 0 ? (
               filteredPosts.map((post) => (
                  <article key={post.slug} className="md:grid md:grid-cols-4 md:items-baseline">
                     <div className="md:col-span-3 group relative flex flex-col items-start">
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                           <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
                           <Link href={`/blog/${post.slug}`}>
                              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                              <span className="relative z-10">{post.title}</span>
                           </Link>
                        </h2>
                        <time
                           className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                           dateTime={post.date}
                        >
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
                           <ChevronRight className="ml-1 h-4 w-4 stroke-current" />
                        </div>
                     </div>
                     <time
                        className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                        dateTime={post.date}
                     >
                        {post.date}
                     </time>
                  </article>
               ))
            ) : (
               <div className="py-12 text-center">
                  <p className="text-zinc-500 dark:text-zinc-400">No articles found matching your criteria.</p>
                  <button 
                     onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                     className="mt-4 text-teal-500 hover:underline"
                  >
                     Clear filters
                  </button>
               </div>
            )}
         </div>
      </div>
    </div>
  );
}
