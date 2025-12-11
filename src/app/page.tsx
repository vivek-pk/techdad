import { getAllPostsMeta } from '@/lib/md';
import { FadeInUpLi } from '@/components/anim';
import { PostCard } from '@/components/post-card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const posts = getAllPostsMeta();

  return (
    <main className="container py-10 sm:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <section className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            TechDad
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Writing about smart homes, home labs, and DIY automation.
          </p>
        </section>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Latest Posts</h2>
          <Link href="/categories" className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <FadeInUpLi
              key={p.slug}
              delayMs={i * 50}
              className="h-full"
            >
              <PostCard post={p} />
            </FadeInUpLi>
          ))}
        </ul>
      </div>
    </main>
  );
}
