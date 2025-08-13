import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '@/lib/md';
import { FadeInUpLi } from '@/components/anim';

export default async function Home() {
  const posts = getAllPostsMeta();
  return (
    <main className="container py-10 sm:py-16">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <section className="mb-10 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            TechDad
          </h1>
          <p className="text-sm text-zinc-500 mt-2">
            Writing about smart homes, home labs, and DIY automation.
          </p>
        </section>

        <ul className="space-y-6">
          {posts.map((p, i) => (
            <FadeInUpLi
              key={p.slug}
              delayMs={i * 50}
              className="border-b border-[color:var(--border)] pb-6"
            >
              <Link href={`/posts/${p.slug}`} className="group block">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    {p.thumbnail ? (
                      <Image
                        src={p.thumbnail}
                        alt=""
                        width={160}
                        height={90}
                        className="h-20 w-[160px] object-cover rounded bg-[color:var(--muted)] border border-[color:var(--border)]"
                      />
                    ) : (
                      <div className="h-20 w-[160px] rounded bg-[color:var(--muted)] border border-[color:var(--border)]" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-medium text-xl group-hover:underline decoration-zinc-400 truncate">
                      {p.title}
                    </h2>
                    <p className="text-xs text-zinc-500 mt-1">
                      {new Date(p.date).toLocaleDateString()}
                    </p>
                    {p.excerpt && (
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">
                        {p.excerpt}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </FadeInUpLi>
          ))}
        </ul>
      </div>
    </main>
  );
}
