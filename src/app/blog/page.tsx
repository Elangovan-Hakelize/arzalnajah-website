'use client';
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { useEnquiryPopup } from "@/components/EnquiryPopup";


export default function Blog() {
  const { openPopup } = useEnquiryPopup();
  const articles = [
    {
      slug: "cost-of-business-setup-dubai-2025",
      title: "Cost of Business Setup in Dubai 2025: Complete Breakdown",
      excerpt: "Comprehensive guide to all costs involved in starting a business in Dubai including license fees, office rent, visa costs, and hidden expenses to budget for.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Business Setup",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    },
    {
      slug: "mainland-vs-freezone-comparison",
      title: "Mainland vs Freezone Company Setup: Which is Better for Your Business?",
      excerpt: "Detailed comparison of mainland and freezone company structures in UAE. Learn the pros, cons, costs, and which option suits your business model best.",
      date: "2025-01-10",
      readTime: "10 min read",
      category: "Company Formation",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      slug: "investor-visa-uae-guide",
      title: "How to Apply for an Investor Visa in UAE: Step-by-Step Guide",
      excerpt: "Complete guide to obtaining UAE investor visa including eligibility criteria, required documents, application process, and timeline for approval.",
      date: "2025-01-05",
      readTime: "7 min read",
      category: "Visa Services",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
    },
    {
      slug: "dubai-trade-license-guide",
      title: "Step-by-Step Guide to Getting a Dubai Trade License",
      excerpt: "Everything you need to know about Dubai trade licenses: types, costs, application process, renewal procedures, and common mistakes to avoid.",
      date: "2024-12-28",
      readTime: "9 min read",
      category: "Licensing",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
      slug: "best-freezones-ecommerce-uae",
      title: "Best Free Zones for E-Commerce Companies in UAE",
      excerpt: "Discover the top UAE freezones for e-commerce businesses including DMCC, DAFZA, and Dubai CommerCity with comparison of costs, benefits, and features.",
      date: "2024-12-20",
      readTime: "6 min read",
      category: "Freezone",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#9c5a33] via-[#7a3e1f] to-[#3d1700] text-white px-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-[#E56020] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Setup Insights & Guides
            </h1>
            <p className="text-xl text-gray-200">
              Explore expert advice, the latest updates, and step-by-step
guides on starting and growing your business in Dubai and the
UAE.
From trade licenses to visas, Freezone rules, Mainland
regulations, and banking-our blog provides everything you
need to make informed business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Article */}
            <Card className="mb-12 overflow-hidden border-2 border-[#E56020] hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <div 
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${articles[0].image})` }}
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-[#E56020] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="text-gray-600 text-sm">{articles[0].category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#3d1700] mb-4">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(articles[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{articles[0].readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${articles[0].slug}`} className="text-[#E56020] font-semibold flex items-center space-x-2 hover:underline">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Other Articles */}
            <div className="grid md:grid-cols-2 gap-8">
              {articles.slice(1).map((article, index) => (
                <Card key={index} className="overflow-hidden border-gray-200 hover:border-[#E56020] hover:shadow-xl transition-all group">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-[#E56020] text-sm font-semibold">{article.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#3d1700] mb-3 group-hover:text-[#E56020] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <Link href={`/blog/${article.slug}`} className="text-[#E56020] font-semibold flex items-center space-x-2 hover:underline">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#E56020] to-[#C4501A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Business in Dubai?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert guidance from our business setup specialists
          </p>
         
            <button onClick={openPopup} className="bg-white text-[#3d1700] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Schedule Free Consultation
            </button>
       
        </div>
      </section>
    </main>
  );
}