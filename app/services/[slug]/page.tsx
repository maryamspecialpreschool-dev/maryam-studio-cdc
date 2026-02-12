import Link from 'next/link';
import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { notFound } from 'next/navigation';
import { servicesData, ServiceData } from '@/lib/servicesData';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: service.seoTitle || service.title,
        description: service.description,
        openGraph: {
            title: service.seoTitle || service.title,
            description: service.description,
            images: [service.image],
        },
    };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        image: service.image,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Maryam Child Development Studio',
            image: '/images/logo.svg',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                addressCountry: 'IN'
            }
        },
        areaServed: {
            '@type': 'City',
            name: 'Hyderabad'
        }
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumb title={service.title} />

            <section className="service-section space">
                <div className="container">
                    <div className="row gy-30">
                        <div className="col-xl-9 col-lg-8">
                            <div className="service-details">
                                <div className="service-img">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <h2 className="single-title">{service.seoTitle || service.title}</h2>
                                <div className="service-content" dangerouslySetInnerHTML={{ __html: service.content }} />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-xl-3 col-lg-4">
                            <aside className="sidebar-area service-sidebar">
                                <div className="widget widget_search wow fadeInUp" data-wow-delay="0.1s">
                                    <form className="search-form">
                                        <input type="text" placeholder="Search Here" />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="widget wow fadeInUp" data-wow-delay="0.1s">
                                    <h4 className="widget_title">Our Services</h4>
                                    <ul className="popular-service-wrap">
                                        {Object.entries(servicesData).map(([s, data]) => (
                                            <li key={s}><Link href={`/services/${s}`}>{data.title}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="widget wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="banner-2">
                                        <img className="d-none d-lg-block" src="/images/banner/widget-banner-2.jpg" alt="ads banner" />
                                        <img className="d-block d-lg-none" src="/images/banner/widget-banner-3.jpg" alt="ads banner" />
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
