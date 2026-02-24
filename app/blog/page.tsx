import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { blogPosts, BlogPost } from '@/lib/blogData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Autism & Child Development Blog Hyderabad | Parenting Tips & Research',
    description: 'Insights and expert advice on autism, speech therapy, and child development in Hyderabad. Stay updated with the latest research and parenting tips.',
    keywords: 'autism blog Hyderabad, child development tips, speech therapy resources, parenting autistic children Hyderabad',
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Maryam Child Development Studio Blog',
        description: 'Latest updates and articles on autism and child development.',
        blogPost: blogPosts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: {
                '@type': 'Person',
                name: post.author
            },
            url: `https://maryamstudiocdc.in/blog/${post.slug}`
        }))
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumb title="Autism & Child Development Blog Hyderabad" />

            <section className="vs-blog-wrapper space-page">
                <div className="container">
                    <div className="row gy-40 justify-content-center">
                        {blogPosts.map((post: BlogPost, index: number) => (
                            <div key={post.slug} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index % 3 + 1)}s`}>
                                <div className="vs-blog blog-single">
                                    {post.image && (
                                        <div className="blog-img position-relative bg-light" style={{ height: '220px', overflow: 'hidden' }}>
                                            <Link href={`/blog/${post.slug}`}>
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    style={{ objectFit: post.image.includes('/blog/') ? 'contain' : 'cover' }}
                                                    priority={index < 3}
                                                />
                                            </Link>
                                        </div>
                                    )}
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link href={`/blog/${post.slug}`}><i className="fal fa-calendar-alt"></i> {post.date}</Link>
                                            <Link href={`/blog/${post.slug}`}><i className="fal fa-user"></i> {post.author}</Link>
                                        </div>
                                        <h3 className="blog-title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                                        <p className="blog-text">{post.excerpt.substring(0, 100)}...</p>
                                        <Link href={`/blog/${post.slug}`} className="link-btn">Read More <i className="far fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
