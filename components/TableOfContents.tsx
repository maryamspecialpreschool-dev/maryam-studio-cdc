'use client';

import { useEffect, useState } from 'react';

export default function TableOfContents({ content }: { content: string }) {
    const [headings, setHeadings] = useState<{ id: string, text: string, level: number }[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const div = document.createElement('div');
        div.innerHTML = content;
        const headingElements = Array.from(div.querySelectorAll('h2, h3'));

        const extractedHeadings = headingElements.map((el, index) => {
            const text = el.textContent || '';
            const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

            // We need to actually inject these IDs into the real DOM too
            // This is a bit tricky since we use dangerouslySetInnerHTML in the parent
            return {
                id,
                text,
                level: parseInt(el.tagName.replace('H', ''))
            };
        });

        setHeadings(extractedHeadings);

        // Intersection Observer to highlight active heading
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -70% 0px' }
        );

        // This requires the IDs to be present in the main content
        // We will handle that by adding them in the parent or via a script
        const contentHeadings = document.querySelectorAll('.blog-content-modern h2, .blog-content-modern h3');
        contentHeadings.forEach((el, index) => {
            const h = extractedHeadings[index];
            if (h) {
                el.id = h.id;
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, [content]);

    if (headings.length === 0) return null;

    return (
        <div className="widget-card mb-4 p-4 rounded-4 shadow-sm bg-white toc-widget sticky-top-custom">
            <h4 className="h5 mb-4 sidebar-widget-title">On this page</h4>
            <nav className="toc-nav">
                <ul className="list-unstyled mb-0">
                    {headings.map((h, i) => (
                        <li key={i} className={`toc-item level-${h.level} ${activeId === h.id ? 'active' : ''}`}>
                            <a
                                href={`#${h.id}`}
                                className="toc-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {h.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
