import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mainland vs Freezone Company Setup: Which is Better? | ARZ Al Najah",
  description: "Comprehensive comparison of mainland and freezone company structures in UAE. Learn the pros, cons, costs, and which option suits your business model best.",
  keywords: "mainland vs freezone Dubai, UAE company comparison, freezone vs mainland, business setup options Dubai",
};

export default function MainlandVsFreezoneComparison() {
  const comparisonData = [
    {
      feature: "Foreign Ownership",
      mainland: "100% (most activities)",
      freezone: "100%"
    },
    {
      feature: "Trading in UAE Market",
      mainland: "Yes, anywhere",
      freezone: "Requires distributor"
    },
    {
      feature: "Office Requirement",
      mainland: "Physical office mandatory",
      freezone: "Flexi-desk available"
    },
    {
      feature: "Setup Cost",
      mainland: "AED 30,000 - 80,000",
      freezone: "AED 18,000 - 45,000"
    },
    {
      feature: "Visa Quota",
      mainland: "Unlimited",
      freezone: "Based on office size"
    },
    {
      feature: "Tax Benefits",
      mainland: "Standard UAE rates",
      freezone: "0% tax (varies)"
    },
    {
      feature: "Government Contracts",
      mainland: "Eligible",
      freezone: "Limited eligibility"
    },
    {
      feature: "Setup Time",
      mainland: "5-7 days",
      freezone: "3-5 days"
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
            <span className="text-[#3d1700]">Mainland vs Freezone Comparison</span>
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
                Company Formation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#3d1700] mb-6">
              Mainland vs Freezone Company Setup: Which is Better for Your Business?
            </h1>

            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>January 10, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>10 min read</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
              alt="Mainland vs Freezone"
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                One of the most important decisions when starting a business in Dubai is choosing between mainland and freezone company setup. Each option has distinct advantages and limitations. This comprehensive guide will help you make an informed decision.
              </p>

              <h2 className="text-3xl font-bold text-[#3d1700] mt-12 mb-6">
                Quick Comparison Table
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#3d1700] text-white">
                      <th className="p-4 text-left">Feature</th>
                      <th className="p-4 text-left">Mainland</th>
                      <th className="p-4 text-left">Freezone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-semibold text-[#3d1700]">{row.feature}</td>
                        <td className="p-4 text-gray-700">{row.mainland}</td>
                        <td className="p-4 text-gray-700">{row.freezone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-[#3d1700] mt-12 mb-6">
                Mainland Company Setup: Pros & Cons
              </h2>

              <Card className="border-2 border-green-200 bg-green-50 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#3d1700] mb-4 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
                    Advantages
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Trade anywhere in the UAE without restrictions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Access to local UAE market and government contracts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Unlimited visa quota based on office size</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>100% foreign ownership for most business activities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Greater business credibility in local market</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#3d1700] mb-4 flex items-center">
                    <XCircle className="w-6 h-6 text-red-600 mr-2" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Higher setup costs (AED 30,000 - 80,000)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Mandatory physical office space required</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>More complex setup process</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Longer processing time (5-7 days)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-[#3d1700] mt-12 mb-6">
                Freezone Company Setup: Pros & Cons
              </h2>

              <Card className="border-2 border-green-200 bg-green-50 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#3d1700] mb-4 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
                    Advantages
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Lower setup costs (AED 18,000 - 45,000)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>100% foreign ownership guaranteed</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Tax benefits (0% corporate tax in most freezones)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Flexible workspace options (flexi-desk, shared, private)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Faster setup process (3-5 days)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>Full profit repatriation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 bg-red-50 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#3d1700] mb-4 flex items-center">
                    <XCircle className="w-6 h-6 text-red-600 mr-2" />
                    Disadvantages
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Cannot trade directly in UAE mainland market</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Need local distributor for mainland business</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Limited visa quota based on office type</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <span>Restricted to freezone location</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-[#3d1700] mt-12 mb-6">
                Which Option is Right for You?
              </h2>

              <h3 className="text-2xl font-bold text-[#3d1700] mt-8 mb-4">
                Choose Mainland If:
              </h3>
              <ul className="space-y-2 mb-6">
                <li>✅ You want to trade directly with UAE mainland customers</li>
                <li>✅ Your business model requires local market access</li>
                <li>✅ You need to bid for government contracts</li>
                <li>✅ You plan to hire many employees (need unlimited visas)</li>
                <li>✅ Your industry requires mainland presence (construction, retail stores, etc.)</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#3d1700] mt-8 mb-4">
                Choose Freezone If:
              </h3>
              <ul className="space-y-2 mb-8">
                <li>✅ You're primarily trading internationally</li>
                <li>✅ You want lower setup costs</li>
                <li>✅ You prefer tax benefits and incentives</li>
                <li>✅ You need flexible office arrangements</li>
                <li>✅ Your business is service-based (consulting, IT, marketing, etc.)</li>
                <li>✅ You're a startup or freelancer</li>
              </ul>

              <h2 className="text-3xl font-bold text-[#3d1700] mt-12 mb-6">
                Can You Have Both?
              </h2>
              <p className="text-gray-700 mb-8">
                Yes! Many businesses start with a freezone company and later establish a mainland presence as they grow. This hybrid approach allows you to benefit from freezone advantages while gradually expanding into the local market. Some businesses also operate both simultaneously - using the freezone entity for international operations and the mainland company for local trade.
              </p>

              <h2 className="text-3xl font-bold text-[#3d1700] mt-12 mb-6">
                Conclusion
              </h2>
              <p className="text-gray-700 mb-8">
                Both mainland and freezone setups have their merits. Your choice should depend on your business model, target market, budget, and long-term goals. Consulting with experts like ARZ Al Najah can help you make the right decision based on your specific circumstances.
              </p>
            </div>

            {/* CTA Card */}
            <Card className="border-2 border-[#E56020] mt-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#3d1700] mb-4">
                  Not Sure Which Option is Best for You?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get expert advice from our business setup consultants
                </p>
                <Link href="/contact">
                  <Button size="lg" className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold">
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
