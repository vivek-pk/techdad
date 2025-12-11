import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPostsMeta } from '@/lib/md';
import { notFound } from 'next/navigation';
import { FadeInDiv } from '@/components/anim';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Comments from '@/components/comments';

export async function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} · TechDad`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: post.thumbnail ? [{ url: post.thumbnail }] : undefined,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="container py-10 sm:py-16">
      <FadeInDiv className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-6"
            aria-label="Back to home"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-bold mb-6 tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            {post.title}
          </h1>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/categories/${tag}`}
                  className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>

        {post.thumbnail && (
          <figure className="mb-10 sm:mb-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <Image
                src={post.thumbnail}
                alt={`${post.title} thumbnail`}
                fill
                priority
                className="object-cover"
              />
            </div>
            {post.excerpt && (
              <figcaption className="text-center text-sm text-zinc-500 mt-3 italic">
                {post.excerpt}
              </figcaption>
            )}
          </figure>
        )}

        <article
          className="markdown prose prose-zinc dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Comments />
      </FadeInDiv>
    </main>
  );
}
