import React, { useState } from 'react';
import { Users, Wifi, Briefcase } from 'lucide-react';
import VehicleDetails from './VehicleDetails';

const vehicles = [
  {
    id: '1',
    name: 'Luxury Sedan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2016-2021_Toyota_Premio.jpg/1920px-2016-2021_Toyota_Premio.jpg',
    capacity: {
      passengers: 4,
      luggage: 2,
      handLuggage: 2
    },
    description: 'Perfect for business travel or small family trips. Experience comfort and style.',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2016-2021_Toyota_Premio.jpg/1920px-2016-2021_Toyota_Premio.jpg',
    ],
    features: [
      'Air Conditioning', 'Wi-Fi', 'USB Charging', 'Leather Seats', 'Bottled Water', 'Music System'
    ],
    safetyFeatures: [
      'ABS', 'Airbags', 'GPS Tracking', 'First Aid Kit', '24/7 Support', 'Regular Maintenance'
    ],
    pricing: { basePrice: 75, currency: '$', unit: 'day' },
    availability: { locations: ['Colombo', 'Kandy', 'Galle'], hours: '24/7 availability', leadTime: 'Book at least 24 hours in advance' },
    rating: 4.8
  },
  {
    id: '2',
    name: 'Premium Van',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Nissan_CARAVAN_VAN_GRAND_PREMIUM_GX_PROSTYLE_%283BF-VR2E26%29_front.jpg',
    capacity: {
      passengers: 8,
      luggage: 4,
      handLuggage: 4
    },
    description: 'Ideal for group travel and family vacations. Spacious and comfortable.',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Nissan_CARAVAN_VAN_GRAND_PREMIUM_GX_PROSTYLE_%283BF-VR2E26%29_front.jpg',
    ],
    features: [
      'Air Conditioning', 'Wi-Fi', 'USB Charging', 'Reclining Seats', 'LCD Screen', 'Mini Fridge'
    ],
    safetyFeatures: [
      'ABS', 'Multiple Airbags', 'GPS Tracking', 'First Aid Kit', '24/7 Support', 'Regular Maintenance'
    ],
    pricing: { basePrice: 120, currency: '$', unit: 'day' },
    availability: { locations: ['Colombo', 'Kandy', 'Galle', 'Negombo'], hours: '24/7 availability', leadTime: 'Book at least 24 hours in advance' },
    rating: 4.9
  },
  {
    id: '3',
    name: 'Luxury Bus',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80',
    capacity: {
      passengers: 16,
      luggage: 16,
      handLuggage: 16
    },
    description: 'Perfect for large groups and tours. Maximum comfort for long journeys.',
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570125909517-53cb21c89ff3?auto=format&fit=crop&q=80'
    ],
    features: [
      'Air Conditioning', 'Wi-Fi', 'USB Charging', 'Reclining Seats', 'LCD Screens', 'Restroom', 'Mini Kitchen'
    ],
    safetyFeatures: [
      'ABS', 'Multiple Airbags', 'GPS Tracking', 'First Aid Kit', '24/7 Support', 'Regular Maintenance', 'Emergency Exit'
    ],
    pricing: { basePrice: 250, currency: '$', unit: 'day' },
    availability: { locations: ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Ella'], hours: '24/7 availability', leadTime: 'Book at least 48 hours in advance' },
    rating: 4.9
  }
];

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Fleet
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${vehicle.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{vehicle.name}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>{vehicle.capacity.passengers} passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-blue-600" />
                    <span>Free Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span>Luggage Space</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVehicle && (
        <VehicleDetails
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
};

export default Fleet;
