import React from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 pt-8">
      {/* LEFT SECTION — TEXT */}
      <div className="order-2 md:order-1 space-y-12">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Moin Ahmad. I build fast, user-focused web experiences.
          </h1>

          <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I’m a Frontend Developer & UI/UX Designer skilled in React, Next.js, and modern web
              technologies. I specialize in creating intuitive user interfaces, improving
              performance, and delivering seamless experiences across devices.
            </p>
            <p>
              At Destiny IT Pvt. Ltd., I work on production-grade company websites and admin
              dashboards — collaborating with UI/UX teams to translate design wireframes into clean,
              scalable frontend code. I focus heavily on accessibility, responsiveness, and user
              experience.
            </p>
            <p>
              Before that, I worked as a UI/UX Design Intern at Unitifusion Tech Solutions, where I
              designed websites, dashboards, and a Razorpay-style payment gateway interface using
              Figma. My approach blends functionality and aesthetics — not just good-looking UI, but
              purposeful UX.
            </p>
            <p>
              I enjoy turning ideas into live digital products that users love — whether it’s an
              ecommerce storefront, a modern dashboard, or a pixel-perfect marketing site.
            </p>
          </div>
        </section>
      </div>

      {/* RIGHT SECTION — IMAGE + SOCIALS */}
      <div className="order-1 md:order-2 space-y-8">
        <div className="rotate-2 hover:rotate-0 transition-transform duration-300">
          <img
            src="/my-img.png"
            alt="Portrait"
            className="aspect-square rounded-2xl ring-1 ring-zinc-800 bg-zinc-100 object-cover dark:bg-zinc-800 shadow-xl"
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
            <Linkedin size={18} /> Connect on LinkedIn
          </a>

          <div className="border-t border-zinc-200 dark:border-zinc-700/50 my-2"></div>

          <a href={SOCIAL_LINKS.email} className="flex items-center gap-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 transition-colors">
            <Mail size={18} /> {SOCIAL_LINKS.email}
          </a>
        </div>
      </div>
    </div>
  );
}
