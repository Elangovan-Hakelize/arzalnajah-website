import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Ship, 
  CheckCircle2, 
  FileText,
  Shield,
  Globe2
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offshore Company Formation UAE | Asset Protection & Privacy - ARZ Al Najah",
  description: "Setup offshore company in UAE for international business, asset protection, tax optimization. Jebel Ali, RAK ICC & AJMAN. From AED 10,000. 100% confidentiality.",
  keywords: "offshore company UAE, offshore company formation Dubai, RAK offshore, Jebel Ali offshore, asset protection UAE, tax planning",
};

export default function OffshoreCompanyFormation() {
  const benefits = [
    "100% Foreign Ownership",
    "Asset Protection & Privacy",
    "Tax Optimization Benefits",
    "No Physical Office Required",
    "International Business Operations",
    "Bank Account Facilities",
    "Limited Liability Protection",
    "Quick Setup Process"
  ];

  const offshoreJurisdictions = [
    { name: "Jebel Ali Offshore (JAFZA)", features: "Popular choice, reputable jurisdiction" },
    { name: "RAK ICC (Ras Al Khaimah)", features: "Cost-effective, international recognition" },
    { name: "AJMAN Offshore", features: "Budget-friendly, simple structure" }
  ];

  const documents = [
    "Passport copies of shareholders and directors",
    "Proof of residential address (utility bill)",
    "Bank reference letter",
    "Professional reference letter",
    "Notarized documents (where applicable)",
    "Business plan and activity description",
    "CV/Resume of directors"
  ];

  const process = [
    { step: 1, title: "Choose Jurisdiction", description: "Select the most suitable offshore jurisdiction for your needs" },
    { step: 2, title: "Company Name Approval", description: "Reserve and approve your offshore company name" },
    { step: 3, title: "Submit Documents", description: "Provide all required documentation and due diligence" },
    { step: 4, title: "Certificate of Incorporation", description: "Receive your certificate of incorporation" },
    { step: 5, title: "Corporate Documents", description: "Get memorandum, articles of association, and share certificates" },
    { step: 6, title: "Bank Account Setup", description: "Assistance with opening offshore bank accounts" }
  ];

  const faqs = [
    {
      question: "What is an offshore company in UAE?",
      answer: "An offshore company in UAE is a business entity incorporated in designated offshore jurisdictions like JAFZA, RAK ICC, or AJMAN. It's designed for international business operations, asset holding, and provides benefits like tax optimization, privacy, and asset protection."
    },
    {
      question: "Can an offshore company trade in UAE?",
      answer: "No, offshore companies cannot conduct business directly within the UAE mainland. They are designed for international business operations, holding assets, investments, and trading outside the UAE. For UAE operations, you need a mainland or freezone license."
    },
    {
      question: "What are the tax benefits of UAE offshore companies?",
      answer: "UAE offshore companies enjoy 0% corporate tax on international operations, no personal income tax, no withholding tax, no capital gains tax, and complete profit repatriation. This makes them ideal for international business structuring and tax planning."
    },
    {
      question: "Do I need to visit UAE to setup an offshore company?",
      answer: "No physical visit is required. The entire offshore company formation process can be completed remotely. However, for bank account opening, some banks may require a personal visit or video verification."
    },
    {
      question: "Can I get residence visa with offshore company?",
      answer: "No, offshore companies do not provide residence visa sponsorship. If you need UAE residence, you should consider mainland or freezone company formation instead."
    }
  ];

  const pricingPackages = [
    {
      name: "AJMAN Offshore",
      price: "AED 10,000",
      features: [
        "Company Incorporation",
        "Certificate of Incorporation",
        "Memorandum of Association",
        "Share Certificates",
        "1 Year Registration",
        "Basic Support"
      ]
    },
    {
      name: "RAK ICC Offshore",
      price: "AED 12,000",
      features: [
        "Company Incorporation",
        "Complete Documentation",
        "Apostille Services",
        "Registered Agent Services",
        "1 Year Registration",
        "Email Support",
        "Bank Introduction",
        "Courier Services"
      ],
      popular: true
    },
    {
      name: "JAFZA Offshore",
      price: "AED 15,000",
      features: [
        "Premium Incorporation",
        "Complete Documentation",
        "Apostille & Attestation",
        "Registered Office",
        "2 Year Registration",
        "Dedicated Support",
        "Bank Account Assistance",
        "Corporate Structuring Advice",
        "Annual Compliance"
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
            "serviceType": "Offshore Company Formation in UAE",
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
              "priceRange": "AED 10000 - AED 15000"
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
                <Link href="/services/offshore-company-formation" className="hover:underline">Services</Link>
                <span>/</span>
                <span>Offshore Company Formation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Offshore Company Formation in UAE
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Establish your international business structure with UAE offshore company for asset protection, privacy, and tax optimization.
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
              Why Choose Offshore Company Formation?
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

        {/* Offshore Jurisdictions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              UAE Offshore Jurisdictions
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {offshoreJurisdictions.map((jurisdiction, index) => (
                <Card key={index} className="border-gray-200 hover:border-[#E56020] hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <Ship className="w-12 h-12 text-[#E56020] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#0A1A4A] mb-2">{jurisdiction.name}</h3>
                    <p className="text-gray-600 text-sm">{jurisdiction.features}</p>
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
                Offshore Formation Packages
              </h2>
              <p className="text-xl text-gray-600">
                Choose the right offshore jurisdiction for your business needs
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
              Offshore Formation Process
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
              Ready to Form Your Offshore Company?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get expert assistance for offshore company formation and international business structuring
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
