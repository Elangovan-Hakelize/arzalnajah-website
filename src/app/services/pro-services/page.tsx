import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileCheck, 
  CheckCircle2, 
  FileText,
  Clock,
  Building,
  Shield
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRO Services Dubai | Government Relations & Documentation - ARZ Al Najah",
  description: "Professional PRO services in Dubai for all government documentation, visa processing, license renewals, attestation services. Save time with our expert PRO assistance.",
  keywords: "PRO services Dubai, government relations Dubai, PRO assistance UAE, document attestation Dubai, visa PRO services, license renewal Dubai",
};

export default function PROServices() {
  const services = [
    {
      title: "License Processing & Renewal",
      description: "Complete assistance with trade license applications, renewals, and amendments",
      icon: FileCheck
    },
    {
      title: "Visa & Immigration Services",
      description: "Entry permits, visa stamping, visa cancellation, and change of status",
      icon: CheckCircle2
    },
    {
      title: "Document Attestation",
      description: "Attestation services for educational, commercial, and personal documents",
      icon: FileText
    },
    {
      title: "Municipality Approvals",
      description: "Food licenses, health permits, and municipality clearances",
      icon: Building
    },
    {
      title: "Labor & Immigration",
      description: "Labor card processing, work permit applications, and MOHRE services",
      icon: Shield
    },
    {
      title: "Government Liaising",
      description: "All government department interactions and document submissions",
      icon: Clock
    }
  ];

  const benefits = [
    "Save Time & Effort",
    "Expert Knowledge of Procedures",
    "Fast Processing Times",
    "Error-Free Documentation",
    "Regular Updates & Tracking",
    "Cost-Effective Solutions",
    "Dedicated PRO Support",
    "Multi-Language Assistance"
  ];

  const process = [
    { step: 1, title: "Service Request", description: "Contact us with your PRO service requirements" },
    { step: 2, title: "Document Collection", description: "We collect all necessary documents from you" },
    { step: 3, title: "Processing", description: "Our PRO visits government departments on your behalf" },
    { step: 4, title: "Updates", description: "Regular status updates throughout the process" },
    { step: 5, title: "Completion", description: "Documents delivered to your office or location" }
  ];

  const pricingPackages = [
    {
      name: "Pay Per Service",
      price: "Variable",
      description: "Pay only for the services you need",
      features: [
        "Individual service pricing",
        "No commitment required",
        "Basic support",
        "Standard processing time",
        "Suitable for one-time needs"
      ]
    },
    {
      name: "Monthly Retainer",
      price: "AED 1,500/month",
      description: "Best for companies with regular PRO needs",
      features: [
        "Unlimited PRO visits",
        "Priority processing",
        "Dedicated PRO officer",
        "Monthly reporting",
        "10 free document collections",
        "WhatsApp support",
        "Suitable for growing companies"
      ],
      popular: true
    },
    {
      name: "Annual Package",
      price: "AED 15,000/year",
      description: "Complete PRO solutions for established businesses",
      features: [
        "All PRO services included",
        "Dedicated account manager",
        "Priority & express processing",
        "Unlimited visits & submissions",
        "Free document attestation (10/year)",
        "24/7 support hotline",
        "Compliance monitoring",
        "Annual license tracking"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is a PRO service in Dubai?",
      answer: "PRO (Public Relations Officer) services involve handling all government-related paperwork, documentation, and transactions on behalf of companies. This includes visa processing, license renewals, permits, attestations, and liaising with government departments like immigration, labor, municipality, and DED."
    },
    {
      question: "Why do I need PRO services for my Dubai business?",
      answer: "PRO services save you significant time and effort by handling complex government procedures. Our PRO experts know the exact requirements, avoid common mistakes, ensure faster processing, and keep you compliant with UAE regulations while you focus on growing your business."
    },
    {
      question: "How much do PRO services cost in Dubai?",
      answer: "PRO service costs vary based on the specific service and urgency. Individual services range from AED 200-2000, while monthly retainers start from AED 1,500. Annual packages offer the best value for companies with regular PRO requirements."
    },
    {
      question: "Can PRO services help with visa processing?",
      answer: "Yes, PRO services cover all aspects of visa processing including entry permit applications, visa stamping, medical test coordination, Emirates ID processing, visa renewals, cancellations, and family visa sponsorship documentation."
    },
    {
      question: "How long does document attestation take?",
      answer: "Document attestation timelines vary by document type and country of origin. Generally, UAE Ministry of Foreign Affairs (MOFA) attestation takes 2-3 working days, while embassy attestation can take 5-10 working days. Express services are available for urgent cases."
    }
  ];

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "PRO Services in Dubai",
            "provider": {
              "@type": "Organization",
              "name": "ARZ Al Najah Business Setup Services"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1A4A] to-[#0D2158] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-2 text-[#E56020] mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/services/pro-services" className="hover:underline">Services</Link>
                <span>/</span>
                <span>PRO Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                PRO Services in Dubai
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Professional government relations and documentation services. Let our experts handle all your government paperwork while you focus on your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/packages">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A1A4A]">
                    View Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Our PRO Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#E56020] hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="bg-[#E56020] bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-[#E56020]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1A4A] mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Why Choose Our PRO Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-gray-200">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-[#E56020] flex-shrink-0" />
                    <span className="font-semibold text-[#0A1A4A]">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A1A4A] mb-4">
                PRO Service Packages
              </h2>
              <p className="text-xl text-gray-600">
                Flexible solutions for all your government relations needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPackages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'border-[#E56020] border-2 shadow-xl' : 'border-gray-200'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E56020] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#0A1A4A] mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-[#E56020] mb-2">{pkg.price}</div>
                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className={`w-full ${pkg.popular ? 'bg-[#E56020] hover:bg-[#C4501A]' : 'bg-[#0A1A4A] hover:bg-[#0D2158]'} text-white`}>
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              How Our PRO Services Work
            </h2>
            <div className="max-w-4xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#E56020] text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-6 last:border-l-0">
                    <h3 className="text-xl font-bold text-[#0A1A4A] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#0A1A4A] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#E56020] to-[#C4501A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Professional PRO Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our experienced PRO team handle all your government paperwork efficiently
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#E56020] hover:bg-gray-100 font-semibold">
                  Schedule Consultation
                </Button>
              </Link>
              <a href="https://wa.me/971523149927" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#E56020]">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
