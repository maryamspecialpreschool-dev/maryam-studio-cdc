import Link from 'next/link';


export default function Header() {
    return (
        <>
            {/* Preloader */}
            <div className="preloader">
                <button className="vs-btn wave-btn preloaderCls">Cancel Preloader </button>
                <div className="preloader-inner">
                    <svg id="preloader" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
                        <path id="Path_1" data-name="Path 1" d="M64,0,40.08,21.9a10.98,10.98,0,0,0-5.05,8.75C34.37,44.85,64,60.63,64,60.63Z" fill="#ffb118" />
                        <path id="Path_2" data-name="Path 2" d="M128,64,106.12,40.1a10.97,10.97,0,0,0-8.75-5.05C83.17,34.4,67.4,64,67.4,64Z" fill="#80c141" />
                        <path id="Path_3" data-name="Path 3" d="M63.7,69.73a110.97,110.97,0,0,1-5.04-20.54c-1.16-8.7.68-14.17.68-14.17H97.37s-4.3-.86-14.47,10.1C79.84,48.42,63.7,69.7,63.7,69.7Z" fill="#cadc28" />
                        <path id="Path_4" data-name="Path 4" d="M64,128l23.9-21.88a10.97,10.97,0,0,0,5.05-8.75C93.6,83.17,64,67.4,64,67.4Z" fill="#cf171f" />
                        <path id="Path_5" data-name="Path 5" d="M58.27,63.7a110.97,110.97,0,0,1,20.54-5.04c8.7-1.16,14.17.68,14.17.68V97.37s.86-4.3-10.1-14.47C79.58,79.84,58.3,63.7,58.3,63.7Z" fill="#ec1b21" />
                        <path id="Path_6" data-name="Path 6" d="M0,64,21.88,87.9a10.97,10.97,0,0,0,8.75,5.05C44.83,93.6,60.6,64,60.6,64Z" fill="#018ed5" />
                        <path id="Path_7" data-name="Path 7" d="M64.3,58.27a110.97,110.97,0,0,1,5.04,20.54c1.16,8.7-.68,14.17-.68,14.17H30.63s4.3.86,14.47-10.1c3.06-3.3,19.2-24.58,19.2-24.58Z" fill="#00bbf2" />
                        <path id="Path_8" data-name="Path 8" d="M69.73,64.34a111.023,111.023,0,0,1-20.55,5.05c-8.7,1.14-14.15-.7-14.15-.7V30.65s-.86,4.3,10.1,14.5c3.3,3.05,24.6,19.2,24.6,19.2Z" fill="#f8f400" />
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="2.03" cy="2.03" r="2.03" transform="translate(61.97 61.97)" />
                    </svg>
                </div>
            </div>

            <div className="popup-search-box d-none d-lg-block">
                <button className="searchClose border-theme text-theme"><i className="fal fa-times"></i></button>
                <form action="#">
                    <input type="text" className="border-theme" placeholder="What are you looking for" />
                    <button type="submit"><i className="fal fa-search"></i></button>
                </form>
            </div>

            {/* Side menu start */}
            <div className="sidemenu-wrapper">
                <div className="sidemenu-content">
                    <button className="closeButton sideMenuCls"><i className="far fa-times"></i></button>
                    <div className="widget footer-widget">
                        <div className="vs-widget-about">
                            <div className="about-logo">
                                <Link href="/">
                                    <img src="/images/logo.svg" alt="Maryam Child Development Studio" />
                                </Link>
                            </div>
                            <p className="about-text">Maryam Child Development Studio & Research for Autism offers specialized therapy and educational programs for children with autism.</p>
                            <div className="multi-social">
                                <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                                <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="widget footer-widget">
                        <h3 className="widget_title">Contact Us</h3>
                        <div className="vs-widget-contact">
                            <p className="footer-info"><i className="fas fa-map-marker-alt"></i>Hyderabad, India</p>
                            <p className="footer-info"><i className="fas fa-envelope"></i><a href="mailto:info@maryamcdc.com">info@maryamcdc.com</a></p>
                            <p className="footer-info"><i className="fas fa-phone-alt"></i><a href="tel:+910000000000">+91 (000) 000 0000</a></p>
                        </div>
                    </div>

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
                        </div>
                    </div>
                </div>
            </div>
            {/* Side menu end */}

            {/* vs-mobile-menu start */}
            <div className="vs-menu-wrapper">
                <div className="vs-menu-area">
                    <button className="vs-menu-toggle"><i className="fal fa-times"></i></button>
                    <div className="mobile-logo">
                        <Link href="/"><img src="/images/logo.svg" alt="Maryam Child Development Studio" /></Link>
                    </div>
                    <div className="vs-mobile-menu">
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/team">Team</Link></li>
                            <li className="menu-item-has-children">
                                <Link href="/services">Services</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/services">All Services</Link></li>
                                    <li><Link href="/services/early-intervention">Early Intervention</Link></li>
                                    <li><Link href="/services/aba-therapy">ABA Therapy</Link></li>
                                    <li><Link href="/services/occupational-therapy">Occupational Therapy</Link></li>
                                    <li><Link href="/services/speech-therapy">Speech Therapy</Link></li>
                                    <li><Link href="/services/special-education">Special Education</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* vs-mobile-menu end */}

            {/* Header */}
            <header className="vs-header">
                {/* header-top-wrapper start */}
                <div className="header-top-area v4">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="header-links d-none d-lg-block">
                                    <ul>
                                        <li><i className="fal fa-clock"></i>9:30 am - 6:30 pm - Mon - Sun</li>
                                        <li><i className="fal fa-phone"></i><a href="tel:+910000000000">+91 (000) 000 0000</a></li>
                                        <li><i className="fal fa-map-marker-alt"></i>Hyderabad, India</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-auto text-center">
                                <div className="header-social">
                                    <ul>
                                        <li><Link href="https://www.instagram.com/maryamspecialpre/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/maryam-special-studio/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-top-wrapper end */}

                {/* vs-main-menu-wrapper start */}
                <div className="sticky-wrapper">
                    <div className="sticky-active">
                        <div className="header-menu-area v4 pb-2 pb-lg-0">
                            <div className="container position-relative">
                                <div className="lower-header">
                                    <div className="row gx-20 align-items-center justify-content-between">
                                        <div className="col-auto">
                                            <div className="header-logo">
                                                <Link href="/">
                                                    <img src="/images/logo.svg" alt="Maryam Child Development Studio" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <nav className="main-menu menu-style1 d-none d-lg-inline-block">
                                                <ul>
                                                    <li>
                                                        <Link href="/">Home</Link>
                                                    </li>
                                                    <li><Link href="/about">About Us</Link></li>
                                                    <li><Link href="/team">Team</Link></li>
                                                    <li className="menu-item-has-children">
                                                        <Link href="/services">Services</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link href="/services">All Services</Link></li>
                                                            <li><Link href="/services/early-intervention">Early Intervention</Link></li>
                                                            <li><Link href="/services/aba-therapy">ABA Therapy</Link></li>
                                                            <li><Link href="/services/occupational-therapy">Occupational Therapy</Link></li>
                                                            <li><Link href="/services/speech-therapy">Speech Therapy</Link></li>
                                                            <li><Link href="/services/special-education">Special Education</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="/gallery">Gallery</Link></li>
                                                    <li>
                                                        <Link href="/blog">Blog</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact">Contact</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <button type="button" className="vs-menu-toggle d-block d-lg-none"><i className="far fa-bars"></i> Menu</button>
                                        </div>
                                        <div className="col-auto d-none d-xl-block">
                                            <div className="header-button">
                                                <Link href="/contact" className="vs-btn wave-btn">Book a visit</Link>
                                                <button type="button" className="searchBoxToggler icon-btn"><i className="far fa-search"></i></button>
                                                <button type="button" className="sideMenuToggler icon-btn"><i className="fal fa-bars"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* vs-main-menu-wrapper end */}
            </header>
        </>
    );
}
