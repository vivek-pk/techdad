import { Metadata } from 'next';
import Image from 'next/image';
import { getPostBySlug, getAllPostsMeta } from '@/lib/md';
import { notFound } from 'next/navigation';
import { FadeInDiv } from '@/components/anim';

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
      <FadeInDiv className="max-w-2xl mx-auto">
        {post.thumbnail && (
          <figure className="mb-6 sm:mb-8">
            <Image
              src={post.thumbnail}
              alt={`${post.title} thumbnail`}
              width={1200}
              height={630}
              priority
              className="w-full h-auto rounded border border-[color:var(--border)] bg-[color:var(--muted)]"
            />
            {post.excerpt && (
              <figcaption className="text-sm text-zinc-500 mt-2">
                {post.excerpt}
              </figcaption>
            )}
          </figure>
        )}
        <h1 className="font-sans text-3xl sm:text-4xl font-semibold mb-2 tracking-tight">
          {post.title}
        </h1>
        <p className="text-xs text-zinc-500 mb-8">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <article
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </FadeInDiv>
    </main>
  );
}
