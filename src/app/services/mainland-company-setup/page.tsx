"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEnquiryPopup } from "@/components/EnquiryPopup";
import { 
  Building2, 
  CheckCircle2, 
  FileText, 
  Clock,
  DollarSign,
  Users,
  Globe,
  ArrowRight
} from "lucide-react";

export default function MainlandCompanySetup() {
  const { openPopup } = useEnquiryPopup();

  const benefits = [
    "100% Foreign Ownership",
    "Trade Anywhere in UAE",
    "Access to Local Market",
    "No Currency Restrictions",
    "Unlimited Visa Quota",
    "Government Contracts Eligible"
  ];

  const documents = [
    "Passport copies of shareholders/partners",
    "Visa copies (if applicable)",
    "Passport-sized photographs",
    "Initial approval document",
    "Tenancy contract for office space",
    "No Objection Certificate (if employed)",
    "Business plan and activity details",
    "Proof of address (utility bill)"
  ];

  const process = [
    { step: 1, title: "Choose Business Activity", description: "Select your business activity from DED approved list" },
    { step: 2, title: "Company Name Approval", description: "Submit and get approval for your company name" },
    { step: 3, title: "Initial Approval", description: "Obtain initial approval from Department of Economic Development" },
    { step: 4, title: "Office Space", description: "Secure physical office space with Ejari registration" },
    { step: 5, title: "License Issuance", description: "Receive your mainland trade license" },
    { step: 6, title: "Visa Processing", description: "Apply for investor and employee visas" }
  ];

  const faqs = [
    {
      question: "What is the cost of mainland company setup in Dubai?",
      answer: "Mainland company setup costs typically range from AED 15,000 to AED 25,000 depending on business activity, office requirements, and number of visas. This includes government fees, office space, and our service charges."
    },
    {
      question: "How long does it take to setup a mainland company?",
      answer: "The complete process takes 5-7 working days from initial approval to license issuance, provided all documents are ready and office space is secured."
    },
    {
      question: "Do I need a local sponsor for mainland company?",
      answer: "No, the UAE now allows 100% foreign ownership for most mainland business activities. A local sponsor is no longer required for the majority of businesses."
    },
    {
      question: "What types of licenses are available for mainland companies?",
      answer: "There are three main types: Commercial License (trading activities), Professional License (service activities), and Industrial License (manufacturing). Each has specific requirements and permitted activities."
    },
    {
      question: "Can I work from home with a mainland license?",
      answer: "No, mainland companies require a physical office space with a valid Ejari contract. The office must meet DED requirements for space and location."
    }
  ];

  const pricingPackages = [
    {
      name: "Basic Package",
      price: "AED 15,000",
      features: [
        "Trade License",
        "1 Visa Allocation",
        "Memorandum of Association",
        "Initial Approval",
        "Registration Certificate",
        "Basic Office Setup Assistance"
      ]
    },
    {
      name: "Standard Package",
      price: "AED 20,000",
      features: [
        "Trade License",
        "3 Visa Allocations",
        "Memorandum of Association",
        "Initial Approval",
        "Immigration Card",
        "Office Setup Assistance",
        "Bank Account Assistance",
        "1 Year PRO Support"
      ],
      popular: true
    },
    {
      name: "Premium Package",
      price: "AED 25,000",
      features: [
        "Trade License",
        "5 Visa Allocations",
        "Complete Documentation",
        "Priority Processing",
        "Dedicated Account Manager",
        "Office Setup Complete",
        "Bank Account Opening",
        "2 Years PRO Support",
        "Business Consulting"
      ]
    }
  ];

  return (
    <>
      {/* FAQ Schema Markup */}
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

      {/* Service Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mainland Company Setup in Dubai",
            "provider": {
              "@type": "Organization",
              "name": "ARZ Al Najah Business Setup Services"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "AED 15000 - AED 25000"
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
                <Link href="/services/mainland-company-setup" className="hover:underline">Services</Link>
                <span>/</span>
                <span>Mainland Company Setup</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mainland Company Setup in Dubai
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Establish your business in Dubai mainland with 100% foreign ownership. Trade anywhere in the UAE with complete freedom and flexibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={openPopup}
                  className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold"
                >
                  Get Free Consultation
                </Button>
                <Link href="/packages">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A1A4A]">
                    View Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-8 text-center">
              Why Choose Mainland Company Setup?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A1A4A] mb-4">
                Mainland Setup Packages
              </h2>
              <p className="text-xl text-gray-600">
                Choose the package that best fits your business needs
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
                    <div className="text-3xl font-bold text-[#E56020] mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Mainland Company Setup Process
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

        {/* Documents Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Required Documents
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {documents.map((doc, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-[#E56020] flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </CardContent>
                </Card>
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
              Ready to Setup Your Mainland Company?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get expert guidance and fast processing for your Dubai mainland business setup
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openPopup}
                className="bg-white text-[#E56020] hover:bg-gray-100 font-semibold"
              >
                Schedule Consultation
              </Button>
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