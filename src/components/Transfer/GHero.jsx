import { ArrowRight } from "lucide-react";

const GHero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/transfer1.jpeg"
          alt="Transfer Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Hassle-Free Transfers to Your Destination
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Book your private or shared transfers with comfort and reliability.
          Experience seamless travel with our professional service.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
          onClick={() =>
            document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Book Your Transfer Now
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GHero;
