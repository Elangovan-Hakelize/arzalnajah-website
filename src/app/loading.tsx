export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block relative w-20 h-20">
          <div className="absolute border-4 border-[#E56020] border-t-transparent rounded-full w-20 h-20 animate-spin"></div>
        </div>
        <p className="mt-6 text-lg font-semibold text-[#0A1A4A]">Loading...</p>
        <p className="mt-2 text-sm text-gray-600">ARZ Al Najah Business Setup Services</p>
      </div>
    </div>
  );
}
