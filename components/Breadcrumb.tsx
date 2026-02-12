import Link from 'next/link';

interface BreadcrumbProps {
    title: string;
}

export default function Breadcrumb({ title }: BreadcrumbProps) {
    return (
        <div className="breadcumb-wrapper" style={{ backgroundImage: `url('/images/bg/breadcrumb-bg-1.jpg')` }}>
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
