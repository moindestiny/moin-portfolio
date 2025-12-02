import React from 'react';
import Link from 'next/link';
import { getArticle } from '@/lib/db';
import { ArrowLeft, Eye, Calendar, Clock, Tag } from 'lucide-react';
import ArticleContent from './ArticleContent';

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getArticle(slug);

  if (!post) {
    return (
        <div className="pt-20 text-center">
            <h1 className="text-2xl font-bold">Article not found</h1>
            <Link href="/articles" className="text-teal-500 mt-4 block">Back to Articles</Link>
        </div>
    );
  }

  // Calculate estimated reading time (rough estimate: 200 words per minute)
  const wordCount = post.content?.split(/\s+/).length || 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <article className="relative lg:px-8 xl:px-12 pt-8">
      {/* Back Button - Desktop */}
      <div className="hidden xl:block fixed left-8 top-24">
        <Link 
          href="/articles" 
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition hover:shadow-xl dark:ring-white/10 dark:hover:ring-white/20"
          aria-label="Go back to articles"
        >
          <ArrowLeft className="h-5 w-5 stroke-zinc-500 transition group-hover:stroke-teal-500 dark:stroke-zinc-400 dark:group-hover:stroke-teal-400" />
        </Link>
      </div>

      <div className="mx-auto max-w-3xl">
        {/* Back Button - Mobile */}
        <Link 
            href="/articles" 
            className="xl:hidden group mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
        >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
        </Link>

        {/* Article Header */}
        <header className="mb-12 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            {post.category && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-medium">
                <Tag size={14} />
                {post.category}
              </span>
            )}
            <time dateTime={post.date} className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
              <Calendar size={14} />
              {post.date}
            </time>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-2">
              <Eye size={16} className="text-zinc-400" /> 
              {post.views} views
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-zinc-400" /> 
              {readingTime} min read
            </span>
          </div>
        </header>

        {/* Article Content */}
        <div className="mb-16">
          <ArticleContent htmlContent={post.content || ''} />
        </div>
        
        {/* Article Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              href="/articles" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <ArrowLeft size={16} />
              More Articles
            </Link>
            
            {/* Share buttons could go here */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Share:</span>
              <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}