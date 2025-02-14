import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Sri Lanka Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  DISCOVER
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Sri Lanka
              </h2>
              <div className="w-20 h-1 bg-blue-600"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A tropical paradise where ancient wisdom meets natural wonders. 
                Sri Lanka's tapestry of experiences weaves together pristine beaches, 
                mist-covered mountains, and centuries-old temples into an unforgettable journey.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <img
                      src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/palm-tree.svg"
                      alt="Beaches"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="font-medium">Tropical Beaches</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <img
                      src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/mountain-snow.svg"
                      alt="Mountains"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="font-medium">Hill Country</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <img
                      src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/landmark.svg"
                      alt="Heritage"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="font-medium">Rich Heritage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <img
                      src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/utensils-crossed.svg"
                      alt="Cuisine"
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="font-medium">Unique Cuisine</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1588258524675-c61945a0555b"
                  alt="Sri Lanka Temple"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="text-4xl font-bold text-blue-600">8</div>
                      <div className="text-sm">
                        UNESCO<br />World Heritage<br />Sites
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Showcase Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-[300px] transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1546708973-b339540b5162"
                alt="Tea Plantations"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Tea Plantations</h3>
                <p className="text-sm">Nuwara Eliya</p>
              </div>
            </div>
            <div className="relative h-[300px] transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
                alt="Beaches"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Pristine Beaches</h3>
                <p className="text-sm">Southern Coast</p>
              </div>
            </div>
            <div className="relative h-[300px] transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1531794382144-875e5bcd761f"
                alt="Wildlife"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Wildlife Safari</h3>
                <p className="text-sm">Yala National Park</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  ABOUT US
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Your Trusted Travel Partner in Sri Lanka
              </h2>
              <div className="w-20 h-1 bg-blue-600"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We craft unforgettable journeys that blend adventure, culture, and luxury. 
                Our expert team ensures every moment of your Sri Lankan experience is 
                perfectly tailored to your desires.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Expert Local Guides",
                    description: "Knowledgeable guides who bring stories to life"
                  },
                  {
                    title: "Customized Experiences",
                    description: "Tailored itineraries to match your interests"
                  },
                  {
                    title: "24/7 Support",
                    description: "Round-the-clock assistance throughout your journey"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full mt-1">
                      <img
                        src="/check.svg"
                        alt="check"
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/about-us"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-[500px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1606471191009-63994c53433b"
                  alt="Local Experience"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -top-6 -right-6">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600">10+</div>
                      <div className="text-sm">
                        Years of<br />Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;