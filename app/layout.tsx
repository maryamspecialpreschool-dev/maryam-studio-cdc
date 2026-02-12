import type { Metadata, Viewport } from "next";
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScriptLoader from '@/components/ScriptLoader';
import "./globals.css";

// We keep the exact detailed SEO based on the user request
export const metadata: Metadata = {
  title: "Maryam Child Development Studio & Research for Autism | Hyderabad",
  description: "Maryam Child Development Studio in Hyderabad offers specialized autism therapy, special needs education, and sensory-friendly programs for child development.",
  keywords: "autism school in Hyderabad, child development center, autism therapy in Hyderabad, special needs school, sensory-friendly school, full-day autism program, autism support services",
  authors: [{ name: "Maryam Child Development Studio" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also 'shrink-to-fit=no' is not standard viewport key but often used in meta tag. 
  // Next.js Viewport type doesn't support custom strings directly other than standard keys.
  // However, `width` and `initialScale` cover most needs.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&amp;family=Catamaran:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />

        {/* CSS Assets */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/slick.min.css" />
        <link rel="stylesheet" href="/css/style.css" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <ScriptLoader />
        <Header />

        {children}

        <Footer />

        {/* JavaScript Assets */}
        {/* Load jQuery first */}
        <Script src="/js/jquery-3.5.0.min.js" strategy="beforeInteractive" />

        {/* Load other libs */}
        <Script src="/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/parallax.min.js" strategy="afterInteractive" />
        <Script src="/js/vscustom-carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery-ui.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/ajax-mail.js" strategy="afterInteractive" />

        {/* Main JS - responsible for initializing everything */}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
