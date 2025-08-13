import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt?: string;
  thumbnail?: string;
};

export type Post = PostMeta & {
  content: string; // HTML
};

const postsDir = path.join(process.cwd(), 'posts');

function readAllMarkdown(): { meta: PostMeta; content: string }[] {
  if (!fs.existsSync(postsDir)) return [];
  const items = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8');
      const { data, content } = matter(raw);
      const slug = (data.slug || filename.replace(/\.md$/, '')).toString();
      const title = (data.title || slug).toString();
      const date = (data.date || new Date().toISOString()).toString();
      const excerpt = data.excerpt ? data.excerpt.toString() : undefined;
      const thumbnail =
        (data.thumbnail || data.image || '').toString() || undefined;
      return { meta: { slug, title, date, excerpt, thumbnail }, content };
    });

  // Sort newest first, then deduplicate by slug keeping the first (newest) entry
  items.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
  const seen = new Map<string, { meta: PostMeta; content: string }>();
  for (const it of items) {
    if (!seen.has(it.meta.slug)) seen.set(it.meta.slug, it);
  }
  return Array.from(seen.values());
}

export function getAllPostsMeta(): PostMeta[] {
  return readAllMarkdown()
    .map((p) => p.meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const hit = readAllMarkdown().find((p) => p.meta.slug === slug);
  if (!hit) return null;

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism, { showLineNumbers: false })
    .use(rehypeStringify)
    .process(hit.content);

  return { ...hit.meta, content: String(file) };
}
