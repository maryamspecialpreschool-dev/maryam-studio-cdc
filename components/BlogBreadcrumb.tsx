import Link from 'next/link';

interface BlogBreadcrumbProps {
    title: string;
    bgImage?: string;
}

export default function BlogBreadcrumb({ title, bgImage }: BlogBreadcrumbProps) {
    const backgroundUrl = bgImage || '/images/bg/breadcrumb-bg-1.jpg';

    return (
        <div
            className="breadcumb-wrapper blog-breadcrumb-style"
            style={{
                backgroundImage: `url('${backgroundUrl}')`
            }}
        >
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
