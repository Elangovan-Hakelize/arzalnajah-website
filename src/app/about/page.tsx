import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Award, 
  Users,
  CheckCircle2,
  Shield,
  Clock,
  TrendingUp
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ARZ Al Najah | Leading Business Setup Consultancy in Dubai",
  description: "Learn about ARZ Al Najah Business Setup Services - your trusted partner for company formation in Dubai & UAE since 2010. Expert team, 500+ successful setups.",
  keywords: "about ARZ Al Najah, Dubai business consultancy, UAE company formation experts, business setup company Dubai",
};

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality service and results"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority - we put clients first in everything we do"
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Fast turnaround times without compromising on quality or compliance"
    }
  ];

  const whyChooseUs = [
    "15+ years of experience in UAE business setup",
    "500+ successful company formations",
    "Expert team with deep regulatory knowledge",
    "End-to-end service from consultation to completion",
    "Transparent pricing with no hidden costs",
    "Multilingual support team",
    "24/7 customer service availability",
    "Post-setup support and maintenance"
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Companies Formed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team Members" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1A4A] to-[#0D2158] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 text-[#D4A017] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ARZ Al Najah Business Setup Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your trusted partner for business setup and company formation in Dubai and UAE. We transform your entrepreneurial dreams into successful businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D4A017] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2010, ARZ Al Najah Business Setup Services has been at the forefront of helping entrepreneurs and businesses establish their presence in the United Arab Emirates. What started as a small consultancy has grown into one of Dubai's most trusted business setup service providers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Over the years, we have successfully assisted more than 500 companies across various industries - from small startups to large corporations - in navigating the complexities of UAE business regulations and establishing compliant, thriving businesses.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of experienced professionals brings together expertise in company formation, legal compliance, visa processing, PRO services, and corporate banking. We pride ourselves on providing personalized service, maintaining the highest standards of professionalism, and building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-[#D4A017]">
              <CardContent className="p-8">
                <div className="bg-[#D4A017] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#D4A017]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1A4A] mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To simplify the business setup process in UAE by providing comprehensive, reliable, and efficient services that enable entrepreneurs and businesses to establish and grow their operations with complete peace of mind. We strive to be the most trusted partner for anyone looking to start a business in Dubai and the UAE.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D4A017]">
              <CardContent className="p-8">
                <div className="bg-[#D4A017] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#D4A017]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1A4A] mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading business setup consultancy in the UAE, recognized for our expertise, integrity, and commitment to client success. We envision a future where every entrepreneur can easily navigate the business landscape in UAE with our support, contributing to the region's economic growth and diversification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#D4A017] hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#D4A017] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#D4A017]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1A4A] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
            Why Choose ARZ Al Najah?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4 flex items-center space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-[#D4A017] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{reason}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A1A4A] mb-8 text-center">
            Our Expert Team
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 mb-8">
              Our team consists of experienced business consultants, legal advisors, PRO specialists, and customer service professionals who are passionate about helping businesses succeed in the UAE market.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#D4A017] bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-[#D4A017]" />
                </div>
                <h4 className="font-bold text-[#0A1A4A] mb-2">Business Consultants</h4>
                <p className="text-gray-600 text-sm">Expert guidance on business structure and licensing</p>
              </div>
              <div className="text-center">
                <div className="bg-[#D4A017] bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-[#D4A017]" />
                </div>
                <h4 className="font-bold text-[#0A1A4A] mb-2">Legal Advisors</h4>
                <p className="text-gray-600 text-sm">Ensuring full compliance with UAE regulations</p>
              </div>
              <div className="text-center">
                <div className="bg-[#D4A017] bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-[#D4A017]" />
                </div>
                <h4 className="font-bold text-[#0A1A4A] mb-2">PRO Specialists</h4>
                <p className="text-gray-600 text-sm">Handling all government documentation efficiently</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-[#D4A017] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-6">
              Licensed & Authorized
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              ARZ Al Najah Business Setup Services is a registered and authorized business consultancy operating under UAE regulations. We maintain the highest standards of professionalism and comply with all regulatory requirements.
            </p>
            <p className="text-gray-600">
              <strong>Disclaimer:</strong> We are a consultancy and not a government authority. We facilitate and assist with the business setup process through our expertise and established relationships with relevant government departments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#D4A017] to-[#B8900F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with ARZ Al Najah and experience hassle-free business setup in Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#D4A017] hover:bg-gray-100 font-semibold">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/services/mainland-company-setup">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#D4A017]">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
