import React from "react";
import { ArrowRight } from "lucide-react";
import { useBooking } from "../../contexts/BookingContext";

const routes = [
  {
    from: "Colombo Airport",
    to: "Kandy",
    duration: "3.5 hours",
    price: "$75",
  },
  {
    from: "Colombo Airport",
    to: "Galle",
    duration: "2.5 hours",
    price: "$65",
  },
  {
    from: "Colombo Airport",
    to: "Negombo",
    duration: "30 minutes",
    price: "$25",
  },
  {
    from: "Colombo Airport",
    to: "Ella",
    duration: "6 hours",
    price: "$120",
  },
];

const PopularRoutes = () => {
  const { setPickupLocation, setDropoffLocation } = useBooking();

  const handleBookNow = (from, to) => {
    setPickupLocation(from);
    setDropoffLocation(to);
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Transfer Routes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold">{route.from}</div>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                  <div className="text-lg font-semibold">{route.to}</div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <div>Duration: {route.duration}</div>
                  <div>Starting from {route.price}</div>
                </div>

                <button
                  onClick={() => handleBookNow(route.from, route.to)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularRoutes;
