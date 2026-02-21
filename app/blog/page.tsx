import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { blogPosts, BlogPost } from '@/lib/blogData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Autism & Child Development Blog | Maryam Studio',
    description: 'Read the latest insights, tips, and research on autism, speech therapy, and child development from our experts.',
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
            url: `https://maryamcdc.com/blog/${post.slug}`
        }))
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumb title="Our Blog" />

            <section className="vs-blog-wrapper space-page">
                <div className="container">
                    <div className="row gy-40 justify-content-center">
                        {blogPosts.map((post: BlogPost, index: number) => (
                            <div key={post.slug} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index % 3 + 1)}s`}>
                                <div className="vs-blog blog-single">
                                    {post.image && (
                                        <div className="blog-img">
                                            <Link href={`/blog/${post.slug}`}>
                                                <img src={post.image} alt={post.title} />
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
