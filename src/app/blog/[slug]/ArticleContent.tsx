'use client';

import React, { useEffect } from 'react';
import clsx from 'clsx';

export default function ArticleContent({ htmlContent }: { htmlContent: string }) {
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
}
