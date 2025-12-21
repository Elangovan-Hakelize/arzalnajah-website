'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEnquiryPopup } from "@/components/EnquiryPopup";
import { 
  Star, 
  CheckCircle2, 
  FileText,
  Users,
  Briefcase,
  GraduationCap,
  Heart
} from "lucide-react";


export default function GoldenVisaAssistance() {

  const { openPopup } = useEnquiryPopup();
  const categories = [
    {
      icon: Briefcase,
      title: "Investors",
      validity: "10 Years",
      description: "Property investors and business owners",
      requirements: [
        "Property investment of AED 2 million+",
        "Or business investment with capital AED 2 million+",
        "Valid passport",
        "Proof of investment"
      ]
    },
    {
      icon: Star,
      title: "Entrepreneurs",
      validity: "5 Years",
      description: "Startup founders and business innovators",
      requirements: [
        "Approved business project",
        "Previous/current project worth AED 500,000+",
        "Approval from accredited business incubator",
        "Business plan"
      ]
    },
    {
      icon: GraduationCap,
      title: "Specialized Talents",
      validity: "10 Years",
      description: "Doctors, scientists, researchers, artists",
      requirements: [
        "Recognition from relevant UAE authority",
        "Proof of specialization",
        "Employment/achievement certificates",
        "Professional credentials"
      ]
    },
    {
      icon: Users,
      title: "Skilled Professionals",
      validity: "10 Years",
      description: "Executives and specialized professionals",
      requirements: [
        "Valid employment contract",
        "Minimum salary AED 30,000/month",
        "University degree or specialized certification",
        "Professional experience"
      ]
    }
  ];

  const benefits = [
    "Long-term residence (5-10 years)",
    "100% business ownership",
    "Sponsor family members",
    "No need for employer sponsorship",
    "Stay outside UAE without cancellation",
    "Unlimited entry and exit",
    "Work permit not required",
    "Access to world-class healthcare & education"
  ];

  const process = [
    { step: 1, title: "Eligibility Assessment", description: "Evaluate your eligibility under various Golden Visa categories" },
    { step: 2, title: "Document Preparation", description: "Gather and prepare all required certificates and proofs" },
    { step: 3, title: "Nomination & Approval", description: "Apply for nomination through relevant government entity" },
    { step: 4, title: "Entry Permit", description: "Obtain entry permit valid for 6 months" },
    { step: 5, title: "Medical & Emirates ID", description: "Complete medical fitness and Emirates ID application" },
    { step: 6, title: "Visa Stamping", description: "Final visa stamping on passport" }
  ];

  const documents = {
    investor: [
      "Valid passport (6 months validity)",
      "Property ownership deed/title",
      "Property valuation certificate",
      "Or business trade license",
      "Capital investment proof",
      "Bank statements",
      "Passport-sized photographs"
    ],
    professional: [
      "Valid passport",
      "Employment contract",
      "Salary certificate (AED 30,000+)",
      "University degree (attested)",
      "Professional certifications",
      "Experience letters",
      "Employer NOC"
    ],
    specialized: [
      "Valid passport",
      "Recognition letter from UAE authority",
      "Proof of specialization",
      "Achievement certificates/awards",
      "Research publications (if applicable)",
      "Professional credentials",
      "CV with accomplishments"
    ]
  };

  const faqs = [
    {
      question: "Who is eligible for UAE Golden Visa?",
      answer: "UAE Golden Visa is available for investors (property/business AED 2M+), entrepreneurs with approved projects, specialized talents (doctors, scientists, artists), outstanding students, and professionals earning AED 30,000+ monthly. Family members can also be sponsored."
    },
    {
      question: "How much investment is required for Golden Visa?",
      answer: "For property investors, minimum investment is AED 2 million in UAE real estate. For business investors, minimum capital investment is AED 2 million. Entrepreneurs can apply with projects valued at AED 500,000+ with incubator approval. Professionals with AED 30,000 monthly salary also qualify."
    },
    {
      question: "Can I sponsor my family on Golden Visa?",
      answer: "Yes, Golden Visa holders can sponsor their spouse, children (regardless of age), and parents. Sponsored family members also receive long-term residence permits matching the primary holder's visa duration."
    },
    {
      question: "How long does Golden Visa application take?",
      answer: "The Golden Visa application process typically takes 2-3 months from initial assessment to final visa stamping. Timeline depends on document completeness, category type, and government processing times. We expedite applications where possible."
    },
    {
      question: "What happens if I stay outside UAE for long periods?",
      answer: "One major advantage of Golden Visa is that you can stay outside UAE for extended periods without visa cancellation. Unlike standard residence visas that cancel after 6 months outside UAE, Golden Visa remains valid regardless of stay duration abroad."
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
            "serviceType": "UAE Golden Visa Assistance",
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
                <Link href="/services/golden-visa-assistance" className="hover:underline">Services</Link>
                <span>/</span>
                <span>Golden Visa Assistance</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                UAE Golden Visa Services
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Get your long-term UAE residence with Golden Visa (5-10 years). Expert assistance for investors, entrepreneurs, professionals, and specialized talents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold">
                    Check Eligibility
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

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Golden Visa Categories
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#E56020] hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-[#ffff]" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Validity</div>
                        <div className="text-xl font-bold text-[#E56020]">{category.validity}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#3d1700] mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#3d1700] mb-3">Requirements:</h4>
                      {category.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Golden Visa Benefits
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Golden Visa Application Process
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Required Documents
            </h2>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div>
                <h3 className="text-xl font-bold text-[#3d1700] mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 text-[#E56020] mr-2" />
                  Investor Category
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
                  Professional Category
                </h3>
                <div className="space-y-3">
                  {documents.professional.map((doc, index) => (
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
                  <Star className="w-6 h-6 text-[#E56020] mr-2" />
                  Specialized Talents
                </h3>
                <div className="space-y-3">
                  {documents.specialized.map((doc, index) => (
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
              Ready to Apply for UAE Golden Visa?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get expert assistance with your Golden Visa application and secure long-term residence in UAE
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
