import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { servicesData } from '@/lib/servicesData';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Autism Therapy Services Hyderabad | Best Full-Day Programs',
    description: 'Comprehensive autism therapy services in Hyderabad. Our programs include ABA therapy, Speech therapy, Occupational therapy, and full-day developmental support.',
    keywords: 'autism services Hyderabad, therapy for autistic children Hyderabad, best child development services Hyderabad, specialized autism treatment Hyderabad',
    alternates: {
        canonical: '/services',
    },
};

export default function ServicesPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: Object.entries(servicesData).map(([slug, service], index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `https://maryamstudiocdc.in/services/${slug}`,
            name: service.title,
            description: service.description,
            image: service.image
        }))
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumb title="Autism Therapy Services in Hyderabad" />

            {/* Service Section */}
            <section className="service-section space">
                <div className="container">

                    <div className="row gy-30 justify-content-center">
                        {Object.entries(servicesData).map(([slug, service], index) => (
                            <div key={slug} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`}>
                                <div className="service-box" data-overlay="title" data-opacity="6">
                                    <div className="service-img position-relative" style={{ height: '500px' }}>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="service-content">
                                        <div className="service-icon">
                                            <Image
                                                src={`/images/icon/sr-${(index % 6) + 1}.png`}
                                                alt="icon"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                        <h3 className="service-title"><Link href={`/services/${slug}`}>{service.title}</Link></h3>
                                        <p className="service-text">{service.description.substring(0, 100)}{service.description.length > 100 ? '...' : ''}</p>
                                        <Link href={`/services/${slug}`} className="vs-btn style-2">See Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section space-shape-plus position-relative overflow-hidden" data-opacity="8" data-overlay="custom">
                <Image
                    src="/images/bg/cta-4.jpg"
                    alt="CTA Background"
                    fill
                    style={{ objectFit: 'cover', zIndex: -1 }}
                    quality={75}
                />
                <div className="container text-center z-index-common">
                    <div className="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
                        <span className="sub-title text-white">Enrollment Open</span>
                        <h2 className="sec-title text-white">Start Your Child's Journey Today <a className="d-block text-inherit" href="tel:+917702426362">+91 77024 26362</a></h2>
                    </div>
                    <Link href="/contact" className="vs-btn wave-btn">Schedule Assessment</Link>
                </div>
                <div className="section-before style-2">
                    <Image src="/images/shape/main-shape-before.png" alt="shape" width={1920} height={100} />
                </div>
                <div className="section-after style-2">
                    <Image src="/images/shape/main-shape-after.png" alt="shape" width={1920} height={100} />
                </div>
            </section>

            {/* Simple Section */}
            <section className="mockup1 space-extra-top position-relative overflow-hidden">
                <Image
                    src="/images/bg/bg_2.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover', zIndex: -1 }}
                    quality={75}
                />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <div className="mb-70">
                                <Image src="/images/icon/mail-big-icon.png" alt="icon" width={100} height={100} />
                            </div>
                            <h2 className="h1">Contact Us For Information</h2>
                            <p className="mb-35">We are here to answer your questions and guide you through the process of enrollment and therapy planning.</p>
                            <Link href="/contact" className="vs-btn wave-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
