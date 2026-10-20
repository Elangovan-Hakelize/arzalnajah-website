"use client";

export default function WhatsAppButton() {
  const phoneNumber = "971568567705";
  const message = "Hello! I'm interested in your business setup services in Dubai.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-current"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.962A15.914 15.914 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.596c-.39 1.1-1.932 2.012-3.178 2.278-.854.18-1.968.324-5.72-1.228-4.802-1.986-7.882-6.87-8.122-7.188-.23-.318-1.932-2.57-1.932-4.902 0-2.332 1.226-3.476 1.66-3.952.39-.43 1.026-.646 1.636-.646.198 0 .376.01.536.018.474.02.712.048 1.026.792.39.928 1.342 3.26 1.458 3.498.118.238.236.556.078.872-.148.326-.276.47-.516.748-.238.278-.464.492-.702.792-.218.266-.464.55-.198.98.266.43 1.184 1.952 2.542 3.164 1.746 1.558 3.214 2.042 3.67 2.27.354.178.778.138 1.056-.158.352-.378.788-.998 1.232-1.61.316-.436.714-.49 1.108-.332.398.148 2.526 1.19 2.96 1.408.434.218.722.326.83.506.106.178.106 1.04-.286 2.14z"/>
      </svg>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#3d1700] text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
