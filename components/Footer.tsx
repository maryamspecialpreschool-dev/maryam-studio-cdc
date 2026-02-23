import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer className="footer-wrapper footer-layout4 position-relative overflow-hidden" style={{ color: '#ffffff' }}>
                <Image
                    src="/images/bg/footer-3.png"
                    alt="Footer Background"
                    fill
                    style={{ objectFit: 'cover', zIndex: -1 }}
                    quality={75}
                />
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
                                                <Image src="/images/logo.png" alt="Maryam Child Development Studio" width={180} height={60} style={{ objectFit: 'contain' }} />
                                            </Link>
                                        </div>
                                        <p className="about-text">Maryam Child Development Studio & Research for Autism offers specialized therapy and educational programs for children with autism.</p>
                                        <div className="multi-social">
                                            <Link href="https://www.instagram.com/maryamstudiocdc" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link>
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
                                <div className="widget footer-widget widget_nav_menu">
                                    <h4 className="widget_title">Our Services</h4>
                                    <ul className="menu">
                                        <li><Link href="/services/occupational-therapy">Occupational Therapy</Link></li>
                                        <li><Link href="/services/speech-therapy">Speech Therapy</Link></li>
                                        <li><Link href="/services/physiotherapy">Physiotherapy</Link></li>
                                        <li><Link href="/services/aba-therapy">ABA & Behavioural Therapy</Link></li>
                                        <li><Link href="/services/behavioral-therapy">Behavioral Therapy</Link></li>
                                        <li><Link href="/services/daycare">Daycare Program</Link></li>
                                        <li><Link href="/services/primary-education">Primary Education</Link></li>
                                        <li><Link href="/services/living-skills">Living Skills Training</Link></li>
                                        <li><Link href="/services/full-day-autism-program">Full-Day Autism Program</Link></li>
                                        <li><Link href="/services/individual-education-planning">Individual Education Planning</Link></li>
                                        <li><Link href="/services/parent-training">Parent Training & Home Programs</Link></li>
                                        <li><Link href="/services/research-based-intervention">Research-Based Intervention</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Footer Widget */}
                            <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Contact Us</h3>
                                    <div className="vs-widget-contact">
                                        <p className="footer-info"><i className="fas fa-map-marker-alt"></i>Hyderabad, Telangana, India</p>
                                        <p className="footer-info"><i className="fas fa-envelope"></i><a href="mailto:maryamspecialpreschool@gmail.com">maryamspecialpreschool@gmail.com</a></p>
                                        <p className="footer-info"><i className="fas fa-phone-alt"></i><a href="tel:+917702426362">+91 77024 26362</a></p>
                                        <p className="footer-info"><i className="fas fa-clock"></i>Monday - Saturday: 8:30 AM to 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-mockup movingX d-none d-hd-block" style={{ top: '7%', left: '5%' }} data-top="7%" data-left="5%">
                    <Image src="/images/icon/sun-3.png" alt="shapes" width={120} height={120} />
                </div>
                <div className="shape-mockup movingX d-none d-hd-block" style={{ bottom: '56%', left: '33%' }} data-bottom="56%" data-left="33%">
                    <Image src="/images/icon/butterfly.png" alt="shapes" width={80} height={80} />
                </div>
                <div className="shape-mockup moving d-none d-hd-block" style={{ top: '49%', right: '30%' }} data-top="49%" data-right="30%">
                    <Image src="/images/icon/butterfly-sm.png" alt="shapes" width={60} height={60} />
                </div>

                {/* Additional shapes from index-4.html footer */}
                <div className="shape-mockup movingX-reverse d-none d-hd-block" style={{ top: '18%', right: '3%' }} data-top="18%" data-right="3%">
                    <Image src="/images/icon/f-i-3-5.png" alt="shapes" width={100} height={100} />
                </div>
                <div className="shape-mockup movingX d-none d-hd-block" style={{ top: '62%', right: '6%' }} data-top="62%" data-right="6%">
                    <Image src="/images/icon/f-i-3-6.png" alt="shapes" width={100} height={100} />
                </div>

                <div className="footer-copyright" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="container">
                        <p className="copyright">&copy; Copyright 2026 Maryam Child Development Studio. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Scroll To Top */}
            <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up"></i></a>
        </>
    );
}
