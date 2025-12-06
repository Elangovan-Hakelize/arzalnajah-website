import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost of Business Setup in Dubai 2025: Complete Breakdown | ARZ Al Najah",
  description: "Detailed guide to all costs involved in starting a business in Dubai including license fees, office rent, visa costs, and hidden expenses to budget for in 2025.",
  keywords: "Dubai business setup cost 2025, company formation fees UAE, Dubai license cost, business setup budget Dubai",
};

export default function CostOfBusinessSetupDubai2025() {
  const mainlandCosts = [
    { item: "Trade License Fee", cost: "AED 10,000 - 15,000" },
    { item: "Office Space (Annual)", cost: "AED 15,000 - 50,000" },
    { item: "Ejari Registration", cost: "AED 220" },
    { item: "Visa Costs (per visa)", cost: "AED 3,000 - 5,000" },
    { item: "Initial Approval", cost: "AED 1,200" },
    { item: "Memorandum of Association", cost: "AED 2,000" }
  ];

  const freezoneCosts = [
    { item: "License Fee (Flexi-Desk)", cost: "AED 10,000 - 15,000" },
    { item: "Office Space (Shared)", cost: "AED 12,000 - 25,000" },
    { item: "Visa Quota (2-3 visas)", cost: "Included" },
    { item: "Trade Name Registration", cost: "AED 600" },
    { item: "Immigration Card", cost: "AED 3,000 per visa" },
    { item: "Annual Renewal", cost: "Similar to initial" }
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
            <span className="text-[#0A1A4A]">Cost of Business Setup in Dubai 2025</span>
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
                Business Setup
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1A4A] mb-6">
              Cost of Business Setup in Dubai 2025: Complete Breakdown
            </h1>

            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>8 min read</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80"
              alt="Business Setup Costs Dubai"
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Starting a business in Dubai is an exciting venture, but understanding the complete cost structure is crucial for proper financial planning. In this comprehensive guide, we break down all expenses you'll encounter when setting up your company in Dubai in 2025.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Mainland Company Setup Costs
              </h2>
              <p className="text-gray-700 mb-6">
                Mainland companies allow you to trade anywhere in the UAE and have access to the local market. Here's a detailed breakdown of costs:
              </p>

              <Card className="border-2 border-gray-200 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1A4A] mb-4">Mainland Cost Breakdown</h3>
                  <div className="space-y-3">
                    {mainlandCosts.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="font-semibold text-[#D4A017]">{item.cost}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-4 font-bold text-lg">
                      <span className="text-[#0A1A4A]">Total Estimated Cost:</span>
                      <span className="text-[#D4A017]">AED 30,000 - 80,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Freezone Company Setup Costs
              </h2>
              <p className="text-gray-700 mb-6">
                Freezone companies offer 100% foreign ownership and tax benefits. Costs vary by freezone, but here's a typical breakdown:
              </p>

              <Card className="border-2 border-gray-200 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1A4A] mb-4">Freezone Cost Breakdown</h3>
                  <div className="space-y-3">
                    {freezoneCosts.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="font-semibold text-[#D4A017]">{item.cost}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-4 font-bold text-lg">
                      <span className="text-[#0A1A4A]">Total Estimated Cost:</span>
                      <span className="text-[#D4A017]">AED 18,000 - 45,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Additional Costs to Consider
              </h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Bank Account Opening:</strong> AED 2,000 - 5,000 (varies by bank)
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Document Attestation:</strong> AED 500 - 1,500 per document
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                  <div>
                    <strong>PRO Services (Annual):</strong> AED 12,000 - 18,000
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Medical Insurance (per employee):</strong> AED 1,500 - 3,000 annually
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                  <div>
                    <strong>Office Furniture & Setup:</strong> AED 5,000 - 20,000
                  </div>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Cost-Saving Tips
              </h2>
              <p className="text-gray-700 mb-4">
                Here are proven strategies to reduce your business setup costs:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-8">
                <li><strong>Choose the right freezone:</strong> Different freezones have varying costs. Compare multiple options.</li>
                <li><strong>Start with flexi-desk:</strong> Begin with a flexible workspace and upgrade as you grow.</li>
                <li><strong>Limit initial visas:</strong> Start with fewer visas and add more as needed.</li>
                <li><strong>Bundle services:</strong> Many consultancies offer package deals that save money.</li>
                <li><strong>Consider shared office space:</strong> Significantly cheaper than private offices.</li>
              </ol>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Hidden Costs to Watch Out For
              </h2>
              <p className="text-gray-700 mb-8">
                Many entrepreneurs underestimate these expenses. Be prepared for document translation fees, multiple attestations, courier services for government submissions, medical fitness tests for visas, and Emirates ID issuance fees.
              </p>

              <h2 className="text-3xl font-bold text-[#0A1A4A] mt-12 mb-6">
                Conclusion
              </h2>
              <p className="text-gray-700 mb-8">
                The total cost of setting up a business in Dubai ranges from AED 20,000 to AED 100,000+ depending on your chosen structure, location, and requirements. Working with an experienced business setup consultancy like ARZ Al Najah can help you navigate these costs efficiently and avoid unnecessary expenses.
              </p>
            </div>

            {/* CTA Card */}
            <Card className="border-2 border-[#D4A017] mt-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#0A1A4A] mb-4">
                  Get a Detailed Cost Estimate for Your Business
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us for a free consultation and personalized cost breakdown
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-[#D4A017] hover:bg-[#B8900F] text-white font-semibold">
                    Schedule Free Consultation
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
