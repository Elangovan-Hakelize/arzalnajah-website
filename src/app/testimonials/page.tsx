"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useEnquiryPopup } from "@/components/EnquiryPopup";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const { openPopup } = useEnquiryPopup();

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      company: "Al Mansouri Trading LLC",
      industry: "Import/Export",
      location: "Dubai Mainland",
      rating: 5,
      text: "ARZ Al Najah made our mainland company setup incredibly smooth. Their team handled everything from documentation to visa processing. We were operational in just 5 days! Highly professional and knowledgeable about UAE business regulations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    {
      name: "Sarah Johnson",
      company: "Digital Marketing Pro",
      industry: "Marketing & Consulting",
      location: "DMCC Freezone",
      rating: 5,
      text: "As a foreign entrepreneur, I was worried about the complexity of setting up in Dubai. ARZ Al Najah's team guided me through every step, explained all my options clearly, and helped me choose the right freezone. Their support didn't end after license issuance - they continue to assist with renewals and amendments.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
    },
    {
      name: "Rajesh Patel",
      company: "Tech Solutions FZ-LLC",
      industry: "IT Services",
      location: "Dubai Silicon Oasis",
      rating: 5,
      text: "The professionalism and efficiency of ARZ Al Najah is outstanding. They helped us setup our IT company in DSO, arranged corporate bank account, and processed 5 employment visas. The entire process was transparent with no hidden costs. I recommend them to all my business contacts.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
    },
    {
      name: "Maria Rodriguez",
      company: "Gourmet Delights Restaurant",
      industry: "Food & Beverage",
      location: "Dubai Mainland",
      rating: 5,
      text: "Opening a restaurant in Dubai requires multiple approvals and licenses. ARZ Al Najah handled all municipality approvals, health permits, and trade license efficiently. Their PRO services saved us countless hours of government visits. Excellent service from start to finish.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
    },
    {
      name: "Mohammed Al Hashimi",
      company: "Construction & Engineering Co.",
      industry: "Construction",
      location: "Abu Dhabi",
      rating: 5,
      text: "We needed to expand our operations to Abu Dhabi and ARZ Al Najah facilitated the entire branch setup process. They coordinated with authorities, handled all documentation, and ensured compliance. Their knowledge of UAE business law is impressive.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
    },
    {
      name: "Jennifer Lee",
      company: "Fashion Boutique FZ",
      industry: "Retail & Fashion",
      location: "JAFZA",
      rating: 5,
      text: "Starting my fashion business in Dubai was a dream come true, thanks to ARZ Al Najah. They helped me understand the difference between mainland and freezone, assisted with choosing JAFZA, and even helped open my corporate bank account. Very happy with their service!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80"
    },
    {
      name: "David Chen",
      company: "Global Logistics Solutions",
      industry: "Logistics & Supply Chain",
      location: "Dubai South",
      rating: 5,
      text: "ARZ Al Najah's team demonstrated exceptional expertise in setting up our logistics company. They advised on the best location for our operations, handled all licensing, and processed multiple investor visas efficiently. Their post-setup support has been valuable for our ongoing compliance needs.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80"
    },
    {
      name: "Fatima Al Zarooni",
      company: "Beauty & Wellness Center",
      industry: "Healthcare & Beauty",
      location: "Dubai Healthcare City",
      rating: 5,
      text: "Setting up in Dubai Healthcare City requires specific approvals. ARZ Al Najah's experience in this freezone was evident throughout the process. They secured all necessary health authority approvals and professional licenses for our beauty center. Exceptional service and attention to detail.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
    },
    {
      name: "Thomas Mueller",
      company: "Engineering Consultancy",
      industry: "Engineering Services",
      location: "RAK ICC Offshore",
      rating: 5,
      text: "For our international consulting operations, we needed an offshore company structure. ARZ Al Najah explained the benefits clearly, processed our RAK ICC offshore company, and assisted with international banking setup. Professional, efficient, and trustworthy service.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1A4A] to-[#0D2158] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-[#E56020] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Testimonials</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-200">
              Hear from entrepreneurs and businesses who trusted ARZ Al Najah for their company formation in Dubai and UAE
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E56020] mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E56020] mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E56020] mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E56020] mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#E56020] fill-current" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-[#E56020] mb-4 opacity-50" />
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-[#0A1A4A]">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                      <div className="text-xs text-gray-500">{testimonial.industry} • {testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12">
            Trusted by Businesses Across Industries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-2">🏢</div>
              <div className="font-semibold text-[#0A1A4A]">Trading</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💼</div>
              <div className="font-semibold text-[#0A1A4A]">Consulting</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💻</div>
              <div className="font-semibold text-[#0A1A4A]">Technology</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🍽️</div>
              <div className="font-semibold text-[#0A1A4A]">F&B</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#E56020] to-[#C4501A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing List of Satisfied Clients
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your business setup journey with ARZ Al Najah today
          </p>
          <Button 
            size="lg"
            onClick={openPopup}
            className="bg-white text-[#E56020] hover:bg-gray-100 font-semibold"
          >
            Get Free Consultation
          </Button>
        </div>
      </section>
    </main>
  );
}