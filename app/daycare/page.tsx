import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Daycare for Special Needs Children in Hyderabad | Maryam Studio',
    description: 'Specialized daycare program for children with autism & developmental delays in Hyderabad. Safe, structured environment with therapy integration.',
    keywords: 'daycare Hyderabad, special needs daycare Hyderabad, autism daycare Hyderabad, child care Hyderabad',
    openGraph: {
        title: 'Daycare for Special Needs Children in Hyderabad',
        description: 'Specialized daycare program for children with autism & developmental delays in Hyderabad.',
        url: 'https://maryamstudio.com/daycare',
        type: 'website',
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What makes your daycare different from regular daycare in Hyderabad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our daycare in Hyderabad is specifically designed for children with autism and developmental delays. We integrate therapy (ABA, speech, OT) throughout the day in a structured, sensory-friendly environment with trained special educators."
            }
        },
        {
            "@type": "Question",
            "name": "What are the daycare timings in Hyderabad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our full-day daycare program runs from 9:00 AM to 3:00 PM, Monday through Friday. We also offer extended care options for working parents in Hyderabad."
            }
        },
        {
            "@type": "Question",
            "name": "Is your daycare suitable for children with autism in Hyderabad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our daycare is specifically designed for children with autism and developmental delays. We provide a structured, predictable routine with sensory supports and individualized care in Hyderabad."
            }
        }
    ]
};

