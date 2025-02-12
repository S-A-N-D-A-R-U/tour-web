import React from "react";
import { ArrowRight, Phone } from "lucide-react";

function CallToAction() {
  return (
    <div className="bg-blue-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Travel? Book Your Transfer Today!
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Experience hassle-free travel with our professional transfer service.
          Book now and enjoy a comfortable journey to your destination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
            onClick={() =>
              document
                .getElementById("booking-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors">
            Contact Us
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;