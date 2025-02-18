import React, { useState, useEffect } from "react";
import { Search, MapPin, Clock, Star, Filter } from "lucide-react";
import ActivityCard from "../components/ActivityCard";


const activities = [
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

const categories = [
  "All",
  "Cultural",
  "Wildlife",
  "Nature",
  "Adventure",
  "Beach",
  "Food",
];

const destinations = [
  "All Destinations",
  "Sigiriya",
  "Mirissa",
  "Kandy",
  "Nuwara Eliya",
  "Yala",
  "Galle",
];

const ThingsToDo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] =
    useState("All Destinations");
  const [filteredActivities, setFilteredActivities] = useState(activities);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const filtered = activities.filter((activity) => {
      const matchesSearch =
        activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || activity.category === selectedCategory;
      const matchesDestination =
        selectedDestination === "All Destinations" ||
        activity.destination === selectedDestination;

      return matchesSearch && matchesCategory && matchesDestination;
    });

    setFilteredActivities(filtered);
  }, [searchTerm, selectedCategory, selectedDestination]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1588258524675-c61945a0555b)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Things to Do in Sri Lanka
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover unforgettable experiences across the Pearl of the Indian
              Ocean
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search activities, destinations, or experiences..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm
                  shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <select
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {destinations.map((destination) => (
                      <option key={destination} value={destination}>
                        {destination}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Add more filters as needed */}
              </div>
          

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredActivities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>

        {/* No Results */}
        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No activities found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find more activities
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThingsToDo;
