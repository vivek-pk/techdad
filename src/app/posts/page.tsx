import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/md';
import { FadeInUpLi } from '@/components/anim';
import { PostCard } from '@/components/post-card';
import { Flame, TrendingUp } from 'lucide-react';

export const metadata = {
    title: 'All Posts · TechDad',
    description: 'Browse all articles about smart homes, home labs, and automation.',
};

export default async function PostsPage() {
    const posts = getAllPostsMeta();

    // Filter for popular posts (manual flag) or fallback to longest reads as a proxy for "engagement"
    const popularPosts = posts.filter(p => p.popular);
    const fallbackPopular = [...posts].sort((a, b) => b.readingTime - a.readingTime).slice(0, 3);
    const sidebarPosts = popularPosts.length > 0 ? popularPosts : fallbackPopular;

    return (
        <main className="container py-10 sm:py-16">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content: All Posts */}
                    <div className="flex-1 min-w-0">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
                            All Articles
                        </h1>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.map((p, i) => (
                                <FadeInUpLi key={p.slug} delayMs={i * 50} className="h-full">
                                    <PostCard post={p} />
                                </FadeInUpLi>
                            ))}
                        </ul>
                    </div>

                    {/* Sidebar: Top Rated / Popular */}
                    <aside className="w-full lg:w-80 shrink-0 space-y-8">
                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                                    <Flame className="h-4 w-4" />
                                </div>
                                <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
                                    Top Rated
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {sidebarPosts.map((p, i) => (
                                    <Link
                                        key={p.slug}
                                        href={`/posts/${p.slug}`}
                                        className="group flex gap-4 items-start"
                                    >
                                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400 transition-colors">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                                {p.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
                                                <span className="flex items-center gap-1">
                                                    <TrendingUp className="h-3 w-3" />
                                                    {p.readingTime} min read
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter or other widgets could go here */}
                        <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                                Stay Updated
                            </h3>
                            <p className="text-sm text-zinc-500 mb-4">
                                Get the latest on smart homes and DIY tech delivered to your inbox.
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 min-w-0 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
                                    disabled
                                />
                                <button
                                    className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled
                                >
                                    Join
                                </button>
                            </div>
                            <p className="text-xs text-zinc-400 mt-2">
                                (Newsletter coming soon)
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
