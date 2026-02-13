import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

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
                                <img src="/images/normal/square-1.jpg" alt="photo" className="big-img" />
                                <img src="/images/normal/square-2.jpg" alt="photo" className="small-img" />
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
                                    <h2 className="counter-number">45</h2>
                                    <p className="counter-text">Qualified Staff</p>
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
                                    <h2 className="counter-number">
                                        <span className="counter">20</span>
                                    </h2>
                                    <p className="counter-text">Years Experience</p>
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
                                    <h2 className="counter-number">
                                        <span className="counter">565</span>
                                    </h2>
                                    <p className="counter-text">Students Enrolled</p>
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
                                    <h2 className="counter-number">
                                        <span className="counter">15</span>
                                    </h2>
                                    <p className="counter-text">Groups of Students</p>
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
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-box" data-overlay="title" data-opacity="6">
                                <div className="service-content text-center">
                                    <h3 className="service-title">Our Mission</h3>
                                    <p className="service-text">To provide structured, research-based, and compassionate autism support services that help children develop communication, independence, and social skills within a safe and inclusive environment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-box" data-overlay="title" data-opacity="6">
                                <div className="service-content text-center">
                                    <h3 className="service-title">Our Vision</h3>
                                    <p className="service-text">To become Hyderabad’s most trusted autism school and child development center by combining education, therapy, and research under one roof.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section bg-smoke space-extra-top space-bottom-shape-min">
                <div className="container">
                    <div className="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
                            <div className="title-area">
                                <span className="sub-title">Our Therapists</span>
                                <h2 className="sec-title">Dedicated Professionals</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row vs-carousel" data-slide-show="3" data-lg-slide-show="2" data-arrows="true">
                        {/* Team Members */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-card">
                                <div className="team-img" data-mask-src="/images/team/t-mask.png">
                                    <img src="/images/team/t-1.jpg" alt="team" />
                                    <div className="team-content">
                                        <p className="team-text">Specializing in early intervention and behavioral therapy.</p>
                                        <div className="multi-social">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="team-title"><Link href="/team">Sarah Johnson</Link></h4>
                                    <span className="team-desig">Senior Therapist</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-card">
                                <div className="team-img" data-mask-src="/images/team/t-mask.png">
                                    <img src="/images/team/t-2.jpg" alt="team" />
                                    <div className="team-content">
                                        <p className="team-text">Experienced in speech therapy and communication strategies.</p>
                                        <div className="multi-social">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="team-title"><Link href="/team">Michael Smith</Link></h4>
                                    <span className="team-desig">Speech Therapist</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-card">
                                <div className="team-img" data-mask-src="/images/team/t-mask.png">
                                    <img src="/images/team/t-3.jpg" alt="team" />
                                    <div className="team-content">
                                        <p className="team-text">Expert in occupational therapy and sensory integration.</p>
                                        <div className="multi-social">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="team-title"><Link href="/team">Emily Davis</Link></h4>
                                    <span className="team-desig">Occupational Therapist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-before"><img src="/images/shape/before-shape-5.png" alt="shape" /></div>
                <div className="shape-after"><img src="/images/shape/after-shape-5.png" alt="shape" /></div>

                <div className="shape-mockup movingX d-none d-hd-block" data-top="12%" data-left="6%"><img src="/images/icon/doll-1.png" alt="shapes" /></div>
                <div className="shape-mockup movingX d-none d-hd-block" data-bottom="9%" data-left="5%"><img src="/images/icon/shoe-1.png" alt="shapes" /></div>
                <div className="shape-mockup shapePulse d-none d-hd-block" data-top="12%" data-right="5%"><img src="/images/icon/dog-2.png" alt="shapes" /></div>
                <div className="shape-mockup movingX d-none d-hd-block" data-bottom="12%" data-right="3%"><img src="/images/icon/plane-1.png" alt="shapes" /></div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial-section space-top-shape2-plus space-bottom-shape-plus">
                <div className="container">
                    <div className="row gy-30 align-items-center">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="text-center text-lg-start">
                                <span className="sub-title">Parent Testimonial</span>
                                <h2 className="sec-title">Positive Parents Review Of Us</h2>
                                <p className="mb-30">Our parents trust us with their children's development and well-being. Read what they have to say about their experience with Maryam Child Development Studio.</p>
                                <Link href="/contact" className="vs-btn wave-btn style-1">View All Reviews</Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="testi-slider-area">
                                <div className="row testi-slider vs-carousel" id="testi1" data-slide-show="2">
                                    {/* Single Item */}
                                    <div className="col-md-6">
                                        <div className="testi-box">
                                            <div className="testi-avater">
                                                <img src="/images/testimonial/avator-1.jpg" alt="testimonial" />
                                                <i className="fa-solid fa-quote-left"></i>
                                            </div>
                                            <h4 className="testi-title">They Are Amazing</h4>
                                            <p className="testi-text">The progress my son has made in just 6 months is unbelievable. The therapists are so dedicated.</p>
                                            <div className="testi-author">
                                                <h5 className="name">Ayesha Khan</h5>
                                                <span className="desig">Parent</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Item */}
                                    <div className="col-md-6">
                                        <div className="testi-box">
                                            <div className="testi-avater">
                                                <img src="/images/testimonial/avator-2.jpg" alt="testimonial" />
                                                <i className="fa-solid fa-quote-left"></i>
                                            </div>
                                            <h4 className="testi-title">Like Family</h4>
                                            <p className="testi-text">The environment is so supportive. We feel like we are part of a big family here.</p>
                                            <div className="testi-author">
                                                <h5 className="name">Rahul Reddy</h5>
                                                <span className="desig">Parent</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vs-icon-box testi-1 d-none d-xl-block">
                                    <button data-slick-prev="#testi1" className="icon-btn style-3 arrow-left mb-15"><i className="far fa-arrow-left"></i></button>
                                    <button data-slick-next="#testi1" className="icon-btn style-3 arrow-right"><i className="far fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
