import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Clinic Gallery | Maryam Child Development Studio Hyderabad',
    description: 'Explore our state-of-the-art sensory-friendly facilities in Hyderabad. See our therapy rooms, classrooms, and play areas for children with autism.',
    keywords: 'autism clinic gallery, child development center photos Hyderabad, sensory-friendly facility Hyderabad',
    alternates: {
        canonical: '/gallery',
    },
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
