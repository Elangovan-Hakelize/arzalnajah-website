import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  CheckCircle2, 
  FileText, 
  Clock,
  DollarSign,
  TrendingUp
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freezone Business Setup UAE | 0% Tax, 100% Ownership - ARZ Al Najah",
  description: "Setup your business in UAE freezone with 0% tax, 100% foreign ownership, full profit repatriation. DMCC, JAFZA, DAFZA & more. From AED 12,000.",
  keywords: "freezone business setup UAE, freezone license Dubai, DMCC setup, JAFZA license, 0% tax UAE, freezone company formation",
};

export default function FreezoneBusinessSetup() {
  const benefits = [
    "100% Foreign Ownership",
    "0% Corporate & Income Tax",
    "100% Profit Repatriation",
    "No Currency Restrictions",
    "Quick Setup (3-5 Days)",
    "Modern Office Spaces",
    "Easy Bank Account Opening",
    "Visa Processing Support"
  ];

  const popularFreezones = [
    { name: "DMCC (Dubai Multi Commodities Centre)", activities: "Trading, Services, Consulting" },
    { name: "JAFZA (Jebel Ali Free Zone)", activities: "Trading, Logistics, Manufacturing" },
    { name: "DAFZA (Dubai Airport Free Zone)", activities: "Logistics, Aviation, IT" },
    { name: "Dubai Silicon Oasis", activities: "Technology, IT, Electronics" },
    { name: "IFZA (International Free Zone Authority)", activities: "General Trading, Services" },
    { name: "RAKEZ (Ras Al Khaimah Economic Zone)", activities: "Manufacturing, Trading, Services" }
  ];

  const documents = [
    "Passport copies of shareholders/directors",
    "Passport-sized photographs",
    "Proof of address (utility bill)",
    "Business plan outlining activities",
    "Bank reference letter (if applicable)",
    "CV/Resume of directors",
    "No Objection Certificate (if applicable)"
  ];

  const process = [
    { step: 1, title: "Choose Freezone", description: "Select the most suitable freezone for your business activity" },
    { step: 2, title: "Select License Type", description: "Choose from trading, service, industrial or e-commerce license" },
    { step: 3, title: "Company Name Approval", description: "Submit and get approval for your company name" },
    { step: 4, title: "Submit Documents", description: "Provide all required documentation for processing" },
    { step: 5, title: "License Issuance", description: "Receive your freezone trade license" },
    { step: 6, title: "Visa & Office Setup", description: "Process visas and setup your office space" }
  ];

  const faqs = [
    {
      question: "What is the cost of freezone company setup in UAE?",
      answer: "Freezone setup costs range from AED 12,000 to AED 30,000 depending on the freezone, license type, office package, and number of visas. Each freezone has different pricing structures and packages."
    },
    {
      question: "Which is the best freezone for my business?",
      answer: "The best freezone depends on your business activity, budget, and requirements. DMCC is ideal for trading and commodities, DAFZA for logistics, Dubai Silicon Oasis for technology companies, and IFZA for cost-effective setups."
    },
    {
      question: "Can I do business outside the freezone?",
      answer: "Freezone companies can trade internationally and with other freezones without restrictions. To trade in the UAE mainland, you need to appoint a local distributor or agent, or apply for a separate mainland license."
    },
    {
      question: "How many visas can I get with a freezone license?",
      answer: "The number of visas depends on the freezone and office package you choose. Generally, flexi-desk allows 1-2 visas, while larger office spaces allow more visas. Some freezones offer unlimited visa quota."
    },
    {
      question: "Do I need an office space for freezone setup?",
      answer: "Yes, all freezones require you to have an office solution, which can range from a flexi-desk, shared office, or dedicated office space depending on your needs and budget."
    }
  ];

  const pricingPackages = [
    {
      name: "Flexi-Desk Package",
      price: "AED 12,000",
      features: [
        "Freezone License",
        "Flexi-Desk Access",
        "1-2 Visa Quota",
        "Basic Support Services",
        "License Registration",
        "Initial Approval"
      ]
    },
    {
      name: "Business Center",
      price: "AED 18,000",
      features: [
        "Freezone License",
        "Shared Office Space",
        "3-4 Visa Quota",
        "Meeting Room Access",
        "Business Address",
        "Immigration Services",
        "Bank Account Assistance",
        "PRO Support"
      ],
      popular: true
    },
    {
      name: "Dedicated Office",
      price: "AED 30,000+",
      features: [
        "Freezone License",
        "Private Office Space",
        "Unlimited Visa Quota",
        "Dedicated Facilities",
        "Priority Processing",
        "Complete Setup Support",
        "Bank Account Opening",
        "Annual PRO Services",
        "Business Consulting"
      ]
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
            "serviceType": "Freezone Business Setup in UAE",
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
              "priceRange": "AED 12000 - AED 30000"
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
                <Link href="/services/freezone-business-setup" className="hover:underline">Services</Link>
                <span>/</span>
                <span>Freezone Business Setup</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Freezone Business Setup in UAE
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Start your business in UAE freezone with 0% tax, 100% ownership, and complete profit repatriation. Fast setup in just 3-5 days.
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

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-8 text-center">
              Why Choose Freezone Setup?
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

        {/* Popular Freezones */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Popular UAE Freezones
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {popularFreezones.map((freezone, index) => (
                <Card key={index} className="border-gray-200 hover:border-[#E56020] hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <Globe className="w-10 h-10 text-[#E56020] mb-4" />
                    <h3 className="text-lg font-bold text-[#0A1A4A] mb-2">{freezone.name}</h3>
                    <p className="text-gray-600 text-sm">
                      <strong>Ideal for:</strong> {freezone.activities}
                    </p>
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
                Freezone Setup Packages
              </h2>
              <p className="text-xl text-gray-600">
                Flexible packages to suit every business need and budget
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Freezone Setup Process
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
        <section className="py-16 bg-white">
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
        <section className="py-16 bg-gray-50">
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
              Ready to Setup Your Freezone Company?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your tax-free business in UAE freezone with our expert guidance
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
