'use client';

import Link from 'next/link';

export default function FloatingSocials() {
    const socials = [
        {
            name: 'Instagram',
            icon: 'fab fa-instagram',
            url: 'https://www.instagram.com/maryamstudiocdc'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/company/maryam-special-studio/'
        },
        {
            name: 'WhatsApp',
            icon: 'fab fa-whatsapp',
            url: 'https://wa.me/917702426362'
        }
    ];

    return (
        <div className="floating-social-sidebar">
            {socials.map((social, index) => (
                <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-bubble"
                    title={social.name}
                >
                    <i className={social.icon}></i>
                </Link>
            ))}
        </div>
    );
}
