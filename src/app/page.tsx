"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { 
  Building2, 
  Globe, 
  Ship, 
  UserCheck, 
  FileCheck, 
  Building, 
  Award, 
  Clock,
  Shield,
  TrendingUp,
  CheckCircle2,
  Star
} from "lucide-react";

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);

  const services = [
    {
      icon: Building2,
      title: "Mainland Company Setup",
      description: "Establish your business in Dubai mainland with 100% ownership and trade anywhere in UAE.",
      href: "/services/mainland-company-setup",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Freezone Business Setup",
      description: "Benefit from 0% tax, 100% foreign ownership, and full profit repatriation in UAE freezones.",
      href: "/services/freezone-business-setup",
      color: "text-green-600"
    },
    {
      icon: Ship,
      title: "Offshore Company Formation",
      description: "International business setup with privacy, asset protection, and tax optimization.",
      href: "/services/offshore-company-formation",
      color: "text-purple-600"
    },
    {
      icon: UserCheck,
      title: "Visa Services",
      description: "Complete visa solutions including investor visa, employment visa, and family visa services.",
      href: "/services/visa-services",
      color: "text-orange-600"
    },
    {
      icon: FileCheck,
      title: "PRO Services",
      description: "Professional government relations services for all your documentation and approvals.",
      href: "/services/pro-services",
      color: "text-red-600"
    },
    {
      icon: Building,
      title: "Corporate Bank Account",
      description: "Assistance with opening corporate bank accounts with top UAE and international banks.",
      href: "/services/corporate-bank-account",
      color: "text-indigo-600"
    },
    {
      icon: Award,
      title: "Trade License Services",
      description: "Complete trade license processing, renewal, and amendment services for your business.",
      href: "/services/trade-license-services",
      color: "text-yellow-600"
    },
    {
      icon: Star,
      title: "Golden Visa Assistance",
      description: "Get your UAE Golden Visa with our expert guidance and complete documentation support.",
      href: "/services/golden-visa-assistance",
      color: "text-pink-600"
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Setup",
      description: "Launch your business in as little as 3-5 days with our streamlined process."
    },
    {
      icon: Shield,
      title: "100% Legal Compliance",
      description: "Fully compliant with UAE regulations and government requirements."
    },
    {
      icon: TrendingUp,
      title: "Expert Guidance",
      description: "Years of experience helping entrepreneurs start successful businesses."
    },
    {
      icon: CheckCircle2,
      title: "End-to-End Support",
      description: "From consultation to license issuance, we handle everything for you."
    },
  ];

  const stats = [
    { number: "500+", label: "Companies Formed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ARZ Al Najah Business Setup Services",
            "image": "https://arzalnajah.com/logo.png",
            "@id": "https://arzalnajah.com",
            "url": "https://arzalnajah.com",
            "telephone": "+971523149927",
            "email": "info@arzalnajah.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No 806, 8th Floor, City Avenue Building, Port Saeed",
              "addressLocality": "Dubai",
              "postalCode": "",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.2532,
              "longitude": 55.3293
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/arzalnajah",
              "https://www.instagram.com/arzalnajah",
              "https://www.linkedin.com/company/arzalnajah"
            ],
            "priceRange": "AED 5000 - AED 50000",
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "description": "Professional business setup and company formation services in Dubai & UAE. Mainland, Freezone, Offshore licenses, Visa services, and PRO assistance."
          })
        }}
      />

      {/* Enquiry Popup */}
      <EnquiryPopup externalOpen={popupOpen} onExternalOpenChange={setPopupOpen} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A1A4A] via-[#0D2158] to-[#0A1A4A] text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/32de8aa9-54b0-4fde-a2cf-914140afd64c/generated_images/professional-business-illustration-of-du-64c5fa6f-20251206082859.jpg"
              alt="Dubai Business Setup"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Start Your Business in <span className="text-[#D4A017]">Dubai</span> Today
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Professional company formation services for mainland, freezone, and offshore business setup in UAE
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                    <span className="text-lg">100% Foreign Ownership</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                    <span className="text-lg">Fast 3-5 Day Setup</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                    <span className="text-lg">Expert Visa & PRO Services</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setPopupOpen(true)}
                    className="bg-[#D4A017] hover:bg-[#B8900F] text-white font-semibold text-lg px-8 py-6"
                  >
                    Get Free Consultation
                  </Button>
                  <Link href="/packages">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A1A4A] font-semibold text-lg px-8 py-6">
                      View Packages
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/32de8aa9-54b0-4fde-a2cf-914140afd64c/generated_images/isometric-3d-illustration-of-business-do-68f37e4f-20251206082859.jpg"
                  alt="Business Setup Illustration"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#D4A017] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A4A] mb-4">
                Why Choose ARZ Al Najah?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We make business setup in Dubai simple, fast, and hassle-free with our expert guidance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-[#D4A017] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-[#D4A017]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0A1A4A] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A4A] mb-4">
                Our Business Setup Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete solutions for starting and growing your business in Dubai and UAE
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <Card className="h-full border-2 border-gray-200 hover:border-[#D4A017] hover:shadow-xl transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="bg-gray-50 group-hover:bg-[#D4A017] group-hover:bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors">
                        <service.icon className={`w-7 h-7 ${service.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <h3 className="text-lg font-semibold text-[#0A1A4A] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <span className="text-[#D4A017] font-semibold text-sm inline-flex items-center">
                        Learn More →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services/mainland-company-setup">
                <Button size="lg" className="bg-[#0A1A4A] hover:bg-[#0D2158] text-white font-semibold">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A1A4A] to-[#0D2158] text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Trusted by Entrepreneurs Across the Globe
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  ARZ Al Najah Business Setup Services has helped hundreds of businesses establish their presence in Dubai and the UAE. Our commitment to excellence and customer satisfaction sets us apart.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Licensed & Authorized</h4>
                      <p className="text-gray-300">Registered business consultancy operating under UAE regulations</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Expert Team</h4>
                      <p className="text-gray-300">Experienced professionals with deep knowledge of UAE business laws</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Transparent Pricing</h4>
                      <p className="text-gray-300">No hidden fees - clear pricing with detailed breakdown of all costs</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white bg-opacity-10 border-none backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 text-[#D4A017] mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2">Government Approved</h4>
                    <p className="text-gray-300 text-sm">Authorized business consultancy</p>
                  </CardContent>
                </Card>
                <Card className="bg-white bg-opacity-10 border-none backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <Star className="w-12 h-12 text-[#D4A017] mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2">5-Star Rated</h4>
                    <p className="text-gray-300 text-sm">Top-rated by our clients</p>
                  </CardContent>
                </Card>
                <Card className="bg-white bg-opacity-10 border-none backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 text-[#D4A017] mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2">Quick Processing</h4>
                    <p className="text-gray-300 text-sm">Fast license issuance</p>
                  </CardContent>
                </Card>
                <Card className="bg-white bg-opacity-10 border-none backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#D4A017] mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2">100% Success</h4>
                    <p className="text-gray-300 text-sm">Guaranteed approval</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#D4A017]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Business in Dubai?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Get a free consultation with our business setup experts. We'll guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setPopupOpen(true)}
                className="bg-white text-[#D4A017] hover:bg-gray-100 font-semibold text-lg px-8 py-6"
              >
                Schedule Free Consultation
              </Button>
              <a href="tel:+971523149927">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#D4A017] font-semibold text-lg px-8 py-6">
                  Call +971 52 314 9927
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}