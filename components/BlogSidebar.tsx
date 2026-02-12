import Link from 'next/link';

export default function BlogSidebar() {
    return (
        <aside className="sidebar-area">
            <div className="widget widget_search wow fadeInUp" data-wow-delay="0.1s">
                <h4 className="widget_title">Search</h4>
                <form className="search-form">
                    <input type="text" placeholder="Search Here" />
                    <button type="submit"><i className="far fa-search"></i></button>
                </form>
            </div>
            <div className="widget widget_categories wow fadeInUp" data-wow-delay="0.1s">
                <h4 className="widget_title">Categories</h4>
                <ul>
                    <li><Link href="/blog">Autism Therapy</Link> <span>10</span></li>
                    <li><Link href="/blog">Parenting Tips</Link> <span>07</span></li>
                    <li><Link href="/blog">Success Stories</Link> <span>05</span></li>
                    <li><Link href="/blog">Events</Link> <span>02</span></li>
                </ul>
            </div>
            <div className="widget wow fadeInUp" data-wow-delay="0.1s">
                <h4 className="widget_title">Popular Posts</h4>
                <div className="recent-post-wrap">
                    <div className="recent-post">
                        <div className="media-img">
                            <Link href="/blog/autism-awareness"><img src="/images/blog/thumb-1.jpg" alt="Blog Image" /></Link>
                        </div>
                        <div className="media-body">
                            <h4 className="post-title"><Link href="/blog/autism-awareness">Understanding Early Signs of Autism</Link></h4>
                            <div className="recent-post-meta"><a href="/blog/autism-awareness"><i className="fal fa-calendar-alt"></i> Dec 12, 2024</a></div>
                        </div>
                    </div>
                    <div className="recent-post">
                        <div className="media-img">
                            <Link href="/blog/speech-therapy-benefits"><img src="/images/blog/thumb-2.jpg" alt="Blog Image" /></Link>
                        </div>
                        <div className="media-body">
                            <h4 className="post-title"><Link href="/blog/speech-therapy-benefits">Benefits of Speech Therapy at Home</Link></h4>
                            <div className="recent-post-meta"><a href="/blog/speech-therapy-benefits"><i className="fal fa-calendar-alt"></i> Nov 20, 2024</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget widget_tag_cloud wow fadeInUp" data-wow-delay="0.1s">
                <h4 className="widget_title">Most Used Tags</h4>
                <div className="tagcloud">
                    <Link href="/blog">Autism</Link>
                    <Link href="/blog">Therapy</Link>
                    <Link href="/blog">Kids</Link>
                    <Link href="/blog">Development</Link>
                    <Link href="/blog">Speech</Link>
                    <Link href="/blog">ABA</Link>
                </div>
            </div>
            <div className="widget widget_banner wow fadeInUp" data-wow-delay="0.1s">
                <div className="banner">
                    <img className="w-100" src="/images/blog/widget-banner.jpg" alt="banner" />
                </div>
                <div className="content">
                    <span className="text-theme">Contact Us</span>
                    <h3 className="h3">Schedule a Visit</h3>
                </div>
                <Link href="/contact" className="vs-btn wave-btn banner-btn">Appointment</Link>
            </div>
        </aside>
    );
}
