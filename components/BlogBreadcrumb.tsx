import Link from 'next/link';
import Image from 'next/image';

interface BlogBreadcrumbProps {
    title: string;
    bgImage?: string;
}

export default function BlogBreadcrumb({ title, bgImage }: BlogBreadcrumbProps) {
    const backgroundUrl = bgImage || '/images/bg/breadcrumb-bg-1.jpg';

    return (
        <div className="breadcumb-wrapper blog-breadcrumb-style position-relative overflow-hidden">
            <Image
                src={backgroundUrl}
                alt="Background"
                fill
                priority
                style={{ objectFit: 'cover', zIndex: -1 }}
                quality={75}
            />
            <div className="container">
                <div className="breadcumb-content">
                    <h2 className="breadcumb-title">{title}</h2>
                    <ul className="breadcumb-menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li className="active">Detail</li>
                    </ul>
                </div>
            </div>
            {/* Dark overlay for better text readability */}
            <div className="breadcrumb-overlay"></div>
        </div>
    );
}
