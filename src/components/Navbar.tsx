'use client'; // Required for hooks

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Changed from react-router-dom
import { usePathname } from 'next/navigation'; // Changed from useLocation
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants'; // Update import
import clsx from 'clsx';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname(); // Changed

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <nav className={clsx('fixed top-0 inset-x-0 z-50 transition-all duration-300 h-16', isScrolled ? 'bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800' : 'bg-transparent border-b border-transparent')}>
      <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
           <Link href="/" className="relative flex items-center" aria-label="Home">
              <span className={clsx("font-bold text-lg text-zinc-900 dark:text-zinc-100 tracking-tight transition-all duration-300 ease-in-out whitespace-nowrap", isScrolled ? "opacity-0 -translate-y-2 pointer-events-none absolute" : "opacity-100 translate-y-0")}>
                Moin Dev
              </span>
              <div className={clsx("h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 p-0.5 shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 overflow-hidden transition-all duration-300 ease-in-out", isScrolled ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 absolute")}>
                 <img src="https://picsum.photos/id/64/400/400" alt="Avatar" className="w-full h-full rounded-full object-cover" />
              </div>
           </Link>
        </div>
        <div className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-zinc-800/90 rounded-full px-3 py-1 shadow-sm border border-zinc-200 dark:border-zinc-700/50">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} href={item.path} className={clsx('px-4 py-2 text-sm font-medium transition-colors rounded-full', pathname === item.path ? 'text-teal-500 dark:text-teal-400' : 'text-zinc-600 dark:text-zinc-400 hover:text-teal-500 dark:hover:text-teal-400')}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 hover:text-teal-500 transition-colors shadow-sm">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/50 text-zinc-600 dark:text-zinc-400 shadow-sm">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 p-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={clsx('px-4 py-3 text-sm font-medium rounded-lg transition-colors', pathname === item.path ? 'bg-zinc-100 dark:bg-zinc-800 text-teal-500' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800')}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};