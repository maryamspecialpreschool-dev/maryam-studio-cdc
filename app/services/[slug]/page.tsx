import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { notFound } from 'next/navigation';
import { servicesData, ServiceData } from '@/lib/servicesData';
import { Metadata } from 'next';

// This is required for static export to work properly with dynamic routes
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
        description: service.seoDescription || service.description,
        keywords: service.seoKeywords,
        alternates: {
            canonical: `/services/${slug}`,
        },
        openGraph: {
            title: service.seoTitle || service.title,
            description: service.seoDescription || service.description,
            images: [service.image],
        },
    };
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug] as any; // Cast to any to access the structured fields not in the interface yet

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
                                <div className="service-img position-relative mb-30 bg-light" style={{ height: '500px', overflow: 'hidden' }}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        style={{ objectFit: service.image.includes('/blog/') ? 'contain' : 'cover' }}
                                        className="rounded-3"
                                    />
                                </div>
                                <h2 className="single-title">{service.title} in Hyderabad</h2>
                                <div className="service-content">
                                    <p className="mb-30">{service.description}</p>

                                    <div className="service-body-content mb-30" dangerouslySetInnerHTML={{ __html: service.content || '' }}></div>

                                    {service.quote && (
                                        <blockquote className="block-quote style-left-icon">
                                            <p>{service.quote}</p>
                                            {service.quoteAuthor && <cite>{service.quoteAuthor}</cite>}
                                        </blockquote>
                                    )}

                                    {service.whoBenefits && service.whoBenefits.length > 0 && (
                                        <>
                                            <h3 className="h3 mt-35">Who Can Benefit from {service.title}?</h3>
                                            <p>Our program is designed to support children with various developmental needs, including:</p>
                                            <div className="check-list style-4 mt-20 mb-35">
                                                <ul>
                                                    {service.whoBenefits.map((item: string, index: number) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    )}

                                    {service.benefits && service.benefits.length > 0 && (
                                        <>
                                            <h3 className="h3 mt-35">Key Benefits</h3>
                                            <div className="check-list style-4 mt-20 mb-35">
                                                <ul>
                                                    {service.benefits.map((benefit: string, index: number) => (
                                                        <li key={index}>{benefit}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    )}

                                    {service.approach && service.approach.length > 0 && (
                                        <>
                                            <h3 className="h3 mt-35">Our Approach to {service.title}</h3>
                                            <div className="accordion accordion-style1" id="accordionApproach">
                                                {service.approach.map((item: any, index: number) => (
                                                    <div className="accordion-item" key={index}>
                                                        <h2 className="accordion-header" id={`heading${index}`}>
                                                            <button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={`collapse${index}`}>
                                                                {item.title}
                                                            </button>
                                                        </h2>
                                                        <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionApproach">
                                                            <div className="accordion-body">
                                                                <p>{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {service.faqs && service.faqs.length > 0 && (
                                        <>
                                            <h3 className="h3 mt-35">Frequently Asked Questions</h3>
                                            <div className="accordion accordion-style2 mt-20" id="accordionFAQ">
                                                {service.faqs.map((faq: any, index: number) => (
                                                    <div className="accordion-item" key={index}>
                                                        <h2 className="accordion-header" id={`faqHeading${index}`}>
                                                            <button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faqCollapse${index}`} aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={`faqCollapse${index}`}>
                                                                {faq.question}
                                                            </button>
                                                        </h2>
                                                        <div id={`faqCollapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`faqHeading${index}`} data-bs-parent="#accordionFAQ">
                                                            <div className="accordion-body">
                                                                <p>{faq.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    <div className="text-center mt-50">
                                        <h3>Ready to start?</h3>
                                        <p>Contact us today to schedule a consultation with our experts in Hyderabad.</p>
                                        <Link href="/contact" className="vs-btn wave-btn">Book a Visit</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-xl-3 col-lg-4">
                            <aside className="sidebar-area service-sidebar">
                                <div className="widget widget_search wow fadeInUp" data-wow-delay="0.1s">
                                    <form className="search-form" action="#">
                                        <input type="text" placeholder="Search Here" />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="widget wow fadeInUp" data-wow-delay="0.1s">
                                    <h4 className="widget_title">Our Services</h4>
                                    <ul className="popular-service-wrap">
                                        {Object.entries(servicesData).map(([s, data]) => (
                                            <li key={s}>
                                                <Link href={`/services/${s}`} className={s === slug ? 'active' : ''}>
                                                    {data.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="widget wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="banner-2 position-relative" style={{ height: '400px' }}>
                                        <Image
                                            src="/images/banner/widget-banner-2.jpg"
                                            alt="ads banner"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="d-none d-lg-block rounded-3"
                                        />
                                        <Image
                                            src="/images/banner/widget-banner-3.jpg"
                                            alt="ads banner"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="d-block d-lg-none rounded-3"
                                        />
                                        <div className="banner-content position-absolute bottom-0 start-0 w-100 p-3 text-center">
                                            <Link href="/contact" className="vs-btn style-2">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget wow fadeInUp" data-wow-delay="0.1s">
                                    <h4 className="widget_title">Opening Hours</h4>
                                    <div className="widget-time">
                                        <ul>
                                            <li>Mon - Sat <span>8:30 AM - 4:00 PM</span></li>
                                            <li>Sunday <span>Closed</span></li>
                                        </ul>
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
