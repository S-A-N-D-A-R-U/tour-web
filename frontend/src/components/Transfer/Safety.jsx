import React from "react";
import { SprayCan, ShieldCheck, UserCheck, Car } from "lucide-react";

const safetyMeasures = [
  {
    icon: SprayCan,
    title: "Regular Sanitization",
    description: "Vehicles are thoroughly sanitized before and after each transfer",
  },
  {
    icon: UserCheck,
    title: "Driver Health Checks",
    description: "All drivers undergo regular health screenings",
  },
  {
    icon: Car,
    title: "Vehicle Maintenance",
    description: "Regular vehicle inspections and maintenance",
  },
  {
    icon: ShieldCheck,
    title: "Safety Equipment",
    description: "First aid kits and safety equipment in all vehicles",
  },
];

const Safety = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Safety & Hygiene Standards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {safetyMeasures.map((measure, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <measure.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{measure.title}</h3>
              <p className="text-gray-600">{measure.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Safety;
