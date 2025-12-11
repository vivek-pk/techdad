import { getAllPostsMeta } from '@/lib/md';
import { PostCard } from '@/components/post-card';
import { FadeInUpLi } from '@/components/anim';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
    const posts = getAllPostsMeta();
    const tags = new Set<string>();
    posts.forEach((post) => {
        post.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).map((tag) => ({ tag }));
}

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ tag: string }>;
}) {
    const { tag } = await params;
    const decodedTag = decodeURIComponent(tag);
    const posts = getAllPostsMeta().filter((post) =>
        post.tags?.includes(decodedTag)
    );

    return (
        <main className="container py-10 sm:py-16">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/categories"
                        className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-4"
                    >
                        <ArrowLeft className="mr-1 h-4 w-4" />
                        Back to Categories
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        {decodedTag}
                    </h1>
                    <p className="text-zinc-500 mt-2">
                        {posts.length} post{posts.length === 1 ? '' : 's'} tagged with &quot;{decodedTag}&quot;
                    </p>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((p, i) => (
                        <FadeInUpLi key={p.slug} delayMs={i * 50} className="h-full">
                            <PostCard post={p} />
                        </FadeInUpLi>
                    ))}
                </ul>
            </div>
        </main>
    );
}
