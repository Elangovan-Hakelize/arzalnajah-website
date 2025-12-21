"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
];

const EnquiryPopupContext = createContext<{
  openPopup: () => void;
} | null>(null);

export const useEnquiryPopup = () => {
  const context = useContext(EnquiryPopupContext);
  if (!context) {
    throw new Error("useEnquiryPopup must be used within EnquiryPopupProvider");
  }
  return context;
};

export const EnquiryPopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  return (
    <EnquiryPopupContext.Provider value={{ openPopup }}>
      {children}
      <EnquiryPopupContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </EnquiryPopupContext.Provider>
  );
};

const EnquiryPopupContent = ({ 
  isOpen, 
  setIsOpen 
}: { 
  isOpen: boolean; 
  setIsOpen: (open: boolean) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countryCodeOpen, setCountryCodeOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("enquiryPopupShown");
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("enquiryPopupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [setIsOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        body: JSON.stringify({ ...formData, phone: fullPhone }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
        }, 3000);
      } else {
        alert("Failed to send enquiry. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to send enquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
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
    "Other",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#3d1700]">
            Start Your Dubai Business Today!
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Get a <span className="font-semibold text-[#E56020]">FREE consultation</span> with our business setup experts. Fill in your details below.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-4">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Thank You!
              </h3>
              <p className="text-green-600">
                We've received your enquiry. Our team will contact you within 24 hours.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <Input
                id="popup-name"
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
              <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <Input
                id="popup-email"
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
              <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <div className="flex gap-2">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setCountryCodeOpen(!countryCodeOpen)}
                    className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 min-w-[100px] text-sm"
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
                  id="popup-phone"
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
              <label htmlFor="popup-service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In *
              </label>
              <select
                id="popup-service"
                name="service"
                required
                value={formData.service}
                onChange={(e) => handleChange(e as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E56020]"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <Textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                rows={3}
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold py-6 text-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </>
              )}
            </Button>

            <p className="text-xs text-center text-gray-500">
              Your information is secure and will never be shared
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export const EnquiryPopup = EnquiryPopupContent;
