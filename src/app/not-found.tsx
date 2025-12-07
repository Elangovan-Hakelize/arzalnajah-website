import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A1A4A] via-[#0D2158] to-[#0A1A4A] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center text-white">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#E56020] mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button size="lg" className="bg-[#E56020] hover:bg-[#C4501A] text-white font-semibold">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0A1A4A]">
              <Search className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/services/mainland-company-setup" className="text-gray-300 hover:text-[#E56020] transition-colors">
              Mainland Setup
            </Link>
            <Link href="/services/freezone-business-setup" className="text-gray-300 hover:text-[#E56020] transition-colors">
              Freezone Setup
            </Link>
            <Link href="/packages" className="text-gray-300 hover:text-[#E56020] transition-colors">
              View Packages
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-[#E56020] transition-colors">
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
