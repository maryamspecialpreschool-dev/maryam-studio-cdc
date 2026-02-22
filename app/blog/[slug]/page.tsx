import Link from 'next/link';
import BlogBreadcrumb from '@/components/BlogBreadcrumb';
import BlogProgress from '@/components/BlogProgress';
import TableOfContents from '@/components/TableOfContents';
import ScrollReveal from '@/components/ScrollReveal';
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
        alternates: {
            canonical: `/blog/${slug}`,
        },
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

    // Filter related posts (excluding current post)
    const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

    // Calculate reading time (avg 200 words per minute)
    const wordCount = post.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

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
        <main className="blog-details-modern">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogProgress />
            <ScrollReveal />



            <BlogBreadcrumb title={post.title} bgImage={post.image} />

            <section className="vs-blog-wrapper blog-details space-top space-extra-bottom">
                <div className="container">
                    <div className="row g-5">
                        {/* Main Content */}
                        <div className="col-xl-8 col-lg-7">
                            <div className="vs-blog blog-single card-body-style wow fadeInUp" data-wow-delay="0.1s">
                                {/* Title Area */}
                                <div className="blog-header mb-5">
                                    <div className="blog-meta-top mb-3 d-flex flex-wrap align-items-center gap-3">
                                        <span className="badge-tag">Family Resource</span>
                                        <span className="blog-date">{post.date}</span>
                                        <span className="read-time">{readingTime} min read</span>
                                        <span className="blog-author-meta">{post.author}</span>
                                    </div>
                                    <h1 className="blog-title-modern">{post.title}</h1>
                                </div>

                                {/* Removed duplicate image div from here */}

                                {/* Blog Body */}
                                <div className="blog-content-modern" dangerouslySetInnerHTML={{ __html: post.content }} />


                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-xl-4 col-lg-5">
                            <aside className="sticky-sidebar">
                                {/* Table of Contents */}
                                <TableOfContents content={post.content} />

                                {/* Consultation Widget */}
                                <div className="widget-card widget-consultation mb-4 p-4 rounded-4 shadow-sm bg-theme text-white border-0 overflow-hidden position-relative">
                                    <div className="position-relative z-index-2">
                                        <h4 className="h5 mb-3 text-white">Free Consultation</h4>
                                        <p className="small opacity-90 mb-4">Unsure about the next steps? Join our therapeutic village for expert guidance and personalized care.</p>
                                        <Link href="/contact" className="btn-white-fix w-100">Book Session</Link>
                                    </div>
                                </div>

                                {/* Related Posts Widget */}
                                <div className="widget-card mb-4 p-4 rounded-4 shadow-sm bg-white">
                                    <h4 className="h5 mb-4 sidebar-widget-title">Expand Your Knowledge</h4>
                                    <div className="related-posts-list">
                                        {relatedPosts.map((rp, idx) => (
                                            <div key={idx} className="rp-item d-flex gap-3 mb-3 pb-3 border-bottom last-border-0 transition-all">
                                                <div className="rp-img flex-shrink-0" style={{ width: '70px', height: '70px' }}>
                                                    <img src={rp.image} alt={rp.title} className="rounded-3 w-100 h-100 object-fit-cover shadow-sm transition-all" />
                                                </div>
                                                <div className="rp-body">
                                                    <h5 className="h6 mb-1 rp-title">
                                                        <Link href={`/blog/${rp.slug}`} className="text-inherit hover-theme transition-all">{rp.title}</Link>
                                                    </h5>
                                                    <span className="small text-muted">{rp.date}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