export default function DaycarePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <main>
                <section className="breadcumb-wrapper" style={{ backgroundImage: 'url(/images/bg/breadcumb-bg.jpg)' }}>
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Daycare Program in Hyderabad</h1>
                            <ul className="breadcumb-menu">
                                <li><Link href="/">Home</Link></li>
                                <li>Daycare</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="service-details space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-detail-content">
                                    <img src="/images/services/daycare-main.jpg" alt="Daycare Hyderabad" className="w-100 mb-4" />

                                    <h2>Specialized Daycare for Children with Special Needs in Hyderabad</h2>
                                    <p>
                                        Maryam Child Development Studio offers a unique <strong>daycare program in Hyderabad</strong> designed specifically for children with autism and developmental delays. Unlike traditional daycare, our program integrates therapy and education throughout the day.
                                    </p>
                                    <p>
                                        Located in <strong>Hyderabad</strong>, we serve families from <strong>Banjara Hills, Jubilee Hills, Gachibowli, Kukatpally, Madhapur, Kondapur</strong>, and surrounding areas. Our daycare provides a safe, structured, and nurturing environment where children can learn, play, and grow.
                                    </p>

                                    <h3>What Makes Our Daycare Special?</h3>
                                    <ul className="check-list">
                                        <li>Therapy-integrated daycare (ABA, speech, OT woven into daily activities)</li>
                                        <li>Low child-to-staff ratio (maximum 4:1)</li>
                                        <li>Sensory-friendly environment</li>
                                        <li>Structured visual schedules</li>
                                        <li>Trained special educators and therapists</li>
                                        <li>Nutritious meals and snacks</li>
                                        <li>Safe outdoor play area</li>
                                    </ul>

                                    <h3>Daily Schedule</h3>
                                    <p>Our <strong>daycare in Hyderabad</strong> follows a predictable routine that helps children feel secure:</p>
                                    <div className="check-list">
                                        <ul>
                                            <li><strong>9:00 AM - 9:30 AM:</strong> Arrival & Circle Time</li>
                                            <li><strong>9:30 AM - 10:30 AM:</strong> Structured Learning Activities</li>
                                            <li><strong>10:30 AM - 11:00 AM:</strong> Snack Time & Sensory Break</li>
                                            <li><strong>11:00 AM - 12:00 PM:</strong> Therapy Sessions (Speech/OT/ABA)</li>
                                            <li><strong>12:00 PM - 12:30 PM:</strong> Lunch</li>
                                            <li><strong>12:30 PM - 1:30 PM:</strong> Quiet Time / Rest</li>
                                            <li><strong>1:30 PM - 2:30 PM:</strong> Play-Based Learning & Social Skills</li>
                                            <li><strong>2:30 PM - 3:00 PM:</strong> Closing Circle & Departure</li>
                                        </ul>
                                    </div>

                                    <h3>Who Can Enroll?</h3>
                                    <p>Our daycare program is designed for children aged 2-8 years with:</p>
                                    <ul className="check-list">
                                        <li>Autism Spectrum Disorder</li>
                                        <li>Developmental delays</li>
                                        <li>Speech and language delays</li>
                                        <li>Sensory processing challenges</li>
                                        <li>ADHD</li>
                                    </ul>

                                    <div className="faq-section mt-5">
                                        <h3>Frequently Asked Questions</h3>
                                        <div className="accordion" id="daycareFaqAccordion">
                                            <div className="accordion-item">
                                                <h4 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                                        What makes your daycare different from regular daycare in Hyderabad?
                                                    </button>
                                                </h4>
                                                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#daycareFaqAccordion">
                                                    <div className="accordion-body">
                                                        Our daycare in Hyderabad is specifically designed for children with autism and developmental delays. We integrate therapy (ABA, speech, OT) throughout the day in a structured, sensory-friendly environment with trained special educators.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h4 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                                        What are the daycare timings in Hyderabad?
                                                    </button>
                                                </h4>
                                                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#daycareFaqAccordion">
                                                    <div className="accordion-body">
                                                        Our full-day daycare program runs from 9:00 AM to 3:00 PM, Monday through Friday. We also offer extended care options for working parents in Hyderabad.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h4 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                                        Is your daycare suitable for children with autism in Hyderabad?
                                                    </button>
                                                </h4>
                                                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#daycareFaqAccordion">
                                                    <div className="accordion-body">
                                                        Yes, our daycare is specifically designed for children with autism and developmental delays. We provide a structured, predictable routine with sensory supports and individualized care in Hyderabad.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cta-box mt-5 p-4" style={{ background: '#f8f9fa', borderRadius: '10px' }}>
                                        <h3>Enroll in Our Daycare Program</h3>
                                        <p>Give your child a safe, nurturing environment where they can thrive. Contact us to schedule a visit to our Hyderabad facility.</p>
                                        <Link href="/contact" className="vs-btn wave-btn">Schedule Visit</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <aside className="sidebar-area">
                                    <div className="widget widget_categories">
                                        <h3 className="widget_title">Our Services</h3>
                                        <ul>
                                            <li><Link href="/occupational-therapy">Occupational Therapy</Link></li>
                                            <li><Link href="/speech-therapy">Speech Therapy</Link></li>
                                            <li><Link href="/physiotherapy">Physiotherapy</Link></li>
                                            <li><Link href="/aba-therapy">ABA & Behavioural Therapy</Link></li>
                                            <li className="active"><Link href="/daycare">Daycare Program</Link></li>
                                            <li><Link href="/primary-education">Primary Education</Link></li>
                                            <li><Link href="/living-skills">Living Skills Training</Link></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_contact">
                                        <h3 className="widget_title">Contact Us</h3>
                                        <div className="contact-info">
                                            <p><i className="fal fa-map-marker-alt"></i> Hyderabad, Telangana, India</p>
                                            <p><i className="fal fa-phone"></i> <a href="tel:+917702426362">+91 77024 26362</a></p>
                                            <p><i className="fal fa-envelope"></i> <a href="mailto:maryamspecialpreschool@gmail.com">maryamspecialpreschool@gmail.com</a></p>
                                        </div>
                                    </div>

                                    <div className="widget">
                                        <h3 className="widget_title">Areas We Serve</h3>
                                        <ul className="check-list">
                                            <li>Banjara Hills</li>
                                            <li>Jubilee Hills</li>
                                            <li>Gachibowli</li>
                                            <li>Madhapur</li>
                                            <li>Kukatpally</li>
                                            <li>Kondapur</li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
