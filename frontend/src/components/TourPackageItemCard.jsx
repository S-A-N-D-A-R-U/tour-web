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
        <div className="absolute inset-0 "></div>

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
        <div className="flex items-center gap-2 text-blue-600 mb-3">
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