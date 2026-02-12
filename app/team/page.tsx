import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function TeamPage() {
    return (
        <main>
            <Breadcrumb title="Our Team" />

            <section className="team-section space-top space-extra-bottom">
                <div className="container">
                    <div className="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
                            <div className="title-area">
                                <span className="sub-title">Our Therapists</span>
                                <h1 className="sec-title big-title">Meet Our Autism Specialists in Hyderabad</h1>
                                <p className="mb-45">Our team includes certified speech therapists, occupational therapists, behavioral specialists, and special educators trained in autism intervention and child psychology.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row vs-carousel" data-slide-show="3" data-lg-slide-show="2" data-arrows="true">
                        {/* Team Member 1 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-card">
                                <div className="team-img" style={{ maskImage: "url('/images/team/t-mask.png')", WebkitMaskImage: "url('/images/team/t-mask.png')" }}>
                                    <img src="/images/team/t-1.jpg" alt="team" />
                                    <div className="team-content">
                                        <p className="team-text">Specializing in applied behavior analysis and early intervention strategies.</p>
                                        <div className="multi-social">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="team-title"><Link href="/team/details">Sarah Johnson</Link></h4>
                                    <span className="team-desig">Senior BCBA</span>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-card">
                                <div className="team-img" style={{ maskImage: "url('/images/team/t-mask.png')", WebkitMaskImage: "url('/images/team/t-mask.png')" }}>
                                    <img src="/images/team/t-2.jpg" alt="team" />
                                    <div className="team-content">
                                        <p className="team-text">Expert in sensory integration and motor skill development.</p>
                                        <div className="multi-social">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="team-title"><Link href="/team/details">Dr. Emily White</Link></h4>
                                    <span className="team-desig">Occupational Therapist</span>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-card">
                                <div className="team-img" style={{ maskImage: "url('/images/team/t-mask.png')", WebkitMaskImage: "url('/images/team/t-mask.png')" }}>
                                    <img src="/images/team/t-3.jpg" alt="team" />
                                    <div className="team-content">
                                        <p className="team-text">Focused on language acquisition and social communication.</p>
                                        <div className="multi-social">
                                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4 className="team-title"><Link href="/team/details">Jessica Brown</Link></h4>
                                    <span className="team-desig">Speech Therapist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
