import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { EnquiryPopupProvider } from "@/components/EnquiryPopup";

export const metadata: Metadata = {
  metadataBase: new URL('https://arzalnajah.com'),
  title: {
    default: "ARZ Al Najah Business Setup Services | Dubai Company Formation & UAE Business License",
    template: "%s | ARZ Al Najah Business Setup"
  },
  description: "Expert business setup and company formation services in Dubai & UAE. Mainland, Freezone, Offshore licenses from AED 5,000. Fast 3-5 day setup. 500+ companies formed. Free consultation: +971 52 314 9927",
  keywords: [
    "Dubai business setup",
    "UAE company formation",
    "mainland company setup Dubai",
    "freezone business setup UAE",
    "offshore company formation",
    "Dubai visa services",
    "PRO services Dubai",
    "corporate bank account UAE",
    "trade license Dubai",
    "golden visa UAE",
    "business consultant Dubai",
    "start company in UAE",
    "Dubai mainland license cost",
    "freezone license Dubai",
    "business setup packages Dubai",
    "investor visa UAE",
    "company registration Dubai"
  ],
  authors: [{ name: "ARZ Al Najah Business Setup Services" }],
  creator: "ARZ Al Najah",
  publisher: "ARZ Al Najah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://arzalnajah.com',
    siteName: 'ARZ Al Najah Business Setup Services',
    title: 'ARZ Al Najah Business Setup | Dubai Company Formation & UAE Business License',
    description: 'Expert business setup services in Dubai & UAE. Mainland, Freezone, Offshore licenses from AED 5,000. Fast 3-5 day setup. 500+ companies formed.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARZ Al Najah Business Setup Services - Dubai Company Formation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARZ Al Najah Business Setup | Dubai Company Formation',
    description: 'Expert business setup services in Dubai & UAE. Fast 3-5 day setup. 500+ companies formed.',
    images: ['/og-image.jpg'],
    creator: '@arzalnajah',
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  alternates: {
    canonical: 'https://arzalnajah.com',
  },
  category: 'Business Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A1A4A" />
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2532;55.3293" />
        <meta name="ICBM" content="25.2532, 55.3293" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <EnquiryPopupProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </EnquiryPopupProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}