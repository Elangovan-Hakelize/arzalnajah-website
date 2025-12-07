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
    default: "ARZ Al Najah Business Setup Services | Dubai Company Formation",
    template: "%s | ARZ Al Najah"
  },
  description: "Professional business setup and company formation services in Dubai & UAE. Mainland, Freezone, Offshore licenses. Expert visa and PRO services. Get free consultation.",
  keywords: ["Dubai business setup", "UAE company formation", "mainland license Dubai", "freezone business setup", "visa services UAE", "PRO services Dubai", "corporate bank account UAE", "trade license Dubai"],
  authors: [{ name: "ARZ Al Najah Business Setup Services" }],
  creator: "ARZ Al Najah",
  publisher: "ARZ Al Najah",
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
    title: 'ARZ Al Najah Business Setup Services | Dubai Company Formation',
    description: 'Professional business setup and company formation services in Dubai & UAE. Mainland, Freezone, Offshore licenses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARZ Al Najah Business Setup Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARZ Al Najah Business Setup Services | Dubai Company Formation',
    description: 'Professional business setup and company formation services in Dubai & UAE',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  alternates: {
    canonical: 'https://arzalnajah.com',
  },
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