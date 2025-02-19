import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { Clock, MapPin, CalendarX, Wallet, Users, User} from "lucide-react";

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/tours/${id}`
        );
        setTour(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch tour details.");
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  {
    loading && <Loading />;
  }
  {
    !loading && error && <p>{error}</p>;
  }

  const tourb = {
    title: "7-Day Cultural Heritage Tour",
    price: 899,
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1586185118245-89b519c7c364",
    rating: 4.9,
    reviews: 128,
    location: "Cultural Triangle",
  };

  const renderMarkdown = (text) => {
    return <ReactMarkdown>{text}</ReactMarkdown>;
  };

  const handleBookNow = () => {
    navigate(`/tour-packages/${id}/book`, { state: { tour: tourb } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full h-[60px]"></div>
      {/* Hero Section */}
      <div
        className="max-w-7xl mx-auto h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/img28.jpg')" }}
      ></div>

      {/* Booking Card for Mobile */}
      <div className="lg:hidden bg-white p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-md text-gray-600">From</p>
            <p className="text-2xl font-bold text-blue-600">
              ${tour?.price}.00
            </p>
            <p className="text-md text-gray-600">per person</p>
          </div>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className=" mx-auto px-6 ">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
                {tour?.title}
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <Clock className="h-5 w-5" />
                  <p className="text-lg md:text-lg  opacity-90">
                    {tour?.duration}
                  </p>
                </div>
                <div className="flex items-center gap-2 opacity-80">
                  <MapPin className="h-5 w-5 hidden md:block" />
                  <p className="text-base md:text-lg ">{tour?.destinations}</p>
                </div>
              </div>
            </div>
            {/* Overview Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 ">
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-gray-700 leading-relaxed">{tour?.overview}</p>
            </div>

            {/* Highlights Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 ">
              <h2 className="text-2xl font-bold mb-6">Tour Highlights</h2>
              <div className="space-y-4">
                {tour?.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Included/Not Included Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                <div className="space-y-4">
                  {tour?.includes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Not Included</h2>
                <div className="space-y-4">
                  {tour?.excludes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 text-sm">×</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Itinerary Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Your Journey
              </h2>
              <div className="space-y-12">
                {tour?.itinerary.map((day, index) => (
                  <div key={index} className="relative">
                    {index !== tour.itinerary.length - 1 && (
                      <div className="absolute left-[2.5rem] top-24 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
                    )}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="flex md:block items-center gap-4 md:flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center text-center">
                          <span className="text-sm font-medium">DAY</span>
                          <span className="text-xl font-bold">{day.day}</span>
                        </div>
                        <h3 className="text-xl font-bold md:hidden">
                          {day.route}
                        </h3>
                      </div>
                      <div className="flex-grow">
                        <div className="bg-gray-50 rounded-2xl p-4 md:p-6">
                          <div className="hidden md:flex items-center gap-2 mb-4">
                            <h3 className="text-xl font-bold">{day.route}</h3>
                          </div>
                          <div className="space-y-4 mb-6">
                            {day.activities.map(
                              (activity, idx) =>
                                activity && (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                    <div className="flex-grow prose prose-blue">
                                      {renderMarkdown(activity)}
                                    </div>
                                  </div>
                                )
                            )}
                          </div>
                          <img
                            src={day.image}
                            alt={`Day ${day.day}`}
                            className="w-full h-48 md:h-64 object-cover rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Tour Map</h2>
              <div className="aspect-video bg-gray-100 rounded-xl">
                <p className="text-center py-8 text-gray-500">
                  Tour map will be displayed here
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Hidden on Mobile */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                <div className=" mb-6">
                  <p className=" text-2xl text-gray-600">From</p>
                  <p className=" mb-2">
                    <span className="text-4xl font-bold text-blue-600">${tour?.price}.00</span> <span className="text-2xl text-gray-600">/per person</span>
                  </p>
                  
                </div>
                <button
                  onClick={handleBookNow}
                  className="w-full bg-blue-600 cursor-pointer text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors mb-6"
                >
                  Book Now
                </button>
                <div className=" space-y-4  ">
                  <div className="flex items-start space-x-3">
                    <CalendarX className="w-6 h-6 text-gray-700" />
                    <div>
                      <h3 className="font-semibold text-gray-700">Free cancellation</h3>
                      <p className="text-gray-600 text-sm">
                        Cancel up to 24 hours in advance for a full refund.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Wallet className="w-9 h-9 text-gray-700" />
                    <div>
                      <h3 className="font-semibold text-gray-700">Reserve now & pay later</h3>
                      <p className="text-gray-600 text-sm">
                        Keep your travel plans flexible — book your spot and pay
                        nothing today.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-gray-700" />
                    <div>
                      <h3 className="font-semibold text-gray-700">Live tour guide</h3>
                      <p className="text-gray-600 text-sm">English</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <User className="w-6 h-6 text-gray-700" />
                    <div>
                      <h3 className="font-semibold text-gray-700">Private group</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
