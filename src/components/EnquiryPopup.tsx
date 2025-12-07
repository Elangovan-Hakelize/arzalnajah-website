"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Create context for managing popup state
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem("enquiryPopupShown");
    
    if (!hasShownPopup) {
      // Show popup after 5 seconds
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
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
        
        // Close popup after 3 seconds
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
          <DialogTitle className="text-2xl font-bold text-[#0A1A4A]">
            🎯 Start Your Dubai Business Today!
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Get a <span className="font-semibold text-[#D4A017]">FREE consultation</span> with our business setup experts. Fill in your details below.
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
              <Input
                id="popup-phone"
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
              <label htmlFor="popup-service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Interested In *
              </label>
              <select
                id="popup-service"
                name="service"
                required
                value={formData.service}
                onChange={(e) => handleChange(e as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
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
              className="w-full bg-[#D4A017] hover:bg-[#B8900F] text-white font-semibold py-6 text-lg"
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
              🔒 Your information is secure and will never be shared
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

// Keep backward compatibility - for pages that still use <EnquiryPopup />
export const EnquiryPopup = EnquiryPopupContent;