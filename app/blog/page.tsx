import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogSidebar from '@/components/BlogSidebar';
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
                    <div className="row gx-60">
                        {/* Blog Posts */}
                        <div className="col-xl-8 col-lg-7">
                            {blogPosts.map((post: BlogPost, index: number) => (
                                <div key={post.slug} className="vs-blog blog-single wow fadeInUp" data-wow-delay="0.1s">
                                    {/* Media Handling */}
                                    {post.video ? (
                                        <div className="blog-img">
                                            <Link href={`/blog/${post.slug}`}>
                                                <img src={post.image || '/images/blog/blog-big-1.jpg'} alt="Blog Img" />
                                            </Link>
                                            <a href={post.video} className="popup-video play-btn style-1"><i className="fas fa-play"></i></a>
                                        </div>
                                    ) : post.images ? (
                                        <div className="blog-img vs-carousel" data-slide-show="1" data-md-slide-show="1">
                                            {post.images.map((img, i) => (
                                                <Link key={i} href={`/blog/${post.slug}`}>
                                                    <img src={img} alt="Blog Img" />
                                                </Link>
                                            ))}
                                        </div>
                                    ) : post.image ? (
                                        <div className="blog-img">
                                            <Link href={`/blog/${post.slug}`}>
                                                <img src={post.image} alt="Blog Img" />
                                            </Link>
                                        </div>
                                    ) : null}

                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <Link href={`/blog/${post.slug}`}><i className="fal fa-eye"></i> 100 Views</Link>
                                            <Link href={`/blog/${post.slug}`}><i className="fal fa-comments"></i> {post.comments} Comments</Link>
                                            <Link href={`/blog/${post.slug}`}><i className="fal fa-calendar-alt"></i> {post.date}</Link>
                                        </div>
                                        <h3 className="blog-title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                                        <p className="blog-text">{post.excerpt}</p>
                                        <Link href={`/blog/${post.slug}`} className="link-btn">Read More <i className="far fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            ))}


                        </div>

                        {/* Sidebar */}
                        <div className="col-xl-4 col-lg-5">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
