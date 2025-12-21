'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEnquiryPopup } from "@/components/EnquiryPopup";
import { 
  Award, 
  CheckCircle2, 
  FileText,
  RefreshCw,
  Edit,
  XCircle
} from "lucide-react";


export default function TradeLicenseServices() {
  const { openPopup } = useEnquiryPopup();
  const services = [
    {
      icon: Award,
      title: "New License",
      description: "Complete processing of new trade licenses for mainland, freezone, or offshore companies"
    },
    {
      icon: RefreshCw,
      title: "License Renewal",
      description: "Annual trade license renewal to keep your business legally operational"
    },
    {
      icon: Edit,
      title: "License Amendment",
      description: "Add, remove, or modify business activities, change company name or structure"
    },
    {
      icon: XCircle,
      title: "License Cancellation",
      description: "Proper cancellation procedures for closing your business in UAE"
    }
  ];

  const licenseTypes = [
    {
      title: "Commercial License",
      description: "For trading activities",
      activities: [
        "General trading",
        "Import and export",
        "Wholesale distribution",
        "Retail operations",
        "E-commerce trading"
      ],
      price: "From AED 15,000"
    },
    {
      title: "Professional License",
      description: "For service-based businesses",
      activities: [
        "Consulting services",
        "Marketing agencies",
        "IT services",
        "Professional services",
        "Creative services"
      ],
      price: "From AED 12,000"
    },
    {
      title: "Industrial License",
      description: "For manufacturing activities",
      activities: [
        "Manufacturing",
        "Production facilities",
        "Industrial operations",
        "Assembly plants",
        "Processing units"
      ],
      price: "From AED 20,000"
    }
  ];

  const renewalProcess = [
    { step: 1, title: "Renewal Notification", description: "We remind you 60 days before expiry" },
    { step: 2, title: "Document Check", description: "Verify all existing documents are valid" },
    { step: 3, title: "Payment Processing", description: "Process government fees and renewal charges" },
    { step: 4, title: "Submission", description: "Submit renewal application to authorities" },
    { step: 5, title: "License Update", description: "Receive renewed trade license" }
  ];

  const amendmentTypes = [
    "Add or remove business activities",
    "Change company name",
    "Change company address/office",
    "Add or remove partners/shareholders",
    "Increase or decrease capital",
    "Change legal structure",
    "Modify authorized signatories",
    "Update company objectives"
  ];

  const faqs = [
    {
      question: "How much does a trade license cost in Dubai?",
      answer: "Trade license costs vary based on business type and location. Mainland commercial licenses start from AED 15,000, professional licenses from AED 12,000, and industrial licenses from AED 20,000. Freezone licenses typically range from AED 12,000-25,000. Costs include government fees, office space, and initial approvals."
    },
    {
      question: "When should I renew my trade license?",
      answer: "Trade licenses must be renewed annually before expiry. We recommend starting renewal 60 days before expiration to avoid penalties. Late renewal incurs fines starting from AED 1,000, increasing with delay duration. We provide renewal reminders to all our clients."
    },
    {
      question: "How long does license amendment take?",
      answer: "License amendments typically take 3-7 working days depending on the type of change. Simple amendments like activity addition take 3-4 days, while complex changes like name changes or shareholder modifications may take 5-7 days. We handle all paperwork and government submissions."
    },
    {
      question: "Can I add business activities to my existing license?",
      answer: "Yes, you can add business activities to your existing license through the amendment process. Each activity must be approved by relevant authorities. We help select appropriate activities, submit applications, and ensure quick approval."
    },
    {
      question: "What happens if I don't renew my license on time?",
      answer: "Failure to renew on time results in penalties starting from AED 1,000 for the first month, increasing thereafter. Extended delays can lead to license cancellation, visa invalidation, and legal complications. We strongly advise timely renewal to avoid these issues."
    }
  ];

  const pricingPackages = [
    {
      name: "License Renewal",
      price: "AED 2,500",
      description: "Annual license renewal service",
      features: [
        "Renewal reminder service",
        "Document verification",
        "Government fee processing",
        "Application submission",
        "License collection",
        "Express processing available"
      ]
    },
    {
      name: "License Amendment",
      price: "AED 3,500",
      description: "Modify your existing license",
      features: [
        "Activity addition/removal",
        "Name change processing",
        "Shareholder modifications",
        "Complete documentation",
        "Government approvals",
        "Updated license delivery"
      ],
      popular: true
    },
    {
      name: "Full Support Package",
      price: "AED 5,000/year",
      description: "Complete license management",
      features: [
        "Annual renewal included",
        "Unlimited amendments",
        "Priority processing",
        "Dedicated support",
        "Compliance monitoring",
        "Document storage",
        "Renewal reminders",
        "24/7 assistance"
      ]
    }
  ];

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Trade License Services in Dubai",
            "provider": {
              "@type": "Organization",
              "name": "ARZ Al Najah Business Setup Services"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            }
          })
        }}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#9c5a33] via-[#7a3e1f] to-[#3d1700] text-white py-15 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-2 text-[#E56020] mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/services/trade-license-services" className="hover:underline">Services</Link>
                <span>/</span>
                <span>Trade License Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Trade License Services in Dubai
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Complete trade license solutions including new licenses, renewals, amendments, and cancellations. Expert handling of all business license requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/packages">
                  <Button size="lg" variant="outline" className="border-white text-[#3d1700] hover:bg-white hover:text-[#3d1700]">
                    View Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Our License Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#E56020] hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="bg-[#E56020] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-[#ffff]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#3d1700] mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* License Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              Types of Trade Licenses
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {licenseTypes.map((license, index) => (
                <Card key={index} className="border-2 border-gray-200">
                  <CardContent className="p-8">
                    <Award className="w-12 h-12 text-[#E56020] mb-4" />
                    <h3 className="text-xl font-bold text-[#3d1700] mb-2">{license.title}</h3>
                    <p className="text-gray-600 mb-4">{license.description}</p>
                    <div className="text-2xl font-bold text-[#E56020] mb-6">{license.price}</div>
                    <ul className="space-y-2">
                      {license.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#3d1700] mb-4">
                License Service Packages
              </h2>
              <p className="text-xl text-gray-600">
                Choose the right package for your license management needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPackages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'border-[#E56020] border-2 shadow-xl' : 'border-gray-200'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E56020] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#3d1700] mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-[#E56020] mb-2">{pkg.price}</div>
                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className={`w-full ${pkg.popular ? 'bg-[#E56020] hover:bg-[#C4501A]' : 'bg-[#3d1700] hover:bg-[#3d1700]'} text-white`}>
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Renewal Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              License Renewal Process
            </h2>
            {/* Timeline */}
    <div className="relative max-w-7xl mx-auto">
      
      {/* Horizontal connector line (desktop only) */}
      <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[2px] bg-[#E56020]/30"></div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0">
        {renewalProcess.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">

            {/* Circle */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full
                            bg-gradient-to-tr from-[#E56020] to-[#F6A35C]
                            flex items-center justify-center
                            font-bold text-white text-lg md:text-xl
                            shadow-xl z-10">
              {item.step}
            </div>

            {/* Mobile connector */}
            {index < renewalProcess.length - 1 && (
              <div className="md:hidden w-[2px] h-8 bg-[#E56020]/40 mt-3 rounded-full"></div>
            )}

            {/* Text */}
            <div className="mt-5 max-w-[180px]">
              <h4 className="font-semibold text-[#3d1700] text-sm md:text-base mb-1">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
          </div>
        </section>

        {/* Amendment Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
              License Amendment Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {amendmentTypes.map((type, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Edit className="w-5 h-5 text-[#E56020] flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-[#3d1700] mb-12 text-center">
      Frequently Asked Questions
    </h2>

    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group border border-gray-200 rounded-xl bg-white overflow-hidden"
        >
          {/* Question */}
          <summary
            className="flex justify-between items-center p-6 cursor-pointer
                       text-[#3d1700] font-semibold text-lg
                       list-none hover:bg-gray-50 transition"
          >
            <span>{faq.question}</span>

            {/* Arrow */}
            <span
              className="ml-4 text-[#E56020] transition-transform duration-300
                         group-open:rotate-180"
            >
              ▼
            </span>
          </summary>

          {/* Answer */}
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#E56020] to-[#C4501A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help with Your Trade License?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our experts handle your license renewal, amendment, or new application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
                <Button size="lg" onClick={openPopup} className="bg-white text-[#3d1700] hover:bg-gray-100 font-semibold">
                  Schedule Consultation
                </Button>
            
              <a href="https://wa.me/971523149927" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-white text-[#3d1700] hover:bg-white hover:text-[#3d1700]">
                  Whatsapp Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
