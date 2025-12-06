import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  UserCheck, 
  CheckCircle2, 
  FileText,
  Users,
  Briefcase,
  Home
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE Visa Services | Investor, Employment & Family Visa - ARZ Al Najah",
  description: "Complete UAE visa services including investor visa, employment visa, family visa, and golden visa. Fast processing, expert guidance. From AED 3,000.",
  keywords: "UAE visa services, investor visa Dubai, employment visa UAE, family visa Dubai, residence visa UAE, visa processing Dubai",
};

export default function VisaServices() {
  const visaTypes = [
    {
      icon: Briefcase,
      title: "Investor Visa",
      description: "For business owners and entrepreneurs investing in UAE",
      validity: "2-3 Years",
      price: "AED 5,000",
      features: [
        "Valid for 2-3 years",
        "Sponsor family members",
        "Multiple entry access",
        "Work permit included",
        "Renewable"
      ]
    },
    {
      icon: Users,
      title: "Employment Visa",
      description: "For employees working under company sponsorship",
      validity: "2-3 Years",
      price: "AED 3,000",
      features: [
        "Valid for 2-3 years",
        "Sponsored by employer",
        "Labor card included",
        "Medical insurance",
        "Renewable by employer"
      ]
    },
    {
      icon: Home,
      title: "Family Visa",
      description: "Sponsor your spouse, children, and parents",
      validity: "2-3 Years",
      price: "AED 3,500",
      features: [
        "Spouse & children sponsorship",
        "Parents (subject to conditions)",
        "Medical & Emirates ID",
        "Renewable",
        "Multiple entry"
      ]
    }
  ];

  const documents = {
    investor: [
      "Valid passport (minimum 6 months validity)",
      "Passport-sized color photographs",
      "Trade license copy",
      "Memorandum of Association (MOA)",
      "Tenancy contract (Ejari)",
      "Medical fitness certificate",
      "Emirates ID application",
      "Entry permit"
    ],
    employment: [
      "Valid passport copy",
      "Passport-sized photographs",
      "Employment contract",
      "Company trade license",
      "Educational certificates (attested)",
      "Medical fitness test",
      "Labor contract",
      "Entry permit"
    ],
    family: [
      "Sponsor's passport & visa copy",
      "Family member's passport",
      "Passport-sized photographs",
      "Marriage certificate (attested)",
      "Birth certificates for children",
      "Sponsor's salary certificate (AED 4,000+ or AED 3,000 + accommodation)",
      "Tenancy contract",
      "Medical fitness certificates"
    ]
  };

  const process = [
    { step: 1, title: "Document Submission", description: "Provide all required documents and passport copies" },
    { step: 2, title: "Entry Permit", description: "Apply for entry permit (valid for 60 days)" },
    { step: 3, title: "Medical Test", description: "Complete medical fitness test at approved center" },
    { step: 4, title: "Emirates ID", description: "Apply for Emirates ID card" },
    { step: 5, title: "Visa Stamping", description: "Passport stamping with residence visa" },
    { step: 6, title: "Visa Card Collection", description: "Receive your UAE residence visa" }
  ];

  const faqs = [
    {
      question: "How long does UAE visa processing take?",
      answer: "Standard visa processing takes 3-5 working days for entry permit and 7-10 working days for complete residence visa including medical test and Emirates ID. Express processing options are available for urgent cases."
    },
    {
      question: "What is the minimum salary required for family visa sponsorship?",
      answer: "To sponsor family members, the minimum salary requirement is AED 4,000 per month, or AED 3,000 with company-provided accommodation. Additional salary requirements apply for sponsoring parents (AED 20,000+)."
    },
    {
      question: "Can I sponsor my parents on UAE residence visa?",
      answer: "Yes, you can sponsor your parents if you meet specific requirements: minimum salary of AED 20,000 per month or AED 19,000 + accommodation, suitable housing, and comprehensive health insurance for parents."
    },
    {
      question: "What is medical fitness test for UAE visa?",
      answer: "Medical fitness test is mandatory for all UAE residence visa applicants. It includes screening for infectious diseases, blood tests, chest X-ray, and general health checkup at government-approved medical centers."
    },
    {
      question: "How long is UAE residence visa valid?",
      answer: "UAE residence visas are typically valid for 2 years (renewable) or 3 years depending on the visa type and company's preference. Golden visa holders can get 5-10 year validity."
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
            "serviceType": "UAE Visa Services",
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
              "priceRange": "AED 3000 - AED 5000"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1A4A] to-[#0D2158] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-2 text-[#D4A017] mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/services/visa-services" className="hover:underline">Services</Link>
                <span>/</span>
                <span>Visa Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                UAE Visa Services
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Complete visa solutions for investors, employees, and families. Fast processing with expert guidance for all UAE residence visa types.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#D4A017] hover:bg-[#B8900F] text-white font-semibold">
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

        {/* Visa Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Our Visa Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {visaTypes.map((visa, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#D4A017] hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="bg-[#D4A017] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <visa.icon className="w-8 h-8 text-[#D4A017]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1A4A] mb-3">{visa.title}</h3>
                    <p className="text-gray-600 mb-4">{visa.description}</p>
                    <div className="flex justify-between items-center mb-6 pb-6 border-b">
                      <div>
                        <div className="text-sm text-gray-500">Starting from</div>
                        <div className="text-2xl font-bold text-[#D4A017]">{visa.price}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Validity</div>
                        <div className="text-lg font-semibold text-[#0A1A4A]">{visa.validity}</div>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {visa.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="w-full bg-[#0A1A4A] hover:bg-[#0D2158] text-white">
                        Apply Now
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
              Visa Processing Steps
            </h2>
            <div className="max-w-4xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#D4A017] text-white rounded-full flex items-center justify-center font-bold text-lg">
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
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div>
                <h3 className="text-xl font-bold text-[#0A1A4A] mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 text-[#D4A017] mr-2" />
                  Investor Visa
                </h3>
                <div className="space-y-3">
                  {documents.investor.map((doc, index) => (
                    <Card key={index} className="border-gray-200">
                      <CardContent className="p-3 flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{doc}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A1A4A] mb-6 flex items-center">
                  <Users className="w-6 h-6 text-[#D4A017] mr-2" />
                  Employment Visa
                </h3>
                <div className="space-y-3">
                  {documents.employment.map((doc, index) => (
                    <Card key={index} className="border-gray-200">
                      <CardContent className="p-3 flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{doc}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A1A4A] mb-6 flex items-center">
                  <Home className="w-6 h-6 text-[#D4A017] mr-2" />
                  Family Visa
                </h3>
                <div className="space-y-3">
                  {documents.family.map((doc, index) => (
                    <Card key={index} className="border-gray-200">
                      <CardContent className="p-3 flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{doc}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
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
        <section className="py-16 bg-gradient-to-br from-[#D4A017] to-[#B8900F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help with UAE Visa Processing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our visa experts handle your application for fast and hassle-free processing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#D4A017] hover:bg-gray-100 font-semibold">
                  Schedule Consultation
                </Button>
              </Link>
              <a href="https://wa.me/971523149927" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#D4A017]">
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
