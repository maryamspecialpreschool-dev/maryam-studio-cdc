import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BlogSidebar from '@/components/BlogSidebar';
import { blogPosts, BlogPost } from '@/lib/blogData';
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
                    <div className="row gx-60">
                        <div className="col-xl-8 col-lg-7">
                            <div className="vs-blog blog-single wow fadeInUp" data-wow-delay="0.1s">
                                {/* Media Handling */}
                                {post.video ? (
                                    <div className="blog-img">
                                        <img src={post.image || '/images/blog/blog-single.jpg'} alt="Blog Img" />
                                        <a href={post.video} className="popup-video play-btn style-1"><i className="fas fa-play"></i></a>
                                    </div>
                                ) : post.images ? (
                                    <div className="blog-img vs-carousel" data-slide-show="1" data-md-slide-show="1">
                                        {post.images.map((img, i) => (
                                            <img key={i} src={img} alt="Blog Img" />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="blog-img">
                                        <img src={post.image || '/images/blog/blog-single.jpg'} alt="Blog Img" />
                                    </div>
                                )}

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span><i className="fal fa-calendar-alt"></i><Link href="#">{post.date}</Link></span>
                                        <span><i className="fal fa-user-tag"></i>by <Link href="#">{post.author}</Link></span>
                                        <span><i className="fal fa-folder-open"></i><Link href="#">Kids</Link><Link href="#">Education</Link></span>
                                        <span><i className="fal fa-comments"></i><Link href="#">{post.comments} Comments</Link></span>
                                    </div>
                                    <h2 className="blog-title">{post.title}</h2>

                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                                    <div className="share-links clearfix wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="row justify-content-between">
                                            <div className="col-md-auto">
                                                <span className="share-links-title">Tags: </span>
                                                <div className="tagcloud">
                                                    <Link href="/blog">Education</Link>
                                                    <Link href="/blog">Kids</Link>
                                                    <Link href="/blog">Therapy</Link>
                                                </div>
                                            </div>
                                            <div className="col-md-auto text-md-end">
                                                <span className="share-links-title">Share Now:</span>
                                                <ul className="multi-social">
                                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
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

                                    {/* Comments Section */}
                                    <div className="vs-comment-wrap wow fadeInUp" data-wow-delay="0.1s">
                                        <h3 className="blog-inner-title">{post.comments} Comments</h3>
                                        <ul className="comment-list">
                                            <li className="vs-comment">
                                                <div className="vs-post-comment">
                                                    <div className="comment-avater"><img src="/images/blog/author-2.jpg" alt="Comment Author" /></div>
                                                    <div className="comment-content">
                                                        <span className="commented-on">22 April, 2024</span>
                                                        <h4 className="name">Parent One</h4>
                                                        <p className="text">This article was very helpful, thank you for sharing!</p>
                                                        <div className="reply_and_edit">
                                                            <a href="#commentForm" className="reply-btn">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Comment Form */}
                                    <div className="vs-comment-form wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="form-title">
                                            <h3 className="blog-inner-title">Leave a Comment</h3>
                                            <p className="form-text">Your email address will not be published. Required fields are marked *</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 form-group">
                                                <textarea placeholder="Write a Comment" id="commentForm" className="form-control style2"></textarea>
                                                <i className="far fa-pencil-alt"></i>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="text" placeholder="Your Name" className="form-control style2" />
                                                <i className="fal fa-user"></i>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="text" placeholder="Your Email" className="form-control style2" />
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="col-12 form-group">
                                                <button className="vs-btn"><i className="fal fa-paper-plane"></i> Post Comment</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
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
