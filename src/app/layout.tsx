import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import RouteTransition from '@/components/route-transition';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

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
  openGraph: {
    title: 'TechDad',
    description: 'Writing about smart homes, home labs, and DIY automation',
    url: 'https://techdad.dev',
    siteName: 'TechDad',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechDad',
    description: 'Writing about smart homes, home labs, and DIY automation',
    creator: '@techdad',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-950/40 bg-white/80 dark:bg-zinc-950/30 border-b border-zinc-200 dark:border-zinc-800">
            <nav className="container flex items-center justify-between py-3 text-sm">
              <Link href="/" className="font-semibold tracking-tight text-lg">
                TechDad
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">About</Link>
                <Link href="/categories" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Categories</Link>
                <ThemeToggle />
              </div>
            </nav>
          </header>
          <div className="min-h-[calc(100dvh-140px)]">
            <RouteTransition>{children}</RouteTransition>
          </div>
          <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12">
            <div className="container flex items-center justify-between py-6 text-xs text-zinc-500 dark:text-zinc-400">
              <p>© {new Date().getFullYear()} TechDad</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/vivek-pk"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
