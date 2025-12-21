"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle2,
  ChevronDown
} from "lucide-react";

const countryCodes = [
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryCodeOpen, setCountryCodeOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const fullPhone = `${selectedCountry.code} ${formData.phone}`;

    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        phone: fullPhone,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit enquiry");
    }

    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Mainland Company Setup",
    "Freezone Business Setup",
    "Offshore Company Formation",
    "Visa Services",
    "PRO Services",
    "Corporate Bank Account",
    "Trade License Services",
    "Golden Visa Assistance",
    "Other"
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-[#9c5a33] via-[#7a3e1f] to-[#3d1700] text-white px-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-[#E56020] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Ready to start your business in Dubai? Contact our experts for a free consultation and personalised guidance on Mainland, Freezone, or Offshore company setup in the UAE. We're here to support you at every step of your business journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-[#E56020] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#ffff]" />
                </div>
                <h3 className="font-bold text-[#3d1700] mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  Office No 806, 8th Floor<br />
                  City Avenue Building<br />
                  Port Saeed, Dubai – UAE
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#E56020] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#ffff]" />
                </div>
                <h3 className="font-bold text-[#3d1700] mb-2">Call Us</h3>
                <a href="tel:+971523149927" className="text-gray-600 hover:text-[#E56020] transition-colors">
                  +971 52 314 9927
                </a>
                <p className="text-sm text-gray-500 mt-2">Mon - Sat: 9AM - 6PM</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#E56020] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#ffff]" />
                </div>
                <h3 className="font-bold text-[#3d1700] mb-2">Email Us</h3>
                <a href="mailto:info@arzalnajah.com" className="text-gray-600 hover:text-[#E56020] transition-colors">
                  info@arzalnajah.com
                </a>
                <p className="text-sm text-gray-500 mt-2">24/7 Email Support</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#E56020] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#ffff]" />
                </div>
                <h3 className="font-bold text-[#3d1700] mb-2">Working Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon - Fri: 9AM - 6PM<br />
                  Saturday: 9AM - 3PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-[#3d1700] mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours
              </p>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                    <p className="text-sm text-green-600">We'll contact you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setCountryCodeOpen(!countryCodeOpen)}
                        className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 min-w-[100px] text-sm h-10"
                      >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span>{selectedCountry.code}</span>
                        <ChevronDown className="w-4 h-4 ml-auto" />
                      </button>
                      {countryCodeOpen && (
                        <div className="absolute z-50 mt-1 w-56 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg">
                          {countryCodes.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country);
                                setCountryCodeOpen(false);
                              }}
                              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100 text-left text-sm"
                            >
                              <span className="text-lg">{country.flag}</span>
                              <span className="font-medium">{country.code}</span>
                              <span className="text-gray-500">{country.country}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="XX XXX XXXX"
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => handleChange(e as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E56020]"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business setup requirements..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold py-6 text-lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#3d1700] mb-6">
                Find Us on Map
              </h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5382462596854!2d55.33218937483926!3d25.252473029460628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dbcc3d82ebf%3A0xba95c726f18bcda6!2sCity%20Avenue%20Building!5e0!3m2!1sen!2sin!4v1766300532159!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ARZ Al Najah Office Location"
                />
              </div>
              <div className="mt-6 bg-white border-2 border-[#E56020] rounded-lg p-6">
                <h3 className="font-bold text-[#3d1700] mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/971523149927" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#E56020] transition-colors"
                  >
                    <div className="bg-[#25D366] text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.962A15.914 15.914 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.596c-.39 1.1-1.932 2.012-3.178 2.278-.854.18-1.968.324-5.72-1.228-4.802-1.986-7.882-6.87-8.122-7.188-.23-.318-1.932-2.57-1.932-4.902 0-2.332 1.226-3.476 1.66-3.952.39-.43 1.026-.646 1.636-.646.198 0 .376.01.536.018.474.02.712.048 1.026.792.39.928 1.342 3.26 1.458 3.498.118.238.236.556.078.872-.148.326-.276.47-.516.748-.238.278-.464.492-.702.792-.218.266-.464.55-.198.98.266.43 1.184 1.952 2.542 3.164 1.746 1.558 3.214 2.042 3.67 2.27.354.178.778.138 1.056-.158.352-.378.788-.998 1.232-1.61.316-.436.714-.49 1.108-.332.398.148 2.526 1.19 2.96 1.408.434.218.722.326.83.506.106.178.106 1.04-.286 2.14z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm">+971 52 314 9927</div>
                    </div>
                  </a>
                  <a 
                    href="tel:+971523149927"
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#E56020] transition-colors"
                  >
                    <div className="bg-[#E56020] text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Direct</div>
                      <div className="text-sm">+971 52 314 9927</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">
              <strong className="text-[#3d1700]">Disclaimer:</strong> We are a consultancy and not a government authority. 
              We facilitate business setup processes through our expertise and established relationships with relevant government departments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}