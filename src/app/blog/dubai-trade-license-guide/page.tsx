import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Step-by-Step Guide to Getting a Dubai Trade License | ARZ Al Najah",
  description: "Complete guide to Dubai trade licenses: types, costs, application process, renewal procedures, and common mistakes to avoid. Expert insights for 2025.",
  keywords: "Dubai trade license, UAE business license, commercial license Dubai, professional license UAE, trade license cost",
};

export default function DubaiTradeLicenseGuide() {
  const licenseTypes = [
    {
      type: "Commercial License",
      description: "For trading and import/export activities",
      activities: ["General trading", "Import/Export", "Wholesale", "Retail stores", "E-commerce"],
      cost: "AED 10,000 - 15,000"
    },
    {
      type: "Professional License",
      description: "For service-based businesses and professionals",
      activities: ["Consulting", "Marketing", "IT Services", "Legal services", "Medical services"],
      cost: "AED 8,000 - 12,000"
    },
    {
      type: "Industrial License",
      description: "For manufacturing and industrial activities",
      activities: ["Manufacturing", "Production", "Assembly", "Food processing", "Packaging"],
      cost: "AED 15,000 - 25,000"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Determine Business Activity",
      description: "Choose your business activities from the DED approved list. This determines your license type."
    },
    {
      step: 2,
      title: "Choose Trade Name",
      description: "Select a unique company name that complies with UAE naming conventions."
    },
    {
      step: 3,
      title: "Initial Approval",
      description: "Submit initial approval application with required documents to DED."
    },
    {
      step: 4,
      title: "Get External Approvals",
      description: "Obtain necessary approvals from relevant authorities (if applicable to your business)."
    },
    {
      step: 5,
      title: "Sign Tenancy Contract",
      description: "Secure physical office space and register Ejari contract with RERA."
    },
    {
      step: 6,
      title: "Final License Issuance",
      description: "Submit all documents and receive your trade license from DED."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#D4A017]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#D4A017]">Blog</Link>
            <span>/</span>
            <span className="text-[#0A1A4A]">Dubai Trade License Guide</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-[#D4A017] hover:underline mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <span className="bg-[#D4A017] text-white px-4 py-1 rounded-full text-sm font-semibold">
                Licensing
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1A4A] mb-6">
              Step-by-Step Guide to Getting a Dubai Trade License
            </h1>

            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>December 28, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>9 min read</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
              alt="Dubai Trade License"
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                A trade license is the most fundamental requirement for starting any business in Dubai. This comprehensive guide explains everything you need to know about obtaining, maintaining, and renewing your Dubai trade license in 2025.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                What is a Dubai Trade License?
              </h2>
              <p className="text-gray-700 mb-6">
                A Dubai trade license is an official document issued by the Department of Economic Development (DED) that permits businesses to operate legally within the emirate. It specifies your approved business activities and is mandatory for all commercial operations in Dubai mainland.
              </p>
              <p className="text-gray-700 mb-8">
                Without a valid trade license, you cannot legally conduct business, open a corporate bank account, hire employees, or sponsor visas in Dubai.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Types of Trade Licenses in Dubai
              </h2>

              <div className="space-y-6 mb-8">
                {licenseTypes.map((license, index) => (
                  <Card key={index} className="border-2 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-[#0A1A4A]">{license.type}</h3>
                        <span className="text-[#D4A017] font-bold">{license.cost}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{license.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-[#0A1A4A] mb-2">Permitted Activities:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {license.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                              <span className="text-sm text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Application Process
              </h2>
              <div className="space-y-6 mb-8">
                {process.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#D4A017] text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 pb-6 border-l-2 border-gray-200 pl-6 -ml-6 last:border-l-0">
                      <h3 className="text-xl font-bold text-[#0A1A4A] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Required Documents
              </h2>
              <Card className="border-2 border-[#D4A017] mb-8">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Passport copies of all shareholders/partners</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Visa copies (if already in UAE)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Recent passport-sized photographs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Business plan outlining activities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Tenancy contract (Ejari registered)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">No Objection Certificate (if employed)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">External approvals (industry-specific)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Memorandum of Association (MOA)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                License Costs Breakdown
              </h2>
              <Card className="border-2 border-gray-200 mb-8">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Initial Approval Fee</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 1,200</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Trade License Fee (Annual)</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 10,000 - 15,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Memorandum of Association</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 2,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">Chamber of Commerce Registration</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 1,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-700">External Approvals (if needed)</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 1,000 - 5,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Service/Typing Charges</span>
                      <span className="font-semibold text-[#0A1A4A]">AED 500 - 1,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Processing Timeline
              </h2>
              <p className="text-gray-700 mb-8">
                The complete trade license process takes approximately <strong>5-7 working days</strong> for straightforward applications. However, businesses requiring special approvals (food, healthcare, education) may take 2-3 weeks. Starting early and having all documents ready significantly speeds up the process.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                License Renewal Process
              </h2>
              <p className="text-gray-700 mb-4">
                Dubai trade licenses must be renewed annually before the expiry date. The renewal process is simpler than initial issuance but still requires:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>Valid tenancy contract (Ejari renewal)</li>
                <li>Updated external approvals (if applicable)</li>
                <li>Payment of renewal fees</li>
                <li>Chamber of Commerce renewal</li>
              </ul>
              <p className="text-gray-700 mb-8">
                <strong>Pro Tip:</strong> Start renewal process 30-60 days before expiry to avoid late fees and business disruption.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Common Mistakes to Avoid
              </h2>
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="text-gray-700">❌ Choosing wrong business activities (limits future operations)</li>
                  <li className="text-gray-700">❌ Selecting non-compliant company names</li>
                  <li className="text-gray-700">❌ Insufficient office space for visa requirements</li>
                  <li className="text-gray-700">❌ Missing external approval requirements</li>
                  <li className="text-gray-700">❌ Not maintaining valid Ejari contract</li>
                  <li className="text-gray-700">❌ Late renewal causing penalties</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Activities You Can Add to Your License
              </h2>
              <p className="text-gray-700 mb-8">
                Most businesses can list multiple activities on a single trade license. However, you must choose activities from the same category (commercial, professional, or industrial). Adding activities costs AED 1,000 - 2,000 per activity through a license amendment process.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Conclusion
              </h2>
              <p className="text-gray-700 mb-8">
                Obtaining a Dubai trade license is the foundational step for any business in the emirate. While the process has become more streamlined in recent years, having expert guidance ensures you choose the right license type, avoid costly mistakes, and get your business operational quickly. ARZ Al Najah's experienced team can handle your entire trade license application from start to finish.
              </p>
            </div>

            {/* CTA Card */}
            <Card className="border-2 border-[#D4A017] mt-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#0A1A4A] mb-4">
                  Ready to Get Your Dubai Trade License?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let us handle your trade license application and setup process
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-[#D4A017] hover:bg-[#B8900F] text-white font-semibold">
                    Get Started Today
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
