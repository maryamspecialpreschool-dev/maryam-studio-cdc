import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="footer-wrapper footer-layout4" style={{ backgroundImage: "url('/images/bg/footer-3.png')", color: '#ffffff' }}>
                <div className="footer-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(109, 27, 109, 0.85)', zIndex: 0 }}></div>
                <div className="widget-area" style={{ position: 'relative', zIndex: 1, color: '#ffffff' }}>
                    <div className="container">
                        <div className="row justify-content-between">
                            {/* About Widget */}
                            <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="widget footer-widget">
                                    <div className="vs-widget-about">
                                        <div className="about-logo">
                                            <Link href="/">
                                                <img src="/images/logo.png" alt="Maryam Child Development Studio" style={{ maxHeight: '60px' }} />
                                            </Link>
                                        </div>
                                        <p className="about-text">Maryam Child Development Studio & Research for Autism offers specialized therapy and educational programs for children with autism.</p>
                                        <div className="multi-social">
                                            <Link href="https://www.instagram.com/maryamspecialpre/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link>
                                            <Link href="https://www.linkedin.com/company/maryam-special-studio/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Widget */}
                            <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="widget footer-widget widget_nav_menu">
                                    <h4 className="widget_title">Details Info</h4>
                                    <ul className="menu">
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/contact">Appointment</Link></li>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/gallery">Gallery</Link></li>

                                    </ul>
                                </div>
                            </div>

                            {/* Footer Widget */}
                            <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="widget footer-widget">
                                    <h4 className="widget_title">News Feed</h4>
                                    <div className="recent-post-wrap">
                                        <div className="recent-post">
                                            <div className="media-img">
                                                <Link href="/blog/why-full-day-autism-programs-show-better-results"><img src="/images/blog/blog-thumb-1.jpg" alt="Blog Image" /></Link>
                                            </div>
                                            <div className="media-body">
                                                <div className="recent-post-meta"><Link href="/blog"><i className="fal fa-calendar-alt"></i> Oct 25, 2024</Link></div>
                                                <h4 className="post-title"><Link href="/blog/why-full-day-autism-programs-show-better-results">Full Day Autism Programs</Link></h4>
                                            </div>
                                        </div>
                                        <div className="recent-post">
                                            <div className="media-img">
                                                <Link href="/blog/understanding-autism-early-childhood"><img src="/images/blog/blog-thumb-2.jpg" alt="Blog Image" /></Link>
                                            </div>
                                            <div className="media-body">
                                                <div className="recent-post-meta"><Link href="/blog"><i className="fal fa-calendar-alt"></i> Oct 15, 2024</Link></div>
                                                <h4 className="post-title"><Link href="/blog/understanding-autism-early-childhood">Early Signs of Autism</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Widget */}
                            <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Contact Us</h3>
                                    <div className="vs-widget-contact">
                                        <p className="footer-info"><i className="fas fa-map-marker-alt"></i>Hyderabad, Telangana, India</p>
                                        <p className="footer-info"><i className="fas fa-envelope"></i><a href="mailto:info@maryamcdc.com">info@maryamcdc.com</a></p>
                                        <p className="footer-info"><i className="fas fa-phone-alt"></i><a href="tel:+917702426362">+91 77024 26362</a></p>
                                        <p className="footer-info"><i className="fas fa-clock"></i>Monday - Saturday: 8:30 AM to 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-mockup movingX d-none d-hd-block" style={{ top: '7%', left: '5%' }} data-top="7%" data-left="5%"><img src="/images/icon/sun-3.png" alt="shapes" /></div>
                <div className="shape-mockup movingX d-none d-hd-block" style={{ bottom: '56%', left: '33%' }} data-bottom="56%" data-left="33%"><img src="/images/icon/butterfly.png" alt="shapes" /></div>
                <div className="shape-mockup moving d-none d-hd-block" style={{ top: '49%', right: '30%' }} data-top="49%" data-right="30%"><img src="/images/icon/butterfly-sm.png" alt="shapes" /></div>

                {/* Additional shapes from index-4.html footer */}
                <div className="shape-mockup movingX-reverse d-none d-hd-block" style={{ top: '18%', right: '3%' }} data-top="18%" data-right="3%"><img src="/images/icon/f-i-3-5.png" alt="shapes" /></div>
                <div className="shape-mockup movingX d-none d-hd-block" style={{ top: '62%', right: '6%' }} data-top="62%" data-right="6%"><img src="/images/icon/f-i-3-6.png" alt="shapes" /></div>

                <div className="footer-copyright" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="container">
                        <p className="copyright">&copy; Copyright 2024 Maryam Child Development Studio. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Scroll To Top */}
            <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up"></i></a>
        </>
    );
}
