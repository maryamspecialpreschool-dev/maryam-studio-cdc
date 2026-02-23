import Link from 'next/link';
import Image from 'next/image';

interface BreadcrumbProps {
    title: string;
}

export default function Breadcrumb({ title }: BreadcrumbProps) {
    return (
        <div className="breadcumb-wrapper position-relative overflow-hidden">
            <Image
                src="/images/bg/breadcrumb-bg-1.jpg"
                alt="Breadcrumb Background"
                fill
                priority
                style={{ objectFit: 'cover', zIndex: -1 }}
                quality={75}
            />
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">{title}</h1>
                    <ul className="breadcumb-menu">
                        <li><Link href="/">Home</Link></li>
                        <li className="active">{title}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
