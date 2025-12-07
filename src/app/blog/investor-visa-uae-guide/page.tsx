import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Apply for an Investor Visa in UAE: Complete Guide | ARZ Al Najah",
  description: "Step-by-step guide to obtaining UAE investor visa including eligibility, required documents, application process, and timeline. Expert insights for 2025.",
  keywords: "UAE investor visa, Dubai investor visa, UAE visa application, investor visa requirements, UAE residence visa",
};

export default function InvestorVisaUAEGuide() {
  const eligibility = [
    "Own a company in UAE mainland or freezone",
    "Have a valid trade license",
    "Meet minimum capital requirements (varies by emirate)",
    "Pass medical fitness test",
    "Have no criminal record",
    "Provide proof of financial stability"
  ];

  const documents = [
    "Valid passport (minimum 6 months validity)",
    "Recent passport-sized photographs",
    "Company trade license copy",
    "Memorandum of Association",
    "Tenancy contract (Ejari)",
    "Bank statement or proof of funds",
    "Medical fitness certificate",
    "Emirates ID application",
    "Health insurance certificate"
  ];

  const process = [
    { 
      step: 1, 
      title: "Establish Your Company", 
      description: "First, set up your mainland or freezone company and obtain trade license",
      duration: "5-7 days"
    },
    { 
      step: 2, 
      title: "Submit Entry Permit Application", 
      description: "Apply for entry permit through immigration department",
      duration: "2-3 days"
    },
    { 
      step: 3, 
      title: "Medical Fitness Test", 
      description: "Complete medical examination at approved center",
      duration: "1 day"
    },
    { 
      step: 4, 
      title: "Emirates ID Application", 
      description: "Apply for Emirates ID card at typing center",
      duration: "1 day"
    },
    { 
      step: 5, 
      title: "Visa Stamping", 
      description: "Final visa stamping in passport at immigration",
      duration: "2-3 days"
    },
    { 
      step: 6, 
      title: "Receive Residence Visa", 
      description: "Collect your residence visa and Emirates ID",
      duration: "10-15 days total"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E56020]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#E56020]">Blog</Link>
            <span>/</span>
            <span className="text-[#0A1A4A]">Investor Visa UAE Guide</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-[#E56020] hover:underline mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <span className="bg-[#E56020] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Visa Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1A4A] mb-6">
              How to Apply for an Investor Visa in UAE: Step-by-Step Guide
            </h1>

            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>January 5, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>7 min read</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
              alt="UAE Investor Visa"
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                The UAE investor visa (also known as investor residence visa) allows business owners and entrepreneurs to live and work in the United Arab Emirates. This comprehensive guide walks you through the complete application process for 2025.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                What is an Investor Visa?
              </h2>
              <p className="text-gray-700 mb-6">
                An investor visa is a residence permit granted to individuals who own a business in the UAE. It typically comes with a 2-3 year validity and allows the holder to sponsor family members and employees. Unlike employment visas, investor visas give you the freedom to manage your own business without needing a local sponsor.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Eligibility Criteria
              </h2>
              <Card className="border-2 border-gray-200 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1A4A] mb-4">You Must:</h3>
                  <ul className="space-y-2">
                    {eligibility.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-[#E56020] font-bold">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Required Documents
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {documents.map((doc, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-[#E56020] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Application Process
              </h2>
              <div className="space-y-6 mb-8">
                {process.map((item, index) => (
                  <Card key={index} className="border-2 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#E56020] text-white rounded-full flex items-center justify-center font-bold">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-[#0A1A4A]">{item.title}</h3>
                            <span className="text-sm text-[#E56020] font-semibold">{item.duration}</span>
                          </div>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Costs Involved
              </h2>
              <Card className="border-2 border-[#E56020] mb-8">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Entry Permit Fee</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 500</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Medical Fitness Test</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 300</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Emirates ID</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 370</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Visa Stamping</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 500</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Typing & Service Charges</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 500</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Health Insurance (Annual)</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 1,500+</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-gray-200 font-bold text-lg">
                      <span className="text-[#0A1A4A]">Total Approximate Cost:</span>
                      <span className="text-[#E56020]">AED 3,500 - 5,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Processing Timeline
              </h2>
              <p className="text-gray-700 mb-4">
                The complete investor visa process typically takes <strong>10-15 working days</strong> from start to finish, assuming all documents are ready and there are no complications. Here's the breakdown:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>Entry permit approval: 2-3 days</li>
                <li>Medical test and Emirates ID application: 1-2 days</li>
                <li>Status change and visa stamping: 5-7 days</li>
                <li>Emirates ID collection: 10-15 days (after application)</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Visa Validity and Renewal
              </h2>
              <p className="text-gray-700 mb-4">
                Investor visas are typically issued for 2-3 years depending on your company license validity. You must renew your visa before it expires to maintain legal residence status in the UAE.
              </p>
              <p className="text-gray-700 mb-8">
                <strong>Important:</strong> Start the renewal process at least 30 days before expiry to avoid fines and complications.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Family Sponsorship
              </h2>
              <p className="text-gray-700 mb-8">
                With an investor visa, you can sponsor your spouse, children, and parents (subject to minimum salary requirements). Each family member will need their own residence visa, medical test, and Emirates ID.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Common Mistakes to Avoid
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>Incomplete documentation causing delays</li>
                <li>Not maintaining valid health insurance (mandatory)</li>
                <li>Missing medical test validity dates</li>
                <li>Forgetting to renew before expiry</li>
                <li>Not updating visa status after company changes</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Why Use ARZ Al Najah for Your Investor Visa?
              </h2>
              <p className="text-gray-700 mb-8">
                Navigating the UAE visa system can be complex with frequent regulation changes. Our PRO services team handles the entire process for you - from document preparation to final visa collection. We ensure fast processing, zero errors, and full compliance with immigration requirements.
              </p>
            </div>

            {/* CTA Card */}
            <Card className="border-2 border-[#E56020] mt-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#0A1A4A] mb-4">
                  Need Help with Your Investor Visa Application?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let our experts handle your visa processing from start to finish
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold">
                    Get Expert Visa Assistance
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </main>
  );
}
