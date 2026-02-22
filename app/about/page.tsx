import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Counter from '@/components/Counter';

export default function AboutPage() {
    return (
        <main>
            <Breadcrumb title="About Us" />

            {/* About Section */}
            <section className="about-section space">
                <div className="container">
                    <div className="row align-items-center gy-30">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="img-box-2">
                                <img src="/images/project/clinic1.jpeg" alt="Maryam CDC Clinic Facility" className="big-img" />
                                <img src="/images/project/clinic2.jpeg" alt="Therapy Room" className="small-img" />
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.1s">
                            <div className="text-center text-lg-start">
                                <span className="sub-title">Our Story</span>
                                <h1 className="sec-title big-title">A Parent-Led Autism School in Hyderabad</h1>
                                <p className="fs-md mb-30">Maryam Studio CDC was not created from a business plan. It was born from a personal journey. When our daughter Maryam was diagnosed with mild autism at the age of three, we stepped into a world of confusion, appointments, and uncertainty — just like many parents searching for autism therapy in Hyderabad today.</p>
                                <p className="mb-30">For four years, we traveled across the city visiting multiple child development centers. We attended 45-minute therapy sessions that were stimulating but never long enough to create lasting behavioral and communication changes. The daily travel was exhausting, and progress felt fragmented.</p>
                                <p className="mb-30">We realized something important: Children on the autism spectrum need more than appointments. They need an environment. That realization led to the creation of Maryam Child Development Studio & Research for Autism — Hyderabad’s first full-day autism-focused concept school.</p>
                                <div className="call-media">
                                    <div className="media-icon"><i className="fas fa-phone-alt"></i></div>
                                    <div className="media-body">
                                        <span className="media-label">Call Anytime</span>
                                        <p className="media-info"><a href="tel:+917702426362" className="text-inherit">+91 77024 26362</a></p>
                                    </div>
                                </div>
                                <Link href="/contact" className="vs-btn wave-btn style-1">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-mockup shapePulse d-none d-hd-block" data-bottom="40%" data-left="6%"><img src="/images/icon/dog.png" alt="shapes" /></div>
                <div className="shape-mockup rotate d-none d-md-block" data-bottom="40%" data-right="6%"><img src="/images/icon/star.png" alt="shapes" /></div>
            </section>

            {/* Counter Section */}
            <section className="counter-section space-double" style={{ backgroundImage: "url('/images/bg/counter.jpg')" }} data-overlay="title" data-opacity="8">
                <div className="container">
                    <div className="row gy-30 justify-content-between">
                        {/* Single Item */}
                        <div className="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="counter-box">
                                <div className="counter-icon">
                                    <img src="/images/icon/counter-1.png" alt="icon" />
                                </div>
                                <div className="counter-info">
                                    <h2 className="counter-title" style={{ color: '#fff' }}><Counter end={45} /></h2>
                                    <p className="counter-text" style={{ color: '#fff' }}>Qualified Staff</p>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="counter-box">
                                <div className="counter-icon">
                                    <img src="/images/icon/counter-2.png" alt="icon" />
                                </div>
                                <div className="counter-info">
                                    <h2 className="counter-title" style={{ color: '#fff' }}><Counter end={20} suffix="+" /></h2>
                                    <p className="counter-text" style={{ color: '#fff' }}>Years Experience</p>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="counter-box">
                                <div className="counter-icon">
                                    <img src="/images/icon/counter-3.png" alt="icon" />
                                </div>
                                <div className="counter-info">
                                    <h2 className="counter-title" style={{ color: '#fff' }}><Counter end={565} suffix="+" /></h2>
                                    <p className="counter-text" style={{ color: '#fff' }}>Students Enrolled</p>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="col-xl-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="counter-box">
                                <div className="counter-icon">
                                    <img src="/images/icon/counter-4.png" alt="icon" />
                                </div>
                                <div className="counter-info">
                                    <h2 className="counter-title" style={{ color: '#fff' }}><Counter end={15} suffix="+" /></h2>
                                    <p className="counter-text" style={{ color: '#fff' }}>Groups of Students</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-before style-2"><img src="/images/shape/counter-before-1.png" alt="shape" /></div>
                <div className="section-after style-2"><img src="/images/shape/counter-after-1.png" alt="shape" /></div>

                <div className="shape-mockup z-index-3 shapePulse d-none d-hd-block" data-bottom="23%" data-left="7%"><img src="/images/icon/egg.png" alt="shapes" /></div>
                <div className="shape-mockup z-index-3 d-none d-hd-block" data-bottom="-9%" data-right="7%"><img src="/images/shape/line-3.png" alt="shapes" /></div>
            </section>

            {/* Process Section */}
            <section className="process-section space-top space-bottom-shape2-plus">
                <div className="container">
                    <div className="row mb-20 text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
                            <div className="title-area">
                                <span className="sub-title">Work Process</span>
                                <h2 className="sec-title">How We Support Your Child</h2>
                            </div>
                        </div>
                    </div>
                    <div className="process-area">
                        <div className="row gy-60 justify-content-between">
                            {/* Single Item */}
                            <div className="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
                                <div className="process-box-body">
                                    <span className="process-number">01</span>
                                    <div className="process-content">
                                        <div className="process-icon">
                                            <img src="/images/icon/process2-1.png" alt="icon" />
                                        </div>
                                        <h5 className="process-name"><Link href="/services">Assessment</Link></h5>
                                    </div>
                                </div>
                            </div>
                            {/* Single Item */}
                            <div className="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
                                <div className="process-box-body">
                                    <span className="process-number">02</span>
                                    <div className="process-content">
                                        <div className="process-icon">
                                            <img src="/images/icon/process2-2.png" alt="icon" />
                                        </div>
                                        <h5 className="process-name"><Link href="/contact">Consultation</Link></h5>
                                    </div>
                                </div>
                            </div>
                            {/* Single Item */}
                            <div className="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
                                <div className="process-box-body">
                                    <span className="process-number">03</span>
                                    <div className="process-content">
                                        <div className="process-icon">
                                            <img src="/images/icon/process2-3.png" alt="icon" />
                                        </div>
                                        <h5 className="process-name"><Link href="/services">Start Therapy</Link></h5>
                                    </div>
                                </div>
                            </div>
                            {/* Single Item */}
                            <div className="col-auto process-box wow fadeInUp" data-wow-delay="0.1s">
                                <div className="process-box-body">
                                    <span className="process-number">04</span>
                                    <div className="process-content">
                                        <div className="process-icon">
                                            <img src="/images/icon/process2-4.png" alt="icon" />
                                        </div>
                                        <h5 className="process-name"><Link href="/services">Monitor Progress</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-line"><img src="/images/shape/dashed-line-1.png" alt="shape" /></div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-section space-top space-bottom-shape2-plus bg-smoke">
                <div className="container">
                    <div className="row justify-content-center text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-xl-8">
                            <div className="title-area">
                                <span className="sub-title">Our Philosophy</span>
                                <h2 className="sec-title">Mission & Vision</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30 justify-content-center">
                        <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="mission-box text-center p-4 p-md-5 bg-white shadow-sm rounded-3 h-100 position-relative overflow-hidden group">
                                <div className="mission-icon mb-4">
                                    <span className="d-inline-flex align-items-center justify-content-center bg-theme text-white rounded-circle" style={{ width: '80px', height: '80px', fontSize: '32px', boxShadow: '0 10px 20px rgba(109, 27, 109, 0.2)' }}>
                                        <i className="fas fa-bullseye"></i>
                                    </span>
                                </div>
                                <h3 className="h4 mb-3 text-theme">Our Mission</h3>
                                <p className="mb-0">To provide structured, research-based, and compassionate autism support services that help children develop communication, independence, and social skills within a safe and inclusive environment.</p>
                                <div className="shape-mockup z-index-0 opacity-10" style={{ right: '-20px', bottom: '-20px', fontSize: '100px', color: '#6d1b6d', transform: 'rotate(-15deg)' }}>
                                    <i className="fas fa-bullseye"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="mission-box text-center p-4 p-md-5 bg-white shadow-sm rounded-3 h-100 position-relative overflow-hidden group">
                                <div className="mission-icon mb-4">
                                    <span className="d-inline-flex align-items-center justify-content-center bg-theme text-white rounded-circle" style={{ width: '80px', height: '80px', fontSize: '32px', boxShadow: '0 10px 20px rgba(109, 27, 109, 0.2)' }}>
                                        <i className="fas fa-eye"></i>
                                    </span>
                                </div>
                                <h3 className="h4 mb-3 text-theme">Our Vision</h3>
                                <p className="mb-0">To become Hyderabad’s most trusted autism school and child development center by combining education, therapy, and research under one roof.</p>
                                <div className="shape-mockup z-index-0 opacity-10" style={{ right: '-20px', bottom: '-20px', fontSize: '100px', color: '#6d1b6d', transform: 'rotate(-15deg)' }}>
                                    <i className="fas fa-eye"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
