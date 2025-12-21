import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#9c5a33] via-[#7a3e1f] to-[#3d1700] text-white py-20 px-10 overflow-hidden">
      {/* background image (subtle, full cover) */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/ft-bg.jpg"
          alt="Dubai skyline background"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        {/* dark overlay to increase contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3d1700]/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              <span className="text-[#E56020]">ARZ</span> Al Najah
            </h3>
            <p className="text-white/90 mb-4 leading-relaxed">
              Your trusted partner for business setup and company formation services in Dubai and UAE.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/arzalnajah" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/90 hover:text-[#E56020] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/arzalnajah" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/90 hover:text-[#E56020] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/arzalnajah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/90 hover:text-[#E56020] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/arzalnajah" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white/90 hover:text-[#E56020] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E56020]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/packages" className="text-white/90 hover:text-white transition-colors">Packages</Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/90 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/90 hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E56020]">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/mainland-company-setup" className="text-white/90 hover:text-white transition-colors">Mainland Company Setup</Link></li>
              <li><Link href="/services/freezone-business-setup" className="text-white/90 hover:text-white transition-colors">Freezone Business Setup</Link></li>
              <li><Link href="/services/offshore-company-formation" className="text-white/90 hover:text-white transition-colors">Offshore Company</Link></li>
              <li><Link href="/services/visa-services" className="text-white/90 hover:text-white transition-colors">Visa Services</Link></li>
              <li><Link href="/services/pro-services" className="text-white/90 hover:text-white transition-colors">PRO Services</Link></li>
              <li><Link href="/services/corporate-bank-account" className="text-white/90 hover:text-white transition-colors">Corporate Bank Account</Link></li>
              <li><Link href="/services/trade-license-services" className="text-white/90 hover:text-white transition-colors">Trade License Services</Link></li>
              <li><Link href="/services/golden-visa-assistance" className="text-white/90 hover:text-white transition-colors">Golden Visa</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#E56020]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E56020] flex-shrink-0 mt-1" />
                <span className="text-white/90 leading-relaxed">
                  Office No 806, 8th Floor, City Avenue Building, Port Saeed, Dubai – UAE
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#E56020]" />
                <a href="tel:+971523149927" className="text-white/90 hover:text-white transition-colors">+971 52 314 9927</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#E56020]" />
                <a href="mailto:info@arzalnajah.com" className="text-white/90 hover:text-white transition-colors">info@arzalnajah.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/40 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ARZ Al Najah Business Setup Services. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link href="/privacy-policy" className="text-white/90 hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-white/40">•</span>
              <Link href="/terms-conditions" className="text-white/90 hover:text-white transition-colors">Terms & Conditions</Link>
              <span className="text-white/40">•</span>
              <span className="text-white/80"><strong>Disclaimer:</strong> We are a consultancy, not a government authority.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
