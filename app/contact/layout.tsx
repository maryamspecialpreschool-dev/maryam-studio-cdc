import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Best Child Development Centre in Hyderabad',
    description: 'Get in touch with Maryam Child Development Studio in Hyderabad. Book a consultation for occupational therapy, speech therapy, and autism support.',
    keywords: 'contact Maryam Studio, autism center Hyderabad address, book autism therapy Hyderabad',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
