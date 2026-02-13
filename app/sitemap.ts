
import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';
import { servicesData } from '@/lib/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://maryamstudio.com';

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/gallery',
        '/team',
        '/daycare',
        '/services',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Service Routes
    const serviceRoutes = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic Blog Routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...serviceRoutes, ...blogRoutes];
}
