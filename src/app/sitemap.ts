import { MetadataRoute } from 'next';
import { getAllPostsMeta } from '@/lib/md';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPostsMeta();
    const baseUrl = 'https://techdad.dev';

    const postsUrls = posts.map((post) => ({
        url: `${baseUrl}/posts/${post.slug}`,
        lastModified: new Date(post.date),
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/categories`,
            lastModified: new Date(),
        },
        ...postsUrls,
    ];
}
