import React, { useState } from 'react';

const TravelGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const seasons = [
    {
      name: "Dry Season",
      period: "December to April",
      description: "Perfect for beach holidays and cultural exploration",
      regions: [
        {
          name: "South & West Coast",
          places: ["Galle", "Bentota", "Mirissa", "Hikkaduwa", "Colombo"],
          activities: ["Beach activities", "Surfing", "Whale watching", "Water sports"],
          image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
        },
        {
          name: "Cultural Triangle",
          places: ["Kandy", "Sigiriya", "Polonnaruwa", "Anuradhapura"],
          activities: ["Temple visits", "Ancient ruins exploration", "Heritage sites"],
          image: "https://images.unsplash.com/photo-1588258524675-c61945a0555b"
        }
      ],
      weather: {
        temperature: "25-30°C",
        rainfall: "Minimal",
        humidity: "Moderate"
      }
    },
    {
      name: "Monsoon Season",
      period: "May to November",
      description: "Ideal for nature exploration and hill country visits",
      regions: [
        {
          name: "Hill Country",
          places: ["Nuwara Eliya", "Ella", "Horton Plains", "Haputale"],
          activities: ["Tea plantation visits", "Hiking", "Train journeys", "Waterfall visits"],
          image: "https://images.unsplash.com/photo-1546708973-b339540b5162"
        },
        {
          name: "East Coast",
          places: ["Trincomalee", "Arugam Bay", "Pasikuda", "Batticaloa"],
          activities: ["Surfing", "Diving", "Whale watching", "Beach activities"],
          image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe"
        }
      ],
      weather: {
        temperature: "20-28°C",
        rainfall: "Moderate to Heavy",
        humidity: "High"
      }
    }
  ];

  const festivals = [
    {
      name: 'Sinhala & Tamil New Year',
      date: 'April 13–14',
      description: 'Traditional New Year celebrations with games, food, and rituals.',
      image: 'https://images.unsplash.com/photo-1604593684768-4cb829901e60'
    },
    {
      name: 'Vesak Festival',
      date: 'May (Full Moon)',
      description: 'Celebrates Buddha\'s birth, enlightenment, and passing with lanterns & prayers.',
      image: 'https://images.unsplash.com/photo-1588258524675-c61945a0555b'
    },
    {
      name: 'Kandy Esala Perahera',
      date: 'July–August',
      description: 'Grand cultural festival with elephants, dancers, and drummers in Kandy.',
      image: 'https://images.unsplash.com/photo-1625046436057-00543e0c3a1a'
    },
    {
      name: 'Galle Literary Festival',
      date: 'January',
      description: 'Literary event featuring authors, workshops, and heritage site visits.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570'
    }
  ];

  const destinations = [
    {
      category: 'Beach Lovers',
      icon: '🏖️',
      bestTime: 'December–April (West & South), May–September (East)',
      places: ['Mirissa', 'Unawatuna', 'Pasikuda', 'Nilaveli', 'Arugam Bay'],
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3'
    },
    {
      category: 'History & Culture',
      icon: '🏰',
      bestTime: 'Year-round',
      places: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Temple of the Tooth', 'Anuradhapura'],
      image: 'https://images.unsplash.com/photo-1588258524675-c61945a0555b'
    },
    {
      category: 'Wildlife & Nature',
      icon: '🐘',
      bestTime: 'June–September (Elephant Gathering), November–April (Whale Watching)',
      places: ['Yala National Park', 'Udawalawe', 'Wilpattu', 'Minneriya'],
      image: 'https://images.unsplash.com/photo-1531794382144-875e5bcd761f'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1588258524675-c61945a0555b)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Sri Lanka Travel Guide
              <span className="block text-2xl md:text-3xl mt-4 font-normal text-blue-300">
                Your Ultimate Travel Companion
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Discover the best time to visit, top destinations, cultural festivals, and expert travel tips 
              for an unforgettable journey through the Pearl of the Indian Ocean.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 
              transition-colors mt-8 flex items-center gap-2 mx-auto">
              Download Free Guidebook
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 text-white" viewBox="0 0 1440 74" fill="none">
            <path d="M0 74L1440 0V74H0Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Quick Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Overview
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '📍',
                title: 'Location',
                description: 'Tropical island in the Indian Ocean, south of India'
              },
              {
                icon: '⏳',
                title: 'Best Time to Visit',
                description: 'December to April (South & West), May to September (East)'
              },
              {
                icon: '📆',
                title: 'Ideal Duration',
                description: '7-14 days for a complete experience'
              },
              {
                icon: '🚗',
                title: 'Getting Around',
                description: 'Trains, tuk-tuks, buses, and private tours'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasons Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Seasons to Visit
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sri Lanka experiences two distinct seasons, each offering unique experiences and opportunities for travelers.
            </p>
          </div>

          <div className="space-y-16">
            {seasons.map((season, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{season.name}</h3>
                        <p className="text-blue-600 font-medium">{season.period}</p>
                      </div>
                      <p className="text-gray-600">{season.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 py-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-gray-600">Temperature</p>
                          <p className="font-semibold text-blue-900">{season.weather.temperature}</p>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-gray-600">Rainfall</p>
                          <p className="font-semibold text-blue-900">{season.weather.rainfall}</p>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm text-gray-600">Humidity</p>
                          <p className="font-semibold text-blue-900">{season.weather.humidity}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-6">
                      {season.regions.map((region, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-6">
                          <h4 className="text-xl font-semibold mb-4">{region.name}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-medium text-gray-700 mb-2">Top Places:</p>
                              <ul className="space-y-1">
                                {region.places.map((place, i) => (
                                  <li key={i} className="flex items-center gap-2 text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    {place}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-medium text-gray-700 mb-2">Activities:</p>
                              <ul className="space-y-1">
                                {region.activities.map((activity, i) => (
                                  <li key={i} className="flex items-center gap-2 text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 p-8 bg-gray-50">
                    {season.regions.map((region, idx) => (
                      <div key={idx} className="relative h-64 overflow-hidden rounded-xl">
                        <img
                          src={region.image}
                          alt={region.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h4 className="text-xl font-semibold">{region.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cultural Festivals
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivals.map((festival, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={festival.image}
                    alt={festival.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold text-white">{festival.name}</h3>
                    <p className="text-blue-300 font-medium">{festival.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{festival.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where to Visit
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={destination.image}
                    alt={destination.category}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-3xl mb-2">{destination.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{destination.category}</h3>
                    <p className="text-sm text-gray-300 mb-4">{destination.bestTime}</p>
                    <ul className="space-y-2">
                      {destination.places.map((place, placeIndex) => (
                        <li key={placeIndex} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-20 bg-blue-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Essential Travel Tips
            </h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '📜',
                title: 'Visa Requirements',
                tips: ['ETA required for most countries', 'Apply online before arrival', 'Valid for 30 days']
              },
              {
                icon: '💵',
                title: 'Money Matters',
                tips: ['Sri Lankan Rupee (LKR)', 'Cards accepted in major cities', 'Carry cash for local markets']
              },
              {
                icon: '🚗',
                title: 'Transportation',
                tips: ['Trains for scenic routes', 'Tuk-tuks for short distances', 'Private drivers for tours']
              },
              {
                icon: '📱',
                title: 'Connectivity',
                tips: ['Local SIM cards available', '4G coverage in most areas', 'WiFi in hotels']
              }
            ].map((item, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-xl">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-center gap-2 text-blue-200">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Guide CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Download our comprehensive guide and start planning your perfect Sri Lankan adventure today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 
            transition-colors flex items-center gap-2 mx-auto">
            Download Free Travel Guide
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default TravelGuide;