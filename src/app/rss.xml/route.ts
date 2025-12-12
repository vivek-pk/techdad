import RSS from 'rss';
import { getAllPostsMeta } from '@/lib/md';

export async function GET() {
    const posts = getAllPostsMeta();
    const siteUrl = 'https://techdad.vercel.app';

    const feed = new RSS({
        title: 'TechDad Blog',
        description: 'Tech tips, coding tutorials, and dad life.',
        site_url: siteUrl,
        feed_url: `${siteUrl}/rss.xml`,
        copyright: `${new Date().getFullYear()} TechDad`,
        language: 'en',
        pubDate: new Date(),
    });

    posts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.excerpt || '',
            url: `${siteUrl}/posts/${post.slug}`,
            date: post.date,
            categories: post.tags || [],
            author: 'Vivek',
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
