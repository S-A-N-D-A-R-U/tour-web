import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';


export const TourPackagesdetails = [
  {
    id: "1",
    info: {
      title: "Sri Lanka & Maldives Tour Itinerary",
      Destinations:"Sri Lanka (Habarana, Kandy, Nuwara Eliya, Ella, Yala, Weligama, Negombo) & Maldives",
      des: "Embark on an unforgettable journey through the breathtaking landscapes, rich heritage, and serene beaches of Sri Lanka and the Maldives. Begin your adventure in Sri Lanka, where ancient cultural wonders, lush jungles, scenic hill country, and thrilling wildlife safaris await. Conclude your journey with the ultimate tropical escape in the Maldives, enjoying pristine white-sand beaches, turquoise waters, and luxurious relaxation.",
      day: "13 Days / 12 Nights",
      price: "$ 250.00",
    },
    Highlights: [
      "Marvel at UNESCO World Heritage sites such as Dambulla Cave Temple, Sigiriya Rock Fortress, and Galle Fort",
      "Immerse yourself in local culture with village tours, cooking demonstrations, and traditional dance shows.",
      "Experience thrilling wildlife safaris in Minneriya, Kaudulla, and Yala National Parks.",
      "Enjoy scenic hikes to Little Adam’s Peak and Pidurangala Rock with stunning panoramic views.",
      "Explore iconic landmarks like the Nine Arches Bridge and Rawana Waterfall in Ella.",
      "Relax on powdery white beaches and bask in crystal-clear waters.",
      "Indulge in optional activities such as snorkeling, diving, and sunset cruises.",
      "Discover the tranquility of island life and unwind at a luxurious beach resort.",
    ],
    Includes: {
      include: [
        "Hotel pickup from the Yala area, including Kirinda, Palatupana, Tissamaharama, Weerawila, and Kataragama",
        "Transportation in a Safari Jeep (maximum of 6 passengers per jeep)",
        "Full-day or half-day tour (depending on option selected)",
        "Picnic lunch (if option selected)",
      ],
      notInclude: [
        "Park entrance fee (40 USD Per person)",
        "Snacks and drinks",
      ],
    },
    itinerary: [
      {
        day: 1,
        route:"Airport – Habarana",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Pick up from Bandaranaike International Airport (Colombo) and transfer to Habarana.",
          "En route, visit the **Dambulla Cave Temple**, a UNESCO World Heritage site renowned for its stunning Buddha statues and ancient frescoes.",
          "Evening climb **Pidurangala Rock** for breathtaking panoramic views of the Sigiriya Rock Fortress and surrounding landscapes.",
          "**Optional**: Enjoy an elephant ride through the lush Habarana jungles.",
        ],
        overnightStay: "Habarana",
      },
      {
        day: 2,
        route:"Habarana – Kandy",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Morning climb Sigiriya Rock Fortress, a UNESCO World Heritage site, to explore ancient frescoes, the mirror wall, and summit ruins.",
          "Experience a traditional village tour featuring an authentic Sri Lankan cooking demonstration and tasting.",
          "**Optional**: Participate in lake fishing with locals using traditional methods.",
          "Embark on an elephant jeep safari in Minneriya or Kaudulla National Park to observe wildlife in their natural habitat.",
          "Visit the Matale Herbal Village to learn about Ayurveda and Sri Lankas herbal heritage.",
          "Continue to Kandy for a city tour, including the Temple of the Tooth Relic and a stroll around Kandy Lake.",
          "End the day with a vibrant cultural dance show.",
        ],
        overnightStay: "Kandy",
      },
      {
        day: 3,
        route:"Kandy – Kitulgala – Nuwara Eliya",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Morning visit to the Royal Botanical Gardens in Peradeniya.",
          "Head to Kitulgala for an adrenaline-pumping white-water rafting adventure.",
          "En route to Nuwara Eliya, stop at a tea plantation and factory to learn about tea production and sample fresh Ceylon tea.",
          ,
        ],
        overnightStay: "Nuwara Eliya",
      },
      {
        day: 4,
        route:"Nuwara Eliya – Ella",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Morning transfer to Ella.",
          "Visit the iconic Nine Arches Bridge for stunning photo opportunities.",
          "Hike to Little Adam’s Peak for a scenic trek with panoramic views.",
          "Explore the picturesque Rawana Waterfall.",
          "Evening stroll through Ella town, enjoying its charming atmosphere.",
        ],
        overnightStay: "Ella",
      },
      {
        day: 5,
        route:"Ella – Yala",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Optional: Morning revisit to Little Adam’s Peak for sunrise.",
          "Depart for Yala, passing through scenic countryside.",
        ],
        overnightStay: "Yala",
      },
      {
        day: 6,
        route:"Yala",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Early morning jeep safari in Yala National Park, famous for its leopard sightings and diverse wildlife.",
          "Evening visit to Kirinda Beach to enjoy serene coastal views.",
        ],
        overnightStay: "Yala",
      },
      {
        day: 7,
        route:"Yala – Weligama",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "After breakfast, transfer to Weligama.",
          "Engage in snorkeling or water activities.",
          "Optional: Enjoy fishing activities guided by locals.",
        ],
        overnightStay: "Weligama",
      },
      {
        day: 8,
        route:"Weligama – Negombo",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Early morning departure for whale watching in Mirissa.",
          "Visit Galle Fort, a UNESCO World Heritage site, for a guided tour.",
          "Evening transfer to Negombo.",
        ],
        overnightStay: "Negombo",
      },
      {
        day: 9,
        route:"Negombo – Maldives",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Morning flight to the Maldives.",
          "Upon arrival, transfer to your resort and relax on the beach.",
        ],
        overnightStay: "Maldives",
      },
      {
        day: 10,
        route:"Maldives",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Relax and unwind on pristine Maldivian beaches.",
          "Optional: Snorkeling, diving, sunset cruises, and island hopping.",
        ],
        overnightStay: "Maldives",
      },
      {
        day: 11,
        route:"End of Tour",
        title: "Overnight stay in Golden Star Beach Hotel, Negombo",
        image: "/popular6.jpg",
        activities:[
          "Depart from the Maldives with unforgettable memories of your Sri Lanka and Maldives adventure.",
        ],
        overnightStay: "Maldives",
      },
    ],
  }
];

