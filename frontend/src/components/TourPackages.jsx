import React, { useState } from "react";
import TourPackageItemCard from "./TourPackageItemCard";

const PACKAGES = [
  {
    id: "1",
    title: "Sri Lanka & Maldives Tour",
    price: "240",
    rating: 4.8,
    description:
      "The hill country of Sri Lanka reflects the aspirations of 19th & 20th century British colonisers to create a home away from home.",
    duration: "13 Days / 12 Nights",
    imageUrl: "/popular1.jpg",
    location: "Multiple Destinations",
    highlights: [
      "Visit both countries in one trip",
      "Luxury accommodations",
      "Private transfers included"
    ]
  },
  {
    id: "2",
    title: "Cultural Heritage Tour",
    price: "240",
    rating: 4.8,
    description:
      "Our cultural tours are conducted by guides knowledgeable in all aspects of the island's history, enabling you to realise our unique heritage",
    duration: "2 Days",
    imageUrl: "/popular2.jpg",
    location: "Kandy, Sigiriya",
    highlights: [
      "Expert local guides",
      "UNESCO World Heritage sites",
      "Traditional experiences"
    ]
  },
  {
    id: "3",
    title: "Beach Tours",
    price: "240",
    rating: 4.8,
    description:
      "We know the best beaches, hidden bays and secret coves for sunbathing, swimming or surfing to reward you with an unforgettable beach holiday",
    duration: "2 Days",
    imageUrl: "/popular3.jpg",
    location: "Southern Coast",
    highlights: [
      "Pristine beaches",
      "Water activities",
      "Coastal exploration"
    ]
  },
  {
    id: "4",
    title: "Ayurvedic Tours",
    price: "240",
    rating: 4.8,
    description:
      "Ayurveda is an ancient, traditional wellness therapy based on harmonious balance within the body achieved through herbal diet and massage treatment",
    duration: "2 Days",
    imageUrl: "/popular4.jpg",
    location: "Wellness Retreats",
    highlights: [
      "Traditional treatments",
      "Herbal remedies",
      "Wellness programs"
    ]
  },
  {
    id: "5",
    title: "Honeymoon Tours",
    price: "240",
    rating: 4.8,
    description:
      "Private beach villas, secluded colonial bungalows, and luxurious hotel suites make Sri Lanka an ideal destination for honeymoons and weddings",
    duration: "2 Days",
    imageUrl: "/popular5.jpg",
    location: "Romantic Destinations",
    highlights: [
      "Luxury accommodations",
      "Private experiences",
      "Romantic settings"
    ]
  },
  {
    id: "6",
    title: "Wildlife Tours",
    price: "240",
    rating: 4.8,
    description:
      "Our Seat-in Coach Tours give you the ability to book an authentic travel experience of Sri Lanka without having to go through the hassle of arranging  ...",
    duration: "2 Days",
    imageUrl: "/popular6.jpg",
    location: "National Parks",
    highlights: [
      "Safari experiences",
      "Wildlife spotting",
      "Expert naturalists"
    ]
  },
];

const TourPackages = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tours', count: PACKAGES.length },
    { id: 'cultural', name: 'Cultural', count: 2 },
    { id: 'nature', name: 'Nature & Wildlife', count: 3 },
    { id: 'beach', name: 'Beach', count: 1 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
              Explore Sri Lanka
            </span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Most Popular Tour Packages
            <span className="block text-lg md:text-xl mt-4 text-gray-600 font-normal">
              Discover the best of Sri Lanka with our carefully curated experiences
            </span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {category.name}
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-opacity-20
                ${activeCategory === category.id ? 'bg-white' : 'bg-gray-200'}">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <TourPackageItemCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="/tour-packages"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 
              text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 
              transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Tour Packages
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { number: '500+', label: 'Happy Travelers', icon: '🌟' },
            { number: '50+', label: 'Tour Packages', icon: '🎯' },
            { number: '12+', label: 'Years Experience', icon: '⭐' },
            { number: '4.9/5', label: 'Customer Rating', icon: '💫' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl 
                transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;