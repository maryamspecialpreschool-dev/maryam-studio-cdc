'use client';

import { useState } from 'react';

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        childAge: '',
        phone: '',
        email: '',
        service: '',
        preferredDate: '',
        message: ''
    });

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can add your form submission logic
        console.log('Form submitted:', formData);
        alert('Thank you! We will contact you soon.');
        closeModal();
        setFormData({
            parentName: '',
            childName: '',
            childAge: '',
            phone: '',
            email: '',
            service: '',
            preferredDate: '',
            message: ''
        });
    };

    // Expose openModal function globally
    if (typeof window !== 'undefined') {
        (window as any).openBookingModal = openModal;
    }

    return (
        <div className={`booking-modal ${isOpen ? 'active' : ''}`} onClick={closeModal}>
            <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="booking-modal-close" onClick={closeModal}>&times;</button>

                <h2 className="booking-form-title">Book a Visit</h2>
                <p className="booking-form-subtitle">Schedule a consultation with our experts</p>

                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="parentName">Parent/Guardian Name *</label>
                        <input
                            type="text"
                            id="parentName"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="childName">Child's Name *</label>
                        <input
                            type="text"
                            id="childName"
                            name="childName"
                            value={formData.childName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="childAge">Child's Age *</label>
                        <input
                            type="text"
                            id="childAge"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            placeholder="e.g., 5 years"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="service">Service Interested In *</label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="occupational-therapy">Occupational Therapy</option>
                            <option value="speech-therapy">Speech Therapy</option>
                            <option value="physiotherapy">Physiotherapy</option>
                            <option value="aba-therapy">ABA & Behavioural Therapy</option>
                            <option value="daycare">Daycare Program</option>
                            <option value="primary-education">Primary Education</option>
                            <option value="living-skills">Living Skills Training</option>
                            <option value="consultation">General Consultation</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="preferredDate">Preferred Visit Date</label>
                        <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Additional Information</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your child's needs..."
                        ></textarea>
                    </div>

                    <button type="submit" className="vs-btn wave-btn">Submit Request</button>
                </form>
            </div>
        </div>
    );
}