const TourDetail = () => {
  const { id } = useParams();
  const tour = TourPackagesdetails[0];

  const tourb = {
    title: "7-Day Cultural Heritage Tour",
    price: 899,
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1586185118245-89b519c7c364",
    rating: 4.9,
    reviews: 128,
    location: "Cultural Triangle"
  }
  const navigate = useNavigate();

  const renderMarkdown = (text) => {
    return <ReactMarkdown>{text}</ReactMarkdown>;
  };

  const handleBookNow = () => {
    navigate(`/tour-packages/${id}/book`, { state: { tour: tourb } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/popular6.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{tour.info.title}</h1>
            <div className="flex flex-col gap-2">
              <p className="text-lg md:text-xl opacity-90">{tour.info.day}</p>
              <p className="text-base md:text-lg opacity-80">{tour.info.Destinations}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Card for Mobile */}
      <div className="lg:hidden bg-white p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-600">{tour.info.price}</p>
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
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
              <p className="text-gray-700 leading-relaxed">{tour.info.des}</p>
            </div>

            {/* Highlights Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Tour Highlights</h2>
              <div className="space-y-4">
                {tour.Highlights.map((highlight, index) => (
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
                  {tour.Includes.include.map((item, index) => (
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
                  {tour.Includes.notInclude.map((item, index) => (
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
              <h2 className="text-2xl font-bold mb-8 text-center">Your Journey</h2>
              <div className="space-y-12">
                {tour.itinerary.map((day, index) => (
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
                        <h3 className="text-xl font-bold md:hidden">{day.route}</h3>
                      </div>
                      <div className="flex-grow">
                        <div className="bg-gray-50 rounded-2xl p-4 md:p-6">
                          <div className="hidden md:flex items-center gap-2 mb-4">
                            <h3 className="text-xl font-bold">{day.route}</h3>
                            <div className="h-1 w-1 bg-gray-400 rounded-full"></div>
                            <p className="text-gray-600">{day.overnightStay}</p>
                          </div>
                          <p className="text-gray-600 md:hidden mb-4">{day.overnightStay}</p>
                          <div className="space-y-4 mb-6">
                            {day.activities.map((activity, idx) => (
                              activity && (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                                  <div className="flex-grow prose prose-blue">
                                    {renderMarkdown(activity)}
                                  </div>
                                </div>
                              )
                            ))}
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
                <p className="text-center py-8 text-gray-500">Tour map will be displayed here</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Hidden on Mobile */}
          <div className="hidden lg:block">
            <div className="sticky top-">
              {/* Price Card */}
              <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">{tour.info.price}</p>
                  <p className=" text-2xl text-gray-600">per person</p>
                </div>
                <button
                onClick={handleBookNow}
                 className="w-full bg-blue-600 cursor-pointer text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors mb-6">
                  Book Now
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors">
                  Inquire Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;