import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

const sliderImages = [
  {
    url: "./hero1.jpg",
    title: "Pristine Beaches",
    description: "Experience the crystal-clear waters and white sandy beaches",
    tagline: "Paradise Found"
  },
  {
    url: "https://images.unsplash.com/photo-1588258524675-c61945a0555b?ixlib=rb-4.0.3",
    title: "Ancient Temples",
    description: "Discover centuries of history and cultural heritage",
    tagline: "Sacred Heritage"
  },
  {
    url: "https://images.unsplash.com/photo-1531794382144-875e5bcd761f?ixlib=rb-4.0.3",
    title: "Wildlife Safari",
    description: "Encounter exotic wildlife in their natural habitat",
    tagline: "Wild Encounters"
  },
  {
    url: "https://images.unsplash.com/photo-1546708973-b339540b5162?ixlib=rb-4.0.3",
    title: "Tea Plantations",
    description: "Visit the lush green tea estates in the highlands",
    tagline: "Highland Magic"
  },
  {
    url: "https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-4.0.3",
    title: "Local Cuisine",
    description: "Savor the authentic flavors of Sri Lankan cuisine",
    tagline: "Taste Adventure"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const getNextSlideIndex = () => {
    return currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1;
  };

  useEffect(() => {
    let slideInterval;
    if (isAutoPlaying) {
      slideInterval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(slideInterval);
  }, [isAutoPlaying]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Main Slider */}
      <div className="relative h-full w-full">
        {sliderImages.map((slide, idx) => (
          <div
            key={idx}
            style={{ backgroundImage: `url(${slide.url})` }}
            className={`absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl space-y-6">
          <h1 className="animate-fade-in text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {sliderImages[currentSlide].title}
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {sliderImages[currentSlide].tagline}
            </span>
          </h1>
          <p className="animate-fade-in text-lg text-gray-200 sm:text-xl md:text-2xl">
            {sliderImages[currentSlide].description}
          </p>
          <button className="group relative mt-8 inline-flex items-center gap-2 bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30">
            Start Your Journey
            <ChevronRight className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 transform items-center gap-4">
        <button
          onClick={prevSlide}
          className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex gap-2">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === currentSlide
                  ? "w-8 bg-blue-500"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Next Slide Preview */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:block">
        <div className="relative h-48 w-80 overflow-hidden rounded-lg border-2 border-white/20 shadow-lg transition-transform duration-300 hover:scale-105">
          <div 
            style={{ backgroundImage: `url(${sliderImages[getNextSlideIndex()].url})` }}
            className="h-full w-full bg-cover bg-center bg-no-repeat"
          >
            <div className="absolute inset-0 bg-black/40 p-4">
              <p className="text-sm font-medium text-white">Coming Next:</p>
              <p className="mt-1 text-lg font-bold text-white">
                {sliderImages[getNextSlideIndex()].title}
              </p>
              <p className="mt-1 text-sm text-white/80">
                {sliderImages[getNextSlideIndex()].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;