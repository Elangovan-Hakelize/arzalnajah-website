import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  CheckCircle2, 
  FileText,
  Users,
  Briefcase,
  GraduationCap,
  Heart
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE Golden Visa Services | 5 & 10 Year Residence - ARZ Al Najah",
  description: "Expert UAE Golden Visa assistance for investors, entrepreneurs, professionals, and skilled workers. Long-term residence (5-10 years). Complete documentation support.",
  keywords: "UAE golden visa, Dubai golden visa, 10 year visa UAE, long term residence UAE, golden visa requirements, investor visa UAE",
};

export default function GoldenVisaAssistance() {
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
        <section className="bg-gradient-to-br from-[#0A1A4A] to-[#0D2158] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-2 text-[#D4A017] mb-4">
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
                  <Button size="lg" className="bg-[#D4A017] hover:bg-[#B8900F] text-white font-semibold">
                    Check Eligibility
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

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Golden Visa Categories
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#D4A017] hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-[#D4A017] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-[#D4A017]" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Validity</div>
                        <div className="text-xl font-bold text-[#D4A017]">{category.validity}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1A4A] mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#0A1A4A] mb-3">Requirements:</h4>
                      {category.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-0.5" />
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
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Golden Visa Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-gray-200">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                    <span className="font-semibold text-[#0A1A4A]">{benefit}</span>
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
              Golden Visa Application Process
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
              Required Documents
            </h2>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div>
                <h3 className="text-xl font-bold text-[#0A1A4A] mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 text-[#D4A017] mr-2" />
                  Investor Category
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
                  Professional Category
                </h3>
                <div className="space-y-3">
                  {documents.professional.map((doc, index) => (
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
                  <Star className="w-6 h-6 text-[#D4A017] mr-2" />
                  Specialized Talents
                </h3>
                <div className="space-y-3">
                  {documents.specialized.map((doc, index) => (
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
        <section className="py-16 bg-gradient-to-br from-[#D4A017] to-[#B8900F] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Apply for UAE Golden Visa?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get expert assistance with your Golden Visa application and secure long-term residence in UAE
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
