import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Star, Award, Crown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Setup Packages Dubai | Transparent Pricing - ARZ Al Najah",
  description: "Compare our business setup packages for Dubai company formation. Transparent pricing for mainland, freezone & offshore licenses. Choose the perfect package for your business.",
  keywords: "business setup packages Dubai, company formation cost UAE, Dubai license packages, business setup pricing",
};

export default function Packages() {
  const mainlandPackages = [
    {
      name: "Starter",
      price: "AED 15,000",
      icon: Star,
      ideal: "Small businesses & startups",
      features: [
        "Trade License (1 activity)",
        "1 Visa allocation",
        "Memorandum of Association",
        "Initial Approval Certificate",
        "Registration fees included",
        "Basic office setup guidance",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "AED 20,000",
      icon: Award,
      popular: true,
      ideal: "Growing businesses",
      features: [
        "Trade License (up to 3 activities)",
        "3 Visa allocations",
        "Complete legal documentation",
        "Immigration & labor card",
        "Office setup assistance",
        "Bank account introduction",
        "1 year PRO support",
        "Priority processing",
        "Phone & WhatsApp support"
      ]
    },
    {
      name: "Enterprise",
      price: "AED 25,000",
      icon: Crown,
      ideal: "Established companies",
      features: [
        "Trade License (up to 5 activities)",
        "5 Visa allocations",
        "All legal documentation",
        "Complete immigration services",
        "Dedicated office setup",
        "Bank account opening assistance",
        "2 years PRO support",
        "Express processing",
        "Dedicated account manager",
        "24/7 support hotline",
        "Business consulting (3 months)"
      ]
    }
  ];

  const freezonePackages = [
    {
      name: "Flexi-Desk",
      price: "AED 12,000",
      ideal: "Solo entrepreneurs",
      features: [
        "Freezone License",
        "Flexi-desk workspace",
        "1-2 Visa quota",
        "Virtual office address",
        "License registration",
        "Basic support services"
      ]
    },
    {
      name: "Business Center",
      price: "AED 18,000",
      popular: true,
      ideal: "Small teams",
      features: [
        "Freezone License",
        "Shared office space",
        "3-4 Visa quota",
        "Meeting room access",
        "Business address",
        "Immigration services",
        "Bank account assistance",
        "PRO support included"
      ]
    },
    {
      name: "Private Office",
      price: "AED 30,000+",
      ideal: "Larger operations",
      features: [
        "Freezone License",
        "Dedicated private office",
        "Unlimited visa quota",
        "Exclusive facilities",
        "Priority processing",
        "Full setup support",
        "Bank account opening",
        "Annual PRO services",
        "Business consulting"
      ]
    }
  ];

  const additionalServices = [
    { service: "Additional Visa Processing", price: "AED 3,000 per visa" },
    { service: "Trade License Renewal", price: "AED 2,500" },
    { service: "License Amendment", price: "AED 3,500" },
    { service: "Bank Account Assistance", price: "AED 2,000" },
    { service: "PRO Services (Monthly)", price: "AED 1,500/month" },
    { service: "Office Setup & Ejari", price: "AED 3,000" },
    { service: "Document Attestation", price: "From AED 500" },
    { service: "Golden Visa Processing", price: "On request" }
  ];

  const comparisonFeatures = [
    { feature: "Trade License", starter: "✓", professional: "✓", enterprise: "✓" },
    { feature: "Business Activities", starter: "1", professional: "Up to 3", enterprise: "Up to 5" },
    { feature: "Visa Allocations", starter: "1", professional: "3", enterprise: "5" },
    { feature: "Office Setup Help", starter: "Basic", professional: "Complete", enterprise: "Dedicated" },
    { feature: "Bank Account Assistance", starter: "✗", professional: "✓", enterprise: "✓" },
    { feature: "PRO Support", starter: "✗", professional: "1 Year", enterprise: "2 Years" },
    { feature: "Processing Speed", starter: "Standard", professional: "Priority", enterprise: "Express" },
    { feature: "Account Manager", starter: "✗", professional: "✗", enterprise: "✓" },
    { feature: "24/7 Support", starter: "✗", professional: "✗", enterprise: "✓" },
    { feature: "Business Consulting", starter: "✗", professional: "✗", enterprise: "3 Months" }
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
              <span>Packages</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Setup Packages
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transparent pricing with no hidden fees. Choose the perfect package for your business needs in Dubai and UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Mainland Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-4">
              Mainland Company Setup Packages
            </h2>
            <p className="text-xl text-gray-600">
              Complete solutions for Dubai mainland business setup
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainlandPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-[#E56020] border-2 shadow-2xl scale-105' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E56020] text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <pkg.icon className={`w-12 h-12 ${pkg.popular ? 'text-[#E56020]' : 'text-[#0A1A4A]'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1A4A] mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-[#E56020] mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-600 mb-6">Ideal for: {pkg.ideal}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full ${pkg.popular ? 'bg-[#E56020] hover:bg-[#C4501A]' : 'bg-[#0A1A4A] hover:bg-[#0D2158]'} text-white font-semibold`}>
                      Choose Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Freezone Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1A4A] mb-4">
              Freezone Business Setup Packages
            </h2>
            <p className="text-xl text-gray-600">
              Flexible packages for UAE freezone companies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {freezonePackages.map((pkg, index) => (
              <Card key={index} className={`${pkg.popular ? 'border-[#E56020] border-2 shadow-xl' : 'border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E56020] text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#0A1A4A] mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-[#E56020] mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-600 mb-6">Ideal for: {pkg.ideal}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className={`w-full ${pkg.popular ? 'bg-[#E56020] hover:bg-[#C4501A]' : 'bg-[#0A1A4A] hover:bg-[#0D2158]'} text-white font-semibold`}>
                      Choose Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
            Package Comparison
          </h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0A1A4A] text-white">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-center font-semibold">Starter</th>
                  <th className="p-4 text-center font-semibold bg-[#E56020]">Professional</th>
                  <th className="p-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center text-gray-700">{row.starter}</td>
                    <td className="p-4 text-center text-gray-700 bg-[#E56020] bg-opacity-5">{row.professional}</td>
                    <td className="p-4 text-center text-gray-700">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0A1A4A] mb-12 text-center">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((item, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4 flex items-center justify-between">
                  <span className="font-medium text-gray-900">{item.service}</span>
                  <span className="text-[#E56020] font-bold">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-[#E56020] max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-[#0A1A4A] mb-4">
                Need a Custom Package?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Every business is unique. Contact us for a tailored solution that perfectly fits your requirements and budget.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold">
                  Request Custom Quote
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#E56020] to-[#C4501A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose your package and let's begin your business journey in Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#E56020] hover:bg-gray-100 font-semibold">
                Schedule Consultation
              </Button>
            </Link>
            <a href="https://wa.me/971523149927" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#E56020]">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
