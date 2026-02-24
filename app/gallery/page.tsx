'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

const galleryItems = [
    { id: 1, src: '/images/project/clinic1.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Modern Facility Exterior' },
    { id: 2, src: '/images/project/clinic2.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Inner Reception Area' },
    { id: 3, src: '/images/project/clinic3.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Therapy Hallway' },
    { id: 4, src: '/images/project/clinic4.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Occupational Therapy Zone' },
    { id: 5, src: '/images/project/clinic5.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Sensory Play Area' },
    { id: 6, src: '/images/project/clinic6.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Individual Therapy Room' },
    { id: 7, src: '/images/project/clinic7.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Group Activity Hall' },
    { id: 8, src: '/images/project/clinic8.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Child-Safe Furniture & Environment' },
    { id: 9, src: '/images/project/clinic9.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Learning & Development Corner' },
    { id: 10, src: '/images/project/clinic10.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Multidisciplinary Support Zone' },
    { id: 11, src: '/images/project/clinic11.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Specialized Therapy Equipment' },
    { id: 12, src: '/images/project/clinic12.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Quiet Learning Space' },
    { id: 13, src: '/images/project/clinic13.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Advanced Assessment Center' },
    { id: 14, src: '/images/project/clinic14.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Bright Therapy Environment' },
    { id: 15, src: '/images/project/clinic15.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Child-Friendly Decor' },
    { id: 16, src: '/images/project/clinic16.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Modern Treatment Room' },
    { id: 17, src: '/images/project/clinic17.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Safe Play Zone' },
    { id: 18, src: '/images/project/clinic18.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Reception Area' },
    { id: 19, src: '/images/project/clinic19.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Therapy Equipment Hall' },
    { id: 20, src: '/images/project/clinic20.jpeg', category: 'cat-4', alt: 'Maryam CDC Clinic - Educational Display' },
    { id: 21, src: '/images/project/clinic21.jpeg', category: 'cat-1', alt: 'Therapy Session - Early Intervention' },
    { id: 22, src: '/images/project/clinic22.jpeg', category: 'cat-1', alt: 'Therapy Session - Progress Tracking' },
    { id: 23, src: '/images/project/clinic-1.jpg', category: 'cat-3', alt: 'Maryam CDC Clinic - Clinical Assessment Room' },
    { id: 24, src: '/images/project/clinic-2.jpg', category: 'cat-3', alt: 'Maryam CDC Clinic - Speech Therapy Station' },
    { id: 25, src: '/images/project/clinic-3.jpg', category: 'cat-1', alt: 'Maryam CDC Clinic - Physical Therapy Equipment' },
    { id: 26, src: '/images/project/p-1.jpg', category: 'cat-1', alt: 'ABA Therapy - Skill Building Session' },
    { id: 27, src: '/images/project/p-2.jpg', category: 'cat-1', alt: 'Behavioral Support - Positive Reinforcement' },
    { id: 28, src: '/images/project/p-3.jpg', category: 'cat-2', alt: 'Daycare Activity - Social Interaction' },
    { id: 29, src: '/images/project/p-4.jpg', category: 'cat-1 cat-2', alt: 'Therapy Activity - Developing Motor Skills' },
    { id: 30, src: '/images/project/p-5.jpg', category: 'cat-2', alt: 'Activity Zone - Creative Engagement' },
    { id: 31, src: '/images/project/p-6.jpg', category: 'cat-3', alt: 'Event - Parent-Teacher Interaction' },
    { id: 32, src: '/images/blog/alexithymia.jpeg', category: 'cat-1 cat-2', alt: 'Blog Flyer - Supporting Alexithymia' },
    { id: 33, src: '/images/blog/pediatric.jpeg', category: 'cat-1 cat-2', alt: 'Blog Flyer - Pediatric OT Small Group Management' },
    { id: 34, src: '/images/blog/behaviour-communication.jpeg', category: 'cat-1 cat-2', alt: 'Blog Flyer - Behavior is Communication' },
    { id: 35, src: '/images/blog/selfcare.jpeg', category: 'cat-1 cat-2', alt: 'Blog Flyer - Beyond Self-Care social ADLs' },
];

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('*');

    return (
        <main>
            <Breadcrumb title="Our Therapy Facility in Hyderabad" />

            <section className="project-section bg-smoke space-top space-extra-bottom">
                <div className="container pb-10">
                    <div className="title-area text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="sec-title big-title">Sensory-Friendly Autism School Environment in Hyderabad</h1>
                        <p className="fs-md mb-40">Our gallery showcases our classrooms, therapy rooms, group activities, and parent workshops that create a nurturing environment for children with special needs.</p>
                    </div>
                    <div className="project-menu text-center mb-40 filter-menu-active">
                        <button className={activeFilter === '*' ? 'active' : ''} onClick={() => setActiveFilter('*')}>
                            All Zone
                            <Image className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" width={150} height={50} />
                            <Image className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" width={150} height={50} />
                        </button>
                        <button className={activeFilter === 'cat-4' ? 'active' : ''} onClick={() => setActiveFilter('cat-4')}>
                            Clinic & Facility
                            <Image className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" width={150} height={50} />
                            <Image className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" width={150} height={50} />
                        </button>
                        <button className={activeFilter === 'cat-1' ? 'active' : ''} onClick={() => setActiveFilter('cat-1')}>
                            Therapy
                            <Image className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" width={150} height={50} />
                            <Image className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" width={150} height={50} />
                        </button>
                        <button className={activeFilter === 'cat-2' ? 'active' : ''} onClick={() => setActiveFilter('cat-2')}>
                            Activities
                            <Image className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" width={150} height={50} />
                            <Image className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" width={150} height={50} />
                        </button>
                        <button className={activeFilter === 'cat-3' ? 'active' : ''} onClick={() => setActiveFilter('cat-3')}>
                            Events
                            <Image className="btn-bg" src="/images/bg/btn-bg.png" alt="btn-bg" width={150} height={50} />
                            <Image className="btn-active-bg" src="/images/bg/btn-bg-active.png" alt="btn-active-bg" width={150} height={50} />
                        </button>
                    </div>
                    <div className="row g-20 justify-content-center filter-active">
                        {galleryItems.filter(item => activeFilter === '*' || item.category.includes(activeFilter)).map((item) => (
                            <div key={item.id} className={`col-xl-3 col-lg-4 col-sm-6 filter-item ${item.category}`}>
                                <div className="project-card">
                                    <div className="project-img position-relative bg-light" style={{ height: '250px', overflow: 'hidden' }}>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            style={{ objectFit: item.src.includes('/blog/') ? 'contain' : 'cover' }}
                                        />
                                    </div>
                                    <a href={item.src} className="plus-btn popup-image">+</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="shape-after">
                    <Image src="/images/shape/after-shape-5.png" alt="shape" width={1920} height={150} />
                </div>
                <div className="shape-mockup movingX d-none d-hd-block" data-top="15%" data-left="9%">
                    <Image src="/images/icon/duck.png" alt="shapes" width={100} height={100} />
                </div>
                <div className="shape-mockup movingX d-none d-hd-block" data-bottom="15%" data-left="9%">
                    <Image src="/images/icon/butterfly-5.png" alt="shapes" width={80} height={80} />
                </div>
                <div className="shape-mockup shapePulse d-none d-hd-block" data-top="14%" data-right="7%">
                    <Image src="/images/icon/sun-3.png" alt="shapes" width={120} height={120} />
                </div>
                <div className="shape-mockup moving d-none d-sm-block" data-bottom="17%" data-right="6%">
                    <Image src="/images/icon/leaves.png" alt="shapes" width={100} height={100} />
                </div>
            </section>

            {/* Simple Section */}
            <section className="mockup3 space-top-shape2-plus space-bottom-page">
                <div className="container">
                    <div className="row gy-40 align-items-center">
                        <div className="col-lg-6 text-center text-lg-start">
                            <div className="img-box-3">
                                <Image src="/images/normal/shape-img-1.png" alt="photo" width={500} height={500} />
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
