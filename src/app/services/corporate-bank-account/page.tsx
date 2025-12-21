'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EnquiryPopup, useEnquiryPopup } from "@/components/EnquiryPopup";
import { 
  Building, 
  CheckCircle2, 
  FileText,
  CreditCard,
  Globe,
  Shield
} from "lucide-react";


export default function CorporateBankAccount() {

  const { openPopup } = useEnquiryPopup();

  const banks = [
    { name: "Emirates NBD", features: "Leading UAE bank, extensive services" },
    { name: "Abu Dhabi Commercial Bank (ADCB)", features: "Competitive rates, digital banking" },
    { name: "Mashreq Bank", features: "Fast account opening, SME focus" },
    { name: "RAK Bank", features: "Business-friendly, quick turnaround" },
    { name: "Dubai Islamic Bank", features: "Sharia-compliant banking" },
    { name: "HSBC UAE", features: "International banking network" }
  ];

  const benefits = [
    "Multi-Currency Accounts",
    "Online Banking Facilities",
    "International Transfers",
    "Business Credit Cards",
    "Trade Finance Services",
    "Merchant Payment Solutions",
    "Dedicated Relationship Manager",
    "Mobile Banking Apps"
  ];

  const documents = [
    "Trade license copy (original + certified)",
    "Memorandum and Articles of Association",
    "Certificate of Incorporation",
    "Passport copies of all shareholders/directors",
    "Emirates ID copies of UAE residents",
    "Proof of business address (Ejari)",
    "Board resolution for account opening",
    "Business plan and expected transactions",
    "Source of funds documentation",
    "Bank reference letters (if available)"
  ];

  const process = [
    { step: 1, title: "Bank Selection", description: "Choose the most suitable bank based on your business needs" },
    { step: 2, title: "Document Preparation", description: "We help prepare and organize all required documents" },
    { step: 3, title: "Application Submission", description: "Submit application to the bank with our assistance" },
    { step: 4, title: "Bank Meeting", description: "Attend meeting with bank relationship manager" },
    { step: 5, title: "Due Diligence", description: "Bank conducts compliance and background checks" },
    { step: 6, title: "Account Activation", description: "Receive account details and banking facilities" }
  ];

  const accountTypes = [
    {
      title: "Current Account",
      description: "Basic business transaction account",
      features: [
        "Daily business transactions",
        "Checkbook facility",
        "Debit card",
        "Online banking",
        "No interest on balance"
      ]
    },
    {
      title: "Savings Account",
      description: "Earn interest on idle funds",
      features: [
        "Interest-bearing account",
        "Higher balance requirements",
        "Limited transactions",
        "Online access",
        "Suitable for reserves"
      ]
    },
    {
      title: "Multi-Currency Account",
      description: "Manage multiple currencies",
      features: [
        "Hold various currencies",
        "Reduce forex costs",
        "International trade",
        "Better exchange rates",
        "Ideal for import/export"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does it take to open a corporate bank account in UAE?",
      answer: "The account opening process typically takes 2-4 weeks, depending on the bank and completeness of documentation. Some banks offer expedited services that can complete the process in 1-2 weeks. Due diligence and compliance checks are the main factors affecting timeline."
    },
    {
      question: "What is the minimum deposit required for corporate bank account?",
      answer: "Minimum deposit requirements vary by bank and account type, ranging from AED 25,000 to AED 100,000. Some banks offer accounts with no minimum deposit for certain business categories. We can help you find banks with suitable minimum balance requirements."
    },
    {
      question: "Can I open a bank account before getting my trade license?",
      answer: "Generally, you need a valid trade license before opening a corporate bank account. However, some banks allow initial approval (ICA) holders to open accounts. We recommend completing your company formation first for smoother account opening."
    },
    {
      question: "Do I need to visit the bank in person?",
      answer: "Yes, most UAE banks require at least one in-person visit from authorized signatories for account opening. This is for identity verification and signature collection. However, subsequent banking can be done online. Some banks now offer video verification for certain accounts."
    },
    {
      question: "Can freezone companies open accounts with any bank?",
      answer: "Yes, freezone companies can open accounts with most UAE banks. However, some banks have specific preferences or requirements for freezone entities. We work with banks that readily accept freezone companies and can guide you to the most suitable options."
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
            "serviceType": "Corporate Bank Account Opening in UAE",
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
        <section className="relative bg-gradient-to-br from-[#9c5a33] via-[#7a3e1f] to-[#3d1700] text-white py-15 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-2 text-[#E56020] mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/services/corporate-bank-account" className="hover:underline">Services</Link>
                <span>/</span>
                <span>Corporate Bank Account</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Corporate Bank Account Opening in UAE
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Expert assistance with opening corporate bank accounts with leading UAE banks. Streamlined process, fast approval, and dedicated support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/packages">
                  <Button size="lg" variant="outline" className="border-white text-[#3d1700] hover:bg-white hover:text-[#3d1700]">
                    View Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Banks */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Our Partner Banks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {banks.map((bank, index) => (
                <Card key={index} className="border-gray-200 hover:border-[#E56020] hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <Building className="w-10 h-10 text-[#E56020] mb-4" />
                    <h3 className="text-lg font-bold text-[#3d1700] mb-2">{bank.name}</h3>
                    <p className="text-gray-600 text-sm">{bank.features}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Types of Business Accounts
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {accountTypes.map((account, index) => (
                <Card key={index} className="border-2 border-gray-200">
                  <CardContent className="p-8">
                    <CreditCard className="w-12 h-12 text-[#E56020] mb-4" />
                    <h3 className="text-xl font-bold text-[#3d1700] mb-3">{account.title}</h3>
                    <p className="text-gray-600 mb-6">{account.description}</p>
                    <ul className="space-y-2">
                      {account.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Banking Features & Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-gray-200">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-[#E56020] flex-shrink-0" />
                    <span className="font-semibold text-[#3d1700]">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Account Opening Process
            </h2>
            {/* Timeline */}
    <div className="relative max-w-7xl mx-auto">
      
      {/* Horizontal connector line (desktop only) */}
      <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[2px] bg-[#E56020]/30"></div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-0">
        {process.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">

            {/* Circle */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full
                            bg-gradient-to-tr from-[#E56020] to-[#F6A35C]
                            flex items-center justify-center
                            font-bold text-white text-lg md:text-xl
                            shadow-xl z-10">
              {item.step}
            </div>

            {/* Mobile connector */}
            {index < process.length - 1 && (
              <div className="md:hidden w-[2px] h-8 bg-[#E56020]/40 mt-3 rounded-full"></div>
            )}

            {/* Text */}
            <div className="mt-5 max-w-[180px]">
              <h4 className="font-semibold text-[#3d1700] text-sm md:text-base mb-1">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
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
    <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
      Frequently Asked Questions
    </h2>

    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group border border-gray-200 rounded-xl bg-white overflow-hidden"
        >
          {/* Question */}
          <summary
            className="flex justify-between items-center p-6 cursor-pointer
                       text-[#3d1700] font-semibold text-lg
                       list-none hover:bg-gray-50 transition"
          >
            <span>{faq.question}</span>

            {/* Arrow */}
            <span
              className="ml-4 text-[#E56020] transition-transform duration-300
                         group-open:rotate-180"
            >
              ▼
            </span>
          </summary>

          {/* Answer */}
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#E56020] to-[#C4501A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Opening a Corporate Bank Account?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our banking experts guide you through the account opening process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
                <Button size="lg" onClick={openPopup} className="bg-white text-[#3d1700] hover:bg-gray-100 font-semibold">
                  Schedule Consultation
                </Button>
              
              <a href="https://wa.me/971523149927" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-[#3d1700] hover:bg-white hover:text-[#3d1700] font-semibold">
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
