'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEnquiryPopup } from "@/components/EnquiryPopup";
import { 
  UserCheck, 
  CheckCircle2, 
  FileText,
  Users,
  Briefcase,
  Home
} from "lucide-react";


export default function VisaServices() {

  const { openPopup } = useEnquiryPopup();

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
        <section className="relative bg-gradient-to-br from-[#9c5a33] via-[#7a3e1f] to-[#3d1700] text-white py-15 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-2 text-[#E56020] mb-4">
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

        {/* Visa Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Our Visa Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {visaTypes.map((visa, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#E56020] hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <visa.icon className="w-8 h-8 text-[#ffff]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#3d1700] mb-3">{visa.title}</h3>
                    <p className="text-gray-600 mb-4">{visa.description}</p>
                    <div className="flex justify-between items-center mb-6 pb-6 border-b">
                      <div>
                        <div className="text-sm text-gray-500">Starting from</div>
                        <div className="text-2xl font-bold text-[#E56020]">{visa.price}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Validity</div>
                        <div className="text-lg font-semibold text-[#3d1700]">{visa.validity}</div>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {visa.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="w-full bg-[#3d1700] hover:bg-[#3d1700] text-white">
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
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Visa Processing Steps
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
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div>
                <h3 className="text-xl font-bold text-[#3d1700] mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 text-[#E56020] mr-2" />
                  Investor Visa
                </h3>
                <div className="space-y-3">
                  {documents.investor.map((doc, index) => (
                    <Card key={index} className="border-gray-200">
                      <CardContent className="p-3 flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-[#E56020] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{doc}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3d1700] mb-6 flex items-center">
                  <Users className="w-6 h-6 text-[#E56020] mr-2" />
                  Employment Visa
                </h3>
                <div className="space-y-3">
                  {documents.employment.map((doc, index) => (
                    <Card key={index} className="border-gray-200">
                      <CardContent className="p-3 flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-[#E56020] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{doc}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3d1700] mb-6 flex items-center">
                  <Home className="w-6 h-6 text-[#E56020] mr-2" />
                  Family Visa
                </h3>
                <div className="space-y-3">
                  {documents.family.map((doc, index) => (
                    <Card key={index} className="border-gray-200">
                      <CardContent className="p-3 flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-[#E56020] flex-shrink-0" />
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
              Need Help with UAE Visa Processing?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our visa experts handle your application for fast and hassle-free processing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
                <Button size="lg" onClick={openPopup} className="bg-white text-[#3d1700] hover:bg-gray-100 font-semibold">
                  Schedule Consultation
                </Button>
             
              <a href="https://wa.me/971523149927" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-[#3d1700] hover:bg-white hover:text-[#3d1700]">
                  Whatsapp Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
