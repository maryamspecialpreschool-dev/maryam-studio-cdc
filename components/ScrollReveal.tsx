'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.blog-content-modern h2, .blog-content-modern p, .blog-content-modern ul, .blog-content-modern blockquote');
        elements.forEach((el) => {
            el.classList.add('reveal-on-scroll');
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
