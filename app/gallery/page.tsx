import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function GalleryPage() {
    return (
        <main>
            <Breadcrumb title="Gallery" />

            <section className="project-section bg-smoke space-top space-extra-bottom">
                <div className="container pb-10">
                    <div className="title-area text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="sec-title big-title">Sensory-Friendly Autism School Environment in Hyderabad</h1>
                        <p className="fs-md mb-40">Our gallery showcases our classrooms, therapy rooms, group activities, and parent workshops that create a nurturing environment for children with special needs.</p>
                    </div>
                    <div className="project-menu text-center mb-40 filter-menu-active">
                        <button data-filter="*" className="active">All Zone <img className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" /><img className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" /></button>
                        <button data-filter=".cat-1">Therapy <img className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" /><img className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" /></button>
                        <button data-filter=".cat-2">Activities <img className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" /><img className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" /></button>
                        <button data-filter=".cat-3">Events <img className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" /><img className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" /></button>
                    </div>
                    <div className="row g-20 justify-content-center filter-active">
                        {/* Gallery Items */}
                        <div className="col-xl-3 col-lg-4 col-sm-6 filter-item cat-1">
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="/images/project/p-1.jpg" alt="project-img" />
                                </div>
                                <a href="/images/project/p-1.jpg" className="plus-btn popup-image">+</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 filter-item cat-2">
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="/images/project/p-2.jpg" alt="project-img" />
                                </div>
                                <a href="/images/project/p-2.jpg" className="plus-btn popup-image">+</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="/images/project/p-3.jpg" alt="project-img" />
                                </div>
                                <a href="/images/project/p-3.jpg" className="plus-btn popup-image">+</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 filter-item cat-1 cat-2">
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="/images/project/p-4.jpg" alt="project-img" />
                                </div>
                                <a href="/images/project/p-4.jpg" className="plus-btn popup-image">+</a>
                            </div>
                        </div>
                        {/* Additional Items to match legacy count generally */}
                        <div className="col-xl-3 col-lg-4 col-sm-6 filter-item cat-2">
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="/images/project/p-5.jpg" alt="project-img" />
                                </div>
                                <a href="/images/project/p-5.jpg" className="plus-btn popup-image">+</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 filter-item cat-3">
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="/images/project/p-6.jpg" alt="project-img" />
                                </div>
                                <a href="/images/project/p-6.jpg" className="plus-btn popup-image">+</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-after"><img src="/images/shape/after-shape-5.png" alt="shape" /></div>
                <div className="shape-mockup movingX d-none d-hd-block" data-top="15%" data-left="9%"><img src="/images/icon/duck.png" alt="shapes" /></div>
                <div className="shape-mockup movingX d-none d-hd-block" data-bottom="15%" data-left="9%"><img src="/images/icon/butterfly-5.png" alt="shapes" /></div>
                <div className="shape-mockup shapePulse d-none d-hd-block" data-top="14%" data-right="7%"><img src="/images/icon/sun-3.png" alt="shapes" /></div>
                <div className="shape-mockup moving d-none d-sm-block" data-bottom="17%" data-right="6%"><img src="/images/icon/leaves.png" alt="shapes" /></div>
            </section>

            {/* Simple Section */}
            <section className="mockup3 space-top-shape2-plus space-bottom-page">
                <div className="container">
                    <div className="row gy-40 align-items-center">
                        <div className="col-lg-6 text-center text-lg-start">
                            <div className="img-box-3">
                                <img src="/images/normal/shape-img-1.png" alt="photo" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="text-center text-lg-start">
                                <span className="sub-title">Make Appointment</span>
                                <h2 className="sec-title big-title">Join Our Support Groups Today</h2>
                                <p className="fs-md mb-30">We offer various support groups for parents and children. Contact us to learn more about upcoming sessions and how to join.</p>
                                <Link href="/contact" className="vs-btn wave-btn style-1">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
