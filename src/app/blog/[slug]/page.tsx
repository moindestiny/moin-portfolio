'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { ArrowLeft, Eye, Calendar } from 'lucide-react';
import clsx from 'clsx';

const ContentRenderer = ({ htmlContent }: { htmlContent: string }) => {
  useEffect(() => {
    const preBlocks = document.querySelectorAll('.article-content pre');
    
    preBlocks.forEach((pre) => {
      if (pre.querySelector('.copy-btn')) return;

      const code = pre.querySelector('code')?.innerText || '';
      
      const wrapper = document.createElement('div');
      wrapper.className = 'relative group';
      
      const button = document.createElement('button');
      button.className = 'copy-btn absolute top-3 right-3 p-2 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-sm';
      button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
      button.title = "Copy Code";

      button.onclick = () => {
        navigator.clipboard.writeText(code);
        button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        setTimeout(() => {
            button.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
        }, 2000);
      };

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      wrapper.appendChild(button);
    });
  }, [htmlContent]);

  return (
    <div 
        className={clsx(
            "article-content prose prose-zinc dark:prose-invert prose-lg max-w-none",
            "prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-800 dark:prose-headings:text-zinc-100",
            "prose-a:text-teal-500 hover:prose-a:text-teal-600 dark:prose-a:text-teal-400 no-underline hover:prose-a:underline",
            "prose-img:rounded-2xl prose-img:shadow-xl prose-img:border prose-img:border-zinc-200 dark:prose-img:border-zinc-700/50",
            "prose-pre:bg-zinc-50 dark:prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-700/50 prose-pre:rounded-2xl prose-pre:shadow-sm",
            "prose-code:text-zinc-700 dark:prose-code:text-zinc-300 prose-code:bg-transparent prose-code:font-medium prose-code:before:content-none prose-code:after:content-none",
            "prose-blockquote:border-l-teal-500 prose-blockquote:bg-zinc-50 dark:prose-blockquote:bg-zinc-900/50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
        )}
        dangerouslySetInnerHTML={{ __html: htmlContent || '' }}
    />
  );
};

export default function Article() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
        <div className="pt-20 text-center">
            <h1 className="text-2xl font-bold">Article not found</h1>
            <Link href="/articles" className="text-teal-500 mt-4 block">Back to Articles</Link>
        </div>
    );
  }

  return (
    <article className="relative lg:px-8 xl:px-12 pt-8">
      <div className="hidden xl:block absolute left-0 top-10">
        <Link 
          href="/articles" 
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
          aria-label="Go back to articles"
        >
          <ArrowLeft className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
        </Link>
      </div>

      <div className="mx-auto max-w-2xl">
        <Link 
            href="/articles" 
            className="xl:hidden group mb-8 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
        >
            <ArrowLeft className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
        </Link>

        <header className="flex flex-col space-y-8 mb-12">
          <div className="flex items-center gap-3 text-sm text-zinc-400 dark:text-zinc-500">
             <span className="h-6 w-[2px] rounded-full bg-teal-500"></span>
             <time dateTime={post.date} className="font-medium text-zinc-600 dark:text-zinc-400">
                {post.date}
             </time>
             {post.category && (
               <>
                 <span>/</span>
                 <span className="text-teal-500 font-medium uppercase tracking-wider text-xs">
                    {post.category}
                 </span>
               </>
             )}
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-8">
             <span className="flex items-center gap-2">
                <Eye size={16} className="text-zinc-400" /> 
                {post.views} views
             </span>
             <span className="flex items-center gap-2">
                <Calendar size={16} className="text-zinc-400" /> 
                Updated {post.date}
             </span>
          </div>
        </header>

        <div className="mb-24">
            <ContentRenderer htmlContent={post.content || ''} />
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex justify-between items-center">
            <Link href="/articles" className="text-sm font-semibold text-zinc-500 hover:text-teal-500 transition-colors">
                &larr; More Articles
            </Link>
            <button 
                className="text-sm font-semibold text-zinc-500 hover:text-teal-500 transition-colors" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Scroll to Top
            </button>
        </div>
      </div>
    </article>
  );
}