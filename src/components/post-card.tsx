import Link from 'next/link';
import Image from 'next/image';
import { PostMeta } from '@/lib/md';
import { Clock, Calendar } from 'lucide-react';

export function PostCard({ post }: { post: PostMeta }) {
    return (
        <Link href={`/posts/${post.slug}`} className="group block h-full">
            <div className="flex flex-col h-full overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 transition-all hover:border-zinc-300 hover:shadow-md dark:hover:border-zinc-700">
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    {post.thumbnail ? (
                        <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-zinc-400 dark:text-zinc-600">
                            <span className="text-4xl font-bold opacity-20">TechDad</span>
                        </div>
                    )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readingTime} min read</span>
                        </div>
                    </div>
                    <h2 className="mb-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                    </h2>
                    {post.excerpt && (
                        <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400 flex-1">
                            {post.excerpt}
                        </p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {post.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
