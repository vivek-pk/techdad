import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import RouteTransition from '@/components/route-transition';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s · TechDad',
    default: 'TechDad',
  },
  description:
    'TechDad – writing about smart homes, home labs, and DIY automation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/40 bg-white/80 dark:bg-black/30 border-b border-[color:var(--border)]">
          <nav className="container flex items-center justify-between py-3 text-sm">
            <Link href="/" className="font-semibold tracking-tight">
              TechDad
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/categories">Categories</Link>
            </div>
          </nav>
        </header>
        <div className="min-h-[calc(100dvh-140px)]">
          <RouteTransition>{children}</RouteTransition>
        </div>
        <footer className="border-t border-[color:var(--border)]">
          <div className="container flex items-center justify-between py-6 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} TechDad</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                X
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
