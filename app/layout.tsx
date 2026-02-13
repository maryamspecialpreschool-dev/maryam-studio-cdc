import type { Metadata, Viewport } from "next";
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScriptLoader from '@/components/ScriptLoader';
import BookingModal from '@/components/BookingModal';
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
        <link rel="stylesheet" href="/css/custom.css?v=2" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico?v=3" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico?v=3" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/favicon.ico?v=3" />

        {/* Schema.org Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://maryamstudio.com",
              "name": "Maryam Child Development Studio",
              "alternateName": "Maryam Studio",
              "description": "Multidisciplinary child development center in Hyderabad offering occupational therapy, speech therapy, physiotherapy, ABA therapy, and special education for children with autism and developmental delays.",
              "url": "https://maryamstudio.com",
              "telephone": "+919876543210",
              "email": "info@maryamstudio.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hyderabad",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.385044",
                "longitude": "78.486671"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Hyderabad",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Telangana"
                  }
                }
              ],
              "servesCuisine": null,
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/maryamstudio",
                "https://www.linkedin.com/company/maryamstudio"
              ]
            })
          }}
        />

        {/* Schema.org Structured Data - MedicalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Maryam Child Development Studio",
              "description": "Specialized child development center providing therapy services for children with autism and developmental delays in Hyderabad.",
              "url": "https://maryamstudio.com",
              "telephone": "+919876543210",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "medicalSpecialty": [
                "Occupational Therapy",
                "Speech Therapy",
                "Physiotherapy",
                "Behavioral Therapy",
                "Special Education"
              ],
              "availableService": [
                {
                  "@type": "MedicalTherapy",
                  "name": "Occupational Therapy",
                  "description": "Pediatric occupational therapy for sensory processing and motor skills"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Speech Therapy",
                  "description": "Speech and language therapy for communication disorders"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "Physiotherapy",
                  "description": "Pediatric physiotherapy for gross motor development"
                },
                {
                  "@type": "MedicalTherapy",
                  "name": "ABA Therapy",
                  "description": "Applied Behavior Analysis for autism spectrum disorder"
                }
              ]
            })
          }}
        />

        {/* Schema.org Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Maryam Child Development Studio",
              "url": "https://maryamstudio.com",
              "logo": "https://maryamstudio.com/images/logo.jpeg",
              "description": "Leading child development center in Hyderabad specializing in autism therapy and special education",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+917702426362",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Telugu"]
              },
              "sameAs": [
                "https://www.instagram.com/maryamstudio",
                "https://www.linkedin.com/company/maryamstudio"
              ]
            })
          }}
        />
      </head>
      <body>
        <ScriptLoader />
        <Header />

        {children}

        <Footer />
        <BookingModal />


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
