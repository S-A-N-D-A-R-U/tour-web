import React from "react";
import ActivityCard from "./ActivityCard";

const PACKAGES = [
  {
    id: 1,
    title: "Sigiriya Rock Fortress Tour",
    category: "Cultural",
    destination: "Sigiriya",
    duration: "4-5 hours",
    price: 30.0,
    rating: 4.8,
    reviews: 245,
    image: "/img14.jpg",
    description:
      "Climb the ancient rock fortress of Sigiriya, a UNESCO World Heritage site featuring stunning frescoes and lion-shaped gateway.",
    highlights: [
      "Guided tour of the ancient fortress",
      "Visit to the water gardens",
      "View of ancient frescoes",
      "Panoramic views from the summit",
    ],
  },
  {
    id: 2,
    title: "Whale Watching in Mirissa",
    category: "Wildlife",
    destination: "Mirissa",
    duration: "6 hours",
    price: 45.0,
    rating: 4.6,
    reviews: 189,
    image: "/img18.jpeg",
    description:
      "Experience the thrill of watching blue whales and dolphins in their natural habitat off the coast of Mirissa.",
    highlights: [
      "Morning boat safari",
      "Breakfast included",
      "Professional guide",
      "Photo opportunities",
    ],
  },
  {
    id: 3,
    title: "Tea Plantation Tour",
    category: "Nature",
    destination: "Nuwara Eliya",
    duration: "3 hours",
    price: 25.0,
    rating: 4.7,
    reviews: 167,
    image: "/img20.jpg",
    description:
      "Visit a working tea plantation and factory in the heart of Sri Lanka's tea country. Learn about tea production and taste fresh Ceylon tea.",
    highlights: [
      "Factory tour",
      "Tea tasting session",
      "Plantation walk",
      "Photo opportunities",
    ],
  },
  {
    id: 4,
    title: "Yala Safari Adventure",
    category: "Wildlife",
    destination: "Yala",
    duration: "Full Day",
    price: 75.0,
    rating: 4.9,
    reviews: 312,
    image: "/img19.jpg",
    description:
      "Embark on a thrilling safari in Yala National Park, home to leopards, elephants, and diverse wildlife.",
    highlights: [
      "Morning and evening game drives",
      "Professional wildlife guide",
      "Picnic lunch included",
      "Wildlife photography opportunities",
    ],
  },
  {
    id: 5,
    title: "Kandy Temple of Tooth Tour",
    category: "Cultural",
    destination: "Kandy",
    duration: "2-3 hours",
    price: 20.0,
    rating: 4.5,
    reviews: 198,
    image: "/img12.jpg",
    description:
      "Visit the sacred Temple of the Tooth Relic, one of Buddhism's most revered sites, and explore Kandy's cultural heritage.",
    highlights: [
      "Guided temple tour",
      "Cultural performance",
      "Lake view walk",
      "Local market visit",
    ],
  },
];

const PopularActivity = () => {
  return (
    <section className="pb-16 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Most Popular Activities
            <span className="block text-lg md:text-xl mt-4 text-gray-600 font-normal">
              Experience the thrill of Sri Lanka with our top-rated adventures
              and excursions
            </span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PACKAGES.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
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
      </div>
    </section>
  );
};

export default PopularActivity;
