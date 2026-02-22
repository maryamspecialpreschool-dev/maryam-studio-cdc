'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const galleryItems = [
    { id: 1, src: '/images/project/clinic1.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Modern Facility' },
    { id: 2, src: '/images/project/clinic2.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Therapy Zone' },
    { id: 3, src: '/images/project/clinic3.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Play Area' },
    { id: 4, src: '/images/project/p-1.jpg', category: 'cat-1', alt: 'Therapy Session' },
    { id: 5, src: '/images/project/p-2.jpg', category: 'cat-2', alt: 'Group Activity' },
    { id: 6, src: '/images/project/p-3.jpg', category: 'cat-3', alt: 'Event' },
    { id: 7, src: '/images/project/p-4.jpg', category: 'cat-1 cat-2', alt: 'Therapy Activity' },
    { id: 8, src: '/images/project/p-5.jpg', category: 'cat-2', alt: 'Group Activity' },
    { id: 9, src: '/images/project/p-6.jpg', category: 'cat-3', alt: 'Event' },
];

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('*');

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
                        <button className={activeFilter === '*' ? 'active' : ''} onClick={() => setActiveFilter('*')}>All Zone <img className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" /><img className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" /></button>
                        <button className={activeFilter === 'cat-4' ? 'active' : ''} onClick={() => setActiveFilter('cat-4')}>Clinic & Facility <img className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" /><img className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" /></button>
                        <button className={activeFilter === 'cat-1' ? 'active' : ''} onClick={() => setActiveFilter('cat-1')}>Therapy <img className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" /><img className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" /></button>
                        <button className={activeFilter === 'cat-2' ? 'active' : ''} onClick={() => setActiveFilter('cat-2')}>Activities <img className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" /><img className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" /></button>
                        <button className={activeFilter === 'cat-3' ? 'active' : ''} onClick={() => setActiveFilter('cat-3')}>Events <img className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" /><img className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" /></button>
                    </div>
                    <div className="row g-20 justify-content-center filter-active">
                        {galleryItems.filter(item => activeFilter === '*' || item.category.includes(activeFilter)).map((item) => (
                            <div key={item.id} className={`col-xl-3 col-lg-4 col-sm-6 filter-item ${item.category}`}>
                                <div className="project-card">
                                    <div className="project-img">
                                        <img src={item.src} alt={item.alt} />
                                    </div>
                                    <a href={item.src} className="plus-btn popup-image">+</a>
                                </div>
                            </div>
                        ))}
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
