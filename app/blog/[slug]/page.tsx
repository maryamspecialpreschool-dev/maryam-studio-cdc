import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: post.image ? [post.image] : [],
        },
    };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        author: {
            '@type': 'Person',
            name: post.author
        },
        publisher: {
            '@type': 'Organization',
            name: 'Maryam Child Development Studio',
            logo: {
                '@type': 'ImageObject',
                url: '/images/logo.svg'
            }
        },
        datePublished: post.date
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumb title="Blog Details" />

            <section className="vs-blog-wrapper blog-details space-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="vs-blog blog-single wow fadeInUp" data-wow-delay="0.1s">
                                {/* Image */}
                                {post.image && (
                                    <div className="blog-img">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                )}

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span><i className="fal fa-calendar-alt"></i><Link href="#">{post.date}</Link></span>
                                        <span><i className="fal fa-user-tag"></i>by <Link href="#">{post.author}</Link></span>
                                    </div>
                                    <h1 className="blog-title">{post.title}</h1>

                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                                    <div className="share-links clearfix wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-md-auto">
                                                <span className="share-links-title">Share Now:</span>
                                                <ul className="multi-social">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-auto text-md-end">
                                                <Link href="/blog" className="vs-btn style-2">← Back to Blog</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-author d-md-flex align-items-center wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="media-img">
                                            <img src="/images/blog/author-1.jpg" alt="Blog Author" />
                                        </div>
                                        <div className="media-body">
                                            <p className="author-degi">Written by</p>
                                            <h3 className="author-name"><Link href="#">{post.author}</Link></h3>
                                            <p className="author-text mb-0">Dedicated to supporting children with autism across Hyderabad and beyond.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
