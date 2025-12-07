import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ARZ Al Najah Business Setup Services",
  description: "Read our privacy policy to understand how ARZ Al Najah collects, uses, and protects your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1A4A] to-[#0D2158] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-[#D4A017] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <span>Privacy Policy</span>
            </div>
            <Shield className="w-16 h-16 text-[#D4A017] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
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
          <div className="max-w-4xl mx-auto prose prose-lg">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  ARZ Al Najah Business Setup Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-8 h-8 text-[#D4A017]" />
                  <h2 className="text-2xl font-bold text-[#0A1A4A]">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="font-bold text-[#0A1A4A] mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Fill out contact forms on our website</li>
                      <li>Request a consultation or quote</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Engage our business setup services</li>
                      <li>Communicate with us via email, phone, or WhatsApp</li>
                    </ul>
                    <p className="mt-3">
                      This may include: name, email address, phone number, business details, passport information (for visa processing), and other relevant business documentation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0A1A4A] mb-2">Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      When you visit our website, we automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring website</li>
                      <li>Device information</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-8 h-8 text-[#D4A017]" />
                  <h2 className="text-2xl font-bold text-[#0A1A4A]">How We Use Your Information</h2>
                </div>
                <div className="text-gray-700 space-y-3">
                  <p className="leading-relaxed">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>To provide and maintain our business setup services</li>
                    <li>To process your business formation applications</li>
                    <li>To communicate with you about our services</li>
                    <li>To respond to your inquiries and support requests</li>
                    <li>To send you updates, newsletters, and marketing materials (with your consent)</li>
                    <li>To comply with legal obligations and UAE regulations</li>
                    <li>To improve our website and services</li>
                    <li>To detect and prevent fraud or security issues</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="w-8 h-8 text-[#D4A017]" />
                  <h2 className="text-2xl font-bold text-[#0A1A4A]">Information Sharing and Disclosure</h2>
                </div>
                <div className="text-gray-700 space-y-3">
                  <p className="leading-relaxed">
                    We may share your information with:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Government Authorities:</strong> When required for business license processing, visa applications, and legal compliance</li>
                    <li><strong>Service Providers:</strong> Third-party vendors who assist us in providing our services (e.g., PRO services, document processors)</li>
                    <li><strong>Business Partners:</strong> Banks and financial institutions for corporate account opening assistance</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                  </ul>
                  <p className="mt-3 font-semibold">
                    We do not sell or rent your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Business documentation may be retained for up to 7 years in accordance with UAE regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Your Rights</h2>
                <div className="text-gray-700 space-y-3">
                  <p className="leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information (subject to legal obligations)</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Lodge a complaint with relevant data protection authorities</li>
                  </ul>
                  <p className="mt-3">
                    To exercise these rights, please contact us at <a href="mailto:info@arzalnajah.com" className="text-[#D4A017] hover:underline">info@arzalnajah.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-[#0A1A4A] mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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
