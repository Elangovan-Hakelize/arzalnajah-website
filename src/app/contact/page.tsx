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
  CheckCircle2
} from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1A4A] to-[#0D2158] text-white py-20">
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
              Ready to start your business in Dubai? Contact us for a free consultation with our experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-[#E56020] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#E56020]" />
                </div>
                <h3 className="font-bold text-[#0A1A4A] mb-2">Visit Us</h3>
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
                  <Phone className="w-8 h-8 text-[#E56020]" />
                </div>
                <h3 className="font-bold text-[#0A1A4A] mb-2">Call Us</h3>
                <a href="tel:+971523149927" className="text-gray-600 hover:text-[#E56020] transition-colors">
                  +971 52 314 9927
                </a>
                <p className="text-sm text-gray-500 mt-2">Mon - Sat: 9AM - 6PM</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#E56020] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#E56020]" />
                </div>
                <h3 className="font-bold text-[#0A1A4A] mb-2">Email Us</h3>
                <a href="mailto:info@arzalnajah.com" className="text-gray-600 hover:text-[#E56020] transition-colors">
                  info@arzalnajah.com
                </a>
                <p className="text-sm text-gray-500 mt-2">24/7 Email Support</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-[#E56020] transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#E56020]" />
                </div>
                <h3 className="font-bold text-[#0A1A4A] mb-2">Working Hours</h3>
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

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1A4A] mb-6">
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
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    className="w-full"
                  />
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

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1A4A] mb-6">
                Find Us on Map
              </h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5823840448726!2d55.32930631501457!3d25.253174083866164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d2f3b0b7cb9%3A0x8f9e3e9d4f5c9e0a!2sPort%20Saeed%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123"
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
                <h3 className="font-bold text-[#0A1A4A] mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/971523149927" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#E56020] transition-colors"
                  >
                    <div className="bg-[#25D366] text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
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

      {/* Disclaimer */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">
              <strong className="text-[#0A1A4A]">Disclaimer:</strong> We are a consultancy and not a government authority. 
              We facilitate business setup processes through our expertise and established relationships with relevant government departments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
