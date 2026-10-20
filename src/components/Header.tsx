"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnquiryPopup } from "@/components/EnquiryPopup";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { openPopup } = useEnquiryPopup();

  const services = [
    { name: "Mainland Company Setup", href: "/services/mainland-company-setup" },
    { name: "Freezone Business Setup", href: "/services/freezone-business-setup" },
    { name: "Offshore Company Formation", href: "/services/offshore-company-formation" },
    { name: "Visa Services", href: "/services/visa-services" },
    { name: "PRO Services", href: "/services/pro-services" },
    { name: "Corporate Bank Account", href: "/services/corporate-bank-account" },
    { name: "Trade License Services", href: "/services/trade-license-services" },
    { name: "Golden Visa Assistance", href: "/services/golden-visa-assistance" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
<Link href="/" className="flex items-center space-x-2">
  <img 
    src="/logo.png"   // adjust the path to where your image is stored
    alt="ARZ Al Najah Logo"
    className="w-12 h-12 object-contain"
  />

  <div className="text-2xl font-bold text-[#3d1700]">
    Al Najah
  </div>
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-[#3d1700] hover:text-[#E56020] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#3d1700] hover:text-[#E56020] font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-[#3d1700] hover:text-[#E56020] font-medium transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-[#3d1700] hover:bg-[#F8F9FA] hover:text-[#E56020] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/packages" className="text-[#3d1700] hover:text-[#E56020] font-medium transition-colors">
              Packages
            </Link>
            <Link href="/blog" className="text-[#3d1700] hover:text-[#E56020] font-medium transition-colors">
              Blog
            </Link>
            <Link href="/testimonials" className="text-[#3d1700] hover:text-[#E56020] font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-[#3d1700] hover:text-[#E56020] font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+971568567705" className="flex items-center space-x-2 text-[#3d1700] hover:text-[#E56020] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+971 56 856 7705</span>
            </a>
            <Button 
              onClick={openPopup}
              className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#3d1700]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-[#3d1700] hover:text-[#E56020] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-[#3d1700] hover:text-[#E56020] font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center space-x-1 text-[#3d1700] hover:text-[#E56020] font-medium w-full"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-sm text-[#3d1700] hover:text-[#E56020]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/packages" className="text-[#3d1700] hover:text-[#E56020] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Packages
              </Link>
              <Link href="/blog" className="text-[#3d1700] hover:text-[#E56020] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/testimonials" className="text-[#3d1700] hover:text-[#E56020] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="/contact" className="text-[#3d1700] hover:text-[#E56020] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              
              <a href="tel:+971568567705" className="flex items-center space-x-2 text-[#3d1700] pt-4 border-t">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">+971 56 856 7705</span>
              </a>
              
              <Button 
                onClick={() => {
                  openPopup();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold"
              >
                Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
