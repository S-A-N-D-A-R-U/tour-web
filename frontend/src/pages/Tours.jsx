import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Star,
  Filter,
  ChevronDown,
  Tag,
  Award,
} from "lucide-react";
import TourPackageItemCard from "../components/TourPackageItemCard";

const tours = [
  {
    id: 1,
    type: "round",
    title: "7-Day Cultural Heritage Tour",
    description:
      "Explore the ancient cities, temples, and cultural sites of Sri Lanka.",
    image: "https://images.unsplash.com/photo-1586185118245-89b519c7c364",
    duration: "7 Days",
    maxPeople: 12,
    price: 899,
    rating: 4.9,
    reviews: 128,
    location: "Cultural Triangle",
    category: "culture",
    featured: true,
    destinations: ["Sigiriya", "Polonnaruwa", "Anuradhapura", "Kandy"],
  },
  {
    id: 2,
    type: "round",
    title: "10-Day Wildlife & Beach Tour",
    description:
      "Experience Sri Lanka's amazing wildlife and relax on pristine beaches.",
    image: "https://images.unsplash.com/photo-1590418606746-018840f9cd0f",
    duration: "10 Days",
    maxPeople: 8,
    price: 1299,
    rating: 4.8,
    reviews: 95,
    location: "South Coast",
    category: "wildlife",
    featured: true,
    destinations: ["Yala", "Mirissa", "Bentota", "Galle"],
  },
  {
    id: 3,
    type: "day",
    title: "Sigiriya Day Tour",
    description:
      "Climb the ancient rock fortress and explore the surrounding gardens.",
    image: "/img2.jpg",
    duration: "Full Day",
    maxPeople: 15,
    price: 85,
    rating: 4.7,
    reviews: 156,
    location: "Sigiriya",
    category: "culture",
    featured: true,
  },
  {
    id: 4,
    type: "day",
    title: "Yala Safari Adventure",
    description:
      "Spot leopards, elephants, and other wildlife in their natural habitat.",
    image: "/img1.jpg",
    duration: "Full Day",
    maxPeople: 6,
    price: 120,
    rating: 4.9,
    reviews: 203,
    location: "Yala",
    category: "wildlife",
    featured: true,
  },
];

const locations = [
  "Cultural Triangle",
  "South Coast",
  "Hill Country",
  "North Central",
  "East Coast",
];
const categories = ["Culture", "Wildlife", "Adventure", "Beach", "Heritage"];
const durations = ["1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"];

const Tours = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("type") || "round"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setActiveTab(type);
    }
  }, [searchParams]);

  const filteredTours = tours.filter((tour) => {
    return (
      tour.type === activeTab &&
      (searchQuery === "" ||
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedLocation === "" || tour.location === selectedLocation) &&
      (selectedCategory === "" ||
        tour.category === selectedCategory.toLowerCase()) &&
      (selectedDuration === "" ||
        (selectedDuration === "15+ Days"
          ? parseInt(tour.duration) >= 15
          : tour.duration.includes(selectedDuration.split(" ")[0])))
    );
  });

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);
  const totalPages = Math.ceil(filteredTours.length / toursPerPage);

  const handleTourClick = (tourId) => {
    navigate(`/tours/${tourId}`);
  };

  const TourCard = ({ tour }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {tour.featured && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Award className="w-4 h-4" />
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4" />
          {tour.location}
          <span className="mx-1">•</span>
          <Clock className="w-4 h-4" />
          {tour.duration}
        </div>
        <h3 className="text-xl font-bold mb-2 font-display">{tour.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
        {tour.destinations && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tour.destinations.map((dest, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-sm"
              >
                {dest}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-semibold">{tour.rating}</span>
            <span className="text-gray-500">({tour.reviews} reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Tag className="w-4 h-4" />
            <span>Max {tour.maxPeople} people</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">${tour.price}</div>
          <button
            onClick={() => handleTourClick(tour.id)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pb-8">
      {/* Tabs and Filters */}
      <div className=" mt-20 pt-2 bg-white z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            {/* Tour Type Tabs */}
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setActiveTab("round");
                  setSearchParams({ type: "round" });
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === "round"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Round Tours
              </button>
              <button
                onClick={() => {
                  setActiveTab("day");
                  setSearchParams({ type: "day" });
                }}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === "day"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Day Tours
              </button>
            </div>

            {/* Search Bar */}
            <div className="py-2 border-t border-gray-100">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tours by name or description..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">All Durations</option>
                {durations.map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className=" mx-autopb-4 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            {activeTab === "round" ? "Round Tours" : "Day Tours"} in Sri Lanka
          </h1>
          <p className="text-xl max-w-2xl">
            {activeTab === "round"
              ? "Explore the best of Sri Lanka with our carefully crafted multi-day tours"
              : "Make the most of your day with our expertly guided single-day excursions"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTours.map((tour) => (
            <TourPackageItemCard key={tour.id} {...tour} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;
