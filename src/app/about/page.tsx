"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEnquiryPopup } from "@/components/EnquiryPopup";
import { 
  Target, 
  Eye, 
  Award, 
  Users,
  CheckCircle2,
  Shield,
  Clock,
  TrendingUp,
  FileText,
  Headphones
} from "lucide-react";

export default function About() {
  const { openPopup } = useEnquiryPopup();

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
    "Expert team with deep regulatory knowledge",
    "End-to-end service from consultation to completion",
    "Transparent pricing with no hidden costs",
    "Multilingual support team",
    "24/7 customer Chat service availability",
    "Post-setup support and maintenance"
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Companies Formed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team Members" }
  ];

  const teamMembers = [
    {
      icon: Users,
      title: "Business Consultants",
      description: "Expert guidance on business structure, licensing, and compliance with UAE regulations"
    },
    {
      icon: Shield,
      title: "Legal & Compliance Advisors",
      description: "Ensuring full compliance with UAE laws and government procedures"
    },
    {
      icon: FileText,
      title: "PRO & Visa Specialists",
      description: "Handling all government documentation and visa processing efficiently"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated professionals providing reliable support throughout your journey"
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[#9c5a33] via-[#7a3e1f] to-[#3d1700] text-white px-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="flex items-center space-x-2 text-[#E56020] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ARZ Al Najah Business Setup Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              ARZ Al Najah is your trusted partner for business setup and
company formation in Dubai and the UAE.We help
entrepreneurs, investors, and startups turn their business ideas
into successful UAE ventures with fast, affordable, and
hassle-free setup solutions.
Whether you want to open a Mainland, Freezone, or Offshore
company, our team ensures a smooth process from start to
finish everything from licensing and documentation to visa
and PRO services.
              </p>
          </div>
        </div>
      </section>

      {/* <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#E56020] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-[#3d1700] mb-6">
                Who We Are
              </h2>
              <p className="text-l text-gray-600 leading-relaxed mb-6">
                ARZ Al Najah is a UAE-based business setup consultancy dedicated to simplifying the entire company formation process. We provide entrepreneurs with transparent guidance, expert support, and efficient executions.
              </p>
              <p className="text-l text-gray-600 leading-relaxed mb-6">
                Whether you want to open a Mainland, Freezone, or Offshore company, our team ensures a smooth process from start to finish—everything from licensing and documentation to visa and PRO services.
              </p>
              <p className="text-l text-gray-600 leading-relaxed">
                Over the years, we have successfully assisted more than 500 companies across various industries - from small startups to large corporations - in navigating the complexities of UAE business regulations and establishing compliant, thriving businesses.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="ARZ Al Najah Team - Business Setup Experts in Dubai"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-[#E56020]">
              <CardContent className="p-8">
                <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#ffff]" />
                </div>
                <h3 className="text-2xl font-bold text-[#3d1700] mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To simplify the business setup process in UAE by providing comprehensive, reliable, and efficient services that enable entrepreneurs and businesses to establish and grow their operations with complete peace of mind. We strive to be the most trusted partner for anyone looking to start a business in Dubai and the UAE.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#E56020]">
              <CardContent className="p-8">
                <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#ffff]" />
                </div>
                <h3 className="text-2xl font-bold text-[#3d1700] mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading business setup consultancy in the UAE, recognized for our expertise, integrity, and commitment to client success. We envision a future where every entrepreneur can easily navigate the business landscape in UAE with our support, contributing to the region's economic growth and diversification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-[#E56020] hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#ffff]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3d1700] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3d1700] mb-8 text-center">
            Our Expert Team
          </h2>
          <p className="text-l text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Each member brings years of industry knowledge and a deep understanding of UAE regulations, Freezone rules, and government procedures. We combine expertise with hands-on assistance to ensure every client receives accurate advice, fast processing, and reliable support.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#E56020] bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="w-10 h-10 text-[#ffff]" />
                  </div>
                  <h4 className="font-bold text-[#3d1700] mb-2">{member.title}</h4>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
            Why Choose ARZ Al Najah?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4 flex items-center space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-[#E56020] flex-shrink-0" />
                  <span className="text-gray-600 font-medium">{reason}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-25 bg-white px-20">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

      {/* LEFT — TEXT CONTENT */}
      <div>
        {/* Icon + Heading Row */}
        <div className="flex items-center gap-4 mb-6">
          <Award className="w-14 h-14 text-[#E56020]" />
          <h2 className="text-3xl font-bold text-[#3d1700]">
            Licensed & Authorized
          </h2>
        </div>

        <p className="text-l text-gray-600 mb-8 leading-relaxed">
          ARZ Al Najah Business Setup Services is a registered and authorized business consultancy 
          operating under UAE regulations. We maintain the highest standards of professionalism 
          and comply with all regulatory requirements.
        </p>

        <p className="text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> We are a consultancy and not a government authority. 
          We facilitate and assist with the business setup process through our expertise and 
          established relationships with relevant government departments.
        </p>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="flex justify-center lg:justify-center">
        <img
          src="license-illustration.png"
          alt="Business License Illustration"
          className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl rounded-2xl"
        />
      </div>

    </div>
  </div>
</section>



      <section className="py-16 bg-gradient-to-br from-[#E56020] to-[#C4501A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ffff]">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with ARZ Al Najah and experience hassle-free business setup in Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={openPopup}
              className="bg-white text-[#3d1700] hover:bg-gray-100 font-semibold"
            >
              Schedule Free Consultation
            </Button>
            <Link href="/services/mainland-company-setup">
              <Button size="lg" variant="outline" className="border-2 border-white text-[#3d1700] hover:text-[#3d1700] hover:bg-gray-100 font-semibold">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
