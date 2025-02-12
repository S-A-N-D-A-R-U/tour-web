import React from 'react';
import { Clock, Car, Banknote, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Reliability',
    description: 'On-time pickups and drop-offs guaranteed'
  },
  {
    icon: Car,
    title: 'Comfort',
    description: 'Well-maintained vehicles with AC'
  },
  {
    icon: Banknote,
    title: 'Affordability',
    description: 'Competitive pricing with no hidden fees'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Available for your questions anytime'
  }
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Transfers?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

