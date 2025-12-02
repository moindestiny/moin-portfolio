"use client"
import React from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {NAV_ITEMS.map((item) => (
               <Link key={item.path} href={item.path} className="hover:text-teal-500 transition-colors">
                  {item.label}
               </Link>
            ))}
          </div>
          <div className="text-zinc-400 dark:text-zinc-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Moin Dev. All rights reserved.</p>
            <p className="mt-1 text-xs">Built with React, Tailwind & Gemini.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};