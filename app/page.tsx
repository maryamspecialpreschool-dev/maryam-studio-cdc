'use client';

import Link from 'next/link';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Maryam Child Development Studio offer in Hyderabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive services including Occupational Therapy, Speech Therapy, Physiotherapy, ABA Therapy, Daycare, Primary Education, and Living Skills Training for children with autism and developmental delays in Hyderabad."
      }
    },
    {
      "@type": "Question",
      "name": "Where is the best child development center in Hyderabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maryam Child Development Studio is a leading multidisciplinary child development center in Hyderabad, serving families from Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Kukatpally, and Kondapur."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide therapy for children with autism in Hyderabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in autism therapy including ABA therapy, speech therapy, occupational therapy, and integrated special education programs for children with autism in Hyderabad."
      }
    },
    {
      "@type": "Question",
      "name": "What areas of Hyderabad do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve families across Hyderabad including Banjara Hills, Jubilee Hills, Gachibowli, Kukatpally, Madhapur, Kondapur, and surrounding neighborhoods in Telangana."
      }
    }
  ]
};

const services = [
  {
    title: 'Occupational Therapy',
    slug: 'occupational-therapy',
    description: 'Expert occupational therapy for children in Hyderabad. Specialized in sensory processing, fine motor skills, and daily living activities.',
    image: '/images/services/ot-1.jpg',
    icon: '/images/icon/sr2-1.svg'
  },
  {
    title: 'Speech Therapy',
    slug: 'speech-therapy',
    description: 'Professional speech therapy for toddlers and children in Hyderabad. Helping with speech delays, language development, and communication.',
    image: '/images/services/speech-1.jpg',
    icon: '/images/icon/sr2-2.svg'
  },
  {
    title: 'Physiotherapy',
    slug: 'physiotherapy',
    description: 'Pediatric physiotherapy for kids in Hyderabad. Improving gross motor skills, strength, and physical development.',
    image: '/images/services/physio-1.jpg',
    icon: '/images/icon/sr2-3.svg'
  },
  {
    title: 'ABA & Behavioural Therapy',
    slug: 'aba-therapy',
    description: 'Evidence-based ABA therapy for autism in Hyderabad. Led by certified BCBAs to help children reach their potential.',
    image: '/images/services/aba-1.jpg',
    icon: '/images/icon/sr2-4.svg'
  },
  {
    title: 'Daycare Program',
    slug: 'daycare',
    description: 'Specialized daycare for children with special needs in Hyderabad. Safe, structured environment with therapy integration.',
    image: '/images/services/daycare-1.jpg',
    icon: '/images/icon/sr2-5.svg'
  },
  {
    title: 'Primary Education',
    slug: 'primary-education',
    description: 'Special education school in Hyderabad for children with developmental delays. Individualized learning with therapy support.',
    image: '/images/services/education-1.jpg',
    icon: '/images/icon/sr2-6.svg'
  },
  {
    title: 'Living Skills Training',
    slug: 'living-skills',
    description: 'ADL and living skills training in Hyderabad. Teaching independence and self-care skills for children with autism.',
    image: '/images/services/living-skills-1.jpg',
    icon: '/images/icon/sr2-1.svg'
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero Section - Index-4 Style */}
        <section className="vs-hero-wrapper-four position-relative" data-bg-src="/images/bg/hero4-1.jpg">
          <div className="container">
            <div className="hero-content4 text-center text-md-start">
              <span className="hero-subtitle mb-2" data-ani="slideinup" data-ani-delay="0s">Maryam Child Development Studio</span>
              <h1 className="hero-title mb-4" data-ani="slideinup" data-ani-delay="0.2s">Autism School in Hyderabad</h1>
              <p className="hero-text text-white mb-4 fs-5" data-ani="slideinup" data-ani-delay="0.3s" style={{ maxWidth: '600px' }}>
                Hyderabad’s first full-day concept-based autism school combining education, therapy, and research to help every child reach their potential.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <button onClick={() => (window as any).openBookingModal?.()} className="vs-btn wave-btn" data-ani="slideinup" data-ani-delay="0.4s">Book a visit</button>
                <Link href="#services" className="vs-btn wave-btn style-2" data-ani="slideinup" data-ani-delay="0.5s">Our Services</Link>
              </div>
            </div>
          </div>
          <div className="shape-mockup moving d-none d-md-block" data-top="10%" data-left="0%"><img src="/images/icon/bird-2.png" alt="shapes" /></div>
          <div className="shape-mockup movingBottomLeft" data-bottom="20%" data-left="0%"><img src="/images/icon/ballon-3.png" alt="shapes" /></div>
          <div className="shape-mockup moving z-index-3 d-none d-xl-block" data-bottom="2%" data-right="2%"><img src="/images/icon/hero-icon1.png" alt="shapes" /></div>
          <div className="section-after style-2 d-none d-md-block">
            <img src="/images/shape/hero-shep.png" alt="shape" />
          </div>
        </section>

        {/* Services Section - Index-4 Style (Carousel) */}
        <section id="services" className="services-section-two space">
          <div className="container">
            <div className="row mb-30 align-items-center wow fadeInUp" data-wow-delay="0.1s">
              <div className="col-lg-5">
                <div className="title-area text-center text-lg-start mb-0 wow fadeInUp" data-wow-delay="0.1s">
                  <span className="sub-title">What We Offer</span>
                  <h2 className="sec-title">Comprehensive Autism Therapy Services</h2>
                </div>
              </div>
              <div className="col-auto ms-auto">
                <div className="vs-icon-box d-none d-lg-block">
                  <button data-slick-prev="#sbox2" className="icon-btn style-2 arrow-left"><i className="far fa-arrow-left"></i></button>
                  <button data-slick-next="#sbox2" className="icon-btn style-2 arrow-right ml-5"><i className="far fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
            <div className="row vs-carousel" data-slide-show="3" data-lg-slide-show="3" data-md-slide-show="2" id="sbox2">
              {services.slice(0, 6).map((service) => {
                return (
                  <div key={service.slug} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-box-two">
                      <div className="service-img">
                        <img src={service.image} alt={service.title} />

                      </div>
                      <div className="service-content">
                        <h3 className="service-title h4"><Link href={`/${service.slug}`}>{service.title}</Link></h3>
                        <p className="service-text">{service.description.substring(0, 100)}...</p>
                        <Link href={`/${service.slug}`} className="vs-btn style-2 wave-btn">See Details</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* About Section - Index-4 Style */}
        <section className="about-section-two space" data-bg-src="/images/bg/about-bg2-1.png">
          <div className="container">
            <div className="row gy-30 align-items-center">
              <div className="col-xl-5 col-lg-12 wow fadeInLeft" data-wow-delay="0.1s">
                <div className="about-img text-center text-lg-start">
                  <img className="image-one" src="/images/normal/about2-1.jpg" alt="about" />
                  <img className="image" src="/images/normal/about2-2.jpg" alt="about" />
                  <div className="anim-image">
                    <img className="image-three" src="/images/shape/circle2-2.png" alt="about" />
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-12 wow fadeInRight" data-wow-delay="0.1s">
                <div className="content-box">
                  <div className="title-area">
                    <span className="sub-title">About Maryam Studio</span>
                    <h2 className="sec-title">A Parent-Led Autism School in Hyderabad</h2>
                  </div>
                  <p>Maryam Child Development Studio & Research for Autism is Hyderabad’s first concept-based autism school. Unlike traditional therapy centers that offer short sessions, we provide a full-day, structured, and immersive environment where learning and therapy happen throughout the day.</p>
                  <p>Founded by parents who understand the journey, our goal is simple: to help every child move toward independence, confidence, and inclusion.</p>

                  <div className="check-list">
                    <ul>
                      <li>Full-Day Integrated Programs</li>
                      <li>Sensory-Friendly Environment</li>
                    </ul>
                    <ul>
                      <li>Certified Therapists & Special Educators</li>
                      <li>Research-Based Interventions (ABA, ESDM)</li>
                    </ul>
                  </div>
                  <div className="two-btns">
                    <Link href="/contact" className="vs-btn wave-btn">Schedule a Visit</Link>
                    <Link href="/about" className="vs-btn wave-btn style-1">Read Our Story</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="anim-img"><img src="/images/icon/kids.png" alt="" /></div>
          <div className="tadi shapePulse d-none d-lg-block" data-bottom="23%" data-right="6%"><img src="/images/icon/tadi.png" alt="shapes" /></div>
        </section>

        {/* Counter Section - Index-4 Style */}
        <section className="counter-section-two space" style={{ backgroundColor: '#6d1b6d', backgroundImage: 'none' }}>
          <div className="container">
            <div className="row gy-30 justify-content-between">
              <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="counter-box-two">
                  <div className="counter-icon">
                    <img src="/images/icon/counter2-1.png" alt="icon" />
                  </div>
                  <div className="counter-info">
                    <h2 className="counter-number"><span className="counter">8</span></h2>
                    <p className="counter-text">Specialists</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="counter-box-two">
                  <div className="counter-icon">
                    <img src="/images/icon/counter2-2.png" alt="icon" />
                  </div>
                  <div className="counter-info">
                    <h2 className="counter-number"><span className="counter">5</span></h2>
                    <p className="counter-text">Years of Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="counter-box-two">
                  <div className="counter-icon">
                    <img src="/images/icon/counter2-3.png" alt="icon" />
                  </div>
                  <div className="counter-info">
                    <h2 className="counter-number"><span className="counter">50</span>+</h2>
                    <p className="counter-text">Families Supported</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="counter-box-two">
                  <div className="counter-icon">
                    <img src="/images/icon/counter2-3.png" alt="icon" />
                  </div>
                  <div className="counter-info">
                    <h2 className="counter-number"><span className="counter">48</span></h2>
                    <p className="counter-text">Hours Weekly Therapy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grass d-none d-lg-block"><img src="/images/shape/grass.png" alt="shapes" /></div>
        </section>

        {/* Simple Section - Philosophy */}
        <section className="simple-section space">
          <div className="row g-0 align-items-center">
            <div className="col-xl-5 col-lg-12 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="img-box-1">
                <img src="/images/normal/simple1-1.jpg" alt="photo" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 wow fadeInRight" data-wow-delay="0.1s">
              <div className="content-box">
                <span className="sub-title">Our Philosophy</span>
                <h2 className="sec-title">We Are Here To Help Your Child Reach The Next Level</h2>
                <p className="mb-50">We believe that every child has the potential to learn and grow. Our philosophy is built on patience, understanding, and the belief that with the right support, children with autism can achieve remarkable milestones.</p>
                <div className="simple-block">
                  <div className="feature-box-two">
                    <div className="feature-icon">
                      <img src="/images/icon/t2-1.png" alt="icon" />
                    </div>
                    <div className="feature-info">
                      <h4 className="feature-title">Expert Therapists</h4>
                      <p className="feature-text">Our team comprises certified BCBAs, Speech Therapists, and Occupational Therapists dedicated to your child's growth.</p>
                    </div>
                  </div>
                  <div className="feature-box-two">
                    <div className="feature-icon">
                      <img src="/images/icon/t2-2.png" alt="icon" />
                    </div>
                    <div className="feature-info">
                      <h4 className="feature-title">Holistic Approach</h4>
                      <p className="feature-text">We treat the whole child—social, emotional, and cognitive—not just isolated symptoms.</p>
                    </div>
                  </div>
                  <div className="feature-box-two">
                    <div className="feature-icon">
                      <img src="/images/icon/t2-3.png" alt="icon" />
                    </div>
                    <div className="feature-info">
                      <h4 className="feature-title">Parent Partnership</h4>
                      <p className="feature-text">We work hand-in-hand with parents to ensure therapy goals are reinforced at home.</p>
                    </div>
                  </div>
                </div>
                <img className="image" src="/images/normal/simple2-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="wave shapePulse d-none d-lg-block"><img src="/images/shape/wave.png" alt="shapes" /></div>
          <div className="letter shapePulse d-none d-lg-block"><img src="/images/shape/letter.png" alt="shapes" /></div>
        </section>

        {/* Why Section - Index-4 Style (Tabs) */}
        <section className="why-section-two space pt-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 wow fadeInLeft" data-wow-delay="0.1s">
                <div className="why-images">
                  <div className="content-box-two">
                    <span className="sub-title">Why Choose Us</span>
                    <h2 className="sec-title">Why Parents Trust Maryam Studio</h2>
                    <p className="mb-50">Choosing the right center is one of the most important decisions you will make. Here is why families in Hyderabad choose us for their child's autism therapy.</p>
                  </div>
                  <img src="/images/normal/why2-1.jpg" alt="photo" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 wow fadeInRight" data-wow-delay="0.1s">
                <div className="nav nav-tabs choose-tab justify-content-center justify-content-lg-start" id="choose-tab" role="tablist">
                  <button className="choose-btn active" id="choose-one-tab" data-bs-toggle="tab" data-bs-target="#choose-one" type="button" role="tab" aria-controls="choose-one" aria-selected="true">Consistent Routine</button>
                  <button className="choose-btn" id="choose-two-tab" data-bs-toggle="tab" data-bs-target="#choose-two" type="button" role="tab" aria-controls="choose-two" aria-selected="false">Integrated Care</button>
                  <button className="choose-btn" id="choose-three-tab" data-bs-toggle="tab" data-bs-target="#choose-three" type="button" role="tab" aria-controls="choose-three" aria-selected="false">Safety First</button>
                </div>
                <div className="tab-content choose-content" id="choose-tabContent">
                  <div className="tab-pane fade show active" id="choose-one" role="tabpanel" aria-labelledby="choose-one-tab">
                    <div className="content-box">
                      <h3 className="title">Predictability Breeds Confidence</h3>
                      <p>Our full-day program runs on a structured schedule that children can rely on. This reduces anxiety and behavioral issues, creating a fertile ground for learning.</p>
                      <div className="check-list">
                        <ul>
                          <li>Visual Schedules</li>
                          <li>Consistent Transitions</li>
                          <li>Daily Rituals</li>
                          <li>Regulated Sensory Breaks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="choose-two" role="tabpanel" aria-labelledby="choose-two-tab">
                    <div className="content-box">
                      <h3 className="title">All Therapies Under One Roof</h3>
                      <p>Stop driving all over Hyderabad. We integrate Speech, OT, and Behavioral Therapy into the school day, ensuring your child gets comprehensive support without the burnout.</p>
                      <div className="check-list">
                        <ul>
                          <li>Multi-disciplinary Team</li>
                          <li>Collaborative IEPs</li>
                          <li>Holistic Development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="choose-three" role="tabpanel" aria-labelledby="choose-three-tab">
                    <div className="content-box">
                      <h3 className="title">A Safe, Sensory-Friendly Space</h3>
                      <p>Our facility is designed specifically for children with sensory needs. From calming corners to safe play equipment, every detail prioritizes your child's physical and emotional safety.</p>
                      <div className="check-list">
                        <ul>
                          <li>Secure Facility</li>
                          <li>Trained Staff</li>
                          <li>Sensory Gym</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glob shapePulse d-none d-lg-block"><img src="/images/shape/glob.png" alt="shapes" /></div>
          <div className="star rotate d-none d-lg-block"><img src="/images/shape/star.png" alt="shapes" /></div>
        </section>



      </main>
    </>
  );
}
