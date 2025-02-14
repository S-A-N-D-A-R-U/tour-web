import React from "react";
import {
  X,
  Clock,
  Users,
  Briefcase,
  Wifi,
  Battery,
  Shield,
  Star,
  MapPin,
  Calendar,
  Phone,
  Check,
} from "lucide-react";
import Gallery from "./Gallery";
import PricingTable from "./PricingTable";
import UseCases from "./UseCases";

const VehicleDetails = ({ vehicle, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl">
          <div className="relative h-96">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <Gallery images={vehicle.images} />
          </div>

          <div className="p-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{vehicle.name}</h2>
              <p className="text-gray-600 text-lg mb-6">{vehicle.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">Passenger Capacity</div>
                    <div className="text-gray-600">
                      {vehicle.capacity.passengers} passengers
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">Luggage Capacity</div>
                    <div className="text-gray-600">
                      {vehicle.capacity.luggage} suitcases
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="font-semibold">Rating</div>
                    <div className="text-gray-600">{vehicle.rating}/5</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Safety Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vehicle.safetyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Shield className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <PricingTable pricing={vehicle.pricing} />
              <div>
                <h3 className="text-xl font-semibold mb-6">Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium">Available Locations</div>
                      <div className="text-gray-600">
                        {vehicle.availability.locations.join(", ")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium">Operating Hours</div>
                      <div className="text-gray-600">
                        {vehicle.availability.hours}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium">Lead Time</div>
                      <div className="text-gray-600">
                        {vehicle.availability.leadTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <UseCases />

            <div className="border-t pt-8 mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Book This Vehicle
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact for Custom Requests
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
