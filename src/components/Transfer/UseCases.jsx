import React from 'react';
import { Plane, Building, Users, Briefcase } from 'lucide-react';

const useCases = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Comfortable rides to and from the airport'
  },
  {
    icon: Users,
    title: 'Group Tours',
    description: 'Perfect for family trips and group excursions'
  },
  {
    icon: Building,
    title: 'Corporate Travel',
    description: 'Professional service for business needs'
  },
  {
    icon: Briefcase,
    title: 'Day Tours',
    description: 'Explore the city with comfort and style'
  }
];

const UseCases = () => (
  <div className="mb-12">
    <h3 className="text-xl font-semibold mb-6">Perfect For</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {useCases.map((useCase, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
        >
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
            <useCase.icon className="w-5 h-5 text-blue-600" />
          </div>
          <h4 className="font-semibold mb-1">{useCase.title}</h4>
          <p className="text-sm text-gray-600">{useCase.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default UseCases;
