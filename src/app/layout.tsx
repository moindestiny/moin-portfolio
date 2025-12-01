import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Moin Dev Portfolio",
  description: "A developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans antialiased transition-colors duration-300 selection:bg-teal-500/30`}>
        <Navbar />
        <main className="grow pt-32 pb-16 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto w-full">
            {children}
          </div>
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}