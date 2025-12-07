import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Scale, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ARZ Al Najah Business Setup Services",
  description: "Read our terms and conditions for using ARZ Al Najah business setup services in Dubai and UAE.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditions() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1A4A] to-[#0D2158] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-[#D4A017] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Terms & Conditions</span>
            </div>
            <Scale className="w-16 h-16 text-[#D4A017] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-200">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-2 border-[#D4A017]">
              <CardContent className="p-8 bg-yellow-50">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-[#D4A017] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold text-[#0A1A4A] mb-2">Important Disclaimer</h2>
                    <p className="text-gray-700 leading-relaxed">
                      ARZ Al Najah Business Setup Services is a business consultancy firm and not a government authority. We facilitate business setup processes through our expertise and established relationships with relevant government departments in the UAE. All final approvals are subject to government authority decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing our website or engaging our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our website or use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">2. Services Description</h2>
                <div className="text-gray-700 space-y-3">
                  <p className="leading-relaxed">
                    ARZ Al Najah provides business setup consultancy services including:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Company formation consultancy (Mainland, Freezone, Offshore)</li>
                    <li>Business license application assistance</li>
                    <li>Visa processing services</li>
                    <li>PRO (Public Relations Officer) services</li>
                    <li>Corporate bank account introduction</li>
                    <li>Business setup advisory and support</li>
                  </ul>
                  <p className="mt-3">
                    All services are provided as consultancy and facilitation. We do not guarantee approval of licenses or visas, as final decisions rest with UAE government authorities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">3. Client Obligations</h2>
                <div className="text-gray-700 space-y-3">
                  <p className="leading-relaxed">Clients are required to:</p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Submit all required documents in a timely manner</li>
                    <li>Comply with UAE laws and regulations</li>
                    <li>Pay fees as per agreed package or quotation</li>
                    <li>Respond promptly to requests for additional information</li>
                    <li>Review all documents before submission</li>
                    <li>Maintain confidentiality of sensitive business information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">4. Fees and Payment</h2>
                <div className="text-gray-700 space-y-3">
                  <ul className="list-disc ml-6 space-y-2">
                    <li>All fees are quoted in AED and are subject to change without notice</li>
                    <li>Payment terms will be specified in the service agreement or invoice</li>
                    <li>Government fees are separate and payable to authorities directly</li>
                    <li>Service fees are non-refundable once work has commenced</li>
                    <li>Additional charges may apply for expedited processing or additional services</li>
                    <li>Payment must be made before final license/visa delivery</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">5. Refund Policy</h2>
                <div className="text-gray-700 space-y-3">
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Service fees are non-refundable after work has begun</li>
                    <li>Government fees paid to authorities are non-refundable</li>
                    <li>In case of application rejection by authorities, service fees are not refunded</li>
                    <li>Refunds may be considered on a case-by-case basis before work commencement</li>
                    <li>Processing fees for refunds may apply</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">6. Timelines and Delays</h2>
                <p className="text-gray-700 leading-relaxed">
                  While we strive to complete services within estimated timeframes, processing times depend on government authorities and are beyond our control. We are not liable for delays caused by government processing, incomplete documentation, public holidays, or force majeure events.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">7. Limitation of Liability</h2>
                <div className="text-gray-700 space-y-3">
                  <p className="leading-relaxed">
                    ARZ Al Najah shall not be liable for:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Rejection of applications by government authorities</li>
                    <li>Changes in government regulations or policies</li>
                    <li>Delays in government processing</li>
                    <li>Inaccurate information provided by clients</li>
                    <li>Consequential, indirect, or special damages</li>
                    <li>Business losses resulting from delays or rejections</li>
                  </ul>
                  <p className="mt-3">
                    Our total liability shall not exceed the service fees paid by the client.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">8. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on our website, including text, graphics, logos, and images, is the property of ARZ Al Najah and protected by copyright laws. You may not reproduce, distribute, or use our content without prior written permission.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">9. Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed">
                  We maintain strict confidentiality of all client information and documents. We will not disclose your information to third parties except as required for service delivery, legal compliance, or with your explicit consent.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">10. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate services with written notice. Upon termination, clients remain responsible for fees incurred up to the termination date. Documents and licenses obtained before termination remain valid.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">11. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of Dubai courts.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">12. Amendments</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions regarding these Terms and Conditions, please contact:
                </p>
                <div className="text-gray-700 space-y-2">
                  <p><strong>ARZ Al Najah Business Setup Services</strong></p>
                  <p>Office No 806, 8th Floor, City Avenue Building</p>
                  <p>Port Saeed, Dubai – UAE</p>
                  <p>Phone: <a href="tel:+971523149927" className="text-[#D4A017] hover:underline">+971 52 314 9927</a></p>
                  <p>Email: <a href="mailto:info@arzalnajah.com" className="text-[#D4A017] hover:underline">info@arzalnajah.com</a></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
