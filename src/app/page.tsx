"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEnquiryPopup } from "@/components/EnquiryPopup";
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
  Star,
  FileText,
  CreditCard
} from "lucide-react";

export default function Home() {
  const { openPopup } = useEnquiryPopup();

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
      icon: FileText,
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
    { number: "24/7", label: "Customer Chat Support" },
  ];

  const processSteps = [
    { step: 1, title: "Consultation", description: "Free expert consultation" },
    { step: 2, title: "Documentation", description: "Prepare required documents" },
    { step: 3, title: "Submission", description: "Submit to the authorities" },
    { step: 4, title: "Approval", description: "Receive license approval" },
    { step: 5, title: "Visa Processing", description: "Process investor visas" },
    { step: 6, title: "Bank Account", description: "Open corporate account" },
  ];

  return (
    <>
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
              "addressRegion": "Dubai",
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
            "description": "Professional business setup and company formation services in Dubai & UAE. Mainland, Freezone, Offshore licenses, Visa services, and PRO assistance.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
<section className="relative bg-gradient-to-br from-[#9c5a33] via-[#7a3e1f] to-[#3d1700] text-white py-15 overflow-hidden">
  {/* background image (subtle, full cover) */}
  <div className="absolute inset-0 pointer-events-none">
    <img
      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"               // put your big bg image in public/images/hero-bg.jpg
      alt="Dubai skyline background"
      className="w-full h-full object-cover opacity-10"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3d1700]/40" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      {/* Left: Text */}
      <div className="pr-0 lg:pr-8 pl-0 md:pl-12 lg:pl-[60px]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Start Your Business in <span className="text-[#E56020]">Dubai</span> Today
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl">
          Your trusted partner for fast and reliable Mainland, Freezone, and Offshore company formation services in Dubai and across the UAE.
        </p>

        <ul className="space-y-3 mb-8 max-w-md">
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="w-6 h-6 text-[#E56020] flex-shrink-0" />
            <span className="text-lg">Mainland, Freezone & Offshore Company Formation</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="w-6 h-6 text-[#E56020] flex-shrink-0" />
            <span className="text-lg">PRO & Visa Processing</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="w-6 h-6 text-[#E56020] flex-shrink-0" />
            <span className="text-lg">Trade License Acquisition</span>
          </li>
          <li className="flex items-center space-x-3">
            <CheckCircle2 className="w-6 h-6 text-[#E56020] flex-shrink-0" />
            <span className="text-lg">Bank Account Assistance</span>
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={openPopup}
            className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold text-lg px-8 py-4"
          >
            Get Free Consultation
          </Button>

          <Link href="/packages" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="border-2 border-white text-[#3d1700] hover:bg-white hover:text-[#3d1700] font-semibold text-lg px-8 py-4">
              View Packages
            </Button>
          </Link>
        </div>
      </div>

      {/* Right: Framed hero image (responsive + overlap) */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md lg:max-w-lg transform lg:translate-x-6">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1681505504714-4ded1bc247e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&q=80"    // put your hero image in public/images/hero-right.jpg
              alt="Business Setup Illustration - Dubai company formation services"
              className="w-full h-[320px] md:h-[420px] lg:h-[500px] object-cover"
              loading="lazy"
            />
            {/* subtle inner overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          {/* optional small decorative footer bar to match brand */}
          <div className="mt-4 h-1 w-28 bg-[#E56020] rounded-full" />
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Stats Section */}
        {/* <section className="bg-white py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#E56020] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#292929] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        

        {/* Why Choose ARZ Al Najah Section */}
        <section className="py-20 px-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d1700] mb-4">
                Why Choose ARZ Al Najah?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your reliable partner for fast and affordable business setup in Dubai covering trade license, PRO, visa, documentation, and bank account processes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-[#ffff]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#3d1700] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Setup Process */}
<section className="py-20 px-10 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#3d1700] mb-3">
        Business Setup Process
      </h2>
      <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
        Simple 6-step process to start your business in Dubai
      </p>
    </div>

    {/* Timeline wrapper */}
    <div className="max-w-6xl mx-auto">
      {/* Desktop: horizontal flex with connectors. Mobile: vertical stacked */}
      <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-6 md:gap-8">

        {processSteps.map((item, index) => (
          <React.Fragment key={index}>
            {/* Step block */}
            <div className="flex flex-col items-center text-center md:w-1/6 min-w-[120px]">
              <div className="relative">
                {/* Circle */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full
                                bg-gradient-to-tr from-[#E56020] to-[#F6A35C]
                                flex items-center justify-center font-bold text-white text-lg md:text-xl
                                shadow-xl">
                  {item.step}
                </div>

                {/* Desktop horizontal connector (drawn to the right, hidden on last) */}
                {index < processSteps.length - 1 && (
  <div className="hidden md:block absolute top-1/2 left-full ml-4 
                  w-20 h-[2px] bg-[#E56020]/30 rounded-full" />
)}

              </div>

              {/* Mobile vertical connector */}
{index < processSteps.length - 1 && (
  <div className="md:hidden w-[2px] h-6 mx-auto 
                  bg-gradient-to-b from-[#E56020] to-[#F6A35C] 
                  opacity-40 rounded-full mt-2" />
)}


              <div className="mt-4 max-w-[160px]">
                <h4 className="font-semibold text-[#3d1700] text-sm md:text-base">{item.title}</h4>
                <p className="text-xs md:text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>

            {/* Desktop connector spacer:
                We render a separate flexible connector element between items to control spacing nicely.
                Hidden on mobile because mobile uses vertical connectors above. */}
            {index < processSteps.length - 1 && (
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="w-full h-1 bg-gradient-to-r from-[#E56020] to-[#F6A35C] opacity-30 rounded-full" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
</section>


        {/* Services Section */}
        <section className="py-20 px-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d1700] mb-4">
                Our Business Setup Services in Dubai
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete solutions for starting and growing your business in Dubai and UAE
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <Card className="h-full border-2 border-gray-200 hover:border-[#E56020] hover:shadow-xl transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="bg-gray-50 group-hover:bg-[#E56020] group-hover:bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors">
                        <service.icon
  className={`w-7 h-7 transition-all ${service.color} group-hover:text-white group-hover:scale-110`}
/>

                      </div>
                      <h3 className="text-lg font-semibold text-[#3d1700] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <span className="text-[#E56020] font-semibold text-sm inline-flex items-center">
                        Learn More →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 px-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d1700] mb-4">
                Business in Dubai
              </h2>
              <p className="text-xl text-gray-600">Start your success story in the heart of the UAE</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
                  alt="Dubai Skyline - Business opportunities in UAE"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-semibold text-lg">Dubai Business Hub</span>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80"
                  alt="Business Meeting - Professional services"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-semibold text-lg">Expert Consultation</span>
                </div>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                  alt="Modern Office - Corporate setup"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-semibold text-lg">Premium Offices</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
         <section className="py-25 px-10 bg-gray-50">
        {/* background image (subtle, full cover) */}
  
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3d1700]">
                  Trusted by Entrepreneurs Across the Globe
                </h2>
                <p className="text-xl text-gray-500 mb-8">
                  ARZ Al Najah Business Setup Services has helped hundreds of businesses establish their presence in Dubai and the UAE. Our commitment to excellence and customer satisfaction sets us apart.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 ">
                    <Shield className="w-6 h-6 text-[#E56020] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-[#3d1700]">Licensed & Authorized</h4>
                      <p className="text-gray-500">Registered business consultancy operating under UAE regulations</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#E56020] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-[#3d1700]">Expert Team</h4>
                      <p className="text-gray-500">Experienced professionals with deep knowledge of UAE business laws</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-[#E56020] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-[#3d1700]">Transparent Pricing</h4>
                      <p className="text-gray-500">No hidden fees - clear pricing with detailed breakdown of all costs</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-white bg-opacity-100 border-2 border-[#E56020] backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 text-[#E56020] mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-[#3d1700]">Government Approved</h4>
                    <p className="text-gray-500 text-sm">Authorized business consultancy</p>
                  </CardContent>
                </Card>
                <Card className="bg-white bg-opacity-100 border-2 border-[#E56020] backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <Star className="w-12 h-12 text-[#E56020] mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-[#3d1700]">5-Star Rated</h4>
                    <p className="text-gray-500 text-sm">Top-rated by our clients</p>
                  </CardContent>
                </Card>
                <Card className="bg-white bg-opacity-100 border-2 border-[#E56020] backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 text-[#E56020] mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-[#3d1700]">Quick Processing</h4>
                    <p className="text-gray-500 text-sm">Fast license issuance</p>
                  </CardContent>
                </Card>
                <Card className="bg-white bg-opacity-100 border-2 border-[#E56020] backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#E56020] mx-auto mb-3" />
                    <h4 className="font-semibold text-lg mb-2 text-[#3d1700]">100% Success</h4>
                    <p className="text-gray-500 text-sm">Guaranteed approval</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#E56020] ">
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
                onClick={openPopup}
                className="bg-white text-[#3d1700] hover:bg-gray-100 font-semibold text-l px-8 py-6"
              >
                Schedule Free Consultation
              </Button>
              <a href="tel:+971523149927">
                <Button size="lg" variant="outline" className="border-2 border-white text-[#3d1700] hover:bg-gray-100 hover:text-[#3d1700] font-semibold text-l px-8 py-6">
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
