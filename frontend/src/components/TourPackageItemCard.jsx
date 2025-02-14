import React from "react";

const TourPackageItemCard = ({
  id,
  title,
  imageUrl,
  price,
  description,
  duration,
  location,
  rating,
  highlights
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 
      transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Featured Tag */}
        <div className="absolute top-4 left-0 bg-gradient-to-r from-orange-500 to-pink-500 text-white 
          px-6 py-1.5 rounded-r-full font-semibold shadow-lg text-sm">
          Featured
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 
          px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {rating}
        </div>

        {/* Location */}
        {location && (
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">{location}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 
          transition-colors mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-2 line-clamp-2">{description}</p>

        {/* Duration */}
        <div className="flex items-center gap-2 text-blue-600 mb-6">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium">{duration}</span>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t">
          {/* Price */}
          <div className="text-gray-900">
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-sm text-gray-600">/person</span>
          </div>

          {/* More Details Button */}
          <a
            href={`/tour-packages/${id}`}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg 
              font-medium hover:bg-blue-700 transition-colors"
          >
            More Details
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
      </div>
    </div>
  );
};

export default TourPackageItemCard;