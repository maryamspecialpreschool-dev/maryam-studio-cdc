'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/mvzbrpzp", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <main>
            <Breadcrumb title="Contact Us" />

            <section className="contact-section space-page">
                <div className="container">
                    <div className="row gx-50 gy-30">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="contact-form-box">
                                <h2 className="contact-title">Leave a Message</h2>
                                <p className="mb-35">We are here to help. Send us your query and we will get back to you as soon as possible.</p>

                                <form className="contact-form ajax-contact" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-12">
                                            <label htmlFor="name" className="form-label">Your Name*</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Name..."
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="email" className="form-label">Your Email*</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Email..."
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="message" className="form-label">Your Message*</label>
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                id="message"
                                                placeholder="Describe Your Inquiry"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="form-group col-12">
                                            <button type="submit" className="vs-btn wave-btn" disabled={status === 'submitting'}>
                                                {status === 'submitting' ? 'Sending...' : 'Send Now'}
                                            </button>
                                        </div>
                                    </div>
                                    {status === 'success' && (
                                        <p className="form-messages mb-0 mt-3 text-success">Thank you! Your message has been sent successfully.</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="form-messages mb-0 mt-3 text-danger">Oops! Something went wrong. Please try again.</p>
                                    )}
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.1s">
                            <div className="contact-info-box">
                                <h1 className="contact-title h2">Contact the Leading Autism School in Hyderabad</h1>
                                <p className="mb-35">Looking for professional autism therapy in Hyderabad? Visit Maryam Child Development Studio & Research for Autism.</p>
                                <div className="info-media border-bottom pb-4 mb-4">
                                    <div className="media-icon">
                                        <Image src="/images/icon/location.png" alt="location icon" width={60} height={60} />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="info-title">Office Address:</h4>
                                        <p className="info-text">Maryam Child Development Studio<br />Hyderabad, India</p>
                                    </div>
                                </div>
                                <div className="info-media border-bottom pb-4 mb-4">
                                    <div className="media-icon">
                                        <Image src="/images/icon/phone.png" alt="phone icon" width={60} height={60} />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="info-title">Call Us For Help:</h4>
                                        <p className="info-text"><a href="tel:+917702426362" className="text-inherit">+91 77024 26362</a></p>
                                    </div>
                                </div>
                                <div className="info-media pb-4">
                                    <div className="media-icon">
                                        <Image src="/images/icon/email.png" alt="email icon" width={60} height={60} />
                                    </div>
                                    <div className="media-body">
                                        <h4 className="info-title">Mail info:</h4>
                                        <p className="info-text"><a href="mailto:maryamspecialpreschool@gmail.com" className="text-inherit">maryamspecialpreschool@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="contact-location mt-40">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.301598260443!2d78.41348067462718!3d17.3973080025203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970029f31d09%3A0x54949668e3cdba90!2sMaryam%20Studio%20CDC%20and%20Research%20for%20Autism!5e0!3m2!1sen!2sin!4v1771663506969!5m2!1sen!2sin"
                                        width="100%"
                                        height="450"
                                        style={{ border: 0, borderRadius: '15px' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps - Maryam Child Development Studio Hyderabad"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
