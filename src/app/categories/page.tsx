import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/md';
import { FadeInUpLi } from '@/components/anim';

export default async function Categories() {
  const posts = getAllPostsMeta();
  const tags = new Map<string, number>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags.set(tag, (tags.get(tag) || 0) + 1);
    });
  });

  const sortedTags = Array.from(tags.entries()).sort((a, b) => b[1] - a[1]);

  return (
    <main className="container py-10 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-zinc-50">
          Categories
        </h1>

        {sortedTags.length === 0 ? (
          <p className="text-zinc-500">No categories found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sortedTags.map(([tag, count], i) => (
              <FadeInUpLi key={tag} delayMs={i * 50}>
                <Link
                  href={`/categories/${tag}`}
                  className="flex items-center justify-between p-4 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 transition-all group"
                >
                  <span className="font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tag}
                  </span>
                  <span className="inline-flex items-center justify-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    {count}
                  </span>
                </Link>
              </FadeInUpLi>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
